export interface ContactChannel {
  id: string;
  name: string;
  value: string;
  displayValue: string;
  href: string;
  label: string;
  badge?: string;
  description: string;
  actionText: string;
  copyable?: boolean;
  external?: boolean;
}

export interface ProjectInquiryType {
  id: string;
  label: string;
  description: string;
}

export const CONTACT_INFO = {
  name: 'Swapnil Patil',
  role: 'AI/ML Engineer, Python Developer & Product Designer',
  email: 'swapnilp3104@gmail.com',
  phone: '+91 93225 24034',
  phoneRaw: '+919322524034',
  whatsappUrl: 'https://wa.me/919322524034?text=Hi%20Swapnil,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect.',
  location: 'Pune, Maharashtra, India',
  locationDetails: 'Available Globally · Remote or Hybrid (Pune / Mumbai / Bengaluru)',
  timezone: 'UTC+05:30',
  timezoneName: 'IST (Indian Standard Time)',
  availabilityStatus: 'Open for opportunities · Available for hire & select consulting',
  responseTime: '< 24 hours',
  githubUrl: 'https://github.com/swapnil3104',
  githubUsername: 'swapnil3104',
  linkedinUrl: 'https://www.linkedin.com/in/swapnil-sanjay-patil',
  linkedinDisplay: 'linkedin.com/in/swapnil3104',
  resumeUrl: '/Swapnil_Patil_Resume1.pdf',
  resumeFilename: 'Swapnil_Patil_Resume.pdf',
};

export const CONTACT_METRICS = [
  { label: 'Client Systems', value: '11+', detail: 'Production deployments' },
  { label: 'Research Grant', value: '₹1.5L+', detail: 'Autonomous EV patent grant' },
  { label: 'Response Time', value: '< 24h', detail: 'Direct inbox turnaround' },
  { label: 'Delivery Rate', value: '100%', detail: 'On-time milestone delivery' },
];

export const PROJECT_TYPES: ProjectInquiryType[] = [
  {
    id: 'fulltime',
    label: 'Full-Time Engineering Role',
    description: 'AI/ML Engineer, Applied Computer Vision, or Full-Stack Python/React engineer.',
  },
  {
    id: 'consulting',
    label: 'Technical Consulting',
    description: 'End-to-end commercial software delivery, architecture, or workflow automation.',
  },
  {
    id: 'ai-ml',
    label: 'Applied AI / ML Initiative',
    description: 'Custom model development, inference optimization, RAG pipelines, or CV systems.',
  },
  {
    id: 'ui-ux',
    label: 'Design System & UI/UX',
    description: 'Figma component libraries, responsive web apps, and design engineering.',
  },
  {
    id: 'collab',
    label: 'Open-Source & Research',
    description: 'Technical writing, research collaboration, or open-source engineering.',
  },
];

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: 'email',
    name: 'Direct Email',
    value: 'swapnilp3104@gmail.com',
    displayValue: 'swapnilp3104@gmail.com',
    href: 'mailto:swapnilp3104@gmail.com',
    label: 'Primary Direct Channel',
    badge: 'Recommended',
    description: 'Fastest response for recruitment, contract inquiries, and architectural reviews.',
    actionText: 'Compose Email',
    copyable: true,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    value: 'https://www.linkedin.com/in/swapnil-sanjay-patil',
    displayValue: 'in/swapnil3104',
    href: 'https://www.linkedin.com/in/swapnil-sanjay-patil',
    label: 'Professional Network',
    badge: 'Verified',
    description: 'Connect for career discussions, recommendations, and industry networking.',
    actionText: 'View Profile',
    external: true,
  },
  {
    id: 'github',
    name: 'GitHub',
    value: 'https://github.com/swapnil3104',
    displayValue: 'github.com/swapnil3104',
    href: 'https://github.com/swapnil3104',
    label: 'Open-Source & Code',
    badge: '11+ Repos',
    description: 'Explore live repositories, computer vision algorithms, and learning paths.',
    actionText: 'Inspect Repos',
    external: true,
  },
  {
    id: 'phone',
    name: 'Phone & WhatsApp',
    value: '+91 93225 24034',
    displayValue: '+91 93225 24034',
    href: 'tel:+919322524034',
    label: 'Direct Messaging & Calls',
    badge: 'Direct',
    description: 'Available for scheduling screening calls or urgent technical discussions.',
    actionText: 'Call / WhatsApp',
    copyable: true,
  },
];

