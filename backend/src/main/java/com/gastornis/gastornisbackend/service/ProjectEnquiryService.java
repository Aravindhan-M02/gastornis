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

        try {

            System.out.println("Sending notification email...");

            emailService.sendNewEnquiryNotification(enquiry);

            System.out.println("Notification email sent successfully.");

        } catch (Exception e) {

            System.out.println("ERROR sending notification email:");
            e.printStackTrace();

            throw e;
        }

        try {

            System.out.println("Sending customer confirmation...");

            emailService.sendCustomerConfirmation(enquiry);

            System.out.println("Customer confirmation sent successfully.");

        } catch (Exception e) {

            System.out.println("ERROR sending customer confirmation:");
            e.printStackTrace();

            throw e;
        }

        System.out.println("ENQUIRY COMPLETED SUCCESSFULLY");

        return enquiry;
    }
}