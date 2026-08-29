    package com.gastornis.gastornisbackend.config;

    import jakarta.servlet.FilterChain;
    import jakarta.servlet.ServletException;
    import jakarta.servlet.http.HttpServletRequest;
    import jakarta.servlet.http.HttpServletResponse;
    import org.springframework.beans.factory.annotation.Value;
    import org.springframework.http.HttpStatus;
    import org.springframework.stereotype.Component;
    import org.springframework.web.filter.OncePerRequestFilter;

    import java.io.IOException;
    import java.util.Map;
    import java.util.concurrent.ConcurrentHashMap;

    @Component
    public class RateLimitFilter extends OncePerRequestFilter {

        private static final int MAX_REQUESTS = 3;
        private static final long TIME_WINDOW = 60 * 60 * 1000; // 1 hour

        private final Map<String, RequestInfo> requests = new ConcurrentHashMap<>();

        // Only the first origin is used here since this header can carry one
        // value; the main CorsConfig still enforces the full allowed list.
        @Value("${gastornis.allowed-origins}")
        private String allowedOrigins;

        @Override
        protected void doFilterInternal(
                HttpServletRequest request,
                HttpServletResponse response,
                FilterChain filterChain
        ) throws ServletException, IOException {

            if (request.getRequestURI().equals("/api/enquiries")
                    && request.getMethod().equalsIgnoreCase("POST")) {

                String clientIp = getClientIp(request);

                long currentTime = System.currentTimeMillis();

                RequestInfo info = requests.get(clientIp);

                if (info == null || currentTime - info.firstRequestTime >= TIME_WINDOW) {
                    requests.put(clientIp, new RequestInfo(currentTime, 1));
                } else {

                    if (info.requestCount >= MAX_REQUESTS) {
                        response.setStatus(HttpStatus.TOO_MANY_REQUESTS.value());
                        response.setContentType("application/json");

                        response.setHeader(
                                "Access-Control-Allow-Origin",
                                allowedOrigins.split("\\s*,\\s*")[0]
                        );

                        response.getWriter().write(
                                "{\"message\":\"Too many enquiries. Please try again later.\"}"
                        );

                        return;
                    }

                    info.requestCount++;
                }
            }

            filterChain.doFilter(request, response);
        }

        private String getClientIp(HttpServletRequest request) {
            String forwarded = request.getHeader("X-Forwarded-For");

            if (forwarded != null && !forwarded.isBlank()) {
                return forwarded.split(",")[0].trim();
            }

            return request.getRemoteAddr();
        }

        private static class RequestInfo {

            private final long firstRequestTime;
            private int requestCount;

            public RequestInfo(long firstRequestTime, int requestCount) {
                this.firstRequestTime = firstRequestTime;
                this.requestCount = requestCount;
            }
        }
    }