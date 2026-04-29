import type {
  Feature,
  FooterColumn,
  HeroContent,
  NavItem,
  Partner,
  CatStep,
  FaqCategory,
  DomainExpertiseItem,
  SelectOption,
  SocialLink,
  Stat,
  Step,
  TeamSizeOption,
  Testimonial,
} from "@/types";

export const navLinks: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Stats", href: "#stats" },
  { label: "Clients", href: "#clients" },
  { label: "Accredian Edge", href: "#edge" },
  { label: "CAT", href: "#cat" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
  { label: "Testimonials", href: "#testimonials" },
];

export const heroContent: HeroContent = {
  title: "Next-Gen Expertise For Your Enterprise",
  subtitle: "Cultivate high-performance teams through expert learning.",
  primaryCta: { label: "Enquire Now", href: "#lead-capture" },
  secondaryCta: { label: "Explore Programs", href: "#edge" },
  badges: ["Tailored Solutions", "Industry Insights", "Expert Guidance"],
};

export const stats: Stat[] = [
  { value: "10K+", label: "Professionals Trained", icon: "Users" },
  { value: "200+", label: "Sessions Delivered", icon: "Spark" },
  { value: "5K+", label: "Active Learners", icon: "Book" },
];

export const features: Feature[] = [
  {
    title: "Tailored Solutions",
    description: "Programs customized for organizational objectives and roles.",
    icon: "TS",
  },
  {
    title: "Innovative Framework",
    description: "Proprietary methodology designed to accelerate outcomes.",
    icon: "IF",
  },
  {
    title: "Diverse Offerings",
    description: "Leadership, data, digital, and industry-specific programs.",
    icon: "DO",
  },
  {
    title: "Flexible Delivery",
    description: "Online, onsite, and hybrid delivery modes for scale.",
    icon: "FD",
  },
  {
    title: "Expert Guidance",
    description: "Hands-on support from seasoned mentors and advisors.",
    icon: "EG",
  },
  {
    title: "Advanced Technology",
    description: "Analytics dashboards and reporting for measurable impact.",
    icon: "AT",
  },
];

export const steps: Step[] = [
  {
    title: "Skill Gap Analysis",
    description: "Assess team skills and identify development needs.",
    icon: "1",
  },
  {
    title: "Customized Training Plan",
    description: "Create a targeted roadmap aligned to business goals.",
    icon: "2",
  },
  {
    title: "Flexible Program Delivery",
    description: "Deliver programs with adaptable schedules and formats.",
    icon: "3",
  },
];

export const catSteps: CatStep[] = [
  {
    title: "Concept",
    description: "Foundational knowledge for clear strategic direction.",
  },
  {
    title: "Application",
    description: "Real-world practice with guided execution.",
  },
  {
    title: "Tools",
    description: "Hands-on enablement with the right toolkits.",
  },
];

export const domainExpertise: DomainExpertiseItem[] = [
  { title: "Product & Innovation Hub", icon: "lightbulb" },
  { title: "Gen-AI Mastery", icon: "brain" },
  { title: "Leadership Elevation", icon: "leadership" },
  { title: "Tech & Data Insights", icon: "chart" },
  { title: "Operations Excellence", icon: "gear" },
  { title: "Digital Enterprise", icon: "globe" },
  { title: "Fintech Innovation Lab", icon: "fintech" },
];

export const faqCategories: FaqCategory[] = [
  {
    title: "About the Course",
    questions: [
      {
        question: "What types of corporate training programs does Accredian offer?",
        answer:
          "We offer leadership, tech, data, operations, and domain-specific programs tailored to enterprise goals.",
      },
      {
        question: "Are programs customized for different roles?",
        answer:
          "Yes. Programs are segmented by level, function, and industry to maximize relevance.",
      },
    ],
  },
  {
    title: "About the Delivery",
    questions: [
      {
        question: "What delivery modes are available?",
        answer:
          "We support online, onsite, and hybrid delivery formats depending on cohort size and location.",
      },
      {
        question: "How long does onboarding take?",
        answer:
          "Typical onboarding takes 1-2 weeks, including assessment and customized program setup.",
      },
    ],
  },
  {
    title: "Miscellaneous",
    questions: [
      {
        question: "Do you provide analytics and reporting?",
        answer:
          "Yes. You get dashboards to monitor engagement, completion, and ROI.",
      },
      {
        question: "Can we run a pilot before a full rollout?",
        answer:
          "Absolutely. We often start with a pilot cohort to validate outcomes.",
      },
    ],
  },
];

export const domainOptions: SelectOption[] = [
  { label: "Product & Innovation", value: "product-innovation" },
  { label: "Gen-AI Mastery", value: "gen-ai" },
  { label: "Leadership Elevation", value: "leadership" },
  { label: "Tech & Data Insights", value: "tech-data" },
  { label: "Operations Excellence", value: "operations" },
  { label: "Digital Enterprise", value: "digital" },
  { label: "Fintech Innovation", value: "fintech" },
];

export const deliveryModeOptions: SelectOption[] = [
  { label: "Online", value: "online" },
  { label: "Onsite", value: "onsite" },
  { label: "Hybrid", value: "hybrid" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    name: "ADP",
    role: "Client",
    company: "ADP",
  },
  {
    quote:
      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    name: "Bayer",
    role: "Client",
    company: "Bayer",
  },
  {
    quote:
      "Choosing Accredian for the learning and development of our employees was a beneficial decision. The value derived from the course is immense and their support team is always there to help our employees.",
    name: "Reliance",
    role: "Client",
    company: "Reliance",
  },
];

export const partners: Partner[] = [
  { name: "Reliance" },
  { name: "HCL" },
  { name: "IBM" },
  { name: "ADP" },
  { name: "Bayer" },
  { name: "CRIF" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Why Accredian", href: "#features" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "Leadership", href: "#programs" },
      { label: "Tech & Data", href: "#programs" },
      { label: "Operations", href: "#programs" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "#resources" },
      { label: "Webinars", href: "#resources" },
      { label: "FAQs", href: "#resources" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "enterprise@accredian.com", href: "mailto:enterprise@accredian.com" },
      { label: "+1 (555) 010-234", href: "tel:+1555010234" },
      { label: "Gurugram, IN", href: "#contact" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/accredianedu/" },
  { label: "Twitter", href: "https://twitter.com/accredianedu" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA" },
];

export const teamSizeOptions: TeamSizeOption[] = [
  { label: "1-25", value: "1-25" },
  { label: "26-100", value: "26-100" },
  { label: "101-500", value: "101-500" },
  { label: "501-2000", value: "501-2000" },
  { label: "2000+", value: "2000+" },
];
