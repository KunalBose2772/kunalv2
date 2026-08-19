"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, Linkedin, Twitter, Facebook, ChevronDown, 
  ArrowRight, Code2, Smartphone, Layers, ShieldCheck, 
  Terminal, BarChart3, Menu, X, CheckSquare, Globe, Cpu, Sparkles, Server
} from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [megaOpen, setMegaOpen] = useState(null); // 'services' | 'products' | null
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState(null); // 'services' | 'products' | null

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const servicesLinks = [
        {
            title: "Next.js & React Apps",
            description: "High-speed frontend systems.",
            href: "/services/nextjs",
            icon: Code2,
            color: "#3b82f6"
        },
        {
            title: "WordPress Custom Sites",
            description: "Premium portfolios & WooCommerce.",
            href: "/services/wordpress",
            icon: Globe,
            color: "#2196F3"
        },
        {
            title: "PHP & Laravel Backends",
            description: "Robust server DB configurations.",
            href: "/services/php",
            icon: Layers,
            color: "#8b5cf6"
        },
        {
            title: "AI & ML Solutions",
            description: "Custom models & OpenAI integrations.",
            href: "/services/saas",
            icon: Cpu,
            color: "#ec4899"
        },
        {
            title: "Cloud & Devops Services",
            description: "AWS cloud setups & pipelines.",
            href: "/services/saas",
            icon: Server,
            color: "#ef4444"
        },
        {
            title: "SaaS Platforms",
            description: "Multi-tenant system architectures.",
            href: "/products/crm",
            icon: ShieldCheck,
            color: "#10b981"
        },
        {
            title: "WhatsApp Automations",
            description: "Official API triggers & bots.",
            href: "/services/automations",
            icon: Smartphone,
            color: "#10b981"
        },
        {
            title: "Search Engine Optimization",
            description: "Optimized schema & core web vitals.",
            href: "/case-studies",
            icon: BarChart3,
            color: "#f59e0b"
        },
        {
            title: "Social Media Marketing",
            description: "Scale organic brand presence.",
            href: "/contact",
            icon: Globe,
            color: "#3b82f6"
        },
        {
            title: "Paid Ads (PPC)",
            description: "Convert high-intent Google searchers.",
            href: "/contact",
            icon: Sparkles,
            color: "#8b5cf6"
        },
        {
            title: "Automated Data Scrapers",
            description: "Map crawlers & B2B lead extractors.",
            href: "/services/scrapers",
            icon: Terminal,
            color: "#00e5ff"
        },
        {
            title: "Graphic & UI Designing",
            description: "Premium Figma prototypes.",
            href: "/contact",
            icon: CheckSquare,
            color: "#ec4899"
        }
    ];

    const productsLinks = [
        {
            title: "LeadMiner SaaS Suite",
            description: "Self-serve high-capacity crawler portal to compile B2B leads instantly.",
            href: "/products/leadminer",
            icon: BarChart3,
            color: "#3b82f6"
        },
        {
            title: "NextGen CRM Template",
            description: "Multi-company dashboard tracking lead generation, tickets, and team rosters.",
            href: "/products/crm",
            icon: ShieldCheck,
            color: "#8b5cf6"
        },
        {
            title: "Sandbox & Simulation",
            description: "Real-time gravity simulator and mathematical canvas graph generators.",
            href: "/#playground",
            icon: CheckSquare,
            color: "#00e5ff"
        }
    ];

    return (
        <>
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className={`fixed top-[24px] left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[calc(100%-32px)] md:w-[calc(100%-48px)] max-w-[1480px] rounded-[20px] px-6 py-3 md:py-3.5 nav-glass border ${scrolled
                ? "border-slate-200/80 bg-white/75 dark:border-white/18 dark:bg-[#070a0f]/80 shadow-[0_10px_40px_rgba(15,23,42,0.16)] dark:shadow-[0_10px_40px_rgba(15,23,42,0.7)] backdrop-blur-md"
                : "border-slate-200/40 bg-white/40 dark:border-white/10 dark:bg-[#070a0f]/40 shadow-[0_22px_60px_rgba(15,23,42,0.18)] dark:shadow-[0_22px_60px_rgba(15,23,42,0.76)] backdrop-blur-sm"
                }`}
        >
            <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="nav-logo relative w-28 h-9 md:w-36 md:h-11 overflow-visible">
                        <Image
                             src="/builtbykunal.png"
                             alt="Built by Kunal"
                             fill
                             className="object-contain filter dark:brightness-100"
                             priority
                        />
                    </div>
                </Link>

                <div className="flex items-center gap-6 text-sm font-medium">
                    <div className="hidden lg:flex items-center gap-7 text-slate-800 dark:text-slate-200 font-sora">
                        <Link href="/" className="hover:text-brand-accent transition-colors py-2 font-semibold">
                            Home
                        </Link>
                        <Link href="/#about" className="hover:text-brand-accent transition-colors py-2 font-semibold">
                            About
                        </Link>
                        
                        {/* Services Mega Menu (Same Wide Layout) */}
                        <div 
                            className="relative py-2 cursor-pointer"
                            onMouseEnter={() => setMegaOpen("services")}
                            onMouseLeave={() => setMegaOpen(null)}
                        >
                            <span className="flex items-center gap-1 hover:text-brand-accent transition-colors font-semibold">
                                Services <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${megaOpen === "services" ? "rotate-180 text-brand-accent" : ""}`} />
                            </span>
                            
                            <AnimatePresence>
                                {megaOpen === "services" && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 15, scale: 0.99 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 15, scale: 0.99 }}
                                        transition={{ duration: 0.25, ease: "easeOut" }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 w-[1160px] bg-white dark:bg-[#070a0f] border border-slate-200 dark:border-slate-800/80 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.25)] p-6 grid grid-cols-12 gap-8 mt-3 z-50 text-left"
                                    >
                                        {/* Left Side: 3 Columns grid */}
                                        <div className="col-span-9 grid grid-cols-3 gap-3">
                                            {servicesLinks.map((s, idx) => (
                                                <Link key={idx} href={s.href} className="group/item flex items-center justify-between p-3 rounded-2xl border border-transparent hover:border-slate-100 dark:hover:border-slate-900 hover:bg-slate-50 dark:hover:bg-slate-950/40 transition-all duration-200">
                                                    <div className="flex items-center gap-3 min-w-0">
                                                        <div 
                                                            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 group-hover/item:scale-105 transition-transform duration-300"
                                                            style={{ backgroundColor: `${s.color}10`, color: s.color }}
                                                        >
                                                            <s.icon className="w-5 h-5" />
                                                        </div>
                                                        <div className="min-w-0">
                                                            <h4 className="text-[12px] font-bold text-slate-800 dark:text-white leading-snug group-hover/item:text-brand-accent transition-colors truncate">
                                                                {s.title}
                                                            </h4>
                                                            <p className="text-[9.5px] text-slate-400 dark:text-slate-500 mt-0.5 leading-normal line-clamp-1">
                                                                {s.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <ArrowRight className="w-3.5 h-3.5 text-slate-350 dark:text-slate-650 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all shrink-0 ml-1" />
                                                </Link>
                                            ))}
                                        </div>

                                        {/* Right Side: Promo card */}
                                        <div className="col-span-3 border-l border-slate-100 dark:border-slate-900 pl-6 flex flex-col justify-between">
                                            <div className="space-y-4">
                                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest text-[#8b5cf6] bg-purple-500/10 border border-purple-500/20">
                                                    <Sparkles className="w-3 h-3 text-[#8b5cf6]" />
                                                    <span>Featured Service</span>
                                                </span>
                                                <div className="space-y-1">
                                                    <h3 className="text-sm font-black text-slate-900 dark:text-white font-sora leading-tight tracking-tight">
                                                        Premium Digital Services
                                                    </h3>
                                                    <p className="text-slate-500 dark:text-slate-450 text-[10px] leading-relaxed font-medium">
                                                        Powerful, scalable and future-ready services tailored for your business growth.
                                                    </p>
                                                </div>
                                                
                                                <div className="relative w-full h-[110px] rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-950/30 border border-slate-100 dark:border-slate-900">
                                                    <Image 
                                                        src="/showcase-laptop.png"
                                                        alt="Laptop preview"
                                                        fill
                                                        className="object-contain p-2"
                                                    />
                                                </div>
                                            </div>
                                            <div className="pt-4">
                                                <Link 
                                                    href="/contact"
                                                    className="w-full text-center py-2.5 rounded-xl bg-brand-accent hover:bg-brand-hover text-white font-extrabold text-[11px] uppercase tracking-wider block transition-all shadow-md"
                                                >
                                                    Explore Services
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Products Mega Menu */}
                        <div 
                            className="relative py-2 cursor-pointer"
                            onMouseEnter={() => setMegaOpen("products")}
                            onMouseLeave={() => setMegaOpen(null)}
                        >
                            <span className="flex items-center gap-1 hover:text-brand-accent transition-colors font-semibold">
                                Products <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${megaOpen === "products" ? "rotate-180 text-brand-accent" : ""}`} />
                            </span>
                            
                            <AnimatePresence>
                                {megaOpen === "products" && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 15, scale: 0.99 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 15, scale: 0.99 }}
                                        transition={{ duration: 0.25, ease: "easeOut" }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white dark:bg-[#070a0f] border border-slate-200 dark:border-slate-800/80 rounded-3xl shadow-2xl p-6 grid grid-cols-12 gap-6 mt-3 z-50 text-left"
                                    >
                                        <div className="col-span-8 grid grid-cols-2 gap-3">
                                            <div className="col-span-2 text-[10px] font-mono font-bold tracking-widest text-slate-450 dark:text-slate-500 uppercase border-b border-slate-100 dark:border-slate-850 pb-2 mb-1">
                                                Proprietary SaaS & Tools
                                            </div>
                                            {productsLinks.map((p, idx) => (
                                                <Link key={idx} href={p.href} className="group/item flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                                                    <div 
                                                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 group-hover/item:scale-105 transition-transform duration-300"
                                                        style={{ backgroundColor: `${p.color}15`, color: p.color }}
                                                    >
                                                        <p.icon className="w-5 h-5" />
                                                    </div>
                                                    <div className="flex-grow min-w-0">
                                                        <h4 className="text-[13px] font-bold text-slate-850 dark:text-white leading-snug group-hover/item:text-brand-accent transition-colors truncate">
                                                            {p.title}
                                                        </h4>
                                                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-normal line-clamp-2">
                                                            {p.description}
                                                        </p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>

                                        <div className="col-span-4 border-l border-slate-100 dark:border-slate-900 pl-6 flex flex-col justify-between">
                                            <div className="space-y-3">
                                                <h3 className="text-sm font-black text-slate-900 dark:text-white font-sora leading-tight tracking-tight">
                                                    Explore Sandbox
                                                </h3>
                                                <p className="text-slate-500 dark:text-slate-450 text-[10px] leading-relaxed font-semibold">
                                                    Try our real-time interactive physics gravity engines, wave generators, and matrix falls in the playground.
                                                </p>
                                            </div>
                                            <div className="pt-4">
                                                <Link 
                                                    href="/#playground"
                                                    className="w-full text-center py-2.5 rounded-xl bg-slate-850 hover:bg-slate-800 text-white font-extrabold text-[11px] uppercase tracking-wider block transition-all shadow-md"
                                                >
                                                    Open Sandbox
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link href="/case-studies" className="hover:text-brand-accent transition-colors py-2 font-semibold">
                            Case Studies
                        </Link>
                        
                        <Link href="/contact" className="hover:text-brand-accent transition-colors py-2 font-semibold">
                            Contact
                        </Link>
                    </div>

                    <div className="flex items-center gap-4 border-l border-slate-200 dark:border-slate-850 pl-4">
                        <div className="hidden md:flex items-center gap-3 pr-2 border-r border-slate-200 dark:border-slate-850">
                            <a href="https://github.com/KunalBose2772" target="_blank" className="text-slate-400 hover:text-brand-accent transition-colors">
                                <Github className="w-4 h-4" />
                            </a>
                            <a href="https://linkedin.com/in/kunal-bose-a45926269" target="_blank" className="text-slate-400 hover:text-brand-accent transition-colors">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="https://x.com/KunalBose2772" target="_blank" className="text-slate-400 hover:text-brand-accent transition-colors">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="https://facebook.com/people/Kunal-Bose" target="_blank" className="text-slate-400 hover:text-brand-accent transition-colors">
                                <Facebook className="w-4 h-4" />
                            </a>
                        </div>

                        <Link
                            href="/contact"
                            className="hidden sm:flex px-4.5 py-2 rounded-[10px] bg-brand-accent text-white hover:bg-brand-hover transition-all duration-300 ease-out font-[600] tracking-[0.3px]"
                        >
                            Get A Quote
                        </Link>

                        {/* Hamburger Button for mobile */}
                        <button
                            className="flex lg:hidden w-9 h-9 rounded-lg items-center justify-center border border-slate-200 dark:border-slate-850 bg-slate-50 dark:bg-slate-950 text-slate-655 dark:text-slate-450 hover:text-slate-900 dark:hover:text-white transition-colors"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                        </button>
                    </div>
                </div>
            </div>
        </motion.nav>

        {/* Mobile menu drawer */}
        <AnimatePresence>
            {mobileOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-sm lg:hidden"
                        onClick={() => setMobileOpen(false)}
                    />
                    <motion.aside
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
                        className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white dark:bg-[#070a0f] border-l border-slate-200 dark:border-slate-850 p-6 lg:hidden overflow-y-auto flex flex-col justify-between"
                    >
                        <div className="space-y-6">
                            <div className="flex items-center justify-between pb-4 border-b border-slate-250 dark:border-slate-850">
                                <div className="relative w-28 h-8">
                                    <Image
                                         src="/builtbykunal.png"
                                         alt="Built by Kunal"
                                         fill
                                         className="object-contain"
                                    />
                                </div>
                                <button
                                    onClick={() => setMobileOpen(false)}
                                    className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-950 text-slate-550 dark:text-slate-450 hover:text-slate-900 dark:hover:text-white transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>

                            <nav className="flex flex-col gap-2 font-sora">
                                <Link href="/" className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors" onClick={() => setMobileOpen(false)}>
                                    Home
                                </Link>
                                <Link href="/#about" className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors" onClick={() => setMobileOpen(false)}>
                                    About
                                </Link>
                                
                                {/* Services accordion */}
                                <div className="space-y-1">
                                    <button 
                                        onClick={() => setMobileDropdown(mobileDropdown === "services" ? null : "services")}
                                        className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors"
                                    >
                                        <span>Services</span>
                                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${mobileDropdown === "services" ? "rotate-180 text-brand-accent" : ""}`} />
                                    </button>
                                    
                                    {mobileDropdown === "services" && (
                                        <div className="pl-4 space-y-1 border-l border-slate-200 dark:border-slate-850 ml-4 mt-1">
                                            {servicesLinks.map((s, idx) => (
                                                <Link key={idx} href={s.href} className="flex items-center justify-between px-4 py-2 rounded-xl text-xs font-medium text-slate-550 dark:text-slate-400 hover:text-brand-accent" onClick={() => setMobileOpen(false)}>
                                                    <span>{s.title}</span>
                                                    <ArrowRight className="w-3 h-3 opacity-30" />
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Products accordion */}
                                <div className="space-y-1">
                                    <button 
                                        onClick={() => setMobileDropdown(mobileDropdown === "products" ? null : "products")}
                                        className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors"
                                    >
                                        <span>Products</span>
                                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${mobileDropdown === "products" ? "rotate-180 text-brand-accent" : ""}`} />
                                    </button>
                                    
                                    {mobileDropdown === "products" && (
                                        <div className="pl-4 space-y-1 border-l border-slate-200 dark:border-slate-850 ml-4 mt-1">
                                            {productsLinks.map((p, idx) => (
                                                <Link key={idx} href={p.href} className="flex items-center justify-between px-4 py-2 rounded-xl text-xs font-medium text-slate-550 dark:text-slate-400 hover:text-brand-accent" onClick={() => setMobileOpen(false)}>
                                                    <span>{p.title}</span>
                                                    <ArrowRight className="w-3 h-3 opacity-30" />
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <Link href="/case-studies" className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors" onClick={() => setMobileOpen(false)}>
                                    Case Studies
                                </Link>
                                <Link href="/contact" className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors" onClick={() => setMobileOpen(false)}>
                                    Contact
                                </Link>
                            </nav>
                        </div>

                        {/* Mobile Drawer Bottom Info */}
                        <div className="pt-6 border-t border-slate-200 dark:border-slate-850 space-y-4">
                            <div className="flex items-center gap-3 justify-center">
                                <a href="https://github.com/KunalBose2772" target="_blank" className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-850 flex items-center justify-center text-slate-450 dark:text-slate-500 hover:text-brand-accent">
                                    <Github className="w-4.5 h-4.5" />
                                </a>
                                <a href="https://linkedin.com/in/kunal-bose-a45926269" target="_blank" className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-850 flex items-center justify-center text-slate-450 dark:text-slate-500 hover:text-brand-accent">
                                    <Linkedin className="w-4.5 h-4.5" />
                                </a>
                                <a href="https://x.com/KunalBose2772" target="_blank" className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-850 flex items-center justify-center text-slate-450 dark:text-slate-500 hover:text-brand-accent">
                                    <Twitter className="w-4.5 h-4.5" />
                                </a>
                            </div>
                            <Link href="/contact" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-accent text-white font-semibold text-xs uppercase tracking-wider" onClick={() => setMobileOpen(false)}>
                                Get A Quote <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
        </>
    );
}
