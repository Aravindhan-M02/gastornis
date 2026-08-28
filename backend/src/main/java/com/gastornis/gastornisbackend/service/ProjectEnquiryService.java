package com.gastornis.gastornisbackend.service;

import com.gastornis.gastornisbackend.entity.ProjectEnquiry;
import com.gastornis.gastornisbackend.repository.ProjectEnquiryRepository;
import org.springframework.stereotype.Service;

@Service
public class ProjectEnquiryService {

    private final ProjectEnquiryRepository repository;
    private final EmailService emailService;

    public ProjectEnquiryService(
            ProjectEnquiryRepository repository,
            EmailService emailService) {

        this.repository = repository;
        this.emailService = emailService;
    }

    public ProjectEnquiry saveEnquiry(ProjectEnquiry enquiry) {

        ProjectEnquiry savedEnquiry = repository.save(enquiry);

        // Email to Gastornis
        emailService.sendNewEnquiryNotification(savedEnquiry);

        // Confirmation email to customer
        emailService.sendCustomerConfirmation(savedEnquiry);

        return savedEnquiry;
    }
}