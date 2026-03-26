export const portfolioData = {
  profile: {
    name: "Puja Midde",
    role: "Software Developer",
    education: "B.E Computer Science – Stanley College of Engineering and Technology for Women (CGPA 8.8)",
    intro: "Software Developer with hands-on experience in Generative AI, NLP, full-stack development, and data analytics. Proven ability to build scalable applications, optimize ML pipelines, and deliver impactful solutions through internships and hackathons.",
    email: "middepuja1005@gmail.com",
    linkedin: "https://linkedin.com/in/puja-midde3",
    github: "https://github.com/pujareddy2",
  },
  projects: [
    {
      id: "legal-guardian",
      title: "Legal Guardian AI",
      subtitle: "GenAI-powered Legal Analysis Engine",
      description: "A state-of-the-art proactive AI Legal Assistant designed to streamline legal document analysis, fraud detection, and risk prediction. Leveraging Google Document AI for high-precision text extraction and Gemini AI for advanced summarization and 'What-If' simulations, it provides legal professionals with actionable insights in seconds.",
      features: [
        "Intelligent Document Processing (OCR/NLP) for PDF and Images",
        "Predictive 'What-If' Simulations for clause impact analysis",
        "Secure Data Storage and Retrieval with Firebase Firestore",
        "Automated Risk Scoring and Fraud Detection algorithms",
        "Interactive Dashboard for legal case management"
      ],
      role: "Lead Backend Architect: Engineered the FastAPI infrastructure, integrated Google Cloud AI services, implemented robust Firestore data models, and managed the end-to-end deployment pipeline.",
      tech: ["FastAPI", "Google Document AI", "Gemini AI", "Firestore", "React", "Python"],
      github: "https://github.com/pujareddy2",
      architecture: "User → React UI → FastAPI Backend → Gemini AI → Firestore"
    },
    {
      id: "ayucare",
      title: "AyuCare",
      subtitle: "Ayurvedic AI Health Assistant",
      description: "An innovative AI-powered health and wellness ecosystem that bridges traditional Ayurvedic wisdom with modern technology. It identifies medicinal plants through visual recognition and provides personalized natural remedy suggestions. Recognized as Runner-Up at AIHackDays 2025 for its social impact and technical execution.",
      features: [
        "Advanced Leaf/Plant identification using Teachable Machine CNNs",
        "AI Health Chatbot powered by OpenAI for personalized wellness queries",
        "Real-time health tracker for medication adherence and daily routines",
        "Integrated Ayurvedic marketplace with secure Firebase transactions",
        "Personalized wellness recommendations based on user health profiles"
      ],
      role: "Core AI & Backend Developer: Spearheaded the AI model training, integrated OpenAI's GPT-4 for the chatbot, and built the scalable Firebase backend.",
      tech: ["Teachable Machine", "OpenAI API", "FastAPI", "Firebase", "JavaScript"],
      github: "https://github.com/pujareddy2",
      architecture: "Camera → Teachable Machine → FastAPI → OpenAI → Firebase"
    },
    {
      id: "attendance",
      title: "Smart Attendance System",
      subtitle: "AI-Based Face Recognition Tracker",
      description: "An automatic attendance tracker using CNN-based face recognition. Marks attendance instantly when a student stands in front of the camera. 3rd Place Winner at Infinity 2K25 Hackathon.",
      features: [
        "94% Accuracy face recognition",
        "Real-time Firebase database storage",
        "Student profile management dashboard",
        "Daily learning/task tracker (To-Do list)"
      ],
      role: "Developed core functional part: Connected CNN model to OpenCV, integrated Firebase storage, and built the profile tracker.",
      tech: ["Python", "OpenCV", "CNN", "Firebase", "Machine Learning"],
      github: "https://github.com/pujareddy2",
      architecture: "Webcam → OpenCV → CNN Model → Firebase"
    },
    {
      id: "pattern-classifier",
      title: "Visual Pattern Classification",
      subtitle: "KNN vs SVM Comparison",
      description: "A machine learning project that classifies manufacturing items into Good or Defective categories using Shape and Texture features. Deployed as an interactive Streamlit app.",
      features: [
        "Comparison of KNN and SVM (RBF Kernel) algorithms",
        "Real-time decision boundary visualization",
        "Feature normalization using StandardScaler",
        "Interactive sliders for feature adjustment"
      ],
      role: "Implemented full ML pipeline: Data generation, normalization, model training, and Streamlit UI development.",
      tech: ["Python", "Scikit-Learn", "NumPy", "Matplotlib", "Streamlit"],
      github: "https://github.com/pujareddy2",
      live: "https://visual-pattern-classifier.streamlit.app/"
    },
    {
      id: "booking-app",
      title: "AI Booking Web App",
      subtitle: "Full-Stack Stay-Booking Platform",
      description: "A modern full-stack booking platform developed using React, FastAPI, and PostgreSQL. Allows users to browse listings, book stays, and manage reservations.",
      features: [
        "Stay/Room listing and search",
        "Interactive booking flow with persistence",
        "Fully responsive UI for mobile and desktop",
        "AI-assisted UI generation for rapid prototyping"
      ],
      role: "Managed full lifecycle: Idea definition, prompting for generation, code review, testing, and validation.",
      tech: ["React", "FastAPI", "PostgreSQL", "JavaScript", "CSS"],
      github: "https://github.com/pujareddy2",
      live: "https://pujareddy2.github.io/ProductHub/"
    }
  ],
  skills: {
    programming: ["Python", "Java", "C", "JavaScript", "HTML", "CSS"],
    ai: ["Generative AI", "NLP", "LLMs", "HuggingFace", "OpenAI API", "Teachable Machine", "RAG"],
    ml: ["Model Training", "Model Evaluation", "Feature Engineering", "CNN", "KNN", "SVM"],
    tools: ["FastAPI", "React", "Firebase", "Power BI", "SQL", "Git", "VS Code", "Jupyter Notebook", "Google Colab"]
  },
  experience: [
    {
      company: "Viswam.AI",
      role: "AI Developer Intern",
      period: "May 2025 – Present",
      description: "Developed a Telugu LLM chatbot and contributed to dataset creation for model training. Created 80+ structured datasets to support model training pipelines. Experimented with HuggingFace models and RAG systems.",
      tech: ["Python", "HuggingFace", "NLP", "LLM Training", "Streamlit", "RAG"]
    },
    {
      company: "Microsoft / Edunet",
      role: "AI Intern",
      period: "Apr – May 2025",
      description: "Delivered training sessions on Microsoft Copilot and AI fundamentals to 50+ learners. Completed 26+ Microsoft Learn modules covering AI concepts, responsible AI, and generative AI tools.",
      tech: ["Microsoft AI", "Copilot", "Azure AI", "Responsible AI"]
    },
    {
      company: "Shell / Edunet",
      role: "Data Analytics Intern",
      period: "Feb – Mar 2025",
      description: "Built Power BI dashboards analyzing supply chain datasets and business KPIs. Automated ETL processes, reducing manual effort by 40%. Analyzed 5+ supply chain datasets for reporting clarity.",
      tech: ["Power BI", "Data Analytics", "DAX", "ETL"]
    },
    {
      company: "ApexPlanet",
      role: "Web Development Intern",
      period: "Apr – May 2025",
      description: "Built multiple React applications including quiz systems and portfolio websites with API integrations. Produced 7+ responsive UI components, enhancing user navigation by 35%.",
      tech: ["React", "JavaScript", "API Integration", "HTML", "CSS"]
    }
  ],
  certifications: [
    "Oracle Cloud AI Foundations Associate",
    "Microsoft Azure AI Fundamentals",
    "Crash Course on Python – Google (Coursera)",
    "IBM: Machine Learning with Python",
    "IBM: Customer Clustering with KMeans",
    "Deloitte Data Analytics Job Simulation",
    "NIELIT IoT Bootcamp"
  ],
  achievements: [
    "Runner-Up – AIHack Days 2025",
    "3rd Place – Infinity 2K25 Hackathon",
    "Top Performer – Flipkart GRiD Challenge",
    "State First Rank – Intermediate 2022",
    "Winner – 3 State-Level Literary Competitions"
  ]
};
