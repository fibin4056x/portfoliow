export type SkillCategory = 'All' | 'Frontend' | 'Backend' | 'Database' | 'Tools';

export interface Skill {
  name: string;
  category: Exclude<SkillCategory, 'All'>;
  iconName: string;
  proficiency?: number; // 0-100
  description?: string;
  isPopular?: boolean;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  image: string;
  category: 'Full-Stack' | 'Frontend' | 'E-commerce';
  tags: string[];
  features: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  shortBio: string;
  location: string;
  email: string;
  status: string;
  github: string;
  linkedin: string;
  twitter?: string;
  stats: {
    experienceYears: string;
    projectsCompleted: string;
    technologiesMastered: string;
    codeQualityRating: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}
