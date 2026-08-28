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

        System.out.println("EMAIL TEST BYPASSED");

        return enquiry;
    }
}