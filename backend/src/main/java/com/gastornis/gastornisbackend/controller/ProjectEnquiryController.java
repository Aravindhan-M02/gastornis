package com.gastornis.gastornisbackend.controller;

import com.gastornis.gastornisbackend.entity.ProjectEnquiry;
import jakarta.validation.Valid;
import com.gastornis.gastornisbackend.service.ProjectEnquiryService;
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

        ProjectEnquiry savedEnquiry = service.saveEnquiry(enquiry);

        return ResponseEntity.ok(savedEnquiry);
    }
}
