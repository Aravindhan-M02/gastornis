<p align="center">
  <h1 align="center">GASTORNIS</h1>
</p>

<p align="center">
  <strong>BUILDING WHAT'S NEXT.</strong>
</p>

<p align="center">
  Software Development • Digital Products • Custom Solutions
</p>

<p align="center">
  <a href="https://gastornis.onrender.com/">
    <strong>🌐 VISIT GASTORNIS LIVE →</strong>
  </a>
</p>

<p align="center">
  <a href="#about">About</a> •
  <a href="#project-status">Status</a> •
  <a href="#technology-stack">Technology</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#project-structure">Structure</a> •
  <a href="#development">Development</a> •
  <a href="#roadmap">Roadmap</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active%20Development-9b5cff?style=for-the-badge" alt="Project Status" />
  <img src="https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Backend-Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot" />
  <img src="https://img.shields.io/badge/Language-Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
</p>

---

## About

**GASTORNIS** is a software development company focused on designing and building modern digital experiences.

We work across web development, mobile applications, backend systems, and custom software solutions — combining thoughtful design with reliable engineering.

Our goal is simple:

> **Turn ideas into digital products that are useful, scalable, and built to last.**

This repository contains the source code and development infrastructure behind the GASTORNIS web platform.

---

## Project Status

> 🚧 **Active Development**

GASTORNIS is currently being developed as a full-stack web platform with a React-based frontend and Spring Boot backend.

The current implementation focuses on establishing the company's digital presence, responsive user experience, backend API architecture, and project enquiry workflow.

### Current Progress

- [x] Company website foundation
- [x] Responsive frontend structure
- [x] React frontend
- [x] Vite development environment
- [x] Start Project / enquiry interface
- [x] Spring Boot backend
- [x] REST API structure
- [x] CORS configuration
- [x] Enquiry data handling
- [x] Backend containerization
- [x] Temporary project-contact workflow
- [ ] Production email delivery
- [ ] Custom domain email integration
- [ ] Production deployment refinement
- [ ] Additional business features

### Important Notice

The online project enquiry submission system is temporarily unavailable while the production email infrastructure is being configured.

Until the enquiry system is fully operational, project requirements can be submitted directly through the temporary team contact channel provided on the website.

---

# Technology Stack

## Frontend

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="55" height="55" alt="React" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" width="55" height="55" alt="Vite" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="55" height="55" alt="JavaScript" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="55" height="55" alt="HTML5" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="55" height="55" alt="CSS3" />
</p>

<p align="center">
  <strong>React • Vite • JavaScript • HTML5 • CSS3</strong>
</p>

## Backend

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" width="55" height="55" alt="Java" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" width="55" height="55" alt="Spring Boot" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" width="55" height="55" alt="Maven" />
</p>

<p align="center">
  <strong>Java • Spring Boot • Maven • REST API</strong>
</p>

## Infrastructure

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="55" height="55" alt="Git" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="55" height="55" alt="GitHub" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" width="55" height="55" alt="Docker" />
</p>

<p align="center">
  <strong>Git • GitHub • Docker • Render</strong>
</p>

---

# Key Features

### Modern Company Website

A responsive and modern frontend designed to represent the GASTORNIS brand across desktop, tablet, and mobile devices.

### Project Enquiry System

The platform includes a structured project enquiry interface designed to collect:

- Client information
- Contact details
- Preferred communication method
- Project type
- Project description
- Estimated budget
- Project timeline

### Full-Stack Communication

The React frontend communicates with the Spring Boot backend through RESTful HTTP requests.

The architecture separates presentation logic from backend business logic, allowing both layers to evolve independently.

### Responsive Design

The frontend is designed with responsive layouts and adaptive components to provide a consistent experience across different screen sizes.

### Backend API

The Spring Boot backend provides API endpoints responsible for handling application data and business operations.

### CORS Configuration

Cross-Origin Resource Sharing is configured to allow controlled communication between the deployed frontend and backend services.

### Containerized Backend

The backend includes Docker configuration to simplify deployment and provide a consistent runtime environment.

---

# Architecture

GASTORNIS follows a client-server architecture.

```text
                    ┌─────────────────────┐
                    │       CLIENT        │
                    │                     │
                    │   React + Vite      │
                    │   HTML + CSS        │
                    │   JavaScript        │
                    └──────────┬──────────┘
                               │
                               │ HTTP / REST
                               ▼
                    ┌─────────────────────┐
                    │       BACKEND       │
                    │                     │
                    │    Spring Boot      │
                    │        Java         │
                    │                     │
                    │ Controllers         │
                    │ Services            │
                    │ Entities            │
                    │ Configuration       │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │     DATA LAYER      │
                    │                     │
                    │   Application Data │
                    └─────────────────────┘
```

---

## Development

GASTORNIS is being developed as a modular full-stack application, with the frontend and backend maintained as separate layers.

The project follows a clear separation of responsibilities between the user interface, application logic, API layer, and future data infrastructure.

### Frontend Development

The frontend is responsible for the visual experience and interaction layer of GASTORNIS.

It is built with React and Vite, with a focus on:

- Responsive design across desktop, tablet, and mobile devices
- Component-based UI architecture
- Reusable interface elements
- Smooth transitions and micro-interactions
- Accessible navigation and forms
- Modern dark-themed visual design
- Project enquiry and contact workflows

The frontend communicates with the backend through HTTP requests to REST API endpoints.

### Backend Development

The backend is built using Java and Spring Boot.

It provides the application layer responsible for:

- REST API endpoints
- Request handling
- Business logic
- Project enquiry processing
- Data validation
- Cross-Origin Resource Sharing (CORS)
- Future database integration
- Future authentication and authorization

The backend follows a layered structure to keep responsibilities separated and maintainable.

### Backend Structure

```text
backend/
└── src/
    └── main/
        └── java/
            └── com/
                └── gastornis/
                    └── gastornisbackend/
                        ├── config/
                        ├── controller/
                        ├── entity/
                        ├── service/
                        ├── CorsConfig.java
                        └── GastornisBackendApplication.java

```

---

## Roadmap

GASTORNIS is being developed progressively, with the current focus on establishing a reliable production foundation before expanding into larger product capabilities.

### Phase 1 — Foundation

- [x] Establish GASTORNIS website
- [x] Build responsive frontend
- [x] Establish React application architecture
- [x] Establish Spring Boot backend
- [x] Create REST API foundation
- [x] Implement project enquiry interface
- [x] Implement backend enquiry handling
- [x] Configure CORS
- [x] Add Docker support for backend

### Phase 2 — Production

- [ ] Production email delivery
- [ ] Custom domain email integration
- [ ] Complete production deployment
- [ ] Production environment configuration
- [ ] API security hardening
- [ ] Request validation improvements
- [ ] Rate limiting
- [ ] Error handling and monitoring
- [ ] Logging and observability

### Phase 3 — Business Platform

- [ ] Client communication system
- [ ] Client dashboard
- [ ] Project tracking
- [ ] Authentication and authorization
- [ ] Project management workflows
- [ ] Internal administration tools
- [ ] Business automation

### Phase 4 — Digital Products

- [ ] Mobile application ecosystem
- [ ] Reusable backend services
- [ ] Internal business applications
- [ ] Cloud infrastructure expansion
- [ ] Scalable product architecture

> Roadmap items are subject to change as GASTORNIS evolves and new requirements emerge.

---

## Project Structure

GASTORNIS follows a separated frontend and backend architecture.

```text
GASTORNIS/
│
├── frontend/
│   ├── public/
│   │   ├── assets/
│   │   └── ...
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/
│   │   │   │       └── gastornis/
│   │   │   │           └── gastornisbackend/
│   │   │   │               ├── config/
│   │   │   │               ├── controller/
│   │   │   │               ├── entity/
│   │   │   │               ├── service/
│   │   │   │               ├── CorsConfig.java
│   │   │   │               └── GastornisBackendApplication.java
│   │   │   │
│   │   │   └── resources/
│   │   │
│   │   └── test/
│   │
│   ├── pom.xml
│   ├── Dockerfile
│   ├── mvnw
│   └── mvnw.cmd
│
├── .gitignore
├── README.md
└── package.json
```