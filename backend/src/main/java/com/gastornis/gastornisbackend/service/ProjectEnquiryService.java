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

        // Send enquiry notification to Gastornis
        emailService.sendNewEnquiryNotification(enquiry);

        // Send confirmation email to customer
        emailService.sendCustomerConfirmation(enquiry);

        // No database saving for now
        return enquiry;
    }
}