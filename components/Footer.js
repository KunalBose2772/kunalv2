"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUp, Github, Linkedin, Twitter, Mail, Phone, 
  MapPin, Cpu, ShieldCheck, Sparkles, ArrowRight, MessageSquare, 
  Globe2, PhoneCall
} from "lucide-react";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    const [time, setTime] = useState("");
    const [isScrollActive, setIsScrollActive] = useState(false);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC');
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        
        const handleScroll = () => {
            setIsScrollActive(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            clearInterval(interval);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const footerLinks = {
        Services: [
            { label: "Web Development", href: "/services/web" },
            { label: "Data Scrapers", href: "/services/scrapers" },
            { label: "SaaS Platforms", href: "/services/saas" },
        ],
        Products: [
            { label: "LeadMiner SaaS", href: "/products/leadminer" },
            { label: "CRM System", href: "/products/crm" },
            { label: "Sandbox Graph", href: "/#playground" },
        ],
        Company: [
            { label: "About", href: "/#about" },
            { label: "Work", href: "/#work" },
            { label: "Case Studies", href: "/case-studies" },
            { label: "Resume", href: "/contact" }
        ]
    };

    return (
        <footer className="w-full relative bg-[#03050c] border-t border-slate-900/60 pt-16 pb-8 px-6 md:px-12 z-20 overflow-hidden font-sans text-white">
            
            {/* Ambient Background Grid and Glows (Vibrant blue & purple blending) */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div 
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[350px] opacity-35"
                    style={{
                        background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59, 130, 246, 0.25) 0%, rgba(139, 92, 246, 0.12) 45%, transparent 80%)"
                    }}
                />
                <div 
                    className="absolute bottom-0 right-0 w-[500px] h-[400px] opacity-25"
                    style={{
                        background: "radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 80%)"
                    }}
                />
                {/* Neon Top Border Gradient */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            </div>

            <div className="max-w-[1480px] mx-auto relative z-10 flex flex-col gap-12">
                
                {/* ══ STUNNING GLASSMOPHIC CTA BANNER ══ */}
                <div className="p-8 sm:p-10 rounded-[32px] bg-white/[0.02] border border-white/[0.06] backdrop-blur-md relative overflow-hidden group/cta shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                    <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full blur-[80px] opacity-20 pointer-events-none bg-blue-600" />
                    
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
                        <div className="text-center lg:text-left space-y-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-[#a78bfa] bg-[#7C3AED]/10 border border-[#7C3AED]/20">
                                <Sparkles className="w-3.5 h-3.5 text-[#a78bfa]" /> Digital Transformation
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-extrabold font-sora tracking-tight">
                                Ready to build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-450 to-purple-400">extraordinary</span>?
                            </h3>
                            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl font-medium leading-relaxed">
                                Consult with Kunal to build high-performance web applications, automated lead generation networks, and enterprise database integrations.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 shrink-0">
                            <Link
                                href="/contact"
                                className="h-12 px-7 text-white font-extrabold text-xs uppercase tracking-widest rounded-full transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg hover:shadow-blue-500/25 bg-blue-600 hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0"
                            >
                                Get Free Estimate <ArrowRight className="w-4 h-4" />
                            </Link>
                            
                            <Link
                                href="/#contact"
                                className="h-12 px-7 text-white font-extrabold text-xs uppercase tracking-widest rounded-full transition-all duration-300 border border-white/10 hover:border-white/20 bg-white/[0.04] hover:bg-white/[0.08] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-2"
                            >
                                Start CLI Wizard
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Top Row: Brand & Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-slate-900/60">
                    
                    {/* Brand Info (5 cols) */}
                    <div className="lg:col-span-4 flex flex-col items-start text-left">
                        <span className="text-sm font-black tracking-[0.2em] text-white uppercase mb-2 font-sora">
                            KUNAL BOSE
                        </span>
                        <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block animate-pulse" />
                            Systems Architecture · Ranchi, India
                        </div>
                        <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-sm">
                            Designing and building high-performance responsive applications, scalable scraper microservices, and modular frontend architectures. Available for freelance assignments and enterprise contract consulting.
                        </p>
                    </div>

                    {/* Links Grid (5 cols) */}
                    <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {Object.entries(footerLinks).map(([category, links]) => (
                            <div key={category} className="flex flex-col gap-4 text-left">
                                <h4 className="text-white font-extrabold text-[11px] uppercase tracking-widest flex items-center gap-2 font-mono">
                                    <span className="w-1 h-3 rounded-full bg-blue-500 inline-block shadow-[0_0_8px_#3B82F6]" />
                                    {category}
                                </h4>
                                <ul className="space-y-2.5">
                                    {links.map((link) => (
                                        <li key={link.label}>
                                            <Link 
                                                href={link.href}
                                                className="text-[12.5px] text-slate-400 hover:text-white transition-all hover:translate-x-0.5 inline-block duration-200"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Get In Touch Info (3 cols) */}
                    <div className="lg:col-span-3 flex flex-col gap-4 text-left">
                        <h4 className="text-white font-extrabold text-[11px] uppercase tracking-widest flex items-center gap-2 font-mono">
                            <span className="w-1 h-3 rounded-full bg-purple-500 inline-block shadow-[0_0_8px_#8B5CF6]" />
                            Get in Touch
                        </h4>
                        
                        <div className="space-y-3.5">
                            <a href="mailto:kunalbose2570@gmail.com"
                                className="flex items-center gap-3 text-[13px] text-slate-350 hover:text-blue-400 transition-colors group">
                                <div className="w-8 h-8 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:border-blue-500/40 group-hover:bg-blue-500/10 transition-all">
                                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                                </div>
                                <span className="truncate">kunalbose2570@gmail.com</span>
                            </a>
                            
                            <a href="tel:7667341075"
                                className="flex items-center gap-3 text-[13px] text-slate-350 hover:text-blue-400 transition-colors group">
                                <div className="w-8 h-8 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:border-blue-500/40 group-hover:bg-blue-500/10 transition-all">
                                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                                </div>
                                <span>+91 76673 41075</span>
                            </a>
                        </div>

                        {/* Social channels */}
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.06]">
                            <a href="https://github.com/KunalBose2772" target="_blank" className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/[0.08] bg-white/[0.03] text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300 hover:scale-105">
                                <Github className="w-4 h-4" />
                            </a>
                            <a href="https://linkedin.com/in/kunal-bose-a45926269" target="_blank" className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/[0.08] bg-white/[0.03] text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300 hover:scale-105">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="https://x.com/KunalBose2772" target="_blank" className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/[0.08] bg-white/[0.03] text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300 hover:scale-105">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="https://facebook.com/people/Kunal-Bose" target="_blank" className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/[0.08] bg-white/[0.03] text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300 hover:scale-105">
                                <FaFacebookF className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                </div>

                {/* ══ HORIZONTAL DEVELOPMENT HUBS ROW ══ */}
                <div className="border-t border-white/[0.06] py-6 mb-2 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-slate-400">
                        <Globe2 className="w-4 h-4 text-blue-400" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 font-mono">Development Hubs</span>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-y-2 gap-x-4 text-[11px] font-bold text-slate-300 tracking-wider">
                        <span>Ranchi (HQ)</span>
                        <span className="text-white/20">•</span>
                        <span>Bangalore</span>
                        <span className="text-white/20">•</span>
                        <span>Mumbai</span>
                        <span className="text-white/20">•</span>
                        <span>Delhi NCR</span>
                        <span className="text-white/20">•</span>
                        <span>Hyderabad</span>
                    </div>
                </div>

                {/* Bottom Row: Uptime Status & Copyrights */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 pt-4 border-t border-white/[0.06]">
                    
                    {/* Active System logs */}
                    <div className="flex flex-wrap items-center gap-4 text-left border border-slate-900 bg-[#07090e]/80 rounded-xl px-4 py-2 w-fit">
                        <div className="flex items-center gap-1.5">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-[8.5px] font-mono font-bold text-slate-450 uppercase tracking-wider">System: Nominal</span>
                        </div>
                        <div className="hidden xs:block w-px h-3.5 bg-slate-900" />
                        <span className="text-[8.5px] font-mono font-bold text-slate-500">
                            {time || "Loading time..."}
                        </span>
                        <div className="hidden xs:block w-px h-3.5 bg-slate-900" />
                        <span className="text-[8.5px] font-mono font-bold text-blue-400 flex items-center gap-0.5">
                            <Cpu className="w-3 h-3 text-blue-400" /> Latency: 4ms
                        </span>
                    </div>

                    {/* Copyright & Scroll Top */}
                    <div className="flex items-center justify-between sm:justify-end gap-6">
                        <span className="text-[10px] font-mono font-bold text-slate-500">
                            © {new Date().getFullYear()} KUNAL BOSE. All rights reserved.
                        </span>
                        
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-9 h-9 rounded-xl border border-slate-800 bg-[#0c101a] flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-colors shadow-lg cursor-pointer"
                        >
                            <ArrowUp className="w-4 h-4" />
                        </motion.button>
                    </div>

                </div>

            </div>

            {/* ══ PERSISTENT FLOATING CALL & WHATSAPP CTA WIDGETS ══ */}
            <div 
                className="fixed right-6 z-45 flex flex-col gap-3.5 items-end transition-all duration-300 ease-out"
                style={{ bottom: isScrollActive ? "80px" : "24px" }}
            >
                {/* Call Button */}
                <a
                    href="tel:7667341075"
                    className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
                    aria-label="Call Kunal"
                >
                    <span className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping opacity-75 pointer-events-none" />
                    <PhoneCall className="w-4.5 h-4.5 relative z-10" />

                    <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-[11px] font-bold tracking-wide whitespace-nowrap opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none shadow-md font-mono">
                        Call Architect
                    </span>
                </a>

                {/* WhatsApp Button */}
                <a
                    href="https://wa.me/917667341075"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-green-500 to-emerald-600 text-white shadow-xl shadow-green-600/30 hover:shadow-green-600/50 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
                    aria-label="Chat on WhatsApp"
                >
                    <span className="absolute inset-0 rounded-full bg-green-500/30 animate-ping opacity-75 pointer-events-none" style={{ animationDelay: "0.5s" }} />
                    <FaWhatsapp className="w-5.5 h-5.5 relative z-10" />

                    <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-[11px] font-bold tracking-wide whitespace-nowrap opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none shadow-md font-mono">
                        Chat on WhatsApp
                    </span>
                </a>
            </div>

        </footer>
    );
}
