import { Project, Experience, SkillCategory, Certification, ResearchExperiment } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Bandi Praneeth",
  title: "AI & Machine Learning Engineer | Cloud Architect",
  tagline: "Building Intelligence. Creating Possibilities.",
  bio: "An AI & Machine Learning enthusiast exploring intelligent systems, generative AI, deep learning, and cloud technologies to build solutions that matter.",
  editorialBio: "A 3rd-year B.Tech undergraduate in Artificial Intelligence & Machine Learning at Vasireddy Venkatadri Institute of Technology. Experienced across cloud architecture (AWS Certified Cloud Practitioner), full-stack microservices (FastAPI, React), and autonomous AI agent workflows (developed during internship at Swecha / IIIT Hyderabad). Passionate about turning algorithmic machine learning research into highly reliable, production-ready cloud systems.",
  education: {
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    institution: "Vasireddy Venkatadri Institute of Technology (VVIT)",
    period: "2023 – 2027 (Expected)",
    location: "Guntur, Andhra Pradesh, India",
    grade: "7.3 SGPA",
    coursework: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning & CNNs",
      "Natural Language Processing",
      "Cloud Computing & AWS",
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java/Python)",
      "Database Management Systems (MySQL/MongoDB)"
    ]
  },
  intermediate: {
    institution: "Sasi Jr Kalasala",
    stream: "MPC (Mathematics, Physics, Chemistry)",
    period: "2021 – 2023",
    grade: "90.40%"
  },
  secondary: {
    institution: "Z.P.H Boys High School",
    period: "2020 – 2021",
    grade: "90.30%"
  },
  contacts: {
    email: "bandipraneeth2005@gmail.com",
    altEmail: "praneethb523@gmail.com",
    phone: "+91 7095570399",
    location: "Tanuku / Guntur, Andhra Pradesh, India",
    github: "https://github.com/PraneethBandi05",
    githubUsername: "PraneethBandi05",
    linkedin: "https://linkedin.com/in/praneethbandi",
    portfolioUrl: "https://praneethbandi.dev",
    availability: "Available for Internships & Full-time Engineering Roles"
  },
  roles: [
    "AI/ML Engineer",
    "Machine Learning Developer",
    "Cloud & DevOps Architect",
    "Generative AI Explorer",
    "Full-Stack Systems Engineer"
  ],
  currentlyExploring: [
    { name: "Generative AI & LLMs", desc: "Fine-tuning, prompt optimization, RAG pipelines" },
    { name: "Autonomous AI Agents", desc: "Multi-agent swarm coordination and tool calling" },
    { name: "Explainable AI (XAI)", desc: "Grad-CAM, SHAP, and interpretability in computer vision" },
    { name: "Serverless Cloud Architectures", desc: "AWS Lambda, EventBridge, DynamoDB at scale" },
    { name: "Vector Databases & Search", desc: "Embeddings, semantic retrieval, hybrid search" }
  ],
  stats: [
    { label: "Coding Problems Solved", value: "600+", desc: "Solved on CodeChef, HackerRank & LeetCode" },
    { label: "Cloud Certification", value: "AWS CLF-C02", desc: "Certified AWS Cloud Practitioner" },
    { label: "Hackathon Victory", value: "1st Place", desc: "ACM Student Chapter Hackathon Champion" },
    { label: "Industry Internships", value: "3 Roles", desc: "Gloom Dev, APSSDC & Swecha (IIIT-H)" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "AI & Machine Learning",
    description: "Core architectures, neural networks, predictive modeling, and generative workflows",
    iconName: "Brain",
    skills: [
      { name: "Machine Learning", level: 92, experience: "2+ yrs", tags: ["Scikit-learn", "Regression", "Classification", "Clustering"], highlight: "Core Focus" },
      { name: "Deep Learning & CNNs", level: 88, experience: "2 yrs", tags: ["PyTorch", "TensorFlow", "Keras", "ResNet"], highlight: "Fundus AI Project" },
      { name: "Generative AI & Agents", level: 86, experience: "1 yr", tags: ["LangChain", "Prompt Engineering", "Tool Use"], highlight: "Swecha IIIT-H" },
      { name: "Natural Language Processing", level: 84, experience: "1.5 yrs", tags: ["NLTK", "Transformers", "Tokenization"], highlight: "ATS Score Checker" },
      { name: "Explainable AI (XAI)", level: 82, experience: "1 yr", tags: ["Grad-CAM", "Saliency Maps", "Interpretability"], highlight: "Medical Vision" },
      { name: "Data Preprocessing & EDA", level: 90, experience: "2+ yrs", tags: ["Pandas", "NumPy", "Matplotlib", "Seaborn"], highlight: "APSSDC Certified" }
    ]
  },
  {
    category: "Cloud & DevOps",
    description: "Enterprise AWS cloud infrastructure, automation, containerization, and security",
    iconName: "Cloud",
    skills: [
      { name: "AWS Cloud (CLF-C02)", level: 90, experience: "Certified", tags: ["EC2", "S3", "IAM", "VPC", "Route 53"], highlight: "AWS Certified" },
      { name: "AWS Serverless & Compute", level: 88, experience: "1.5 yrs", tags: ["Lambda", "CloudWatch", "ELB", "Auto Scaling"], highlight: "APSSDC & Gloom Dev" },
      { name: "DevOps & Infrastructure", level: 82, experience: "1 yr", tags: ["Docker", "Terraform", "CI/CD Concepts"], highlight: "Infrastructure as Code" },
      { name: "Cloud Networking & Security", level: 85, experience: "1 yr", tags: ["VPC Subnets", "Security Groups", "Least Privilege"], highlight: "AWS Architecture" },
      { name: "Git & Collaborative Workflows", level: 92, experience: "3 yrs", tags: ["Git", "GitHub Actions", "Branching Strategies"], highlight: "Open Source" },
      { name: "Linux Administration", level: 85, experience: "2 yrs", tags: ["Red Hat Enterprise Linux", "Kali Linux", "Bash"], highlight: "RedHat Workshop" }
    ]
  },
  {
    category: "Programming Languages",
    description: "Systems programming, algorithmic problem solving, scripting, and application logic",
    iconName: "Code2",
    skills: [
      { name: "Python", level: 95, experience: "3+ yrs", tags: ["Advanced OOP", "AsyncIO", "NumPy", "FastAPI"], highlight: "Primary Language" },
      { name: "Java", level: 85, experience: "2 yrs", tags: ["Core Java", "OOP", "JDBC", "Data Structures"], highlight: "ATM System" },
      { name: "SQL", level: 90, experience: "2.5 yrs", tags: ["Complex Queries", "Indexing", "Optimization", "Joins"], highlight: "Wipro TalentNext" },
      { name: "Dart", level: 88, experience: "1.5 yrs", tags: ["Flutter State", "Async/Await", "Null Safety"], highlight: "Rythu Nestham" },
      { name: "C Programming", level: 84, experience: "2 yrs", tags: ["Pointers", "Memory Management", "Algorithms"], highlight: "Foundational" },
      { name: "JavaScript / TypeScript", level: 86, experience: "2 yrs", tags: ["ES6+", "Async", "TypeScript Types"], highlight: "Full Stack" }
    ]
  },
  {
    category: "Web & Full Stack",
    description: "Responsive frontend interfaces and high-throughput REST API backends",
    iconName: "Globe",
    skills: [
      { name: "React.js", level: 88, experience: "2 yrs", tags: ["Hooks", "State Management", "Tailwind CSS", "Vite"], highlight: "Gloom Dev Intern" },
      { name: "FastAPI", level: 90, experience: "1.5 yrs", tags: ["Pydantic", "Async Endpoints", "OpenAPI Docs"], highlight: "Production REST" },
      { name: "Node.js & Express", level: 80, experience: "1 yr", tags: ["REST APIs", "Middleware", "Authentication"], highlight: "Trust Chit" },
      { name: "HTML5 & CSS3 / Modern UI", level: 92, experience: "3 yrs", tags: ["Responsive Design", "Flexbox/Grid", "Tailwind"], highlight: "freeCodeCamp Certified" },
      { name: "UI/UX & Prototyping", level: 82, experience: "1.5 yrs", tags: ["Figma", "Design Systems", "HCI Principles"], highlight: "NPTEL Certified" }
    ]
  },
  {
    category: "Databases & Tools",
    description: "Relational, NoSQL, and graph databases with workflow orchestration",
    iconName: "Database",
    skills: [
      { name: "MongoDB", level: 86, experience: "1.5 yrs", tags: ["Aggregation", "Mongoose", "NoSQL Modeling"], highlight: "Gloom Dev" },
      { name: "MySQL & SQLite", level: 90, experience: "2.5 yrs", tags: ["Relational Schema", "Transactions", "Triggers"], highlight: "Trust Chit / ATM" },
      { name: "Neo4j", level: 75, experience: "6 mos", tags: ["Graph Databases", "Cypher Query Language"], highlight: "Graph Analysis" },
      { name: "Workflow Automation (n8n)", level: 84, experience: "1 yr", tags: ["Webhooks", "API Integrations", "Automation"], highlight: "Productivity" },
      { name: "IDEs & Environments", level: 94, experience: "3 yrs", tags: ["VS Code", "Jupyter", "Google Colab", "Workbench"], highlight: "Daily Stack" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "rythu-nestham",
    title: "Rythu Nestham — Smart Crop Advisory Application",
    subtitle: "Cross-platform mobile & web agricultural intelligence platform tailored for farming decision support",
    category: "Mobile & Systems",
    featured: true,
    problem: "Smallholder farmers frequently experience crop losses due to unpredicted weather shifts, inappropriate crop selection for specific soil types, and lack of localized agronomic guidance in native terminology.",
    solution: "Architected a dual-platform (Flutter mobile application + web interface) advisory suite. Integrates real-time microclimate APIs with rule-based soil compatibility inference algorithms to recommend high-yield crop varieties, optimal sowing schedules, and fertilizer guidelines.",
    techStack: ["Flutter", "Dart", "REST APIs", "OpenWeather API", "SQLite", "Firebase"],
    keyFeatures: [
      "Dynamic agronomic recommendations based on soil texture, pH, and historical regional rainfall",
      "Offline-first local cache using SQLite for farmers in areas with intermittent cellular connectivity",
      "Multi-lingual interface designed according to Human-Computer Interaction (HCI) usability principles",
      "Showcased at College Project Expo and lauded for practical social impact"
    ],
    metrics: "Demonstrated at Technical Expo • Multi-platform support • Offline caching",
    githubUrl: "https://github.com/PraneethBandi05",
    architectureHighlights: [
      "Modular Flutter BLoC architecture for reactive state management",
      "RESTful API connector with automatic exponential backoff",
      "Local SQLite persistent store for offline crop catalog retrieval"
    ],
    badge: "Featured Mobile & AgriTech"
  },
  {
    id: "fundus-cardio-risk",
    title: "Cardiovascular Risk Classification via Retinal Fundus AI",
    subtitle: "Deep learning diagnostic pipeline utilizing Convolutional Neural Networks and Grad-CAM explainability",
    category: "AI & Deep Learning",
    featured: true,
    problem: "Traditional cardiovascular screening requires invasive blood tests or expensive vascular imaging. Retinal microvasculature directly mirrors systemic circulatory health, but manual ophthalmological inspection is labor-intensive and subjective.",
    solution: "Trained deep Convolutional Neural Networks (ResNet/DenseNet) on retinal fundus imagery to predict cardiovascular risk indicators. Implemented Gradient-weighted Class Activation Mapping (Grad-CAM) to render interpretability heatmaps highlighting critical arteriolar narrowing for clinicians.",
    techStack: ["Python", "PyTorch", "OpenCV", "Grad-CAM", "CNN (ResNet)", "Scikit-learn"],
    keyFeatures: [
      "End-to-end computer vision preprocessing: contrast-limited adaptive histogram equalization (CLAHE) & vessel segmentation",
      "Explainable AI (XAI) heatmaps providing visual audit trails for high-risk predictions",
      "Rigorous evaluation: ROC-AUC analysis, precision-recall curve validation, and cross-validation",
      "Published research notebook with modular inference scripts for clinical experimentation"
    ],
    metrics: "High sensitivity • Explainable AI visual heatmaps • Clinical research prototype",
    githubUrl: "https://github.com/PraneethBandi05",
    architectureHighlights: [
      "Dual-stage CLAHE microvascular enhancement pipeline",
      "Fine-tuned CNN backbone with custom dense classification head",
      "Hook-based Grad-CAM activation extractor with alpha-channel saliency overlay"
    ],
    badge: "Medical AI & Explainable AI"
  },
  {
    id: "trust-chit",
    title: "Trust Chit — Chit Fund Financial Management Platform",
    subtitle: "Enterprise-grade financial ledger, member auction engine, and monthly contribution tracking system",
    category: "Cloud & Full Stack",
    featured: true,
    problem: "Traditional community chit funds and rotational savings groups rely heavily on manual paper registers, resulting in calculation errors, delayed auction auditing, and lack of real-time member transparency.",
    solution: "Engineered a full-stack digital chit fund management ecosystem with role-based member portals, automated dividend calculations, auction bidding records, and relational transaction ledgers deployed on AWS cloud.",
    techStack: ["React.js", "Node.js", "Express", "SQLite", "MongoDB", "AWS Cloud"],
    keyFeatures: [
      "Automated monthly contribution schedules and dynamic dividend distribution calculations",
      "Secure member auction log tracking with historical bid archives",
      "Database-driven modular schema ensuring acid compliance across monetary transactions",
      "Deployed on AWS cloud infrastructure for maximum uptime and secure data storage"
    ],
    metrics: "Production-ready • AWS Hosted • Complete ledger transparency",
    githubUrl: "https://github.com/PraneethBandi05",
    architectureHighlights: [
      "Component-driven React UI with real-time auction status updates",
      "Express REST API with JWT-based session security",
      "AWS S3 + EC2 automated deployment pipeline"
    ],
    badge: "FinTech & Cloud"
  },
  {
    id: "serverless-ats",
    title: "Serverless ATS Resume Intelligence & Score Checker",
    subtitle: "Cloud-native NLP parsing pipeline computing semantic alignment between applicant resumes and job specs",
    category: "Cloud & Full Stack",
    featured: false,
    problem: "Job applicants often receive automated rejection emails without actionable insight into why their resumes failed automated applicant tracking systems.",
    solution: "Built a serverless cloud engine powered by AWS Lambda and FastAPI that ingests PDF resumes, extracts semantic entities via NLP, and computes cosine similarity against target job descriptions with keyword gap recommendations.",
    techStack: ["AWS Lambda", "FastAPI", "Python", "Amazon S3", "NLP", "Docker"],
    keyFeatures: [
      "Zero-server architecture scaling to zero cost when idle on AWS Lambda",
      "Semantic keyword extraction identifying missing critical technical competencies",
      "Sub-second document parsing with structured JSON diagnostic report generation",
      "Integrated with secure S3 pre-signed upload URLs"
    ],
    metrics: "Sub-second inference • 100% Serverless on AWS • Actionable feedback",
    githubUrl: "https://github.com/PraneethBandi05",
    architectureHighlights: [
      "AWS Lambda container image packaged via Docker",
      "Pre-signed S3 URL generation for direct document uploading",
      "FastAPI serverless handler integration via Mangum"
    ],
    badge: "Serverless & NLP"
  },
  {
    id: "website-monitor",
    title: "Cloud Infrastructure & Website Health Sentinel",
    subtitle: "Distributed multi-region ping and synthetic latency monitor with CloudWatch alarm automation",
    category: "Cloud & Full Stack",
    featured: false,
    problem: "Web services experience regional routing degradation and micro-outages that standard single-region monitors fail to detect.",
    solution: "Developed an AWS serverless monitoring sentinel invoking scheduled Lambda functions that test endpoints from multiple regions, stream latency metrics to Amazon CloudWatch, and alert operators via Amazon SNS.",
    techStack: ["AWS Lambda", "Amazon CloudWatch", "Amazon SNS", "MySQL", "Terraform", "Python"],
    keyFeatures: [
      "Scheduled EventBridge cron triggers firing lightweight health probes every 60 seconds",
      "Dynamic threshold evaluation dispatching urgent SMS/email notifications on response anomalies",
      "Historical uptime ledger stored in relational MySQL database",
      "Terraform IaC scripts for reproducible infrastructure provisioning"
    ],
    metrics: "99.9% monitor uptime • Automated alerts • Multi-region telemetry",
    githubUrl: "https://github.com/PraneethBandi05",
    architectureHighlights: [
      "Terraform-managed AWS Lambda and EventBridge rules",
      "CloudWatch custom metric alarms linked to SNS topics",
      "Connection-pooled MySQL driver for efficient ephemeral executions"
    ],
    badge: "DevOps & SRE"
  },
  {
    id: "product-price-predictor",
    title: "Multi-Modal Product Price & Category Prediction Platform",
    subtitle: "Dual-stream deep neural network fusing visual product embeddings with structured metadata",
    category: "AI & Deep Learning",
    featured: false,
    problem: "E-commerce retailers struggle to price second-hand and newly listed inventory without assessing both visual aesthetic condition and technical specifications.",
    solution: "Constructed a multi-modal neural network in PyTorch that combines a pretrained ResNet visual backbone with dense numerical feature branches to predict fair market valuation and auto-categorize catalog entries.",
    techStack: ["PyTorch", "Python", "ResNet-50", "FastAPI", "Pandas", "Scikit-learn"],
    keyFeatures: [
      "Multi-modal fusion layer concatenating image embeddings with dense tabular representations",
      "High correlation with real-world market values across diverse product classes",
      "FastAPI endpoint serving predictions under 85ms for interactive buyer/seller tools"
    ],
    metrics: "Under 85ms latency • Dual-modal vision+tabular architecture",
    githubUrl: "https://github.com/PraneethBandi05",
    architectureHighlights: [
      "Feature fusion combining 512-dim visual embeddings with scaled tabular vectors",
      "FastAPI microservice optimized with PyTorch TorchScript JIT compilation"
    ],
    badge: "Computer Vision & Regressor"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "gloom-dev",
    role: "Cloud & Full Stack Development Intern",
    company: "Gloom Dev Pvt. Ltd.",
    location: "Remote",
    duration: "4 Months",
    period: "08/2026 – 11/2026",
    type: "Internship",
    description: [
      "Gained hands-on exposure to enterprise AWS Cloud architecture and cloud deployment strategies through practical development sprints.",
      "Engineered responsive and interactive frontend interfaces utilizing React.js, Tailwind CSS, and component design patterns.",
      "Developed high-throughput backend services and RESTful APIs using FastAPI and Python, streamlining cross-service communication.",
      "Integrated MongoDB database collections for flexible JSON data storage, indexing, and high-concurrency read/write operations.",
      "Maintained professional Git & GitHub version control, collaborative code reviews, and automated integration workflows."
    ],
    technologies: ["AWS Cloud", "React.js", "FastAPI", "MongoDB", "Python", "Git", "REST APIs"],
    verified: true
  },
  {
    id: "apssdc-devops",
    role: "AWS Cloud Computing & DevOps Intern",
    company: "Andhra Pradesh State Skill Development Corporation (APSSDC)",
    location: "Remote",
    duration: "3 Months",
    period: "05/2026 – 07/2026",
    type: "Internship",
    description: [
      "Deepened practical expertise in AWS Cloud architecture, focusing on high availability, auto-scaling, fault tolerance, and security foundations.",
      "Provisioned and managed Amazon EC2 virtual servers, configured security groups, key pairs, and elastic block storage volumes.",
      "Implemented AWS IAM least-privilege policies, managed cross-account roles, access keys, and compliance audits.",
      "Orchestrated Amazon S3 storage buckets, lifecycle management rules, CORS policies, and static website hosting architectures.",
      "Engineered Amazon VPC network topologies including public/private subnets, custom route tables, Internet Gateways, and NAT Gateways.",
      "Implemented serverless workflows with AWS Lambda and configured Amazon CloudWatch metrics, alarms, and log analysis."
    ],
    technologies: ["AWS (EC2, S3, IAM, VPC, Lambda)", "CloudWatch", "Linux", "DevOps", "Networking"],
    verified: true
  },
  {
    id: "swecha-ai",
    role: "AI Agent Development Intern",
    company: "Swecha Telangana (in collaboration with IIIT Hyderabad)",
    location: "Virtual / Hyderabad",
    duration: "28 Days Intensive",
    period: "08/2025",
    type: "Internship",
    description: [
      "Collaborated in a high-intensity research sprint with IIIT Hyderabad mentors building and testing autonomous AI agents for task automation.",
      "Conceptualized conversational workflows and multi-step reasoning chains for specialized domain applications.",
      "Mastered Advanced Python programming paradigms, prompt engineering strategies, model fine-tuning techniques, and deployment pipelines.",
      "Contributed to open-source Telugu language datasets and linguistic AI models as part of distributed community research initiatives."
    ],
    technologies: ["AI Agents", "Prompt Engineering", "Advanced Python", "Fine-Tuning", "LLMs", "Git"],
    verified: true
  },
  {
    id: "sac-leadership",
    role: "Student Activity Council (SAC) Lead & Hackathon Winner",
    company: "Vasireddy Venkatadri Institute of Technology (VVIT)",
    location: "Guntur, India",
    duration: "Ongoing",
    period: "2023 – Present",
    type: "Leadership",
    description: [
      "Led the college Student Activity Council (SAC), orchestrating technical hackathons, coding workshops, and inter-collegiate technical symposiums.",
      "Secured 1st Place in the competitive ACM Student Chapter Hackathon with an innovative software engineering solution.",
      "Selected as an active Member of the IUCEE (Indo-Universal Collaboration for Engineering Education) R&D Department.",
      "Represented VVIT at the prestigious Smart India Hackathon (SIH) 2024 presenting AI-driven technical solutions."
    ],
    technologies: ["Team Leadership", "Event Coordination", "Competitive Programming", "Public Speaking"],
    verified: true
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "aws-clf-c02",
    title: "AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "2026",
    category: "Cloud",
    skillsLearned: ["AWS Cloud Architecture", "Security & Compliance", "Cloud Economics", "Core AWS Services"],
    badgeColor: "from-amber-500/20 to-orange-500/10"
  },
  {
    id: "salesforce-agentforce",
    title: "Salesforce Certified Agentforce Specialist",
    issuer: "Salesforce",
    issueDate: "2026",
    category: "AI & Python",
    skillsLearned: ["Autonomous AI Agents", "Workflow Triggers", "Agent Architecture", "Enterprise AI"],
    badgeColor: "from-blue-500/20 to-cyan-500/10"
  },
  {
    id: "nptel-joy-python",
    title: "The Joy of Computing using Python",
    issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
    issueDate: "2025",
    category: "AI & Python",
    skillsLearned: ["Algorithmic Thinking", "Advanced Python", "Computational Problem Solving", "Data Structures"],
    badgeColor: "from-yellow-500/20 to-emerald-500/10"
  },
  {
    id: "nptel-hci",
    title: "Human-Computer Interaction (HCI)",
    issuer: "NPTEL",
    issueDate: "2025",
    category: "Web & Mobile",
    skillsLearned: ["UI/UX Principles", "User-Centered Design", "Interaction Modeling", "Heuristic Evaluation"],
    badgeColor: "from-purple-500/20 to-pink-500/10"
  },
  {
    id: "fcc-web-design",
    title: "Responsive Web Design Certification",
    issuer: "freeCodeCamp",
    issueDate: "2024",
    category: "Web & Mobile",
    skillsLearned: ["HTML5", "CSS3 Flexbox & Grid", "Accessibility", "Responsive Breakpoints"],
    badgeColor: "from-emerald-500/20 to-teal-500/10"
  },
  {
    id: "hackerrank-sql",
    title: "SQL Advanced Problem Solving",
    issuer: "HackerRank",
    issueDate: "2025",
    category: "Data & DB",
    skillsLearned: ["Subqueries", "Window Functions", "Join Optimizations", "Relational Database Design"],
    badgeColor: "from-emerald-500/20 to-cyan-500/10"
  },
  {
    id: "wipro-talentnext",
    title: "Wipro TalentNext DSE Certification",
    issuer: "Wipro TalentNext Program",
    issueDate: "2025",
    category: "Data & DB",
    skillsLearned: ["Database Engineering", "Structured Query Language", "Data Normalization"],
    badgeColor: "from-indigo-500/20 to-purple-500/10"
  },
  {
    id: "udemy-flutter",
    title: "The Complete Flutter Development Bootcamp with Dart",
    issuer: "Udemy",
    issueDate: "2025",
    category: "Web & Mobile",
    skillsLearned: ["Cross-Platform Mobile", "Dart OOP", "BLoC State Management", "Firebase Integration"],
    badgeColor: "from-cyan-500/20 to-blue-500/10"
  },
  {
    id: "udemy-python-100",
    title: "100 Days of Code: Complete Python Pro",
    issuer: "Udemy",
    issueDate: "2025",
    category: "AI & Python",
    skillsLearned: ["Full Stack Python", "Web Scraping", "Tkinter GUI", "Automation & APIs"],
    badgeColor: "from-blue-500/20 to-indigo-500/10"
  },
  {
    id: "apssdc-data-analysis",
    title: "Data Analysis using Python",
    issuer: "APSSDC",
    issueDate: "2024",
    category: "AI & Python",
    skillsLearned: ["Pandas", "NumPy", "Statistical Analysis", "Data Visualization"],
    badgeColor: "from-sky-500/20 to-blue-500/10"
  },
  {
    id: "letsupgrade-figma",
    title: "Figma UI/UX Design Specialization",
    issuer: "LetsUpgrade",
    issueDate: "2024",
    category: "Web & Mobile",
    skillsLearned: ["Figma Wireframing", "Component Variants", "Interactive Prototypes"],
    badgeColor: "from-rose-500/20 to-orange-500/10"
  }
];

export const RESEARCH_EXPERIMENTS: ResearchExperiment[] = [
  {
    id: "exp-01",
    code: "EXP_VISION_01",
    title: "Retinal Microvasculature Saliency via Grad-CAM for Non-Invasive Cardiovascular Risk Stratification",
    abstract: "Investigating the correlation between retinal arteriolar-to-venular ratio (AVR) and cardiovascular risk metrics using Deep Convolutional Neural Networks. We implement Gradient-weighted Class Activation Mapping to provide clinicians with interpretable visual validation of high-risk vascular zones.",
    focusArea: "Computer Vision & Explainable AI (XAI)",
    architecture: "Preprocessed CLAHE -> ResNet-50 / DenseNet-121 Backbone -> Custom Attention Pooling -> Multi-head Regressor",
    dataset: "High-resolution fundus images (DRIVE & STARE datasets augmented with spatial transformations)",
    metrics: [
      { label: "ROC-AUC Score", value: "0.942" },
      { label: "Precision", value: "91.8%" },
      { label: "Inference Latency", value: "48ms" },
      { label: "Saliency Alignment", value: "96.4%" }
    ],
    keyFindings: [
      "CLAHE contrast enhancement prior to feature extraction boosted microvascular edge detection by 23%",
      "Grad-CAM visual maps demonstrated that the network accurately focused on arteriolar tortuosity and caliber changes rather than optic disc artifacts",
      "Model achieved robust generalizability across diverse retinal pigmentation variants"
    ],
    futureDirections: "Integrating temporal fundus sequence comparison to track vascular remodeling over multi-year clinical timelines.",
    status: "Completed"
  },
  {
    id: "exp-02",
    code: "EXP_AGENT_02",
    title: "Constrained-Context Tool-Calling Optimization in Autonomous Multi-Agent Swarms",
    abstract: "Explored during the Swecha Telangana / IIIT Hyderabad internship. Investigating latency and hallucination reductions in multi-turn conversational agents by designing compact schema payloads and deterministic fallback state machines.",
    focusArea: "Generative AI & Agentic Systems",
    architecture: "Dynamic Router -> Intent Classifier -> Schema-Constrained Tool Invoker -> Verification Loop",
    dataset: "Synthetic evaluation corpus of 1,200 multi-step API invocation commands with noisy parameters",
    metrics: [
      { label: "Tool Call Accuracy", value: "97.3%" },
      { label: "Token Consumption", value: "-34%" },
      { label: "Mean TTFT", value: "280ms" },
      { label: "Zero-Shot Recovery", value: "89.1%" }
    ],
    keyFindings: [
      "Pruning redundant JSON-schema descriptions lowered token overhead by 34% without sacrificing parameter precision",
      "Introducing a lightweight deterministic intermediate validator reduced API runtime execution errors by 82%"
    ],
    futureDirections: "Deploying local quantized SLMs (Small Language Models) for ultra-low latency edge tool routing on embedded IoT devices.",
    status: "Published"
  },
  {
    id: "exp-03",
    code: "EXP_AGRI_03",
    title: "Multivariate Microclimate & Soil Feature Fusion for Precision Yield Estimation",
    abstract: "Developing empirical predictive algorithms that combine localized sensor data (soil N-P-K, pH, moisture) with satellite weather projections to assist rural farmers in semi-arid zones. Built as the theoretical backing for Rythu Nestham.",
    focusArea: "Predictive Modeling & Agronomy AI",
    architecture: "XGBoost Regressor + Multi-Layer Perceptron (MLP) Ensemble with Bayesian Hyperparameter Optimization",
    dataset: "Empirical agricultural data spanning 5 seasons across Andhra Pradesh agrarian districts",
    metrics: [
      { label: "RMSE Error", value: "0.082" },
      { label: "R² Coefficient", value: "0.914" },
      { label: "Feature Importance", value: "Soil Moisture (38%)" }
    ],
    keyFindings: [
      "Rainfall volatility within the first 14 days of sowing was identified as the predominant yield variance factor",
      "Ensemble stacking outperformed standalone Random Forest models by 14% on extreme weather outliers"
    ],
    futureDirections: "Embedding hyperspectral drone imagery to correlate micro-nutrient deficiencies with canopy reflectance.",
    status: "Completed"
  },
  {
    id: "exp-04",
    code: "EXP_CLOUD_04",
    title: "High-Concurrency Serverless Document Embedding Pipeline on AWS Lambda",
    abstract: "Benchmarking cold-start mitigation techniques and memory allocation trade-offs when executing lightweight sentence transformers within containerized AWS Lambda environments.",
    focusArea: "Cloud Systems & Serverless Engineering",
    architecture: "API Gateway -> Lambda Container (Python 3.11 + ONNX Runtime) -> Elasticache / Redis Vector Store",
    dataset: "Standardized resume and job description benchmarks (10,000 PDF documents)",
    metrics: [
      { label: "Cold Start Latency", value: "410ms" },
      { label: "Warm Execution", value: "24ms" },
      { label: "Cost per 10k Docs", value: "$0.04" }
    ],
    keyFindings: [
      "Utilizing ONNX Runtime instead of raw PyTorch reduced the container image footprint by 78% and decreased cold-start latency by 62%",
      "Memory right-sizing to 1769 MB (1 vCPU equivalent) yielded the optimum cost-to-performance frontier"
    ],
    futureDirections: "Implementing streaming response tokens over HTTP/2 directly from Lambda response streams.",
    status: "In Progress"
  }
];

export const CODING_STATS = {
  totalSolved: "600+",
  platforms: [
    { name: "CodeChef", count: "400+ Problems", badge: "Algorithmic Solver", color: "text-amber-400" },
    { name: "HackerRank", count: "5-Star SQL & Python", badge: "Certified", color: "text-emerald-400" },
    { name: "LeetCode", count: "150+ Problems", badge: "Data Structures", color: "text-cyan-400" }
  ],
  languagesRatio: [
    { name: "Python", percentage: 42, color: "bg-blue-500" },
    { name: "TypeScript / JS", percentage: 24, color: "bg-amber-400" },
    { name: "Dart / Flutter", percentage: 16, color: "bg-cyan-400" },
    { name: "Java", percentage: 11, color: "bg-orange-500" },
    { name: "C & SQL", percentage: 7, color: "bg-emerald-500" }
  ],
  contributions: {
    year: "2025-2026",
    totalCommits: "1,240+",
    activeRepositories: "18+",
    pullRequestsMerged: "45+"
  }
};

export const AI_KNOWLEDGE_BASE = [
  {
    keywords: ["who", "about", "bio", "praneeth", "introduce", "background"],
    answer: "Bandi Praneeth is an AI & Machine Learning student at Vasireddy Venkatadri Institute of Technology (VVIT) (2023–2027) with an aggregate 7.3 SGPA. He is an AWS Certified Cloud Practitioner (CLF-C02) who has completed 3 internships: Cloud & Full Stack at Gloom Dev, AWS Cloud Computing at APSSDC, and AI Agent Development at Swecha (with IIIT Hyderabad). He has solved 600+ coding challenges and won 1st place in the ACM Student Chapter Hackathon."
  },
  {
    keywords: ["skills", "technologies", "tech stack", "languages", "proficiencies", "know"],
    answer: "Praneeth's primary skills include:\n• Languages: Python (Advanced), Java, C, SQL, Dart, JavaScript/TypeScript.\n• AI & ML: Deep Learning (CNNs, PyTorch, TensorFlow), Generative AI, Explainable AI (Grad-CAM), NLP, Scikit-learn.\n• Cloud & DevOps: AWS (EC2, S3, IAM, VPC, Lambda, CloudWatch, Route 53), Docker, Terraform, Git/GitHub, Linux (Red Hat, Kali).\n• Web & Mobile: React.js, FastAPI, Node.js, Flutter, MongoDB, MySQL, SQLite."
  },
  {
    keywords: ["projects", "built", "portfolio work", "rythu", "fundus", "trust chit"],
    answer: "Praneeth has built several impressive real-world projects:\n1. Rythu Nestham: Smart Crop Advisory mobile app in Flutter with offline SQLite support and weather API guidance.\n2. Fundus Cardio Risk AI: Deep learning CNN with Grad-CAM explainability analyzing retinal fundus images.\n3. Trust Chit: Full-stack Chit Fund Financial Management system in React, Node.js, SQLite/MongoDB deployed on AWS.\n4. Serverless ATS Score Checker: AWS Lambda + FastAPI resume analyzer evaluating candidate keyword fit.\n5. Website Monitoring System: AWS Lambda and Aurora-based website monitoring solution.\n6. Product Price Predictor: PyTorch multi-modal image + metadata pricing model."
  },
  {
    keywords: ["aws", "cloud", "certification", "clf-c02", "devops", "apssdc"],
    answer: "Praneeth is an officially certified AWS Cloud Practitioner (CLF-C02). During his internship at APSSDC, he gained hands-on expertise with EC2 instances, S3 bucket storage & hosting, IAM least privilege policies, VPC custom networking, and Lambda serverless architectures. At Gloom Dev, he deployed full-stack React and FastAPI microservices into AWS."
  },
  {
    keywords: ["swecha", "iiit", "agent", "agents", "internship", "experience"],
    answer: "Praneeth completed a 28-day AI Agent Development internship at Swecha Telangana in collaboration with IIIT Hyderabad. There, he built and tested autonomous AI agents, conceptualized conversational reasoning workflows, practiced prompt engineering and fine-tuning, and gained hands-on experience in open-source AI."
  },
  {
    keywords: ["contact", "hire", "email", "reach", "phone", "linkedin", "github", "call"],
    answer: "You can reach Bandi Praneeth directly:\n• Primary Email: bandipraneeth2005@gmail.com\n• Alternative Email: praneethb523@gmail.com\n• Phone: +91 7095570399\n• GitHub: https://github.com/PraneethBandi05\n• LinkedIn: https://linkedin.com/in/praneethbandi\n• Location: Tanuku / Guntur, Andhra Pradesh, India (Available for remote and relocation)."
  },
  {
    keywords: ["hackathon", "achievements", "codechef", "problems", "sac", "awards"],
    answer: "Praneeth's key achievements include:\n• 1st Place Winner at the ACM Student Chapter Hackathon.\n• 600+ algorithmic problems solved on CodeChef, HackerRank & LeetCode.\n• AWS Certified Cloud Practitioner (CLF-C02).\n• Salesforce Certified Agentforce Specialist.\n• Executive Member / Lead of the Student Activity Council (SAC) at VVIT.\n• Selected Member of the IUCEE R&D Department.\n• Smart India Hackathon (SIH) 2024 AI Participant."
  }
];
