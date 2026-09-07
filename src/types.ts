export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  highlightFeatures: string[];
  technologies: string[];
  playStoreUrl?: string;
  websiteUrl?: string;
  githubUrl?: string;
  imagePlaceholder: string;
  themeColor: 'blue' | 'purple' | 'emerald' | 'amber';
  badge?: string;
  isExperimental?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
    isPrimary?: boolean;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  highlights?: string[];
}

export interface JourneyMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  iconName: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: string;
}

export interface FocusTopic {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}
