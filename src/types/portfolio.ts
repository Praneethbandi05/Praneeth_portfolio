export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & Deep Learning' | 'Cloud & Full Stack' | 'Mobile & Systems';
  featured?: boolean;
  problem: string;
  solution: string;
  techStack: string[];
  keyFeatures: string[];
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
  architectureHighlights: string[];
  badge?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  period: string;
  type: 'Internship' | 'Leadership' | 'Academic';
  description: string[];
  technologies: string[];
  verified?: boolean;
  certificateUrl?: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  experience: string;
  tags: string[];
  highlight?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  category: 'Cloud' | 'AI & Python' | 'Web & Mobile' | 'Data & DB';
  credentialId?: string;
  credentialUrl?: string;
  skillsLearned: string[];
  badgeColor: string;
}

export interface ResearchExperiment {
  id: string;
  code: string;
  title: string;
  abstract: string;
  focusArea: string;
  architecture: string;
  dataset: string;
  metrics: { label: string; value: string }[];
  keyFindings: string[];
  futureDirections: string;
  status: 'Published' | 'Completed' | 'In Progress';
}

export interface CodingStat {
  label: string;
  value: string;
  change?: string;
  description: string;
}
