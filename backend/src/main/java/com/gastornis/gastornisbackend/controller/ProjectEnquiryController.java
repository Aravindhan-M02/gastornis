package com.gastornis.gastornisbackend.controller;

import com.gastornis.gastornisbackend.entity.ProjectEnquiry;
import com.gastornis.gastornisbackend.service.ProjectEnquiryService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/enquiries")
public class ProjectEnquiryController {

    private final ProjectEnquiryService service;

    public ProjectEnquiryController(ProjectEnquiryService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<ProjectEnquiry> createEnquiry(
            @RequestBody @Valid ProjectEnquiry enquiry) {

        System.out.println("================================");
        System.out.println("ENQUIRY REQUEST REACHED CONTROLLER");
        System.out.println("Email: " + enquiry.getEmail());
        System.out.println("================================");

        ProjectEnquiry savedEnquiry = service.saveEnquiry(enquiry);

        System.out.println("ENQUIRY SUCCESSFULLY PROCESSED");

        return ResponseEntity.ok(savedEnquiry);
    }
}