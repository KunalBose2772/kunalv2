"use client";

import Footer from "@/components/Footer";
import { Sparkles, ShieldCheck } from "lucide-react";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[#03050c] text-white pt-28">
            <div className="max-w-[800px] mx-auto px-6 relative z-10 py-12 text-left space-y-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-500 bg-blue-500/10 border border-blue-500/20">
                    <ShieldCheck className="w-3.5 h-3.5" /> Platform Governance Agreement
                </span>
                <h1 className="text-3xl md:text-5xl font-heading font-black tracking-tight font-sora">Terms of Service</h1>
                <p className="text-slate-400 text-xs font-mono">Last Updated: August 18, 2026</p>

                <div className="space-y-6 text-xs md:text-sm text-slate-400 leading-relaxed font-sans">
                    <p>
                        Welcome to Built by Kunal. These terms and conditions outline the rules and regulations for the use of our services, including web application setups, custom scrapers, and SaaS dashboard configurations.
                    </p>

                    <h3 className="text-lg font-bold text-white font-sora pt-4">1. License & Usage Agreement</h3>
                    <p>
                        Unless otherwise stated, we own the intellectual property rights for all material and source code delivered in custom templates. Clients are granted a non-exclusive, royalty-free license to deploy and configure their custom CRM platforms across their own company entities.
                    </p>

                    <h3 className="text-lg font-bold text-white font-sora pt-4">2. Scraper Throttling & Limitations</h3>
                    <p>
                        Users of the LeadMiner subscription agree to use data extraction scripts within fair-use rate limits. Automated flooding of query requests that causes network latency spike alerts in our proxy pools may trigger temporary IP-level request blockages to prevent service degradation.
                    </p>

                    <h3 className="text-lg font-bold text-white font-sora pt-4">3. Custom Service Agreements</h3>
                    <p>
                        Custom software design sprints and project briefs are governed by separate signed Service Level Agreements (SLAs) defining build requirements, milestone timelines, and security support parameters.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
