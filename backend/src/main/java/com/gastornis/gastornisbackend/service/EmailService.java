package com.gastornis.gastornisbackend.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gastornis.gastornisbackend.entity.ProjectEnquiry;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class EmailService {

    @Value("${resend.api.key}")
    private String resendApiKey;

    @Value("${resend.from}")
    private String fromEmail;

    private static final String RESEND_API_URL =
            "https://api.resend.com/emails";

    private final HttpClient httpClient;
    private final ObjectMapper objectMapper;

    public EmailService() {
        this.httpClient = HttpClient.newHttpClient();
        this.objectMapper = new ObjectMapper();
    }

    // ============================================================
    // SEND NEW ENQUIRY NOTIFICATION TO GASTORNIS
    // ============================================================

    public void sendNewEnquiryNotification(ProjectEnquiry enquiry) {

        String subject =
                "New GASTORNIS Project Enquiry — "
                        + safe(enquiry.getName());

        sendEmail(
                fromEmail,
                "gastornis.team@gmail.com",
                subject,
                buildAdminEmail(enquiry)
        );
    }

    // ============================================================
    // RESEND API EMAIL SENDER
    // ============================================================

    private void sendEmail(
            String from,
            String to,
            String subject,
            String html
    ) {

        try {

            Map<String, Object> emailData = new HashMap<>();

            emailData.put("from", from);
            emailData.put("to", List.of(to));
            emailData.put("subject", subject);
            emailData.put("html", html);

            String jsonBody =
                    objectMapper.writeValueAsString(emailData);

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(RESEND_API_URL))
                    .header(
                            "Authorization",
                            "Bearer " + resendApiKey
                    )
                    .header(
                            "Content-Type",
                            "application/json"
                    )
                    .POST(
                            HttpRequest.BodyPublishers.ofString(
                                    jsonBody,
                                    StandardCharsets.UTF_8
                            )
                    )
                    .build();

            System.out.println("=================================");
            System.out.println("SENDING EMAIL THROUGH RESEND");
            System.out.println("From: " + from);
            System.out.println("To: " + to);
            System.out.println("Subject: " + subject);
            System.out.println("=================================");

            HttpResponse<String> response =
                    httpClient.send(
                            request,
                            HttpResponse.BodyHandlers.ofString()
                    );

            int statusCode = response.statusCode();

            System.out.println(
                    "Resend response status: " + statusCode
            );

            System.out.println(
                    "Resend response body: " + response.body()
            );

            if (statusCode < 200 || statusCode >= 300) {

                throw new RuntimeException(
                        "Resend email failed. HTTP "
                                + statusCode
                                + ": "
                                + response.body()
                );
            }

            System.out.println(
                    "EMAIL SENT SUCCESSFULLY THROUGH RESEND"
            );

        } catch (Exception e) {

            System.out.println(
                    "ERROR SENDING EMAIL THROUGH RESEND:"
            );

            e.printStackTrace();

            throw new RuntimeException(
                    "Failed to send email through Resend.",
                    e
            );
        }
    }

    // ============================================================
    // GASTORNIS INTERNAL EMAIL
    // ============================================================

    private String buildAdminEmail(ProjectEnquiry enquiry) {

        return """
                <!DOCTYPE html>
                <html>

                <head>
                    <meta charset="UTF-8">

                    <meta name="viewport"
                          content="width=device-width, initial-scale=1.0">

                    <title>New GASTORNIS Project Enquiry</title>
                </head>

                <body style="
                    margin:0;
                    padding:0;
                    background:#f4f4f5;
                    font-family:Arial,Helvetica,sans-serif;
                    color:#18181b;
                ">

                    <div style="
                        width:100%%;
                        padding:40px 15px;
                        box-sizing:border-box;
                    ">

                        <div style="
                            max-width:680px;
                            margin:0 auto;
                            background:#ffffff;
                            border:1px solid #e4e4e7;
                            border-radius:18px;
                            overflow:hidden;
                        ">

                            <!-- HEADER -->

                            <div style="
                                padding:32px 35px;
                                background:#09090b;
                                color:#ffffff;
                            ">

                                <div style="
                                    font-size:13px;
                                    letter-spacing:3px;
                                    font-weight:bold;
                                    color:#a1a1aa;
                                    margin-bottom:15px;
                                ">
                                    GASTORNIS
                                </div>

                                <div style="
                                    font-size:28px;
                                    font-weight:700;
                                    line-height:1.3;
                                ">
                                    New Project Enquiry
                                </div>

                                <div style="
                                    margin-top:10px;
                                    color:#a1a1aa;
                                    font-size:14px;
                                ">
                                    A new project brief has been submitted.
                                </div>

                            </div>

                            <!-- MAIN CONTENT -->

                            <div style="padding:35px;">

                                <!-- CONTACT DETAILS -->

                                <div style="
                                    font-size:12px;
                                    letter-spacing:2px;
                                    font-weight:bold;
                                    color:#71717a;
                                    margin-bottom:20px;
                                ">
                                    CONTACT DETAILS
                                </div>

                                """
                + row("Name", enquiry.getName())
                + """

                                """
                + row("Email", enquiry.getEmail())
                + """

                                """
                + row("Phone", enquiry.getPhone())
                + """

                                """
                + row(
                        "Company / Organization",
                        enquiry.getCompany()
                )
                + """

                                """
                + row(
                        "Website",
                        enquiry.getWebsite()
                )
                + """

                                """
                + row(
                        "Preferred Contact",
                        enquiry.getPreferredContact()
                )
                + """

                                <!-- PROJECT DETAILS -->

                                <div style="
                                    margin-top:35px;
                                    padding-top:30px;
                                    border-top:1px solid #e4e4e7;
                                ">

                                    <div style="
                                        font-size:12px;
                                        letter-spacing:2px;
                                        font-weight:bold;
                                        color:#71717a;
                                        margin-bottom:20px;
                                    ">
                                        PROJECT DETAILS
                                    </div>

                                    """
                + row(
                        "Project Type",
                        enquiry.getProjectType()
                )
                + """

                                    """
                + row(
                        "Budget",
                        enquiry.getBudget()
                )
                + """

                                    """
                + row(
                        "Timeline",
                        enquiry.getTimeline()
                )
                + """

                                </div>

                                <!-- PROJECT DESCRIPTION -->

                                <div style="
                                    margin-top:35px;
                                    padding-top:30px;
                                    border-top:1px solid #e4e4e7;
                                ">

                                    <div style="
                                        font-size:12px;
                                        letter-spacing:2px;
                                        font-weight:bold;
                                        color:#71717a;
                                        margin-bottom:15px;
                                    ">
                                        PROJECT DESCRIPTION
                                    </div>

                                    <div style="
                                        background:#f4f4f5;
                                        border-radius:12px;
                                        padding:20px;
                                        font-size:15px;
                                        line-height:1.7;
                                        white-space:pre-wrap;
                                    ">
                                        """
                + escapeHtml(
                        safe(enquiry.getMessage())
                )
                + """

                                    </div>

                                </div>

                            </div>

                            <!-- FOOTER -->

                            <div style="
                                padding:25px 35px;
                                background:#fafafa;
                                border-top:1px solid #e4e4e7;
                            ">

                                <div style="
                                    font-size:12px;
                                    color:#71717a;
                                ">
                                    GASTORNIS PROJECT ENQUIRY SYSTEM
                                </div>

                            </div>

                        </div>

                    </div>

                </body>

                </html>
                """;
    }

    // ============================================================
    // REUSABLE HTML ROW
    // ============================================================

    private String row(String label, String value) {

        return """
                <div style="
                    padding:12px 0;
                    border-bottom:1px solid #f0f0f2;
                ">

                    <div style="
                        font-size:12px;
                        color:#71717a;
                        margin-bottom:5px;
                    ">
                        """
                + escapeHtml(label)
                + """
                    </div>

                    <div style="
                        font-size:15px;
                        font-weight:600;
                        color:#18181b;
                        word-break:break-word;
                    ">
                        """
                + escapeHtml(safe(value))
                + """
                    </div>

                </div>
                """;
    }

    // ============================================================
    // NULL / EMPTY VALUE HANDLER
    // ============================================================

    private String safe(String value) {

        return value == null || value.isBlank()
                ? "Not provided"
                : value;
    }

    // ============================================================
    // HTML ESCAPING
    // ============================================================

    private String escapeHtml(String value) {

        if (value == null) {
            return "";
        }

        return value
                .replace("&", "&amp;")
                .replace("<", "&lt;")
                .replace(">", "&gt;")
                .replace("\"", "&quot;")
                .replace("'", "&#39;");
    }
}