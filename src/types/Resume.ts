export interface PersonalInfo {
  fullName: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  twitter: string;
  location: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  schoolUrl?: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
}

export interface Project {
  id: string;
  name: string;
  technologies: string;
  liveUrl?: string;
  githubUrl?: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface Certification {
  id: string;
  name: string;
  date: string;
  credentialUrl?: string;
}

export interface ExtraCurricular {
  id: string;
  activity: string;
  organization: string;
  organizationUrl?: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  issuerUrl?: string;
  date: string;
  description: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  url?: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  professionalSummary: string;
  education: Education[];
  experiences: Experience[];
  projects: Project[];
  certifications: Certification[];
  extraCurricular: ExtraCurricular[];
  awards: Award[];
  achievements: Achievement[];
  technicalSkills: {
    languages: string[];
    frameworks: string[];
    tools: string[];
    libraries: string[];
  };
  languageProficiency: Array<{
    language: string;
    proficiency: number;
  }>;
  sectionOrder: string[];
}
