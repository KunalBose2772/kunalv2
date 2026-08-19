"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2, Sparkles, Smartphone, ShieldCheck, Zap, 
  ArrowRight, Heart, HelpCircle, Check, DollarSign
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function WebService() {
    // Estimator state
    const [pages, setPages] = useState(5);
    const [complexity, setComplexity] = useState("standard"); // standard, complex, enterprise
    const [timeline, setTimeline] = useState("normal"); // normal, rush

    const calculateCost = () => {
        let base = pages * 150;
        if (complexity === "complex") base += 1200;
        if (complexity === "enterprise") base += 3500;
        if (timeline === "rush") base *= 1.35;
        return Math.round(base);
    };

    return (
        <main className="min-h-screen bg-[#03050c] text-white pt-28">
            {/* Ambient Background Lights */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <div 
                    className="absolute top-[10%] left-[10%] w-[400px] h-[400px] rounded-full opacity-20 blur-[130px]"
                    style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 80%)" }}
                />
                <div 
                    className="absolute top-[40%] right-[10%] w-[500px] h-[500px] rounded-full opacity-15 blur-[150px]"
                    style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 80%)" }}
                />
            </div>

            <div className="max-w-[1480px] w-full mx-auto px-6 md:px-12 relative z-10">
                
                {/* 1. HERO SECTION */}
                <div className="text-center py-16 md:py-24 max-w-3xl mx-auto space-y-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-[#3b82f6] bg-blue-500/10 border border-blue-500/20">
                        <Sparkles className="w-3.5 h-3.5" /> High-Performance Frontend Systems
                    </span>
                    <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-none font-sora">
                        Custom Web App <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Engineering.</span>
                    </h1>
                    <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                        I design and build premium Next.js and React web applications styled with responsive Tailwind CSS, animated with Framer Motion, and engineered for high search traffic conversions.
                    </p>
                    <div className="pt-4">
                        <Link 
                            href="/contact"
                            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                        >
                            Start Your Application <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* 2. TECHNICAL SPECIFICATIONS PILLARS (Light Theme rhythm mockup) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
                    <div className="bg-[#0c101a] border border-slate-800/80 rounded-3xl p-6 shadow-xl hover:border-slate-700 transition-all">
                        <Code2 className="w-10 h-10 text-blue-500 mb-4" />
                        <h3 className="text-lg font-bold font-sora mb-2">Next.js 15+ App Router</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            Leveraging server-side rendering (SSR), static site generation (SSG), and partial hydration to achieve 100/100 Lighthouse performance metrics.
                        </p>
                    </div>
                    <div className="bg-[#0c101a] border border-slate-800/80 rounded-3xl p-6 shadow-xl hover:border-slate-700 transition-all">
                        <Smartphone className="w-10 h-10 text-purple-500 mb-4" />
                        <h3 className="text-lg font-bold font-sora mb-2">Responsive & UI/UX Parity</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            Pixel-perfect translation of design concepts into mobile-first interfaces using modular CSS tokens and fluid animations.
                        </p>
                    </div>
                    <div className="bg-[#0c101a] border border-slate-800/80 rounded-3xl p-6 shadow-xl hover:border-slate-700 transition-all">
                        <ShieldCheck className="w-10 h-10 text-emerald-500 mb-4" />
                        <h3 className="text-lg font-bold font-sora mb-2">Systems Level Security</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            Strict input validations, secure API endpoints, OAuth integrations, and cross-site scripting (XSS) mitigation strategies.
                        </p>
                    </div>
                </div>

                {/* 3. STUNNING INTERACTIVE PROJECT ESTIMATOR */}
                <div className="my-16 bg-slate-50 dark:bg-[#0c101a] border border-slate-200 dark:border-slate-800/80 rounded-[32px] p-8 md:p-12 text-slate-900 dark:text-white shadow-2xl relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
                        {/* Configurator */}
                        <div className="lg:col-span-7 space-y-6">
                            <div>
                                <span className="text-[10px] font-mono font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">Interactive Calculator</span>
                                <h3 className="text-2xl md:text-3xl font-black font-sora tracking-tight mt-1">Configure Your Project</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">Adjust sliders and configurations to calculate an instant architectural estimate.</p>
                            </div>

                            {/* Page Slider */}
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-350">
                                    <span>NUMBER OF UNIQUE PAGES / VIEWS</span>
                                    <span className="text-blue-600 dark:text-blue-400">{pages} Pages</span>
                                </div>
                                <input 
                                    type="range" 
                                    min="1" 
                                    max="20" 
                                    value={pages} 
                                    onChange={(e) => setPages(parseInt(e.target.value))}
                                    className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500 outline-none"
                                />
                            </div>

                            {/* Complexity selector */}
                            <div className="space-y-2">
                                <span className="text-xs font-bold text-slate-700 dark:text-slate-350 block">APPLICATION COMPLEXITY</span>
                                <div className="grid grid-cols-3 gap-3">
                                    {[
                                        { id: "standard", label: "Marketing / Landing", desc: "Clean static views" },
                                        { id: "complex", label: "SaaS / Portal", desc: "User logs, DB integrations" },
                                        { id: "enterprise", label: "Enterprise Hub", desc: "Multi-tenant, admin CRM" }
                                    ].map((c) => (
                                        <button 
                                            key={c.id}
                                            onClick={() => setComplexity(c.id)}
                                            className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all ${
                                                complexity === c.id 
                                                ? "border-blue-500 bg-blue-50/50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 shadow-md"
                                                : "border-slate-200 dark:border-slate-800/80 bg-white dark:bg-transparent text-slate-655 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700"
                                            }`}
                                        >
                                            <span className="text-xs font-bold block leading-none">{c.label}</span>
                                            <span className="text-[9px] mt-1 block opacity-85 leading-normal">{c.desc}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Timeline selector */}
                            <div className="space-y-2">
                                <span className="text-xs font-bold text-slate-700 dark:text-slate-350 block">PROJECT TIMELINE</span>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        { id: "normal", label: "Standard Delivery", desc: "3-5 Weeks execution" },
                                        { id: "rush", label: "Rush Deployment (+35%)", desc: "10-14 Days priority sprint" }
                                    ].map((t) => (
                                        <button 
                                            key={t.id}
                                            onClick={() => setTimeline(t.id)}
                                            className={`p-3 rounded-2xl border text-left cursor-pointer transition-all ${
                                                timeline === t.id 
                                                ? "border-blue-500 bg-blue-50/50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 shadow-md"
                                                : "border-slate-200 dark:border-slate-800/80 bg-white dark:bg-transparent text-slate-655 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700"
                                            }`}
                                        >
                                            <span className="text-xs font-bold block leading-none">{t.label}</span>
                                            <span className="text-[9px] mt-1 block opacity-85 leading-normal">{t.desc}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Cost Display Box */}
                        <div className="lg:col-span-5 bg-white dark:bg-[#06090e] border border-slate-200 dark:border-slate-800/60 rounded-3xl p-6 flex flex-col justify-between shadow-2xl h-full min-h-[300px]">
                            <div className="space-y-4">
                                <span className="text-[9px] font-mono font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase">Estimated Budget Summary</span>
                                <div className="flex items-baseline gap-1 text-slate-800 dark:text-white">
                                    <span className="text-2xl font-bold font-sora">$</span>
                                    <span className="text-5xl md:text-6xl font-black font-sora tracking-tight leading-none">{calculateCost()}</span>
                                    <span className="text-xs font-mono font-bold text-slate-450 dark:text-slate-500">USD</span>
                                </div>
                                <div className="space-y-2 border-t border-slate-100 dark:border-slate-900 pt-4 text-xs font-medium text-slate-500 dark:text-slate-400">
                                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Includes source code delivery</div>
                                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Fully animated frontend layouts</div>
                                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Custom responsive audits</div>
                                </div>
                            </div>
                            <div className="pt-6">
                                <Link 
                                    href={`/contact?service=web&pages=${pages}&complexity=${complexity}&timeline=${timeline}`}
                                    className="w-full text-center py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider block transition-all shadow-md cursor-pointer"
                                >
                                    Book Technical Onboarding
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </main>
    );
}
