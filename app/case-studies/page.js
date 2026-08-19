"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, Sparkles, Code2, Globe2, ArrowRight, 
  Terminal, ShieldCheck, Database, Calendar
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function CaseStudiesPage() {
    const [filter, setFilter] = useState("all"); // all, web, scrapers, saas

    const cases = [
        {
            title: "LeadMiner Platform: Bypass Banning & Scale to 1M leads",
            desc: "Designed and engineered a distributed headless browser crawler using residential proxy pools and anti-captcha mechanisms. Extracted, scrubbed, and served over 1,000,000 B2B listings with direct corporate email verification.",
            category: "scrapers",
            stats: "1M+ Leads Extracted",
            tech: ["Python", "Playwright", "FastAPI", "Redis", "Celery"],
            date: "May 2026",
            icon: Terminal
        },
        {
            title: "NextGen Multi-Company CRM Admin Portal",
            desc: "Migrated a legacy local-mock data system into a multi-tenant enterprise dashboard powered by Supabase. Built strict role-based access control, active telecalling logs, live support ticketing comment threads, and automatic PDF invoices.",
            category: "saas",
            stats: "4 Business Entities Unified",
            tech: ["React.js", "Next.js", "Supabase", "Tailwind CSS", "jose"],
            date: "Jul 2026",
            icon: ShieldCheck
        },
        {
            title: "Agency Website Front-End Modernization",
            desc: "Completed full-stack design modernizations, converting generic designs into premium clean-technical layouts with alternating rhythm. Implemented interactive 3D physics widgets, sine wave math canvas, and smooth Lenis scroll frameworks.",
            category: "web",
            stats: "100/100 Core Web Vitals",
            tech: ["Next.js", "Framer Motion", "Lenis", "HTML5 Canvas"],
            date: "Aug 2026",
            icon: Code2
        }
    ];

    const filteredCases = filter === "all" ? cases : cases.filter(c => c.category === filter);

    return (
        <main className="min-h-screen bg-[#03050c] text-white pt-28">
            {/* Ambient glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <div 
                    className="absolute top-[15%] left-[10%] w-[450px] h-[450px] rounded-full opacity-20 blur-[130px]"
                    style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 80%)" }}
                />
            </div>

            <div className="max-w-[1480px] w-full mx-auto px-6 md:px-12 relative z-10">
                
                {/* 1. HERO */}
                <div className="text-center py-12 max-w-3xl mx-auto space-y-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-[#3b82f6] bg-blue-500/10 border border-blue-500/20">
                        <Sparkles className="w-3.5 h-3.5" /> Proven Engineering Results
                    </span>
                    <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight font-sora">
                        Technical Case <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Success Stories.</span>
                    </h1>
                </div>

                {/* Filter selector */}
                <div className="flex justify-center gap-3 py-6">
                    {[
                        { id: "all", label: "All Cases" },
                        { id: "web", label: "Web Applications" },
                        { id: "scrapers", label: "Web Scrapers" },
                        { id: "saas", label: "SaaS Platforms" }
                    ].map((f) => (
                        <button 
                            key={f.id}
                            onClick={() => setFilter(f.id)}
                            className={`px-5 py-2.5 rounded-full text-xs font-bold font-mono transition-all cursor-pointer ${
                                filter === f.id 
                                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                                : "bg-[#0c101a] text-slate-455 border border-slate-800/80 hover:border-slate-700"
                            }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                {/* Case studies list */}
                <div className="grid grid-cols-1 gap-8 py-10">
                    <AnimatePresence mode="popLayout">
                        {filteredCases.map((c, idx) => {
                            const CaseIcon = c.icon;
                            return (
                                <motion.div 
                                    key={c.title}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-slate-50 dark:bg-[#0c101a] border border-slate-200 dark:border-slate-800/80 rounded-[32px] p-6 md:p-8 text-slate-900 dark:text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row md:items-start gap-8"
                                >
                                    {/* Stat / Category badge column */}
                                    <div className="md:w-1/4 space-y-4 shrink-0">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                                            <CaseIcon className="w-6 h-6" />
                                        </div>
                                        <div className="text-left">
                                            <span className="text-[9px] font-mono font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase block">Project Outcome</span>
                                            <span className="text-lg font-black text-blue-600 dark:text-blue-400 font-sora mt-0.5 block leading-tight">{c.stats}</span>
                                        </div>
                                        <div className="text-left flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-450 font-mono">
                                            <Calendar className="w-4 h-4 shrink-0" />
                                            <span>{c.date}</span>
                                        </div>
                                    </div>

                                    {/* Description and tags */}
                                    <div className="flex-grow space-y-4 text-left">
                                        <h3 className="text-xl md:text-2xl font-black font-sora tracking-tight leading-tight">{c.title}</h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">{c.desc}</p>
                                        
                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200 dark:border-slate-850/60">
                                            {c.tech.map((t) => (
                                                <span key={t} className="px-3 py-1 rounded-full text-[10px] font-mono font-bold text-slate-500 dark:text-slate-450 bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/40">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Final page conversion banner */}
                <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 border border-blue-500/25 rounded-[32px] p-8 md:p-12 my-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
                    <h3 className="text-2xl md:text-3xl font-black font-sora tracking-tight">Ready to make your project the next success story?</h3>
                    <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
                        Let's connect today. We can discuss your custom scraping requirements, system integrations, or frontend modernizations.
                    </p>
                    <div className="pt-2">
                        <Link 
                            href="/contact"
                            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                        >
                            Book Project Alignment <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

            </div>

            <Footer />
        </main>
    );
}
