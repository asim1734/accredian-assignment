export type NavItem = {
  label: string;
  href: string;
};

export type HeroContent = {
  title: string;
  subtitle: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  badges: string[];
};

export type Stat = {
  value: string;
  label: string;
  icon: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: string;
};

export type Step = {
  title: string;
  description: string;
  icon: string;
};

export type CatStep = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  title: string;
  questions: FaqItem[];
};

export type SelectOption = {
  label: string;
  value: string;
};

export type DomainExpertiseItem = {
  title: string;
  icon: "lightbulb" | "brain" | "leadership" | "chart" | "gear" | "globe" | "fintech";
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type Partner = {
  name: string;
};

export type FooterColumn = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

export type SocialLink = {
  label: string;
  href: string;
};

export type TeamSizeOption = {
  label: string;
  value: string;
};
