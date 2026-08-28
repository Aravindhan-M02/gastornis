package com.gastornis.gastornisbackend.service;

import com.gastornis.gastornisbackend.entity.ProjectEnquiry;
import org.springframework.stereotype.Service;

@Service
public class ProjectEnquiryService {

    private final EmailService emailService;

    public ProjectEnquiryService(EmailService emailService) {
        this.emailService = emailService;
    }

    public ProjectEnquiry saveEnquiry(ProjectEnquiry enquiry) {

        System.out.println("=================================");
        System.out.println("NEW ENQUIRY RECEIVED");

        System.out.println("Name: " + enquiry.getName());
        System.out.println("Email: " + enquiry.getEmail());
        System.out.println("Phone: " + enquiry.getPhone());
        System.out.println("Project Type: " + enquiry.getProjectType());

        System.out.println("=================================");

        // ============================================================
        // SEND ENQUIRY NOTIFICATION TO GASTORNIS
        // ============================================================

        try {

            System.out.println(
                    "Sending notification email..."
            );

            emailService.sendNewEnquiryNotification(enquiry);

            System.out.println(
                    "Notification email sent successfully."
            );

        } catch (Exception e) {

            System.out.println(
                    "WARNING: Notification email could not be sent."
            );

            e.printStackTrace();

            /*
             * IMPORTANT:
             *
             * We do NOT throw the exception here.
             *
             * Even if email delivery fails,
             * the enquiry itself should still be accepted.
             *
             * This prevents the frontend from receiving
             * HTTP 500 just because email delivery failed.
             */
        }

        // ============================================================
        // ENQUIRY COMPLETED
        // ============================================================

        System.out.println("=================================");
        System.out.println("ENQUIRY SUCCESSFULLY PROCESSED");
        System.out.println("=================================");

        return enquiry;
    }
}