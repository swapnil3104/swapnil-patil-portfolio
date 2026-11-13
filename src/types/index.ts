export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  pipeline: string[];
  engineeringHighlights: string[];
  metrics: { label: string; value: string; detail?: string }[];
  limitations: string[];
  architectureDiagram?: string;
}

export interface ProjectGitHub {
  id: string;
  index: string;
  title: string;
  repo: string;
  repoUrl: string;
  liveUrl?: string;
  category: 'Computer Vision' | 'Generative AI / RAG' | 'Edge AI' | 'WebGL' | 'Automation / Tools';
  featured: boolean;
  description: string;
  problemSolution: string;
  tags: string[];
  branch: string;
  visibility: 'Public';
  highlights?: string[];
  image?: string;
  caseStudy?: ProjectCaseStudy;
}

export interface ClientEngagementDetail {
  clientName: string;
  clientType: string;
  duration?: string;
  role: string;
  architectureHighlights: string[];
  deliverables: string[];
  metrics: { label: string; value: string; detail?: string }[];
  keyFeatures: string[];
}

export interface ProjectConsultant {
  id: string;
  name: string;
  liveUrl: string;
  industry: string;
  category: 'Agency & Enterprise' | 'Marketing & E-Commerce' | 'Startup & Web Apps';
  scope: string;
  summary: string;
  businessImpact: string;
  techStack: string[];
  verified: boolean;
  featured?: boolean;
  domainHost?: string;
  deliverables?: string[];
  metrics?: { label: string; value: string; detail?: string }[];
  image?: string;
  engagement?: ClientEngagementDetail;
}

export interface DesignSystemSpec {
  typography: string;
  gridSystem: string;
  colorSystem: string;
  componentsCount: string;
  autoLayoutCompliance: string;
}

export interface DesignScreenDetail {
  title: string;
  purpose: string;
  userBenefit: string;
  tags?: string[];
}

export interface DesignCaseStudy {
  userProblem: string;
  solutionArchitecture: string;
  designSystemSpec: DesignSystemSpec;
  screensDetailed: DesignScreenDetail[];
  accessibilityHighlights: string[];
  prototypeInteractions: string[];
}

export interface ProjectUIUX {
  id: string;
  title: string;
  figmaUrl: string;
  platform: string;
  domain: string;
  description: string;
  keyScreens: string[];
  features: string[];
  category?: 'Mobile App' | 'Web Platform & Dashboard';
  badge?: string;
  nodeId?: string;
  screenCount?: number | string;
  image?: string;
  designSystemTokens?: { label: string; value: string }[];
  caseStudy?: DesignCaseStudy;
}

export interface ServiceWorkflowStage {
  stage: string;
  title: string;
  description: string;
}

export interface ServiceOffering {
  id: string;
  title: string;
  timeline: string;
  scope: string;
  description: string;
  deliverables: string[];
  tech: string[];
  badge?: string;
  engagementModel?: string;
  idealFor?: string;
  workflowStages?: ServiceWorkflowStage[];
}

export interface SkillItem {
  name: string;
  level?: string;
  tag?: string;
}

export interface CapabilityCategory {
  category: string;
  skills: string[];
  description?: string;
  icon?: string;
}

export interface MilestoneItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  category: 'academic' | 'consulting' | 'award' | 'certification';
  description: string;
  badge?: string;
  highlights?: string[];
  link?: { label: string; url: string };
  metrics?: { label: string; value: string };
}

export interface Principle {
  number: string;
  title: string;
  description: string;
  tagline?: string;
}

export interface LabCurriculumPhase {
  phase: string;
  title: string;
  topics: string[];
}

export interface LabProject {
  id: string;
  title: string;
  repo: string;
  repoUrl: string;
  category: string;
  description: string;
  modules?: string[];
  cloneCommand: string;
  language?: string;
  badge?: string;
  topics?: string[];
  stats?: {
    commits?: string;
    status?: string;
    language?: string;
  };
  curriculumPhases?: LabCurriculumPhase[];
  prerequisites?: string[];
  featured?: boolean;
}

export interface NavItem {
  index: string;
  label: string;
  href: string;
}

