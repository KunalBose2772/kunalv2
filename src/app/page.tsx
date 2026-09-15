import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroAbout from "@/components/sections/HeroAbout";

// Dynamic imports to code-split and lazy-load all sections below the fold.
// This significantly reduces the initial JS bundle size and improves LCP.
const TrustedBy = dynamic(() => import("@/components/sections/TrustedBy"));
const InlineLeadCapture = dynamic(() => import("@/components/sections/InlineLeadCapture"));
const Services = dynamic(() => import("@/components/sections/Services"));
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"));
const Portfolio = dynamic(() => import("@/components/sections/Portfolio"));
const TechStack = dynamic(() => import("@/components/sections/TechStack"));
const Process = dynamic(() => import("@/components/sections/Process"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const Blog = dynamic(() => import("@/components/sections/Blog"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const Contact = dynamic(() => import("@/components/sections/Contact"));
const ServicesTicker = dynamic(() => import("@/components/sections/ServicesTicker"));

export const metadata: Metadata = {
  title: "Built by Kunal — Full-Stack Developer & Digital Systems Architect",
  description:
    "Engineering high-performance digital systems, custom web apps, and scalable SaaS solutions. 150+ projects delivered, 50+ global clients. Built by Kunal Bose.",
  alternates: {
    canonical: "https://builtbykunal.online",
  },
  openGraph: {
    title: "Built by Kunal — Full-Stack Developer & Digital Systems Architect",
    description:
      "Engineering high-performance digital systems, custom web apps, and scalable SaaS solutions.",
    url: "https://builtbykunal.online",
    images: [{ url: "/builtbykunal.png", width: 1200, height: 630, alt: "Built by Kunal" }],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroAbout />
      <TrustedBy />
      <InlineLeadCapture />
      <Services />
      <ServicesTicker />
      <WhyChooseUs />
      <Portfolio />
      <Process />
      <TechStack />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
    </>
  );
}
