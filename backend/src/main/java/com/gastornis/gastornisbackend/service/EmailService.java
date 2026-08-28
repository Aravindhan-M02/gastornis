package com.gastornis.gastornisbackend.service;

import com.gastornis.gastornisbackend.entity.ProjectEnquiry;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String fromEmail;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    // ============================================================
    // SEND NEW ENQUIRY NOTIFICATION TO GASTORNIS
    // ============================================================

    public void sendNewEnquiryNotification(ProjectEnquiry enquiry) {

        try {

            MimeMessage message = mailSender.createMimeMessage();

            MimeMessageHelper helper =
                    new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(fromEmail);
            helper.setTo(fromEmail);

            helper.setSubject(
                    "New GASTORNIS Project Enquiry — "
                            + safe(enquiry.getName())
            );

            helper.setText(buildAdminEmail(enquiry), true);

            mailSender.send(message);

        } catch (MessagingException e) {

            throw new RuntimeException(
                    "Failed to send enquiry notification email.",
                    e
            );
        }
    }


    // ============================================================
    // SEND CONFIRMATION EMAIL TO CUSTOMER
    // ============================================================

    public void sendCustomerConfirmation(ProjectEnquiry enquiry) {

        try {

            MimeMessage message = mailSender.createMimeMessage();

            MimeMessageHelper helper =
                    new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(fromEmail);
            helper.setTo(enquiry.getEmail());

            helper.setSubject(
                    "We've received your project enquiry — GASTORNIS"
            );

            helper.setText(buildCustomerEmail(enquiry), true);

            mailSender.send(message);

        } catch (MessagingException e) {

            throw new RuntimeException(
                    "Failed to send customer confirmation email.",
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
                        width:100%;
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


                            <div style="padding:35px;">

                                <div style="
                                    font-size:12px;
                                    letter-spacing:2px;
                                    font-weight:bold;
                                    color:#71717a;
                                    margin-bottom:20px;
                                ">
                                    CONTACT DETAILS
                                </div>

                                """ + row("Name", enquiry.getName()) + """

                                """ + row("Email", enquiry.getEmail()) + """

                                """ + row("Phone", enquiry.getPhone()) + """

                                """ + row(
                                    "Company / Organization",
                                    enquiry.getCompany()
                                ) + """

                                """ + row(
                                    "Website",
                                    enquiry.getWebsite()
                                ) + """

                                """ + row(
                                    "Preferred Contact",
                                    enquiry.getPreferredContact()
                                ) + """


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

                                    """ + row(
                                        "Project Type",
                                        enquiry.getProjectType()
                                    ) + """

                                    """ + row(
                                        "Budget",
                                        enquiry.getBudget()
                                    ) + """

                                    """ + row(
                                        "Timeline",
                                        enquiry.getTimeline()
                                    ) + """

                                </div>


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
                                        """ + escapeHtml(
                                            safe(enquiry.getMessage())
                                        ) + """

                                    </div>

                                </div>

                            </div>


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
    // CUSTOMER CONFIRMATION EMAIL
    // ============================================================

    private String buildCustomerEmail(ProjectEnquiry enquiry) {

        return """
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport"
                          content="width=device-width, initial-scale=1.0">
                    <title>Gastornis Project Enquiry</title>
                </head>

                <body style="
                    margin:0;
                    padding:0;
                    background:#f4f4f5;
                    font-family:Arial,Helvetica,sans-serif;
                    color:#18181b;
                ">

                    <div style="
                        width:100%;
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

                            <div style="
                                padding:35px;
                                background:#09090b;
                                color:#ffffff;
                            ">

                                <div style="
                                    font-size:14px;
                                    letter-spacing:4px;
                                    font-weight:bold;
                                ">
                                    GASTORNIS
                                </div>

                                <div style="
                                    margin-top:18px;
                                    font-size:30px;
                                    font-weight:700;
                                    line-height:1.3;
                                ">
                                    We've received your enquiry.
                                </div>

                            </div>


                            <div style="
                                padding:35px;
                            ">

                                <div style="
    font-size:18px;
    font-weight:600;
    line-height:1.6;
    margin-bottom:15px;
">
    Hi
    <br>
    """ + escapeHtml(safe(enquiry.getName())) + """
</div>

                               <div style="
    font-size:15px;
    line-height:1.8;
    color:#52525b;
">

    Thank you for reaching out to
    <strong style="color:#18181b;">
        Gastornis
    </strong>.

    We've successfully received your
    project enquiry.

    <br><br>

    Our team will review your requirements
    and get back to you through your
    preferred contact method.

</div>


                                <div style="
                                    margin-top:30px;
                                    background:#fafafa;
                                    border:1px solid #e4e4e7;
                                    border-radius:14px;
                                    padding:25px;
                                ">

                                    <div style="
                                        font-size:12px;
                                        letter-spacing:2px;
                                        font-weight:bold;
                                        color:#71717a;
                                        margin-bottom:20px;
                                    ">
                                        YOUR PROJECT
                                    </div>

                                    """ + row(
                                        "Project",
                                        enquiry.getProjectType()
                                    ) + """

                                    """ + row(
                                        "Budget",
                                        enquiry.getBudget()
                                    ) + """

                                    """ + row(
                                        "Timeline",
                                        enquiry.getTimeline()
                                    ) + """

                                    """ + row(
                                        "Preferred Contact",
                                        enquiry.getPreferredContact()
                                    ) + """

                                </div>


                                <div style="
                                    margin-top:30px;
                                ">

                                    <div style="
                                        font-size:12px;
                                        letter-spacing:2px;
                                        font-weight:bold;
                                        color:#71717a;
                                        margin-bottom:15px;
                                    ">
                                        YOUR PROJECT BRIEF
                                    </div>

                                    <div style="
                                        padding:20px;
                                        background:#f4f4f5;
                                        border-radius:12px;
                                        font-size:15px;
                                        line-height:1.7;
                                        color:#52525b;
                                        white-space:pre-wrap;
                                    ">
                                        """ + escapeHtml(
                                            safe(enquiry.getMessage())
                                        ) + """

                                    </div>

                                </div>


                                <div style="
                                    margin-top:30px;
                                    padding:22px;
                                    background:#09090b;
                                    color:#ffffff;
                                    border-radius:14px;
                                ">

                                    <div style="
                                        font-size:16px;
                                        font-weight:600;
                                        margin-bottom:8px;
                                    ">
                                        What's next?
                                    </div>

                                    <div style="
                                        font-size:14px;
                                        line-height:1.6;
                                        color:#a1a1aa;
                                    ">
                                        We'll review your requirements and
                                        contact you shortly.
                                        If you need to add anything,
                                        simply reply to this email.
                                    </div>

                                </div>

                            </div>


                            <div style="
                                padding:30px 35px;
                                background:#fafafa;
                                border-top:1px solid #e4e4e7;
                                text-align:center;
                            ">

                                <div style="
                                    font-size:16px;
                                    font-weight:bold;
                                    letter-spacing:3px;
                                    color:#18181b;
                                ">
                                    GASTORNIS
                                </div>

                                <div style="
                                    margin-top:8px;
                                    font-size:12px;
                                    color:#71717a;
                                    letter-spacing:1px;
                                ">
                                    BUILDING WHAT'S NEXT.
                                </div>

                                <div style="
                                    margin-top:20px;
                                    font-size:11px;
                                    color:#a1a1aa;
                                ">
                                    This is an automated confirmation email.
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
                        """ + escapeHtml(label) + """
                    </div>

                    <div style="
                        font-size:15px;
                        font-weight:600;
                        color:#18181b;
                        word-break:break-word;
                    ">
                        """ + escapeHtml(safe(value)) + """
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
