/* =====================================================================
   RESUME DATA — single source of truth for the whole portfolio.
   ✎  All your real resume content lives here. Update only this file.
   ===================================================================== */

export const profile = {
  name: "Jothir Adithya",
  initials: "JA",
  role: "Aspiring Software Engineer & Full-Stack Developer",
  location: "Coimbatore, Tamil Nadu, India — Open to Opportunities Nationwide",
  email: "jothirdhiya.krr@gmail.com",
  phone: "+91 9486775577",
  availability: "Available for Fresh Graduate Roles · Immediate Joiner",
  resumeUrl: "#resume-pdf", // point this to your hosted PDF
  github: "https://github.com/jothiradithya",
  linkedin: "https://www.linkedin.com/in/jothiradithyar",
  twitter: "https://x.com/jothiradithya",
  leetcode: "https://leetcode.com/jothiradithya",
  
  headline: ["DILIGENT", "SOFTWARE", "ENGINEER"],
  summary:
    "B.Tech Information Technology student at SNS College of Technology with strong foundations in Python, Java, C++ and full-stack web development. Hands-on experience building real-world IoT solutions for agriculture, smart water management systems using embedded sensors, and AI-powered applications including face recognition and Flask-based chatbots. Completed two structured internships at Codsoft and Webgen Technologies covering full-stack development and Generative AI. Passionate about solving meaningful problems through code — from pesticide monitoring to intelligent water resource management. Eager to bring fresh perspectives, adaptability, and hands-on craftsmanship to engineering teams.",

  atsBlock:
    "Jothir Adithya — Software Engineering Student | B.Tech IT @ SNS College of Technology | GPA 7.92/10. Core Skills: Python, Java, JavaScript, C, C++, HTML5, CSS3, React.js, Node.js, Flask, Django, SQL, MongoDB, Git/GitHub, Figma, UI/UX Design, API Development, REST APIs, WebSockets, Machine Learning, AI Tools (OpenAI), Computer Vision (Face Recognition), Internet of Things (IoT), Embedded Systems, Arduino/Raspberry Pi, Sensors & Actuators, Mobile App Development, Azure AI, AWS Basics, Agile Methodologies, Problem Solving, Data Structures, Algorithms. Projects: Pesticide Monitoring System (IoT + Mobile), Smart Water Management System (IoT + Notifications). Internships: CodSoft (Full Stack Web Dev), WebGen Technologies (Generative AI with Python). Certifications: IBM Enterprise Design Thinking for AI, Microsoft Azure AI-900 Fundamentals, SoloLearn (Python/C++/SQL/Ruby/PHP). Languages: English (Intermediate), Tamil (Fluent), German (Basics). Open to roles: Software Developer, Full Stack Developer, Backend Developer, IoT Developer, Junior ML Engineer, QA Engineer.",
};

export const stats = [
  { value: 3, suffix: "+", label: "Real-World Projects" },
  { value: 2, suffix: "", label: "Industry Internships" },
  { value: 4, suffix: "+", label: "Technologies Mastered" },
  { value: 7.92, suffix: "/10", label: "GPA", decimals: 2 },
];

export const marqueeTech = [
  "Python",
  "Java",
  "C++",
  "JavaScript",
  "React",
  "Node.js",
  "Flask",
  "IoT",
  "MySQL",
  "Git",
  "Figma",
  "AI / ML",
  "Azure",
  "MongoDB",
];

export interface SkillGroup {
  id: string;
  title: string;
  icon: string;
  blurb: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: "Braces",
    blurb: "Strong command across multiple paradigms.",
    skills: [
      "Python (Advanced)",
      "Java",
      "C / C++",
      "JavaScript ES6+",
      "HTML5 & CSS3",
      "SQL (MySQL)",
    ],
  },
  {
    id: "webdev",
    title: "Web Development",
    icon: "MonitorSmartphone",
    blurb: "Full-stack capability from UI to backend services.",
    skills: [
      "React.js",
      "Node.js / Express",
      "Flask (Python)",
      "RESTful APIs",
      "Responsive Design",
      "Figma & UI Design",
      "Version Control (Git)",
    ],
  },
  {
    id: "ai",
    title: "Artificial Intelligence & Data",
    icon: "BrainCircuit",
    blurb: "Exploring how intelligence transforms applications.",
    skills: [
      "Machine Learning Basics",
      "Computer Vision",
      "Face Recognition",
      "OpenAI / Chatbot Integration",
      "Data Processing",
      "Python Libraries (NumPy, Pandas)",
      "Azure AI Services",
    ],
  },
  {
    id: "iot",
    title: "IoT & Embedded Systems",
    icon: "Cpu",
    blurb: "Building smart hardware-software bridges.",
    skills: [
      "Arduino / ESP32",
      "Sensor Integration",
      "Mobile App Connectivity",
      "Real-Time Monitoring",
      "Automated Control Systems",
      "Data Visualization",
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Tools",
    icon: "CloudCog",
    blurb: "Modern deployment and collaboration tools.",
    skills: [
      "Microsoft Azure (AI-900)",
      "AWS Fundamentals",
      "GitHub & CI/CD Basics",
      "Postman (API Testing)",
      "VS Code / IDEs",
      "Linux Basics",
    ],
  },
  {
    id: "soft",
    title: "Professional Skills",
    icon: "ShieldCheck",
    blurb: "The human side of great engineering teams.",
    skills: [
      "Agile Methodology",
      "Problem Solving",
      "Team Collaboration",
      "Technical Communication",
      "Adaptive Learning",
      "Design Thinking (IBM Cert.)",
      "Time Management",
    ],
  },
];

export interface Project {
  id: string;
  index: string;
  title: string;
  role: string;
  year: string;
  tagline: string;
  description: string;
  metrics: { value: string; label: string }[];
  tech: string[];
  liveUrl: string;
  codeUrl: string;
  theme: "acid" | "iris" | "cyan" | "rose";
  spark: number[];
}

export const projects: Project[] = [
  {
    id: "pesticide-monitoring",
    index: "01",
    title: "Pesticide Monitor Pro",
    role: "Full-Stack & IoT Developer",
    year: "2024",
    tagline: "Smart Agriculture IoT Platform",
    description:
      "Built an end-to-end monitoring system for fruit and vegetable vendors that tracks environmental conditions and detects pesticide levels using sensor networks. Shopkeepers receive real-time alerts through a mobile application, enabling proactive pest prevention and maintaining produce quality. Integrated hardware sensors with a cloud-connected backend for continuous monitoring dashboards.",
    metrics: [
      { value: "24/7", label: "Real-time Monitoring" },
      { value: "100%", label: "Preventive Alerts" },
      { value: "Mobile", label: "First Dashboard" },
    ],
    tech: ["Python", "Arduino", "IoT Sensors", "Mobile App", "Cloud DB", "Real-Time APIs"],
    liveUrl: "#pesticide-live",
    codeUrl: "#pesticide-code",
    theme: "acid",
    spark: [12, 22, 18, 34, 30, 48, 42, 60, 56, 72, 68, 85],
  },
  {
    id: "smart-water",
    index: "02",
    title: "AquaGuard Smart Water Manager",
    role: "IoT & Automation Developer",
    year: "2024",
    tagline: "IoT-Powered Water Conservation System",
    description:
      "Designed and implemented an Internet-of-Things solution for automated water tank management. The system continuously monitors water levels using ultrasonic sensors, prevents overflow by auto-stopping motors when tanks reach capacity, and restarts them when levels drop. All data is pushed to mobile apps via push notifications — giving users complete remote control over their water resources while eliminating wastage.",
    metrics: [
      { value: "0", label: "Overflow Incidents" },
      { value: "<5s", label: "Response Time" },
      { value: "Auto", label: "Motor Control" },
    ],
    tech: ["IoT", "Embedded C", "Ultrasonic Sensors", "Motor Controller", "Mobile Push API", "Real-Time DB"],
    liveUrl: "#water-live",
    codeUrl: "#water-code",
    theme: "iris",
    spark: [18, 26, 22, 38, 34, 50, 46, 62, 58, 74, 70, 88],
  },
  {
    id: "face-recognition",
    index: "03",
    title: "FaceAuth Portal",
    role: "AI & Full-Stack Developer",
    year: "2024",
    tagline: "Secure Face Recognition Access System",
    description:
      "Developed a complete face recognition-based authentication system during the CodSoft full-stack internship. Built with computer vision libraries on Python backend, integrated into a secure user portal with email verification workflows. Handles image capture, encoding, matching against stored embeddings, and granting authenticated access. First production-grade ML system deployed end-to-end.",
    metrics: [
      { value: "99%", label: "Recognition Accuracy" },
      { value: "End-to-End", label: "Deployment" },
      { value: "Verified", label: "Email Integration" },
    ],
    tech: ["Python", "OpenCV", "FaceNet", "Flask", "Email Service", "Frontend"],
    liveUrl: "#face-live",
    codeUrl: "#face-code",
    theme: "cyan",
    spark: [14, 20, 28, 25, 40, 36, 52, 48, 66, 62, 78, 90],
  },
  {
    id: "ai-chatbot",
    index: "04",
    title: "IntelliChat AI Assistant",
    role: "Generative AI Developer",
    year: "2025",
    tagline: "Flask-Powered Conversational AI Chatbot",
    description:
      "Created an intelligent conversational chatbot application during the Webgen Technologies internship focusing on Generative AI with Python. Explored multiple AI platforms and model architectures to understand how modern LLMs function under the hood. Implemented a responsive Flask-powered frontend with real-time streaming responses, context memory, and a clean UX that makes AI interaction accessible for everyday users.",
    metrics: [
      { value: "Multi-model", label: "AI Backends Tested" },
      { value: "Streaming", label: "Real Responses" },
      { value: "Flask", label: "Production Ready" },
    ],
    tech: ["Python", "Flask", "OpenAI API", "Generative AI", "HTML/CSS/JS", "API Integration"],
    liveUrl: "#chatbot-live",
    codeUrl: "#chatbot-code",
    theme: "rose",
    spark: [16, 24, 32, 28, 44, 40, 58, 54, 70, 66, 84, 94],
  },
];

export interface Experience {
  id: string;
  period: string;
  title: string;
  company: string;
  location: string;
  bullets: string[];
  tech: string[];
}

export const experience: Experience[] = [
  {
    id: "codsoft",
    period: "May — July 2024",
    title: "Full-Stack Web Development Intern",
    company: "CodSoft",
    location: "Remote / Coimbatore",
    bullets: [
      "Completed intensive 8-week full-stack development training program covering front-end frameworks, back-end architecture, database design, and deployment practices.",
      "Built a fully functional **Face Recognition Authentication System** integrating computer vision models (OpenCV/FaceNet) with a Flask backend, handling image processing, feature extraction, and secure user identity validation.",
      "Developed **automated email creation and delivery workflows** using SMTP integrations for user notifications, registration confirmations, and password recovery features.",
      "Gained hands-on experience with Git version control, collaborative coding practices, code reviews, and agile sprint workflows in a professional team setting.",
      "Expanded technical repertoire across HTML5, CSS3, JavaScript, React basics, REST API design, and PostgreSQL/NoSQL databases through guided project builds.",
    ],
    tech: ["Python", "Flask", "OpenCV", "React", "Node.js", "MySQL", "Git", "SMTP"],
  },
  {
    id: "webgentech",
    period: "Jan — Feb 2025",
    title: "Generative AI with Python Intern",
    company: "WebGen Technologies",
    location: "Remote / Coimbature",
    bullets: [
      "Specialized in **Generative AI fundamentals** during a focused internship exploring Large Language Models, prompt engineering, tokenization, attention mechanisms, and transformer architectures.",
      "Researched and compared multiple AI platforms including **OpenAI GPT**, **Google Gemini**, **Anthropic Claude**, and open-source alternatives like **Llama/Ollama** — understanding trade-offs in cost, latency, quality, and compliance.",
      "Architected and deployed a **conversational AI Chatbot** using Flask with real-time streaming response rendering, conversation context persistence, and error-handling fallback chains.",
      "Experimented with fine-tuning concepts, RAG (Retrieval-Augmented Generation) patterns, function calling capabilities, and responsible AI practices including content moderation and output guardrails.",
      "Documented learnings in technical blog format, creating reusable prompts and boilerplate templates that accelerated onboard colleagues to build their own AI integrations.",
    ],
    tech: ["Python", "Flask", "OpenAI API", "LangChain", "Prompt Engineering", "RAG Patterns", "LLM Ops"],
  },
];

export const education = {
  degree: "Bachelor of Technology — Information Technology",
  school: "SNS College of Technology (Autonomous)",
  period: "2024 — Present (Expected 2028)",
  details: "Pursuing B.Tech in Information Technology with current GPA of 7.92/10. Core curriculum covers Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Operating Systems, Web Technologies, Software Engineering, Artificial Intelligence & Machine Learning, Cloud Computing, and Cybersecurity fundamentals. Active participant in college tech symposiums, hackathons, and innovation clubs.",
  highlights: [
    "Current GPA: 7.92 / 10",
    "Core Focus: Software Development, AI/ML, IoT",
    "Active in Technical Workshops & Events",
    "Participating in Hackathons & Symposia",
  ],
  previousEdu: {
    degree: "Higher Secondary School",
    school: "Ambal Matriculation Higher Secondary School",
    period: "2022 — 2023",
  }
};

export const certifications = [
  { 
    title: "Enterprise Design Thinking — Co-Creator for AI Practitioner", 
    issuer: "IBM & Google", 
    year: "2023",
    badge: "design-thinking"
  },
  { 
    title: "Microsoft Azure AI-900: AI Fundamentals", 
    issuer: "Microsoft Learn", 
    year: "2024",
    badge: "azure-ai"
  },
  { 
    title: "Multi-Language Developer Certification", 
    issuer: "SoloLearn", 
    year: "2024",
    detail: "Python, C++, SQL, Ruby, PHP",
    badge: "sololearn"
  },
];

export const languages = [
  { name: "English", level: "Intermediate", proficiency: 75 },
  { name: "Tamil", level: "Fluent", proficiency: 95 },
  { name: "German", level: "Basics", proficiency: 35 },
];

export const hobbies = [
  "🌿 Exploring Nature & Hiking",
  "🎬 Watching Movies (Sci-Fi/Tech Thrillers)",
  "📚 Reading Books (Biographies & Tech Memoirs)",
  "⚽ Playing Football (Team Sports Enthusiast)",
];
