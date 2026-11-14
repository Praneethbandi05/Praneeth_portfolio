import { Project, Experience, SkillCategory, Certification } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "BANDI PRANEETH",
  firstName: "BANDI",
  lastName: "PRANEETH",
  title: "Software Engineer & Problem Solver",
  tagline: "Engineering Scalable Systems. Creating Possibilities.",
  summary: "Motivated to apply academic knowledge and practical experience to solve real-world challenges. Eager to contribute to organizational success while continuously learning, growing, and adapting to new opportunities.",
  education: {
    degree: "B.Tech, Computer Science & Engineering (AI & ML)",
    institution: "Vasireddy Venkatadri Institute of Technology",
    period: "2023 – Present",
    location: "Guntur, Andhra Pradesh, India"
  },
  intermediate: {
    institution: "Sasi Jr Kalasala",
    period: "2021 – 2023",
    location: "Andhra Pradesh, India"
  },
  secondary: {
    institution: "Z.P.H Boys High School",
    period: "2020 – 2021",
    location: "Andhra Pradesh, India"
  },
  contacts: {
    email: "praneethb523@gmail.com",
    phone: "+91 7095570399",
    location: "Andhra Pradesh, India",
    github: "https://github.com/PraneethBandi05",
    githubUsername: "PraneethBandi05",
    linkedin: "https://linkedin.com/in/praneethbandi",
    resumePdfUrl: "/Bandi_Praneeth_Resume.pdf"
  },
  stats: [
    { label: "Coding Problems Solved", value: "600+", desc: "Solved 600+ CodeChef problems" },
    { label: "AWS Certified", value: "CLF-C02", desc: "AWS Certified Cloud Practitioner" },
    { label: "Hackathon Victory", value: "1st Place", desc: "ACM Student Chapter Hackathon" },
    { label: "Industry Internships", value: "2 Roles", desc: "Gloom Dev & APSSDC" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming Languages",
    description: "Core languages for application logic and algorithmic problem solving",
    iconName: "Code2",
    skills: [
      { name: "Python", level: 92, experience: "Proficient", tags: ["Python 3", "OOP", "APIs", "Data Structures"], highlight: "NPTEL Certified" },
      { name: "Java", level: 86, experience: "Proficient", tags: ["Core Java", "OOP", "Data Structures"], highlight: "Academic Core" },
      { name: "C", level: 84, experience: "Foundational", tags: ["Pointers", "Algorithms", "Memory Basics"], highlight: "Foundational" }
    ]
  },
  {
    category: "Cloud & DevOps",
    description: "Cloud infrastructure, Linux environments, containers, and provisioning",
    iconName: "Cloud",
    skills: [
      { name: "AWS Cloud", level: 90, experience: "Certified", tags: ["EC2", "S3", "IAM", "VPC", "Lambda", "CloudWatch"], highlight: "AWS Certified (CLF-C02)" },
      { name: "Linux", level: 86, experience: "Hands-on", tags: ["Red Hat", "Shell", "Administration"], highlight: "APSSDC" },
      { name: "Docker", level: 82, experience: "Hands-on", tags: ["Containers", "Images", "Deployment"], highlight: "DevOps" },
      { name: "Terraform", level: 80, experience: "Hands-on", tags: ["IaC", "Cloud Provisioning"], highlight: "Infrastructure as Code" }
    ]
  },
  {
    category: "Web Technologies",
    description: "Modern, responsive frontend development and interactive user interfaces",
    iconName: "Globe",
    skills: [
      { name: "HTML", level: 92, experience: "Proficient", tags: ["HTML5", "Semantic Markup", "Accessibility"], highlight: "freeCodeCamp Certified" },
      { name: "CSS", level: 90, experience: "Proficient", tags: ["CSS3", "Responsive Layouts", "Flexbox/Grid"], highlight: "freeCodeCamp Certified" },
      { name: "React", level: 88, experience: "Hands-on", tags: ["Components", "Hooks", "Responsive UI"], highlight: "Gloom Dev Intern" }
    ]
  },
  {
    category: "Databases",
    description: "Relational and graph database architectures",
    iconName: "Database",
    skills: [
      { name: "MySQL", level: 88, experience: "Proficient", tags: ["Relational Schema", "Queries", "Joins"], highlight: "Wipro TalentNext" },
      { name: "Neo4j", level: 78, experience: "Hands-on", tags: ["Graph Database", "Cypher Queries"], highlight: "Graph Data" }
    ]
  },
  {
    category: "Tools & Platforms",
    description: "Version control, workflow orchestration, and development platforms",
    iconName: "Brain",
    skills: [
      { name: "Git & GitHub", level: 92, experience: "Proficient", tags: ["Version Control", "Collaboration", "Branches"], highlight: "Daily Workflow" },
      { name: "n8n", level: 82, experience: "Hands-on", tags: ["Workflow Automation", "Integrations", "Webhooks"], highlight: "Automation" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "rythu-nestham",
    title: "Rythu Nestham — Smart Crop Advisory Application",
    subtitle: "Mobile application providing crop-related guidance based on user inputs, focusing on usability and responsiveness",
    category: "Mobile & Systems",
    featured: true,
    problem: "Farmers require simplified, localized access to crop guidance and agricultural information to make informed decisions.",
    solution: "Designed a user-friendly interface using Flutter to make agricultural information and crop guidance easily accessible to farmers. Implemented application logic for processing user-provided agricultural information and generating relevant crop guidance.",
    techStack: ["Flutter", "Dart", "REST APIs", "Mobile UI"],
    keyFeatures: [
      "Designed a user-friendly interface to make agricultural information and crop guidance easily accessible to farmers",
      "Implemented application logic for processing user-provided agricultural information and generating relevant crop guidance",
      "Focused on developing a practical smart farming solution that can support farmers in making informed crop-related decisions",
      "Responsive cross-platform mobile user interface"
    ],
    metrics: "Practical smart farming solution • Flutter & Dart",
    githubUrl: "https://github.com/PraneethBandi05",
    architectureHighlights: [
      "Modular Flutter widget tree for responsive mobile experience",
      "Dynamic agricultural logic processing soil and crop parameters",
      "User-friendly navigation tailored for rural accessibility"
    ],
    badge: "Resume Project • Mobile App"
  },
  {
    id: "trust-chit",
    title: "Trust Chit — Chit Fund Management System",
    subtitle: "Digital chit fund management system to manage member details, monthly contributions, and chit-fund records",
    category: "Cloud & Full Stack",
    featured: true,
    problem: "Managing chit-fund records, auctions, and member contributions manually leads to errors and lack of transparent tracking.",
    solution: "Developed a digital chit fund management system to manage member details, monthly contributions, and chit-fund records efficiently. Implemented functionality for managing members, payment records, auctions, and transactions. Designed database-driven modules and deployed on AWS cloud.",
    techStack: ["React", "SQLite", "Node.js", "AWS Cloud"],
    keyFeatures: [
      "Developed a digital chit fund management system to manage member details, monthly contributions, and chit-fund records efficiently",
      "Implemented functionality for managing members, payment records, auctions, and transactions",
      "Designed database-driven modules to maintain and retrieve chit-fund data accurately",
      "Deployed the application on AWS cloud infrastructure for hosting and accessibility"
    ],
    metrics: "Deployed on AWS Cloud • Full Stack System",
    githubUrl: "https://github.com/PraneethBandi05",
    architectureHighlights: [
      "React interactive frontend with real-time record viewing",
      "Database-driven module using SQLite for reliable ledger management",
      "Hosted and accessible via AWS cloud infrastructure"
    ],
    badge: "Resume Project • Full Stack & AWS"
  },
  {
    id: "fundus-cardio-risk",
    title: "Cardiovascular Risk Classification via Retinal Fundus AI",
    subtitle: "Deep learning diagnostic system using retinal fundus images, CNN architectures, and Explainable AI (Grad-CAM)",
    category: "AI & Deep Learning",
    featured: false,
    problem: "Non-invasive, early detection of cardiovascular risk indicators through retinal microvasculature inspection requires specialized clinical expertise.",
    solution: "Trained deep Convolutional Neural Networks (ResNet/DenseNet) on retinal fundus imagery to classify cardiovascular risk indicators. Implemented Gradient-weighted Class Activation Mapping (Grad-CAM) to generate visual saliency maps highlighting critical arteriolar patterns.",
    techStack: ["Python", "PyTorch", "OpenCV", "Grad-CAM", "CNN (ResNet)", "Scikit-learn"],
    keyFeatures: [
      "End-to-end computer vision pipeline for retinal fundus image preprocessing and contrast enhancement",
      "Explainable AI (Grad-CAM) visual heatmaps for model interpretability",
      "Deep Convolutional Neural Network architecture evaluation (Precision, Recall, ROC-AUC)",
      "Non-invasive diagnostic experimentation prototype"
    ],
    metrics: "Deep Learning • Grad-CAM Explainable AI",
    githubUrl: "https://github.com/PraneethBandi05",
    architectureHighlights: [
      "Retinal fundus preprocessing and vessel enhancement",
      "CNN classification backbone fine-tuned for vascular indicators",
      "Grad-CAM hook extracting visual explanation heatmaps"
    ],
    badge: "Cardiovascular AI Project"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "gloom-dev",
    role: "Cloud & Full Stack Intern",
    company: "Gloom Dev Pvt Ltd",
    location: "Remote",
    duration: "Ongoing",
    period: "08/2026 – Present",
    type: "Internship",
    description: [
      "Developed web applications focusing on responsive design and user-friendly interfaces.",
      "Worked with AWS cloud services, backend development, and application deployment to understand real-world development processes."
    ],
    technologies: ["React", "AWS Cloud", "Backend Development", "Responsive Design", "Web Applications"],
    verified: true
  },
  {
    id: "apssdc-devops",
    role: "DevOps Intern",
    company: "Andhra Pradesh State Skill Development Corporation (APSSDC)",
    location: "Remote",
    duration: "3 Months",
    period: "05/2026 – 07/2026",
    type: "Internship",
    description: [
      "Gained hands-on experience in AWS cloud services, Linux, and DevOps practices for managing cloud infrastructure.",
      "Worked with deployment, version control, and automation tools to understand application development and delivery processes."
    ],
    technologies: ["AWS Cloud", "Linux", "DevOps", "Version Control", "Automation", "Deployment"],
    verified: true
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "aws-clf-c02",
    title: "AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "Verified",
    category: "Cloud",
    skillsLearned: ["AWS Cloud Concepts", "Security & Compliance", "Cloud Infrastructure", "Core Services"],
    badgeColor: "from-amber-500/20 to-orange-500/10"
  },
  {
    id: "hci-nptel",
    title: "Human Computer Interaction",
    issuer: "NPTEL",
    issueDate: "Verified",
    category: "Web & Mobile",
    skillsLearned: ["User Interface Principles", "User Experience Design", "Interaction Modeling"],
    badgeColor: "from-purple-500/20 to-pink-500/10"
  },
  {
    id: "fcc-web-design",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    issueDate: "Verified",
    category: "Web & Mobile",
    skillsLearned: ["HTML5", "CSS3", "Responsive Layouts", "Web Standards"],
    badgeColor: "from-emerald-500/20 to-teal-500/10"
  },
  {
    id: "salesforce-agentforce",
    title: "Salesforce Certified Agentforce Specialist",
    issuer: "Salesforce",
    issueDate: "Verified",
    category: "Cloud",
    skillsLearned: ["Agentforce Architecture", "Workflow Automations", "Cloud Systems"],
    badgeColor: "from-blue-500/20 to-cyan-500/10"
  },
  {
    id: "python-nptel",
    title: "The Joy of Computing using Python",
    issuer: "NPTEL",
    issueDate: "Verified",
    category: "AI & Python",
    skillsLearned: ["Python Programming", "Computational Thinking", "Data Structures"],
    badgeColor: "from-yellow-500/20 to-emerald-500/10"
  }
];

export const ACHIEVEMENTS = [
  {
    title: "600+ Coding Problems Solved",
    description: "Solved 600+ CodeChef problems, improving problem-solving and algorithmic skills.",
    badge: "Problem Solving",
    highlight: "CodeChef"
  },
  {
    title: "ACM Student Chapter Hackathon",
    description: "Secured first place by developing and presenting an innovative technical solution in a competitive hackathon.",
    badge: "1st Place Winner",
    highlight: "Hackathon Champion"
  },
  {
    title: "Student Leadership",
    description: "Led the Student Activity Council, coordinating student activities and contributing to effective team and event management.",
    badge: "Leadership",
    highlight: "Student Activity Council"
  },
  {
    title: "IUCEE Member",
    description: "Selected as a Member of the IUCEE R&D Department.",
    badge: "R&D Member",
    highlight: "IUCEE"
  },
  {
    title: "Wipro TalentNext DSE Training",
    description: "Completed Wipro TalentNext DSE Program training with a focus on SQL and database management.",
    badge: "Certified Training",
    highlight: "Wipro TalentNext"
  }
];
