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

        // 1. Save to the database first, always
        ProjectEnquiry savedEnquiry = repository.save(enquiry);

        // 2. Notify Gastornis inbox (best-effort — don't fail the whole
        //    request just because the email couldn't be sent)
        try {
            emailService.sendNewEnquiryNotification(savedEnquiry);
        } catch (RuntimeException e) {
            // Enquiry is already saved in the DB, so we don't lose the
            // lead even if the email send fails (e.g. mail server hiccup).
            System.err.println(
                    "Enquiry #" + savedEnquiry.getId()
                            + " saved, but notification email failed: "
                            + e.getMessage()
            );
        }

        // NOTE: Customer confirmation email intentionally disabled for now.
        // emailService.sendCustomerConfirmation(savedEnquiry);

        return savedEnquiry;
    }
}