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
        // SEND NOTIFICATION EMAIL TO GASTORNIS
        // ============================================================

        try {

            System.out.println("Sending notification email...");

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
             * We DO NOT throw the exception here.
             *
             * If the email service is unavailable,
             * the enquiry should still be accepted.
             *
             * This prevents the frontend from receiving HTTP 500
             * just because an email failed.
             */
        }

        // ============================================================
        // SEND CONFIRMATION EMAIL TO CUSTOMER
        // ============================================================

        try {

            System.out.println(
                    "Sending customer confirmation..."
            );

            emailService.sendCustomerConfirmation(enquiry);

            System.out.println(
                    "Customer confirmation sent successfully."
            );

        } catch (Exception e) {

            System.out.println(
                    "WARNING: Customer confirmation email could not be sent."
            );

            e.printStackTrace();

            /*
             * Again, do not throw the exception.
             *
             * The enquiry submission should not fail just because
             * email delivery failed.
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