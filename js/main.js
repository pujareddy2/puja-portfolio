/**
 * ============================================================================
 * JavaScript (ES6+) Interactive Application Logic
 * Author: Puja Midde (Roll No: 160623733160)
 * Subject: Full Stack Development [SPC0701CS] — Assignment 1
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. Projects Data Store (Verified with Resume & Live Repositories)
// ----------------------------------------------------------------------------
const projectsData = [
  {
    id: "udaan-ai",
    title: "Udaan AI — Opportunity Platform",
    category: "ai",
    badge: "FastAPI + Groq LLM",
    icon: "bi-rocket-takeoff-fill",
    headerColor: "from-primary",
    urlPreview: "udan-api.onrender.com",
    shortDesc: "Opportunity intelligence platform using FastAPI, PostgreSQL, and Gemini/Groq LLMs for deterministic eligibility and document tracking.",
    fullDesc: "Built a production-ready opportunity intelligence platform using FastAPI, PostgreSQL, SQLAlchemy, and JWT authentication. Implemented deterministic eligibility evaluation, document readiness tracking, opportunity prioritization, deadline alerts, notifications, and LLM-powered profile understanding for students, farmers, and job seekers.",
    features: [
      "Deterministic Eligibility Engine matching user criteria against government schemes",
      "Automated Document Readiness & Expiry Wallet with real-time verification",
      "Multilingual Web Speech voice agent interface for accessibility",
      "Scam Shield algorithm verifying job postings and grant authenticity",
      "Scalable FastAPI backend with PostgreSQL and SQLAlchemy ORM"
    ],
    role: "Core Backend Architect — Engineered the API services, authentication, database schemas, and AI profile understanding engine.",
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Groq LLM", "Playwright", "Web Speech API"],
    github: "https://github.com/pujareddy2/udan.git",
    live: "https://udan-api.onrender.com"
  },
  {
    id: "legal-guardian",
    title: "Legal Guardian AI — Legal System",
    category: "ai",
    badge: "GenAI + Document AI",
    icon: "bi-shield-check",
    headerColor: "from-indigo",
    urlPreview: "legal-guardian-ai.vercel.app",
    shortDesc: "AI-powered legal analysis platform using FastAPI, LangChain, Gemini API, and Google Document AI for clause risk assessment.",
    fullDesc: "Legal Guardian AI is a proactive AI system designed to analyze legal contracts, detect fraudulent clauses, simplify dense legal jargon into plain English, and predict legal/financial consequences. Features Google Document AI for OCR, Gemini AI for 'What-If' clause simulations, and Firebase Firestore for persistent case index storage.",
    features: [
      "Intelligent Document Processing (OCR & NLP) for PDF and Image contracts",
      "Predictive 'What-If' clause consequence simulations with Gemini AI",
      "Automated Legal Risk Scoring and Fraud Detection algorithms",
      "Secure Firestore storage for document summaries and analysis records",
      "Complete REST API suite built with FastAPI and OpenAPI Swagger"
    ],
    role: "Lead Backend Developer — Developed FastAPI endpoints, integrated Google Cloud Document AI & Gemini AI, and designed Firestore data models.",
    tech: ["FastAPI", "Google Document AI", "Gemini API", "LangChain", "Firestore", "React"],
    github: "https://github.com/pujareddy2/legal-guardian-ai",
    live: "https://legal-guardian-ai.vercel.app"
  },
  {
    id: "career-pilot",
    title: "CareerPilot — AI Career Automation",
    category: "automation",
    badge: "Autonomous Agents",
    icon: "bi-briefcase-fill",
    headerColor: "from-cyan",
    urlPreview: "careerpilot-console.vercel.app",
    shortDesc: "AI-powered career automation console automating job discovery, resume ATS matching, opportunity scoring, and daily email reports.",
    fullDesc: "An end-to-end career automation engine developed with FastAPI, OpenAI API, GitHub Actions, and Google Sheets API. Automates multi-source job scraping with Playwright, performs ATS resume compatibility scoring, tracks application pipelines, and sends automated daily morning digest reports.",
    features: [
      "Automated headless job scraping with Playwright and LangChain",
      "Multi-factor ATS resume matching with LLM confidence scoring",
      "Two-way synchronization with Notion API and Google Sheets",
      "Automated daily 07:00 IST scheduled execution via GitHub Actions CI/CD",
      "Automated email reporting with SMTP integration"
    ],
    role: "Automation Architect — Designed data schemas, integrated LLM scoring prompts, and configured GitHub Actions workflows.",
    tech: ["FastAPI", "OpenAI API", "LangChain", "Playwright", "GitHub Actions", "Google Sheets API"],
    github: "https://github.com/pujareddy2/AI-Job-Tracker",
    live: "https://careerpilot-console.vercel.app/"
  },
  {
    id: "ayucare",
    title: "AyuCare — Ayurvedic Health AI",
    category: "ai",
    badge: "AIHackDays Runner-Up",
    icon: "bi-flower1",
    headerColor: "from-success",
    urlPreview: "pujareddy2.github.io/AyuCare",
    shortDesc: "AI healthcare assistant combining plant recognition CNNs, natural remedy guidance, medicine reminders, and health tracking.",
    fullDesc: "An AI-powered health and wellness ecosystem bridging traditional Ayurvedic medicine with modern computer vision. AyuCare identifies medicinal plants through visual recognition, provides personalized remedies, and features an interactive health chatbot. Recognized as Runner-Up at AIHackDays 2025 (Vishwam AI Hackathon).",
    features: [
      "Leaf & medicinal plant image recognition with Teachable Machine CNNs",
      "Interactive conversational AI health advisor powered by OpenAI GPT-4",
      "Medication adherence tracker and daily yoga recommendation routine",
      "Integrated Ayurvedic remedy catalog with Firebase persistence",
      "Responsive web interface with real-time health tracker"
    ],
    role: "Core AI & Backend Developer — Trained computer vision models, integrated OpenAI API, and developed backend routes with Firebase.",
    tech: ["FastAPI", "OpenAI API", "Teachable Machine", "Firebase", "JavaScript", "Python"],
    github: "https://github.com/pujareddy2/AyuCare",
    live: "https://pujareddy2.github.io/AyuCare"
  },
  {
    id: "msme-platform",
    title: "AI Innovation Evaluation Platform",
    category: "web",
    badge: "Full Stack + Spring/FastAPI",
    icon: "bi-trophy-fill",
    headerColor: "from-warning",
    urlPreview: "github.com/pujareddy2/MSME_UPDATED",
    shortDesc: "Full-stack hackathon evaluation platform combining automated LLM GitHub analysis with human judge scoring workflows.",
    fullDesc: "A complete innovation management platform developed with React, Spring Boot / FastAPI, MySQL, and n8n. Automates LLM-based GitHub repository and presentation analysis across six criteria, combines AI and human scores through weighted evaluation, and implements Role-Based Access Control (RBAC) with controlled submission-to-judging workflows.",
    features: [
      "Automated LLM codebase and PPT analysis across six technical criteria",
      "Weighted evaluation engine combining automated AI and judge scores",
      "Role-Based Access Control (Admin, Judge, Participant roles)",
      "Normalized relational database schema in MySQL",
      "Comprehensive evaluation dashboard and leaderboard"
    ],
    role: "Lead Full-Stack Developer — Built backend services, database schema, RBAC logic, and AI evaluation pipelines.",
    tech: ["React", "FastAPI / Spring Boot", "MySQL", "n8n", "LLM APIs", "Bootstrap"],
    github: "https://github.com/pujareddy2/MSME_UPDATED.git",
    live: null
  },
  {
    id: "verimark",
    title: "VeriMark — Multi-Factor Attendance",
    category: "ml",
    badge: "Security & ML",
    icon: "bi-fingerprint",
    headerColor: "from-danger",
    urlPreview: "github.com/pujareddy2/Mini_project",
    shortDesc: "Secure attendance monitoring system integrating QR, GPS geofencing, WiFi BSSID, face recognition, and device verification.",
    fullDesc: "VeriMark is an anti-proxy attendance monitoring system built with React Native, FastAPI, PostgreSQL, and OpenCV/CNN. Employs multi-layer verification including dynamic QR tokens, GPS geofencing, WiFi network verification, and face verification to ensure authentic physical presence.",
    features: [
      "Multi-factor verification: Dynamic QR + GPS Geofencing + WiFi BSSID",
      "CNN-based face verification with OpenCV webcam streaming",
      "Device token binding to prevent proxy attendance logins",
      "PostgreSQL audit logging with SQLAlchemy ORM and JWT security",
      "Real-time analytics dashboard for attendance statistics"
    ],
    role: "Core Developer — Engineered the backend verification services in FastAPI and integrated CNN face recognition.",
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "OpenCV", "CNN", "JWT", "React Native"],
    github: "https://github.com/pujareddy2/Mini_project.git",
    live: null
  },
  {
    id: "pattern-classifier",
    title: "Visual Pattern Classifier",
    category: "ml",
    badge: "ML & Data Science",
    icon: "bi-cpu-fill",
    headerColor: "from-secondary",
    urlPreview: "visual-pattern-classifier.streamlit.app",
    shortDesc: "Interactive machine learning classifier comparing KNN and SVM (RBF kernel) decision boundaries for manufacturing defect detection.",
    fullDesc: "A machine learning application that classifies manufacturing parts into Normal vs Defective categories using shape and texture features. Deployed as an interactive Streamlit application with live decision boundary visualization.",
    features: [
      "Algorithm comparison: KNN vs Support Vector Machine (SVM RBF)",
      "StandardScaler feature normalization pipeline",
      "Live 2D decision boundary visualization using Matplotlib",
      "Interactive Streamlit sliders for real-time inference",
      "Synthetic data generator for statistical benchmarking"
    ],
    role: "ML Engineer — Implemented complete ML pipeline in Scikit-Learn and built interactive Streamlit UI.",
    tech: ["Python", "Scikit-Learn", "NumPy", "Matplotlib", "Streamlit"],
    github: "https://github.com/pujareddy2",
    live: "https://visual-pattern-classifier.streamlit.app/"
  },
  {
    id: "producthub",
    title: "ProductHub — Inventory Platform",
    category: "web",
    badge: "Full Stack CRUD",
    icon: "bi-box-seam-fill",
    headerColor: "from-info",
    urlPreview: "pujareddy2.github.io/ProductHub",
    shortDesc: "Full-stack inventory management platform with complete CRUD API, database persistence, and valuation metrics.",
    fullDesc: "ProductHub is a modern full-stack inventory platform developed with FastAPI backend, PostgreSQL database, and React frontend. It provides live stock valuation, search, filtering, and seamless product lifecycle management.",
    features: [
      "Complete RESTful CRUD API (Create, Read, Update, Delete)",
      "PostgreSQL persistence with SQLAlchemy ORM modeling",
      "Live inventory stock valuation and analytics dashboard",
      "CORS-enabled API with robust Pydantic data validation",
      "Mobile-first responsive frontend UI"
    ],
    role: "Full-Stack Developer — Built database schemas, implemented RESTful API endpoints, and engineered responsive frontend.",
    tech: ["FastAPI", "React", "Vite", "PostgreSQL", "SQLAlchemy", "Bootstrap"],
    github: "https://github.com/pujareddy2",
    live: "https://pujareddy2.github.io/ProductHub/"
  }
];

// ----------------------------------------------------------------------------
// 2. DOM Initialization & Event Handlers (ES6+)
// ----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initThemeSwitcher();
  initTypingEffect();
  renderProjects(projectsData);
  initProjectFiltering();
  initContactFormValidation();
  initScrollSpy();
});

// ----------------------------------------------------------------------------
// Feature 1: Dark / Light Mode Switcher with LocalStorage (CO2 / BTL-3)
// ----------------------------------------------------------------------------
function initThemeSwitcher() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const themeIcon = document.getElementById("themeIcon");
  
  if (!themeToggleBtn || !themeIcon) return;

  // Retrieve stored theme or default to 'light'
  const savedTheme = localStorage.getItem("puja_portfolio_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  document.documentElement.setAttribute("data-bs-theme", savedTheme);
  updateThemeIcon(savedTheme, themeIcon);

  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    document.documentElement.setAttribute("data-bs-theme", newTheme);
    localStorage.setItem("puja_portfolio_theme", newTheme);
    updateThemeIcon(newTheme, themeIcon);
  });
}

function updateThemeIcon(theme, iconElement) {
  if (theme === "dark") {
    iconElement.className = "bi bi-sun-fill text-warning";
    iconElement.setAttribute("title", "Switch to Light Mode");
  } else {
    iconElement.className = "bi bi-moon-stars-fill text-primary";
    iconElement.setAttribute("title", "Switch to Dark Mode");
  }
}

// ----------------------------------------------------------------------------
// Feature 2: Hero Typing Animation (DOM Manipulation)
// ----------------------------------------------------------------------------
function initTypingEffect() {
  const typingTextEl = document.getElementById("typingText");
  if (!typingTextEl) return;

  const roles = [
    "Applied AI Engineer",
    "Machine Learning & GenAI Developer",
    "Full-Stack Web Engineer (FastAPI & React)",
    "B.E. Computer Science — Stanley College"
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typingSpeed = 75;
  const deleteSpeed = 35;
  const delayBetweenWords = 1800;

  function type() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      typingTextEl.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
    } else {
      typingTextEl.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
    }

    let nextSpeed = isDeleting ? deleteSpeed : typingSpeed;

    if (!isDeleting && charIdx === currentRole.length) {
      nextSpeed = delayBetweenWords;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      nextSpeed = 400;
    }

    setTimeout(type, nextSpeed);
  }

  type();
}

// ----------------------------------------------------------------------------
// Feature 3: Dynamic Project Cards Rendering (Real-Time UI Preview Frames)
// ----------------------------------------------------------------------------
function renderProjects(projectsList) {
  const container = document.getElementById("projectsContainer");
  if (!container) return;

  container.innerHTML = "";

  projectsList.forEach((proj) => {
    const col = document.createElement("div");
    col.className = "col-lg-4 col-md-6 project-item";
    col.dataset.category = proj.category;

    const techBadges = proj.tech.slice(0, 3).map(t => `<span class="project-badge">${t}</span>`).join(" ");

    col.innerHTML = `
      <div class="custom-card project-card h-100">
        <!-- Real-Time UI Browser Mockup Frame (No AI generated placeholders) -->
        <div class="project-browser-frame mb-3">
          <div class="browser-header">
            <span class="browser-dot dot-red"></span>
            <span class="browser-dot dot-yellow"></span>
            <span class="browser-dot dot-green"></span>
            <span class="browser-url-bar text-truncate ms-2">https://${proj.urlPreview}</span>
            <span class="badge bg-primary ms-auto" style="font-size: 0.65rem;">${proj.badge}</span>
          </div>
          <div class="browser-body">
            <div class="d-flex align-items-center justify-content-between p-3">
              <div class="d-flex align-items-center gap-2">
                <i class="bi ${proj.icon} fs-2 text-primary"></i>
                <div>
                  <div class="fw-bold small text-truncate" style="max-width: 140px;">${proj.title}</div>
                  <div class="text-muted" style="font-size: 0.7rem;">STATUS: ACTIVE / DEPLOYED</div>
                </div>
              </div>
              <div class="live-indicator">
                <span class="pulse-dot"></span> LIVE
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex flex-column flex-grow-1">
          <h4 class="h5 fw-bold mb-2">${proj.title}</h4>
          <p class="text-muted small flex-grow-1 mb-3">${proj.shortDesc}</p>
          <div class="d-flex flex-wrap gap-1 mb-4">
            ${techBadges}
          </div>
          <div class="d-flex gap-2 mt-auto">
            <button class="btn btn-sm btn-primary flex-grow-1" onclick="openProjectModal('${proj.id}')">
              <i class="bi bi-eye me-1"></i> View Details
            </button>
            ${proj.github ? `
              <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-secondary" title="View GitHub Code">
                <i class="bi bi-github"></i>
              </a>
            ` : ''}
            ${proj.live ? `
              <a href="${proj.live}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-success" title="Open Live App">
                <i class="bi bi-box-arrow-up-right"></i>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
}

// ----------------------------------------------------------------------------
// Feature 4: Interactive Project Category Filtering (CO2 / BTL-3)
// ----------------------------------------------------------------------------
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Update active button state
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const selectedCategory = btn.getAttribute("data-filter");

      // Filter projects array using ES6 .filter()
      if (selectedCategory === "all") {
        renderProjects(projectsData);
      } else {
        const filtered = projectsData.filter(p => p.category === selectedCategory);
        renderProjects(filtered);
      }
    });
  });
}

// ----------------------------------------------------------------------------
// Feature 5: Project Details Modal Viewer (DOM Injection)
// ----------------------------------------------------------------------------
window.openProjectModal = function(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const modalTitle = document.getElementById("projectModalTitle");
  const modalBody = document.getElementById("projectModalBody");
  const modalGithubLink = document.getElementById("modalGithubLink");
  const modalLiveLink = document.getElementById("modalLiveLink");

  modalTitle.textContent = project.title;

  const featuresHtml = project.features.map(f => `<li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>${f}</li>`).join("");
  const techHtml = project.tech.map(t => `<span class="badge bg-secondary me-1 mb-1">${t}</span>`).join(" ");

  modalBody.innerHTML = `
    <div class="mb-3 d-flex align-items-center justify-content-between">
      <span class="badge bg-primary fs-6">${project.badge}</span>
      <span class="text-muted small"><i class="bi bi-link-45deg me-1"></i>${project.urlPreview}</span>
    </div>
    <p class="lead fs-6 text-secondary mb-3">${project.fullDesc}</p>
    
    <h6 class="fw-bold mb-2">Key Technical Features:</h6>
    <ul class="list-unstyled small mb-4">
      ${featuresHtml}
    </ul>

    <h6 class="fw-bold mb-2">Role & Engineering Contribution:</h6>
    <p class="small text-muted mb-4 fst-italic">${project.role}</p>

    <h6 class="fw-bold mb-2">Technologies Used:</h6>
    <div class="mb-2">
      ${techHtml}
    </div>
  `;

  if (project.github) {
    modalGithubLink.href = project.github;
    modalGithubLink.style.display = "inline-flex";
  } else {
    modalGithubLink.style.display = "none";
  }

  if (project.live) {
    modalLiveLink.href = project.live;
    modalLiveLink.style.display = "inline-flex";
  } else {
    modalLiveLink.style.display = "none";
  }

  const modalEl = document.getElementById("projectModal");
  if (modalEl && window.bootstrap) {
    const modalInstance = new bootstrap.Modal(modalEl);
    modalInstance.show();
  }
};

// ----------------------------------------------------------------------------
// Feature 6: Client-Side Form Validation & Dynamic Alerts (CO2 / BTL-6)
// ----------------------------------------------------------------------------
function initContactFormValidation() {
  const contactForm = document.getElementById("contactForm");
  const alertContainer = document.getElementById("formAlertContainer");

  if (!contactForm) return;

  const nameInput = document.getElementById("userName");
  const emailInput = document.getElementById("userEmail");
  const subjectInput = document.getElementById("userSubject");
  const messageInput = document.getElementById("userMessage");

  // Real-time input listeners for immediate validation feedback
  [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
    if (!input) return;
    input.addEventListener("input", () => validateField(input));
  });

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const isNameValid = validateField(nameInput);
    const isEmailValid = validateField(emailInput);
    const isSubjectValid = validateField(subjectInput);
    const isMessageValid = validateField(messageInput);

    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
      // Dynamic Success Alert
      showAlert("success", "Thank you, " + nameInput.value.trim() + "! Your message has been sent successfully. I will get back to you soon.");
      contactForm.reset();
      
      // Clear validation styling
      [nameInput, emailInput, subjectInput, messageInput].forEach(inp => {
        inp.classList.remove("is-valid");
      });
    } else {
      // Dynamic Error Alert
      showAlert("danger", "Please correct the highlighted errors in the form before submitting.");
    }
  });

  function validateField(field) {
    if (!field) return false;
    const value = field.value.trim();
    let isValid = false;

    if (field.id === "userName") {
      isValid = value.length >= 3;
    } else if (field.id === "userEmail") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailRegex.test(value);
    } else if (field.id === "userSubject") {
      isValid = value.length >= 4;
    } else if (field.id === "userMessage") {
      isValid = value.length >= 10;
    }

    if (isValid) {
      field.classList.remove("is-invalid");
      field.classList.add("is-valid");
    } else {
      field.classList.remove("is-valid");
      field.classList.add("is-invalid");
    }

    return isValid;
  }

  function showAlert(type, message) {
    if (!alertContainer) return;

    const iconClass = type === "success" ? "bi-check-circle-fill" : "bi-exclamation-triangle-fill";
    alertContainer.innerHTML = `
      <div class="alert alert-${type} alert-dismissible fade show d-flex align-items-center" role="alert">
        <i class="bi ${iconClass} me-2 fs-5"></i>
        <div>${message}</div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;

    // Auto-dismiss after 6 seconds
    setTimeout(() => {
      alertContainer.innerHTML = "";
    }, 6000);
  }
}

// ----------------------------------------------------------------------------
// Feature 7: ScrollSpy & Active Link Highlight
// ----------------------------------------------------------------------------
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".custom-navbar .nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}
