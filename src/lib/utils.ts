import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export const easing = {
  easeInOut: [0.4, 0, 0.2, 1],
  easeOut: [0, 0, 0.2, 1],
  easeIn: [0.4, 0, 1, 1],
  spring: [0.34, 1.56, 0.64, 1],
  smooth: [0.25, 0.1, 0.25, 1],
} as const;

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easing.easeOut,
    },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easing.easeOut,
    },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easing.easeOut,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easing.easeOut,
    },
  },
};

export const COMPANY = {
  name: "Built by Kunal",
  shortName: "Built by Kunal",
  founder: "Kunal Bose",
  tagline: "Architecting High-Performance Digital Systems & Web Experiences",
  description: "Full-stack engineering, custom software, SaaS platforms, and digital systems built by Kunal Bose.",
  founded: 2021,
  launchDate: "June 16, 2021",
  email: "kunal@builtbykunal.online",
  supportEmail: "kunal@builtbykunal.online",
  phone: "+91 76673 41075",
  whatsapp: "+917667341075",
  location: "Ranchi, Jharkhand, India",
  city: "Ranchi",
  state: "Jharkhand",
  country: "India",
  pincode: "834005",
  fullAddress: "Ranchi, Jharkhand — 834005, India",
  website: "https://builtbykunal.online",
  social: {
    twitter: "https://x.com/KunalBose2772",
    linkedin: "https://linkedin.com/in/kunal-bose-a45926269",
    github: "https://github.com/KunalBose2772",
    instagram: "https://instagram.com/builtbykunal",
    youtube: "https://youtube.com/@builtbykunal",
    facebook: "https://facebook.com/people/Kunal-Bose",
  },
  stats: {
    projectsDelivered: "150+",
    globalClients: "50+",
    uptime: "99.9%",
    teamSize: "15+",
    countriesServed: "12+",
    clientRetention: "100%",
  },
  services: [
    "Web Development",
    "Mobile App Development",
    "SaaS Platforms",
    "AI & ML Solutions",
    "Cloud Services",
    "DevOps & CI/CD",
    "ERP & CRM Systems",
    "UI/UX Design",
    "Digital Transformation",
    "Maintenance & Support",
  ],
} as const;

