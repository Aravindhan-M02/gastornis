import { useState } from "react";
import "./StartProject.css";

function StartProject() {
    const [projectType, setProjectType] = useState("");
    const [budget, setBudget] = useState("");
    const [preferredContact, setPreferredContact] = useState("");
    const [timeline, setTimeline] = useState("");

    // Submission state
    const [submitStatus, setSubmitStatus] = useState("");
    const [submitError, setSubmitError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [emailError, setEmailError] = useState("");

    const validateEmail = (email) => {
    if (!email.trim()) {
        setEmailError("Please enter your email address.");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {
        setEmailError("Please enter a valid email address.");
        return false;
    }

    setEmailError("");
    return true;
};

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Prevent another submission after successful submission
        if (isSubmitted || isSubmitting) {
            return;
        }

        setSubmitStatus("");
        setSubmitError("");

        const form = event.target;
        const formData = new FormData(form);

        /*
         * ========================================
         * VALIDATION ORDER
         * ========================================
         */

        // 01 — Name
        const name = formData.get("name")?.trim();

        if (!name) {
            setSubmitStatus("error");
            setSubmitError("Please enter your name.");
            return;
        }

        // 02 — Email
        const email = formData.get("email")?.trim();

        if (!email) {
            setSubmitStatus("error");
            setSubmitError("Please enter your email address.");
            return;
        }

        // Basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            setSubmitStatus("error");
            setSubmitError("Please enter a valid email address.");
            return;
        }

        // 03 — Phone
        const phone = formData.get("phone")?.trim();

        if (!phone) {
            setSubmitStatus("error");
            setSubmitError(
                "Please enter your WhatsApp / phone number."
            );
            return;
        }

        // 04 — Preferred Contact
        if (!preferredContact) {
            setSubmitStatus("error");
            setSubmitError(
                "Please select your preferred contact method."
            );
            return;
        }

        // 05 — Project Type
        if (!projectType) {
            setSubmitStatus("error");
            setSubmitError(
                "Please select what you want us to build."
            );
            return;
        }

        // 06 — Project Description
        const message = formData.get("message")?.trim();

        if (!message) {
            setSubmitStatus("error");
            setSubmitError(
                "Please tell us about your project or idea."
            );
            return;
        }

        // 07 — Budget
        if (!budget) {
            setSubmitStatus("error");
            setSubmitError(
                "Please select your estimated budget."
            );
            return;
        }

        // 08 — Timeline
        if (!timeline) {
            setSubmitStatus("error");
            setSubmitError(
                "Please select your project timeline."
            );
            return;
        }

        /*
         * ========================================
         * SUBMIT
         * ========================================
         */

        // Disable button immediately after validation
        setIsSubmitting(true);
        setSubmitStatus("");

        const enquiry = {
            name: name,
            email: email,
            phone: phone,
            company: formData.get("company")?.trim() || "",
            website: formData.get("website")?.trim() || "",
            preferredContact: preferredContact,
            projectType: projectType,
            message: message,
            budget: budget,
            timeline: timeline
        };

        console.log("Submitting enquiry:", enquiry);

        try {
            const apiBaseUrl =
                import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

            const response = await fetch(
                `${apiBaseUrl}/api/enquiries`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(enquiry)
                }
            );

            if (!response.ok) {
                throw new Error(
                    "We couldn't submit your enquiry. Please try again."
                );
            }

            const savedEnquiry = await response.json();

            console.log("Enquiry saved:", savedEnquiry);

            /*
             * ========================================
             * SUCCESS
             * ========================================
             */

            setSubmitStatus("success");
            setSubmitError("");

            // Keep button permanently disabled until page refresh
            setIsSubmitted(true);
            setIsSubmitting(false);

            // Reset form fields
            form.reset();

            setProjectType("");
            setBudget("");
            setPreferredContact("");
            setTimeline("");

        } catch (error) {
            console.error("Error submitting enquiry:", error);

            setSubmitError(
                error.message ||
                "We couldn't submit your enquiry. Please try again."
            );

            setSubmitStatus("error");

            // Allow user to try again if submission failed
            setIsSubmitting(false);
            setIsSubmitted(false);
        }
    };

    return (
        <main className="start-project-page">

            {/* ========================================
                BACKGROUND
            ======================================== */}

            <div className="project-background">

                <div className="project-glow project-glow-one"></div>
                <div className="project-glow project-glow-two"></div>

                <div className="project-orbit project-orbit-one"></div>
                <div className="project-orbit project-orbit-two"></div>

                <span className="project-particle project-particle-one"></span>
                <span className="project-particle project-particle-two"></span>
                <span className="project-particle project-particle-three"></span>

            </div>


            {/* ========================================
                HEADER
            ======================================== */}

            <header className="project-header">

                <a
                    href="/"
                    className="project-brand"
                >
                    GASTORNIS
                </a>

                <a
                    href="/"
                    className="project-back"
                >
                    <span>←</span>
                    Back to site
                </a>

            </header>


            {/* ========================================
                HERO
            ======================================== */}

            <section className="project-hero">

                <div className="project-eyebrow">
                    <span></span>
                    START A PROJECT
                    <span></span>
                </div>

                <h1>
                    Have an idea?
                    <br />
                    <em>Let's build it.</em>
                </h1>

                <p>
                    Tell us a little about what you're imagining.
                    We'll take it from there.
                </p>

            </section>


            {/* ========================================
                FORM
            ======================================== */}

            <section className="project-form-section">

                <form
                    className="project-form"
                    onSubmit={handleSubmit}
                    noValidate
                >

                    {/* REQUIRED NOTICE */}

                    <div className="required-notice">
                        <span className="required-star">*</span>
                        Required fields
                    </div>


                    {/* ========================================
                        01 — CONTACT
                    ======================================== */}

                    <div className="form-section">

                        <div className="form-number">
                            01
                        </div>

                        <div className="form-content">

                            <div className="form-label">
                                YOUR DETAILS
                            </div>

                            <div className="form-grid">

                                {/* NAME */}

                                <div className="input-group">

                                    <label htmlFor="name">
                                        Your name{" "}
                                        <span className="required-star">
                                            *
                                        </span>
                                    </label>

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Aravindh"
                                        maxLength="100"
                                        required
                                    />

                                </div>


                                {/* EMAIL */}

                               <div className="input-group">

    <label htmlFor="email">
        Email address{" "}
        <span className="required-star">
            *
        </span>
    </label>

    <input
        id="email"
        name="email"
        type="email"
        placeholder="you@example.com"
        maxLength="150"
        required
        onBlur={(event) => {
            validateEmail(event.target.value);
        }}
        onChange={(event) => {
            if (emailError) {
                validateEmail(event.target.value);
            }
        }}
    />

    {emailError && (
        <p className="field-error">
            {emailError}
        </p>
    )}

</div>


                                {/* PHONE */}

                                <div className="input-group">

                                    <label htmlFor="phone">
                                        WhatsApp / Phone number{" "}
                                        <span className="required-star">
                                            *
                                        </span>
                                    </label>

                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="+91 98765 43210"
                                        maxLength="20"
                                        required
                                    />

                                </div>


                                {/* COMPANY */}

                                <div className="input-group">

                                    <label htmlFor="company">
                                        Company / Organization
                                    </label>

                                    <input
                                        id="company"
                                        name="company"
                                        type="text"
                                        placeholder="Your company"
                                        maxLength="150"
                                    />

                                </div>


                                {/* WEBSITE */}

                                <div className="input-group full-width">

                                    <label htmlFor="website">
                                        Website
                                    </label>

                                    <input
                                        id="website"
                                        name="website"
                                        type="url"
                                        placeholder="https://example.com"
                                        maxLength="300"
                                    />

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* ========================================
                        02 — PREFERRED CONTACT
                    ======================================== */}

                    <div className="form-section">

                        <div className="form-number">
                            02
                        </div>

                        <div className="form-content">

                            <div className="form-label">
                                HOW SHOULD WE CONTACT YOU?{" "}
                                <span className="required-star">
                                    *
                                </span>
                            </div>

                            <div className="choice-grid">

                                {[
                                    "Email",
                                    "WhatsApp",
                                    "Phone Call"
                                ].map((method) => (

                                    <button
                                        type="button"
                                        key={method}
                                        className={
                                            preferredContact === method
                                                ? "choice active"
                                                : "choice"
                                        }
                                        onClick={() =>
                                            setPreferredContact(method)
                                        }
                                    >

                                        <span>
                                            {method}
                                        </span>

                                        <span className="choice-arrow">
                                            ↗
                                        </span>

                                    </button>

                                ))}

                            </div>

                        </div>

                    </div>


                    {/* ========================================
                        03 — PROJECT TYPE
                    ======================================== */}

                    <div className="form-section">

                        <div className="form-number">
                            03
                        </div>

                        <div className="form-content">

                            <div className="form-label">
                                WHAT ARE WE BUILDING?{" "}
                                <span className="required-star">
                                    *
                                </span>
                            </div>

                            <div className="choice-grid">

                                {[
                                    "Website",
                                    "Web App",
                                    "Mobile App",
                                    "Software",
                                    "Backend",
                                    "Other"
                                ].map((type) => (

                                    <button
                                        type="button"
                                        key={type}
                                        className={
                                            projectType === type
                                                ? "choice active"
                                                : "choice"
                                        }
                                        onClick={() =>
                                            setProjectType(type)
                                        }
                                    >

                                        <span>
                                            {type}
                                        </span>

                                        <span className="choice-arrow">
                                            ↗
                                        </span>

                                    </button>

                                ))}

                            </div>

                        </div>

                    </div>


                    {/* ========================================
                        04 — DESCRIPTION
                    ======================================== */}

                    <div className="form-section">

                        <div className="form-number">
                            04
                        </div>

                        <div className="form-content">

                            <div className="form-label">
                                TELL US ABOUT IT{" "}
                                <span className="required-star">
                                    *
                                </span>
                            </div>

                            <textarea
                                name="message"
                                placeholder="Tell us about your idea, the problem you're solving, or what you'd like to build..."
                                rows="7"
                                maxLength="3000"
                                required
                            />

                        </div>

                    </div>


                    {/* ========================================
                        05 — BUDGET
                    ======================================== */}

                    <div className="form-section">

                        <div className="form-number">
                            05
                        </div>

                        <div className="form-content">

                            <div className="form-label">
                                ESTIMATED BUDGET{" "}
                                <span className="required-star">
                                    *
                                </span>
                            </div>

                            <div className="budget-grid">

                                {[
                                    "₹10K – ₹20K",
                                    "₹20K – ₹30K",
                                    "₹30K – ₹50K",
                                    "₹50K+",
                                    "Let's discuss"
                                ].map((amount) => (

                                    <button
                                        type="button"
                                        key={amount}
                                        className={
                                            budget === amount
                                                ? "budget-option active"
                                                : "budget-option"
                                        }
                                        onClick={() =>
                                            setBudget(amount)
                                        }
                                    >

                                        {amount}

                                    </button>

                                ))}

                            </div>

                        </div>

                    </div>


                    {/* ========================================
                        06 — TIMELINE
                    ======================================== */}

                    <div className="form-section">

                        <div className="form-number">
                            06
                        </div>

                        <div className="form-content">

                            <div className="form-label">
                                PROJECT TIMELINE{" "}
                                <span className="required-star">
                                    *
                                </span>
                            </div>

                            <div className="choice-grid">

                                {[
                                    "ASAP",
                                    "1 – 2 Months",
                                    "2 – 4 Months",
                                    "4 – 6 Months",
                                    "6+ Months",
                                    "Flexible"
                                ].map((option) => (

                                    <button
                                        type="button"
                                        key={option}
                                        className={
                                            timeline === option
                                                ? "choice active"
                                                : "choice"
                                        }
                                        onClick={() =>
                                            setTimeline(option)
                                        }
                                    >

                                        <span>
                                            {option}
                                        </span>

                                        <span className="choice-arrow">
                                            ↗
                                        </span>

                                    </button>

                                ))}

                            </div>

                        </div>

                    </div>


                    {/* ========================================
                        SUBMIT
                    ======================================== */}

                    <div className="project-submit-area">


                        {/* SUCCESS MESSAGE */}

                        {submitStatus === "success" && (

                            <div className="submit-message success">

                                <span className="message-icon">
                                    ✓
                                </span>

                                <div>

                                    <strong>
                                        Submitted successfully!
                                    </strong>

                                    <p>
                                        Thank you for reaching out to Gastornis.
                                        We'll get back to you soon.
                                    </p>

                                </div>

                            </div>

                        )}


                        {/* ERROR MESSAGE */}

                        {submitStatus === "error" && (

                            <div className="submit-message error">

                                <span className="message-icon">
                                    !
                                </span>

                                <div>

                                    <strong>
                                        Please complete the required fields.
                                    </strong>

                                    <p>
                                        {submitError ||
                                            "Please fill in all required fields before submitting."}
                                    </p>

                                </div>

                            </div>

                        )}


                        {/* SUBMIT BUTTON */}

                        <button
                            type="submit"
                            className="project-submit"
                            disabled={isSubmitting || isSubmitted}
                        >

                            <span>
                                {isSubmitted
                                    ? "Submitted"
                                    : isSubmitting
                                        ? "Sending..."
                                        : "Send Project Brief"}
                            </span>

                            <span className="submit-arrow">
                                {isSubmitted
                                    ? "✓"
                                    : isSubmitting
                                        ? "..."
                                        : "↗"}
                            </span>

                        </button>


                        <p>
                            Your information stays confidential.
                        </p>

                    </div>

                </form>

            </section>


            {/* ========================================
                FOOTER
            ======================================== */}

            <footer className="project-footer">

                <span>
                    © 2026 GASTORNIS
                </span>

                <span>
                    BUILDING WHAT'S NEXT.
                </span>

            </footer>

        </main>
    );
}

export default StartProject;


//----------------------------------------------------------------------------------------------------------------------


// import "./StartProject.css";

// function StartProject() {
//     return (
//         <main className="start-project-page">

//             {/* ========================================
//                 BACKGROUND
//             ======================================== */}

//             <div className="project-background">

//                 <div className="project-glow project-glow-one"></div>
//                 <div className="project-glow project-glow-two"></div>

//                 <div className="project-orbit project-orbit-one"></div>
//                 <div className="project-orbit project-orbit-two"></div>

//                 <span className="project-particle project-particle-one"></span>
//                 <span className="project-particle project-particle-two"></span>
//                 <span className="project-particle project-particle-three"></span>

//             </div>


//             {/* ========================================
//                 HEADER
//             ======================================== */}

//             <header className="project-header">

//                 <a
//                     href="/"
//                     className="project-brand"
//                 >
//                     GASTORNIS
//                 </a>

//                 <a
//                     href="/"
//                     className="project-back"
//                 >
//                     <span>←</span>
//                     Back to site
//                 </a>

//             </header>


//             {/* ========================================
//                 HERO
//             ======================================== */}

//             <section className="project-hero">

//                 <div className="project-eyebrow">
//                     <span></span>
//                     PROJECT ENQUIRY
//                     <span></span>
//                 </div>

//                 <h1>
//                     Have an idea?
//                     <br />
//                     <em>Let's build it.</em>
//                 </h1>

//                 <p>
//                     Our project enquiry system is currently being
//                     prepared for production. We're putting the final
//                     pieces of our communication infrastructure in place
//                     before opening submissions publicly.
//                 </p>

//             </section>


//             {/* ========================================
//                 SYSTEM STATUS
//             ======================================== */}

//             <section className="project-status-section">

//                 <div className="status-header">

//                     <div className="status-number">
//                         01
//                     </div>

//                     <div className="status-heading">
//                         ENQUIRY SYSTEM STATUS
//                     </div>

//                 </div>


//                 <div className="status-panel">

//                     {/* BACKEND API */}

//                     <div className="status-row">

//                         <div className="status-info">

//                             <span className="status-indicator ready"></span>

//                             <div>
//                                 <strong>
//                                     Backend API
//                                 </strong>

//                                 <span>
//                                     Project enquiry endpoint
//                                 </span>
//                             </div>

//                         </div>

//                         <span className="status-value ready-text">
//                             READY
//                         </span>

//                     </div>


//                     {/* DATABASE */}

//                     <div className="status-row">

//                         <div className="status-info">

//                             <span className="status-indicator ready"></span>

//                             <div>
//                                 <strong>
//                                     Enquiry Database
//                                 </strong>

//                                 <span>
//                                     Secure enquiry data storage
//                                 </span>
//                             </div>

//                         </div>

//                         <span className="status-value ready-text">
//                             READY
//                         </span>

//                     </div>


//                     {/* VALIDATION */}

//                     <div className="status-row">

//                         <div className="status-info">

//                             <span className="status-indicator ready"></span>

//                             <div>
//                                 <strong>
//                                     Form Validation
//                                 </strong>

//                                 <span>
//                                     Client-side & server-side validation
//                                 </span>
//                             </div>

//                         </div>

//                         <span className="status-value ready-text">
//                             READY
//                         </span>

//                     </div>


//                     {/* EMAIL */}

//                     <div className="status-row">

//                         <div className="status-info">

//                             <span className="status-indicator configuring"></span>

//                             <div>
//                                 <strong>
//                                     Email Infrastructure
//                                 </strong>

//                                 <span>
//                                     Production transactional email setup
//                                 </span>
//                             </div>

//                         </div>

//                         <span className="status-value configuring-text">
//                             CONFIGURING
//                         </span>

//                     </div>


//                     {/* PRODUCTION */}

//                     <div className="status-row">

//                         <div className="status-info">

//                             <span className="status-indicator pending"></span>

//                             <div>
//                                 <strong>
//                                     Public Enquiries
//                                 </strong>

//                                 <span>
//                                     Opening submissions to clients
//                                 </span>
//                             </div>

//                         </div>

//                         <span className="status-value pending-text">
//                             SOON
//                         </span>

//                     </div>

//                 </div>

//             </section>


//             {/* ========================================
//                 AVAILABILITY
//             ======================================== */}

//             <section className="project-availability">

//                 <div className="availability-badge">

//                     <span className="availability-dot"></span>

//                     ENQUIRIES OPENING SOON

//                 </div>

//                 <h2>
//                     We're almost ready.
//                 </h2>

//                 <p>
//                     The enquiry workflow is already being developed.
//                     We're currently completing the production email
//                     configuration required to reliably receive and
//                     process project enquiries.
//                 </p>

//                 <div className="availability-time">

//                     <span>
//                         EXPECTED AVAILABILITY
//                     </span>

//                     <strong>
//                         WITHIN ONE MONTH
//                     </strong>

//                 </div>

//             </section>


//             {/* ========================================
//                 TEMPORARY CONTACT
//             ======================================== */}

//             <section className="project-contact-section">

//                 <div className="contact-number">
//                     02
//                 </div>

//                 <div className="contact-content">

//                     <div className="contact-label">
//                         PROJECT REQUIREMENTS
//                     </div>

//                     <h2>
//                         Need to discuss a project
//                         <br />
//                         <em>before we're live?</em>
//                     </h2>

//                     <p>
//                         Until our online enquiry system goes live,
//                         you can send your project requirements directly
//                         to our team. Include as much detail as possible
//                         and we'll take it from there.
//                     </p>


//                     <a
//                         href="mailto:gastornis.team@gmail.com?subject=Project%20Enquiry%20%E2%80%94%20GASTORNIS"
//                         className="project-email-card"
//                     >

//                         <div className="email-card-content">

//                             <span>
//                                 TEAM EMAIL
//                             </span>

//                             <strong>
//                                 gastornis.team@gmail.com
//                             </strong>

//                         </div>

//                         <span className="email-arrow">
//                             ↗
//                         </span>

//                     </a>

//                 </div>

//             </section>


//             {/* ========================================
//                 TECHNICAL NOTE
//             ======================================== */}

//             <section className="technical-note">

//                 <div className="technical-icon">
//                     &lt;/&gt;
//                 </div>

//                 <div>

//                     <strong>
//                         Why isn't the form live yet?
//                     </strong>

//                     <p>
//                         The enquiry application and backend workflow
//                         are in place. We're currently completing domain
//                         verification and production email configuration
//                         before enabling public submissions.
//                     </p>

//                 </div>

//             </section>


//             {/* ========================================
//                 FOOTER
//             ======================================== */}

//             <footer className="project-footer">

//                 <span>
//                     © 2026 GASTORNIS
//                 </span>

//                 <span>
//                     BUILDING WHAT'S NEXT.
//                 </span>

//             </footer>

//         </main>
//     );
// }

// export default StartProject;



