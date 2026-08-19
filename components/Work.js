"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Globe, Terminal, Briefcase } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
    {
        id: "01",
        number: "01",
        title: "LeadMiner",
        subtitle: "AI-powered Google Maps Lead Generation",
        description: "An intelligent data extraction engine designed to scrape, verify, and structure B2B leads directly from Google Maps. Built for sales automation with built-in email verification and smart filtering.",
        highlights: [
            "Real-time Puppeteer scrapers with rotating proxies",
            "FastAPI background task queuing",
            "Interactive analytics dashboard with Next.js",
            "CSV/JSON exporter with custom data structuring"
        ],
        stack: "Next.js · FastAPI · PostgreSQL · Puppeteer",
        image: "/project1.png",
        link: "https://github.com/KunalBose2772",
        bg: "#F0F4FF", // Soft Ice Blue
        textColor: "text-blue-600",
        tint: "bg-blue-500/10",
        border: "border-blue-200/50"
    },
    {
        id: "02",
        number: "02",
        title: "NextGen Tech",
        subtitle: "Enterprise Website + CRM",
        description: "A complete digital infrastructure for enterprise services. Features a customer-facing responsive brand platform tightly integrated with a custom admin CRM, pipeline tracker, and user behavior analytics.",
        highlights: [
            "Full CRM tracking with automated email alerts",
            "Dynamic client dashboard with role-based access",
            "Responsive dashboard layouts with drag-and-drop features",
            "Optimized data querying with MongoDB indexing"
        ],
        stack: "React.js · Node.js · Express · MongoDB",
        image: "/project2.png",
        link: "https://github.com/KunalBose2772",
        bg: "#EDFDF5", // Soft Mint Green
        textColor: "text-emerald-600",
        tint: "bg-emerald-500/10",
        border: "border-emerald-200/50"
    },
    {
        id: "03",
        number: "03",
        title: "Zebir",
        subtitle: "Premium Fashion Ecommerce",
        description: "A high-fidelity fashion retail store optimized for luxury brand storytelling. Includes complex animation micro-interactions, robust inventory syncing, and a multi-currency lightning-fast checkout workflow.",
        highlights: [
            "Fluid catalog navigation with Framer Motion",
            "Headless Shopify API integration",
            "Secure serverless Stripe checkout",
            "High Core Web Vitals performance scores"
        ],
        stack: "Next.js · React · Shopify API · Stripe",
        image: "/project1.png",
        link: "https://github.com/KunalBose2772",
        bg: "#FFF5F5", // Soft Rose Blush
        textColor: "text-rose-600",
        tint: "bg-rose-500/10",
        border: "border-rose-200/50"
    }
];

export default function Work() {
    const containerRef = useRef(null);
    const [winWidth, setWinWidth] = useState(1200);

    useEffect(() => {
        setWinWidth(window.innerWidth);
        const handleResize = () => setWinWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Track scroll progress of the entire section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Custom smooth spring for scroll progress to prevent jitter
    const smoothProgress = useSpring(scrollYProgress, {
        damping: 35,
        stiffness: 150,
        mass: 0.5
    });

    // Map scroll progress to project active states
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            if (latest < 0.35) {
                setActiveIndex(0);
            } else if (latest < 0.7) {
                setActiveIndex(1);
            } else {
                setActiveIndex(2);
            }
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    // Map scroll progress to container background color transitions (smooth pastel colors)
    const bgColor = useTransform(
        smoothProgress,
        [0, 0.35, 0.7, 1],
        ["#F0F4FF", "#EDFDF5", "#FFF5F5", "#FFF5F5"]
    );

    // Mouse movement state for custom cursor & image parallax
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [showCursor, setShowCursor] = useState(false);
    const [imageOffset, setImageOffset] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        
        // Custom cursor pos relative to container
        const cursorX = e.clientX - rect.left;
        const cursorY = e.clientY - rect.top;
        setMousePos({ x: cursorX, y: cursorY });

        // Image parallax calculation (subtle movement relative to center)
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const offsetLimit = 22; // max pixels it can slide
        const parallaxX = ((e.clientX - rect.left) - centerX) / centerX * offsetLimit;
        const parallaxY = ((e.clientY - rect.top) - centerY) / centerY * offsetLimit;
        setImageOffset({ x: parallaxX, y: parallaxY });
    };

    const handleMouseLeave = () => {
        setShowCursor(false);
        setImageOffset({ x: 0, y: 0 });
    };

    return (
        <>
            {/* MOBILE LAYOUT (Natural scroll, beautiful cards) */}
            <div className="block lg:hidden w-full py-16 px-6 bg-slate-50 border-t border-slate-100">
                <div className="max-w-2xl mx-auto flex flex-col gap-12">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-900/10 pb-4">
                        <div className="flex items-center gap-3">
                            <Briefcase className="w-5 h-5 text-slate-700" />
                            <span className="font-sans font-bold tracking-[0.25em] text-xs uppercase text-slate-800">
                                SELECTED WORK
                            </span>
                        </div>
                        <span className="font-mono text-xs font-semibold text-slate-500">
                            {PROJECTS.length} Projects
                        </span>
                    </div>

                    {/* Project Cards */}
                    {PROJECTS.map((project, idx) => (
                        <div 
                            key={project.id} 
                            style={{ backgroundColor: project.bg }}
                            className="rounded-3xl border border-slate-900/10 shadow-[0_15px_45px_rgba(15,23,42,0.03)] p-6 md:p-8 flex flex-col gap-6"
                        >
                            {/* Project Badge */}
                            <div className="flex justify-between items-center">
                                <div className={`px-3 py-1 rounded-full ${project.tint} ${project.border} border`}>
                                    <span className={`text-[10px] font-bold uppercase tracking-widest font-mono ${project.textColor}`}>
                                        Project {project.id}
                                    </span>
                                </div>
                                <span className="text-2xl font-bold font-mono text-slate-400">
                                    {project.number}
                                </span>
                            </div>

                            {/* Title & Description */}
                            <div>
                                <h3 className="text-2xl md:text-3xl font-heading font-black text-slate-900 mb-1">
                                    {project.title}
                                </h3>
                                <h4 className="text-sm md:text-base font-semibold text-slate-600 mb-4">
                                    {project.subtitle}
                                </h4>
                                <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {/* Browser Mockup Image */}
                            <div className="relative w-full aspect-[16/10] rounded-2xl border border-slate-900/10 shadow-[0_8px_24px_rgba(0,0,0,0.02)] overflow-hidden bg-white">
                                {/* Browser Header */}
                                <div className="absolute top-0 left-0 right-0 h-6 bg-[#080b11]/5 border-b border-slate-900/5 px-3 flex items-center gap-1 z-30">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                </div>
                                <div className="relative w-full h-full pt-6">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-top pt-6"
                                        sizes="100vw"
                                    />
                                </div>
                            </div>

                            {/* Highlights */}
                            <div className="flex flex-col gap-2">
                                {project.highlights.map((item, hIdx) => (
                                    <div key={hIdx} className="flex gap-2.5 items-start">
                                        <div className={`w-1.5 h-1.5 rounded-[3px] mt-1.5 ${project.tint} flex-shrink-0`} />
                                        <span className="text-xs md:text-sm font-medium text-slate-600 leading-snug">{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Stack & Link */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-900/10 mt-2">
                                <div className="flex flex-col">
                                    <span className="text-[9px] uppercase tracking-widest font-bold text-slate-400 mb-1">Architecture Stack</span>
                                    <span className="text-xs font-mono text-slate-800 font-semibold">{project.stack}</span>
                                </div>
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="group flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-slate-900 text-white px-5 py-3 rounded-xl hover:bg-slate-800 transition-colors shrink-0"
                                >
                                    Live Preview
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* DESKTOP LAYOUT (Sticky progress, parallax, custom cursor) */}
            <motion.div
                ref={containerRef}
                style={{ backgroundColor: bgColor }}
                className="hidden lg:block relative min-h-[300vh] w-full transition-colors duration-700 ease-out select-none"
            >
                {/* Sticky Wrapper */}
                <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden z-10">
                    
                    {/* Background Large Number Reveal */}
                    <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden pointer-events-none z-0">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={activeIndex}
                                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                                animate={{ opacity: 0.1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -80, scale: 0.9 }}
                                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[42vw] font-black text-slate-800 tracking-tighter leading-none select-none font-sans"
                            >
                                {PROJECTS[activeIndex].number}
                            </motion.span>
                        </AnimatePresence>
                    </div>

                    <div className="max-w-[1480px] w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col h-[85vh] justify-between pointer-events-none">
                        
                        {/* Header */}
                        <div className="flex flex-row items-center justify-between border-b border-slate-900/10 pb-4 w-full">
                            <div className="flex items-center gap-3">
                                <Briefcase className="w-5 h-5 text-slate-700" />
                                <span className="font-sans font-bold tracking-[0.25em] text-xs uppercase text-slate-800">
                                    SELECTED WORK
                                </span>
                            </div>
                            <span className="font-mono text-xs font-semibold text-slate-500">
                                {activeIndex + 1} / {PROJECTS.length}
                            </span>
                        </div>

                        {/* Main Story Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center my-auto w-full">
                            
                            {/* Left Column: Project details */}
                            <div className="lg:col-span-5 flex flex-col justify-center items-start text-left z-20 pointer-events-auto">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                                        className="flex flex-col items-start w-full"
                                    >
                                        <div className={`px-3 py-1 rounded-full ${PROJECTS[activeIndex].tint} ${PROJECTS[activeIndex].border} border mb-4`}>
                                            <span className={`text-[10px] font-bold uppercase tracking-widest font-mono ${PROJECTS[activeIndex].textColor}`}>
                                                Project {PROJECTS[activeIndex].id}
                                            </span>
                                        </div>

                                        <h3 className="text-[clamp(32px,4.5vw,56px)] leading-[1.05] font-heading font-black text-slate-900 mb-2 tracking-tight">
                                            {PROJECTS[activeIndex].title}
                                        </h3>

                                        <h4 className="text-lg md:text-xl font-sans font-semibold text-slate-700 mb-5 leading-snug">
                                            {PROJECTS[activeIndex].subtitle}
                                        </h4>

                                        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 max-w-md">
                                            {PROJECTS[activeIndex].description}
                                        </p>

                                        {/* Architecture list */}
                                        <div className="flex flex-col gap-2.5 mb-8 w-full max-w-sm">
                                            {PROJECTS[activeIndex].highlights.map((item, idx) => (
                                                <div key={idx} className="flex gap-2.5 items-start">
                                                    <div className={`w-1.5 h-1.5 rounded-[3px] mt-1.5 ${PROJECTS[activeIndex].tint} flex-shrink-0`} />
                                                    <span className="text-xs md:text-sm font-medium text-slate-500 leading-snug">{item}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Footer Details */}
                                        <div className="flex flex-wrap items-center gap-4 w-full pt-4 border-t border-slate-900/10">
                                            <div className="flex flex-col">
                                                <span className="text-[9px] uppercase tracking-widest font-bold text-slate-400 mb-1">Architecture Stack</span>
                                                <span className="text-xs font-mono text-slate-700">{PROJECTS[activeIndex].stack}</span>
                                            </div>

                                            <Link
                                                href={PROJECTS[activeIndex].link}
                                                target="_blank"
                                                className="group flex items-center gap-1.5 ml-auto text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-blue-600 transition-colors py-2"
                                            >
                                                [Preview]
                                                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                            </Link>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Right Column: Interaction Visual Area */}
                            <div className="lg:col-span-7 flex justify-center items-center relative z-20">
                                
                                {/* Hover Interactive Area (Pointer events auto) */}
                                <div
                                    className="relative w-full max-w-[620px] aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11] rounded-2xl border border-slate-900/10 shadow-[0_20px_50px_rgba(15,23,42,0.08)] bg-white/70 backdrop-blur-md cursor-none overflow-hidden group pointer-events-auto"
                                    onMouseMove={handleMouseMove}
                                    onMouseEnter={() => setShowCursor(true)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {/* Expanding Visual Screen inside */}
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeIndex}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                                            className="relative w-full h-full overflow-hidden"
                                        >
                                            {/* Browser header bar decoration */}
                                            <div className="absolute top-0 left-0 right-0 h-6 bg-[#080b11]/5 border-b border-slate-900/5 px-3 flex items-center gap-1 z-30 select-none">
                                                <div className="w-1.5 h-1.5 rounded-full bg-slate-400/40" />
                                                <div className="w-1.5 h-1.5 rounded-full bg-slate-400/40" />
                                                <div className="w-1.5 h-1.5 rounded-full bg-slate-400/40" />
                                            </div>

                                            {/* Parallax Image wrapper */}
                                            <motion.div
                                                style={{
                                                    x: imageOffset.x,
                                                    y: imageOffset.y
                                                }}
                                                transition={{ type: "spring", stiffness: 120, damping: 24 }}
                                                className="relative w-full h-full scale-[1.04] transition-transform duration-700 ease-out group-hover:scale-[1.10] pt-6"
                                            >
                                                <Image
                                                    src={PROJECTS[activeIndex].image}
                                                    alt={PROJECTS[activeIndex].title}
                                                    fill
                                                    className="object-cover object-top pt-6"
                                                    sizes="(min-width: 1024px) 50vw, 100vw"
                                                    priority
                                                />
                                            </motion.div>
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Custom Floating "Open Project" Cursor */}
                                    <motion.div
                                        className="pointer-events-none absolute z-50 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2.5 rounded-full flex items-center gap-1.5 shadow-xl"
                                        style={{
                                            left: mousePos.x,
                                            top: mousePos.y,
                                            translateX: "-50%",
                                            translateY: "-50%"
                                        }}
                                        animate={{ 
                                            scale: showCursor ? 1 : 0, 
                                            opacity: showCursor ? 1 : 0 
                                        }}
                                        transition={{ type: "spring", stiffness: 280, damping: 22 }}
                                    >
                                        Open Project
                                        <ArrowUpRight className="w-3 h-3 text-brand-accent" />
                                    </motion.div>
                                </div>
                            </div>

                        </div>

                        {/* Footer Progress Indicators */}
                        <div className="flex flex-row gap-4 items-center justify-start w-full">
                            {PROJECTS.map((item, idx) => (
                                <div 
                                    key={idx}
                                    className="flex flex-col gap-1 items-start cursor-pointer pointer-events-auto"
                                    onClick={() => {
                                        // Smoothly scroll to the corresponding section area
                                        if (containerRef.current) {
                                            const containerHeight = containerRef.current.offsetHeight;
                                            const scrollTarget = containerRef.current.offsetTop + (idx * (containerHeight / PROJECTS.length));
                                            window.scrollTo({
                                                top: scrollTarget + 100,
                                                behavior: "smooth"
                                            });
                                        }
                                    }}
                                >
                                    <span className={`text-[10px] font-mono font-bold transition-all duration-300 ${
                                        activeIndex === idx ? "text-slate-900" : "text-slate-400"
                                    }`}>
                                        {item.number}
                                    </span>
                                    <div className="relative w-14 h-1 rounded-full bg-slate-200 overflow-hidden">
                                        <motion.div
                                            className="absolute left-0 top-0 h-full bg-slate-900 rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: activeIndex === idx ? "100%" : "0%" }}
                                            transition={{ duration: 0.4 }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </motion.div>
        </>
    );
}
