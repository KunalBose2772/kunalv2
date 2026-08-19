"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, Sparkles, ShieldCheck, Mail, Phone, 
  ArrowRight, Search, Check, Download, AlertCircle
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function LeadMinerProduct() {
    const [title, setTitle] = useState("Founder");
    const [city, setCity] = useState("San Francisco");
    const [leads, setLeads] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = () => {
        setIsSearching(true);
        setLeads([]);
        
        setTimeout(() => {
            const results = [
                { name: "John Doe", company: "Aero Logistics", email: `j.doe@aerologistics.io`, phone: "+1 (415) 399-2810", linkedin: "linkedin.com/in/johndoe" },
                { name: "Sarah Smith", company: "Zeta AI", email: `s.smith@zeta.ai`, phone: "+1 (415) 480-1129", linkedin: "linkedin.com/in/sarahsmith" },
                { name: "Michael Chen", company: "Forge Capital", email: `m.chen@forgecap.com`, phone: "+1 (415) 773-8890", linkedin: "linkedin.com/in/mchen" }
            ];
            setLeads(results);
            setIsSearching(false);
        }, 1500);
    };

    return (
        <main className="min-h-screen bg-[#03050c] text-white pt-28">
            {/* Ambient glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <div 
                    className="absolute top-[10%] left-[10%] w-[400px] h-[400px] rounded-full opacity-20 blur-[130px]"
                    style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 80%)" }}
                />
            </div>

            <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                
                {/* 1. HERO */}
                <div className="text-center py-16 md:py-24 max-w-3xl mx-auto space-y-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-500 bg-blue-500/10 border border-blue-500/20">
                        <Sparkles className="w-3.5 h-3.5" /> Direct B2B Lead Generator
                    </span>
                    <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-none font-sora">
                        LeadMiner SaaS <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Extractor Portal.</span>
                    </h1>
                    <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                        Compile verified lists of business owners, executive profiles, phone numbers, and official emails in seconds. Stop buying stale databases—mine fresh data directly.
                    </p>
                </div>

                {/* 2. LIVE INTERACTIVE DEMO CONSOLE */}
                <div className="bg-[#070a0f] border border-slate-800 rounded-[32px] overflow-hidden shadow-2xl p-6 md:p-8 my-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 pb-6 gap-4">
                        <div className="text-left">
                            <span className="text-[10px] font-mono font-bold text-blue-500 uppercase tracking-wider block">Live Platform Demo</span>
                            <h3 className="text-xl font-bold font-sora mt-0.5">Test Extraction Speeds</h3>
                        </div>

                        {/* Controls */}
                        <div className="flex flex-wrap items-center gap-3">
                            <input 
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Job Title (e.g. CEO)"
                                className="bg-[#0d131f] border border-slate-800 rounded-xl px-4 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-blue-500"
                                disabled={isSearching}
                            />
                            <input 
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder="Location (e.g. San Francisco)"
                                className="bg-[#0d131f] border border-slate-800 rounded-xl px-4 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-blue-500"
                                disabled={isSearching}
                            />
                            <button 
                                onClick={handleSearch}
                                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all shadow-md"
                                disabled={isSearching}
                            >
                                {isSearching ? "Searching..." : "Mine Leads"}
                            </button>
                        </div>
                    </div>

                    {/* Results Table mockup */}
                    <div className="overflow-x-auto mt-6">
                        <table className="w-full text-left text-xs font-mono text-slate-400">
                            <thead>
                                <tr className="border-b border-slate-850 text-slate-500 uppercase tracking-widest text-[10px] font-bold">
                                    <th className="py-3 px-4">Contact Name</th>
                                    <th className="py-3 px-4">Company</th>
                                    <th className="py-3 px-4">Validated Email</th>
                                    <th className="py-3 px-4">Phone Number</th>
                                    <th className="py-3 px-4">LinkedIn Profile</th>
                                </tr>
                            </thead>
                            <tbody>
                                {isSearching ? (
                                    <tr>
                                        <td colSpan="5" className="py-12 text-center text-slate-500">
                                            <div className="flex items-center justify-center gap-2">
                                                <div className="w-4 h-4 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
                                                <span>Rotating proxies and parsing HTML schemas...</span>
                                            </div>
                                        </td>
                                    </tr>
                                ) : leads.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="py-12 text-center text-slate-500 italic">
                                            Input parameters above and click "Mine Leads" to populate.
                                        </td>
                                    </tr>
                                ) : (
                                    leads.map((l, i) => (
                                        <tr key={i} className="border-b border-slate-850 hover:bg-slate-900/40 text-white">
                                            <td className="py-3 px-4 font-bold">{l.name}</td>
                                            <td className="py-3 px-4 text-slate-400">{l.company}</td>
                                            <td className="py-3 px-4 text-blue-400 flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-blue-500" /> {l.email}</td>
                                            <td className="py-3 px-4 text-slate-400"><Phone className="w-3.5 h-3.5 text-slate-500 inline-block mr-1.5" /> {l.phone}</td>
                                            <td className="py-3 px-4 text-slate-500 hover:text-white transition-colors">{l.linkedin}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 3. PRICING PACKAGES */}
                <div className="py-16 text-center">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-blue-500 uppercase">Simple Subscription Plans</span>
                    <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tight mt-1 font-sora">Pricing Designed To Scale</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
                        {/* Starter */}
                        <div className="bg-[#0c101a] border border-slate-800 rounded-3xl p-8 flex flex-col justify-between shadow-xl">
                            <div className="space-y-4">
                                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">Starter Package</span>
                                <div className="flex items-baseline gap-1 text-white font-sora">
                                    <span className="text-xl font-bold">$</span>
                                    <span className="text-4xl font-black">49</span>
                                    <span className="text-xs text-slate-500 font-mono">/ Month</span>
                                </div>
                                <p className="text-xs text-slate-400 leading-relaxed">Perfect for startups doing light local outreach campaigns.</p>
                                <div className="space-y-2 border-t border-slate-850 pt-4 text-xs font-semibold text-slate-450">
                                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> 10,000 Leads/mo limits</div>
                                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Basic category filters</div>
                                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> CSV exports</div>
                                </div>
                            </div>
                            <Link href="/contact?product=leadminer_starter" className="mt-8 py-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-extrabold text-xs uppercase tracking-wider text-center block transition-all shadow-md">
                                Subscribe Now
                            </Link>
                        </div>

                        {/* Professional */}
                        <div className="bg-[#0c101a] border-2 border-blue-500 rounded-3xl p-8 flex flex-col justify-between shadow-xl relative">
                            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-blue-500 text-slate-950 text-[9px] font-black uppercase tracking-widest">
                                Most Popular
                            </div>
                            <div className="space-y-4">
                                <span className="text-[10px] font-mono font-bold text-blue-400 uppercase">Growth Platform</span>
                                <div className="flex items-baseline gap-1 text-white font-sora">
                                    <span className="text-xl font-bold">$</span>
                                    <span className="text-4xl font-black">129</span>
                                    <span className="text-xs text-slate-500 font-mono">/ Month</span>
                                </div>
                                <p className="text-xs text-slate-400 leading-relaxed">Ideal for agencies and outbound-driven B2B companies.</p>
                                <div className="space-y-2 border-t border-slate-850 pt-4 text-xs font-semibold text-slate-450">
                                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> 50,000 Leads/mo limits</div>
                                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Premium phone + email extraction</div>
                                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Dynamic API webhook exports</div>
                                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Priority proxy pool channel</div>
                                </div>
                            </div>
                            <Link href="/contact?product=leadminer_pro" className="mt-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider text-center block transition-all shadow-md">
                                Subscribe Now
                            </Link>
                        </div>

                        {/* Enterprise */}
                        <div className="bg-[#0c101a] border border-slate-800 rounded-3xl p-8 flex flex-col justify-between shadow-xl">
                            <div className="space-y-4">
                                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">Custom Crawlers</span>
                                <div className="flex items-baseline gap-1 text-white font-sora">
                                    <span className="text-4xl font-black">Custom</span>
                                </div>
                                <p className="text-xs text-slate-400 leading-relaxed">For massive data volume scraping and complex site bypassing.</p>
                                <div className="space-y-2 border-t border-slate-850 pt-4 text-xs font-semibold text-slate-450">
                                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Custom node scheduler cluster</div>
                                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Cloudflare bypass guarantees</div>
                                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Secure database delivery (Postgres/S3)</div>
                                </div>
                            </div>
                            <Link href="/contact?product=leadminer_enterprise" className="mt-8 py-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-extrabold text-xs uppercase tracking-wider text-center block transition-all shadow-md">
                                Talk To Kunal
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </main>
    );
}
