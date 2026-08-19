"use client";

import React from "react";
import { IconType } from "react-icons";
import { 
  SiPhonepe, 
  SiRazorpay, 
  SiStripe, 
  SiVercel, 
  SiSupabase, 
  SiWhatsapp, 
  SiGooglecloud, 
  SiDocker, 
  SiGithub, 
  SiFigma, 
  SiFirebase 
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { BarChart3, Globe, Users, Star } from "lucide-react";

/* Trusted-by marquee — verified technology & payment integration partners with official logos */

const stats = [
  { 
    value: "50+", 
    label: "Projects Delivered", 
    sub: "Startups & businesses", 
    icon: BarChart3, 
    bg: "rgba(6, 182, 212, 0.08)", 
    color: "#06B6D4" 
  },
  { 
    value: "20+", 
    label: "Global Clients", 
    sub: "US, UK, India, UAE", 
    icon: Globe, 
    bg: "rgba(14, 165, 233, 0.08)", 
    color: "#0EA5E9" 
  },
  { 
    value: "5+", 
    label: "Years Experience", 
    sub: "Full-stack engineering", 
    icon: Users, 
    bg: "rgba(99, 102, 241, 0.08)", 
    color: "#6366F1" 
  },
  { 
    value: "4.9★", 
    label: "Client Rating", 
    sub: "Top-rated consultant", 
    icon: Star, 
    bg: "rgba(20, 184, 166, 0.08)", 
    color: "#14B8A6" 
  },
];

interface Company {
  name: string;
  category: string;
  officialColor: string;
  logo: IconType;
}

const companies: Company[] = [
  {
    name: "PhonePe",
    category: "Payment Partner",
    officialColor: "#5f259f",
    logo: SiPhonepe,
  },
  {
    name: "Razorpay",
    category: "Payment Gateway",
    officialColor: "#0c8af0",
    logo: SiRazorpay,
  },
  {
    name: "Stripe",
    category: "Global Payments",
    officialColor: "#635bff",
    logo: SiStripe,
  },
  {
    name: "AWS",
    category: "Cloud Infrastructure",
    officialColor: "#ff9900",
    logo: FaAws,
  },
  {
    name: "Vercel",
    category: "Cloud & Hosting",
    officialColor: "#000000",
    logo: SiVercel,
  },
  {
    name: "Supabase",
    category: "Database & Backend",
    officialColor: "#3ecf8e",
    logo: SiSupabase,
  },
  {
    name: "WhatsApp API",
    category: "Messaging Gateway",
    officialColor: "#25d366",
    logo: SiWhatsapp,
  },
  {
    name: "Google Cloud",
    category: "Cloud Platform",
    officialColor: "#4285f4",
    logo: SiGooglecloud,
  },
  {
    name: "Docker",
    category: "Containerization",
    officialColor: "#2496ed",
    logo: SiDocker,
  },
  {
    name: "GitHub",
    category: "DevOps & Workflows",
    officialColor: "#24292e",
    logo: SiGithub,
  },
  {
    name: "Figma",
    category: "UI/UX Workflow",
    officialColor: "#f24e1e",
    logo: SiFigma,
  },
  {
    name: "Firebase",
    category: "Database & Auth",
    officialColor: "#ffca28",
    logo: SiFirebase,
  },
];

// Duplicate for seamless infinite scroll
const track = [...companies, ...companies];

export default function TrustedBy() {
  return (
    <section
      className="relative z-30 pt-12 md:pt-16 pb-10"
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #f1f5f9",
      }}
    >
      {/* Stats Card Bar */}
      <div className="max-w-[1480px] mx-auto px-6 md:px-12 -mt-24 md:-mt-28 mb-16 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white rounded-3xl shadow-[0_24px_50px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {stats.map((stat, idx) => {
            const SIcon = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-5 p-6 md:p-7 transition-all duration-300 hover:bg-slate-50/50"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: stat.bg }}
                >
                  <SIcon className="w-5 h-5" style={{ color: stat.color }} />
                </div>
                <div>
                  <div
                    className="font-bold text-slate-900 leading-none mb-1.5"
                    style={{
                      fontFamily: "Sora, sans-serif",
                      fontSize: "24px",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[13px] font-bold text-slate-700 leading-tight">
                    {stat.label}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-400 mt-1 leading-tight">
                    {stat.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Label */}
      <p className="text-center text-[10px] font-bold uppercase tracking-[0.20em] text-slate-400 mb-7 select-none px-4">
        SUPPORTING SEAMLESS INTEGRATION WITH LEADING PLATFORMS
      </p>

      {/* Marquee track */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div
          className="flex items-center gap-4 w-max"
          style={{
            animation: "ng-marquee 32s linear infinite",
            willChange: "transform",
          }}
        >
          {track.map((company, i) => {
            const LogoIcon = company.logo;
            return (
              <div
                key={`${company.name}-${i}`}
                className="flex items-center gap-3 px-5 py-2.5 rounded-full select-none cursor-default whitespace-nowrap transition-all duration-200 group"
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--accent-global-dim)";
                  e.currentTarget.style.borderColor = "rgba(124,58,237,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#f8fafc";
                  e.currentTarget.style.borderColor = "#e2e8f0";
                }}
              >
                {/* Logo icon with official brand color */}
                <LogoIcon 
                  className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 shrink-0" 
                  style={{ color: company.officialColor }}
                />
                
                <span
                  className="text-sm font-bold tracking-tight text-slate-600 group-hover:text-slate-900 transition-colors"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {company.name}
                </span>
                <span
                  className="text-[9px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-500 transition-colors hidden sm:block"
                >
                  {company.category}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
