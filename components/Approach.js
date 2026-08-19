"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence, useTransform } from "framer-motion";
import { Terminal, Lightbulb, PenTool, Layout, Code, ShieldCheck, Cpu, Rocket } from "lucide-react";

const STAGES = [
    {
        id: "01",
        label: "Idea",
        title: "The Seed",
        description: "Translating a problem statement into a technical hypothesis. Sketching out system workflows, scraper capabilities, and architectural structure.",
        icon: Lightbulb,
        color: "text-amber-400"
    },
    {
        id: "02",
        label: "Wireframe",
        title: "Layout Blueprint",
        description: "Structuring navigation, data priority, layout grids, and dashboard view hierarchy. Designing the structural skeleton without styling distractions.",
        icon: PenTool,
        color: "text-slate-400"
    },
    {
        id: "03",
        label: "Figma UI",
        title: "Hi-Fi Styling",
        description: "Injecting modern aesthetics: sleek dark workspace palettes, rich borders, micro-copy, typography, and premium glassmorphic effects.",
        icon: Layout,
        color: "text-pink-400"
    },
    {
        id: "04",
        label: "Development",
        title: "The Codebase",
        description: "Converting mockups into modular, production-ready React components. Binding frontend pages to FastAPI backend scraper handlers.",
        icon: Code,
        color: "text-blue-400"
    },
    {
        id: "05",
        label: "Testing",
        title: "Quality Gates",
        description: "Testing proxy rotation failover, parsing accuracy under load, and API endpoint security checks. Ensuring 99% uptime of scraping processes.",
        icon: ShieldCheck,
        color: "text-emerald-400"
    },
    {
        id: "06",
        label: "Deployment",
        title: "Docker Launch",
        description: "Wrapping microservices into Docker containers. Setting up continuous delivery pipelines to deploy to remote hostings securely.",
        icon: Cpu,
        color: "text-indigo-400"
    },
    {
        id: "07",
        label: "Final Launch",
        title: "Live Product",
        description: "The application is live, fully optimized, and serving leads in real-time. Responsive, scalable, and built to grow.",
        icon: Rocket,
        color: "text-orange-400"
    }
];

export default function Approach() {
    const sectionRef = useRef(null);
    const [stage, setStage] = useState(0);

    // Track scroll progress of this pipeline
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const contentOpacity = useTransform(scrollYProgress, [0, 0.08, 0.92, 1], [0, 1, 1, 0]);
    const contentScale = useTransform(scrollYProgress, [0, 0.08, 0.92, 1], [0.96, 1, 1, 0.96]);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Divide progress (0.0 to 1.0) into 7 segments (0 to 6)
        const currentStage = Math.min(Math.floor(latest * 7.2), 6);
        setStage(currentStage);
    });

    return (
        <div 
            ref={sectionRef} 
            className="relative min-h-[550vh] w-full bg-slate-50 border-t border-slate-200 select-none"
        >
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[30%] right-[10%] w-[380px] h-[380px] rounded-full bg-purple-100/40 blur-[130px]" />
                <div className="absolute bottom-[30%] left-[10%] w-[420px] h-[420px] rounded-full bg-blue-100/40 blur-[150px]" />
            </div>

            {/* Sticky Viewport */}
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center z-10 px-6 overflow-hidden">
                <motion.div
                    style={{ opacity: contentOpacity, scale: contentScale }}
                    className="w-full flex flex-col justify-center items-center"
                >
                    {/* Title Section */}
                    <div className="text-center mb-6 max-w-xl z-20">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-global)] to-indigo-650 font-sans font-bold tracking-[0.25em] text-xs uppercase block mb-2">
                            THE DEVELOPMENT PIPELINE
                        </span>
                        <h2 className="text-2xl md:text-4xl font-heading font-black text-slate-900 tracking-tight leading-none mb-3 font-sora">
                            The Transformation
                        </h2>
                        <p className="text-slate-655 text-xs max-w-sm mx-auto">
                            Scroll down to watch a concept evolve from a raw idea to a fully launched production codebase.
                        </p>
                    </div>

                {/* Main Content Layout Grid */}
                <div className="max-w-[1280px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center z-20 h-[50vh] my-auto">
                    
                    {/* Left Column: Description & Details */}
                    <div className="lg:col-span-5 flex flex-col justify-center text-left min-h-[220px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={stage}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="flex flex-col items-start w-full"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    {(() => {
                                        const ActiveIcon = STAGES[stage].icon;
                                        return <ActiveIcon className={`w-5 h-5 ${STAGES[stage].color}`} />;
                                    })()}
                                    <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-widest">
                                        STAGE {STAGES[stage].id} / 07
                                    </span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-heading font-black text-slate-900 font-sora mb-3">
                                    {STAGES[stage].title}
                                </h3>

                                <p className="text-slate-655 text-sm md:text-base leading-relaxed mb-6 max-w-md">
                                    {STAGES[stage].description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Column: Morphing Visual Box */}
                    <div className="lg:col-span-7 flex justify-center items-center">
                        <div className="relative w-full max-w-[580px] aspect-[16/10] bg-white rounded-3xl border border-slate-200/80 shadow-[0_15px_40px_rgba(0,0,0,0.04)] p-6 flex flex-col overflow-hidden">
                            
                            <AnimatePresence mode="wait">
                                {/* Stage 1: Idea (Bulb workflow sketch) */}
                                {stage === 0 && (
                                    <motion.div
                                        key="idea"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center font-mono text-slate-500 text-[10px]"
                                    >
                                        <Lightbulb className="w-12 h-12 text-amber-500 mb-4 animate-pulse" />
                                        <div className="flex flex-col gap-2 max-w-[240px]">
                                            <p className="text-slate-900 font-bold uppercase tracking-wider text-[11px] font-sora">LeadMiner Concept</p>
                                            <div className="border border-dashed border-slate-200 rounded p-2.5 flex items-center justify-between text-left mt-2 bg-slate-50 text-slate-600">
                                                <span>Maps Scraper</span>
                                                <span>➔</span>
                                                <span>Proxy Relays</span>
                                                <span>➔</span>
                                                <span>CRM DB</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Stage 2: Wireframe (Outline grid boxes) */}
                                {stage === 1 && (
                                    <motion.div
                                        key="wireframe"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 flex flex-col justify-between p-5 font-mono text-slate-600 text-[8px] border-2 border-dashed border-slate-200 m-2 rounded-xl bg-slate-55/20"
                                    >
                                        <div className="border border-dashed border-slate-200 bg-white p-2 flex items-center justify-between">
                                            <span>[ HEADER / LOGO ]</span>
                                            <span>[ NAVIGATION TABS ]</span>
                                        </div>
                                        <div className="grid grid-cols-3 gap-3 flex-grow my-3">
                                            <div className="col-span-2 border border-dashed border-slate-200 bg-white p-3 flex flex-col justify-between">
                                                <span>[ CAMPAIGN CHART VIEW ]</span>
                                                <div className="h-10 border-t border-dashed border-slate-200/60 pt-2">
                                                    <span>[ X-AXIS / PROGRESS ]</span>
                                                </div>
                                            </div>
                                            <div className="col-span-1 flex flex-col gap-2">
                                                <div className="border border-dashed border-slate-200 bg-white p-2 flex-grow flex items-center justify-center">
                                                    <span>[ STATS A ]</span>
                                                </div>
                                                <div className="border border-dashed border-slate-200 bg-white p-2 flex-grow flex items-center justify-center">
                                                    <span>[ STATS B ]</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border border-dashed border-slate-200 bg-white p-2 text-center">
                                            <span>[ SYSTEM PROGRESS LOGS ]</span>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Stage 3: Figma UI (Aesthetic layout styled) */}
                                {stage === 2 && (
                                    <motion.div
                                        key="figma"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 flex flex-col p-4 text-left bg-white text-slate-500 select-none"
                                    >
                                        {/* Styled Figma Workspace border and header */}
                                        <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3.5">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2.5 h-2.5 rounded-full bg-pink-500" />
                                                <span className="text-[9px] font-bold text-slate-800 tracking-wider">LeadMiner Figma Design</span>
                                            </div>
                                            <span className="text-[7.5px] font-mono text-pink-500 border border-pink-200 bg-pink-50/50 px-2 py-0.5 rounded">Figma Preview</span>
                                        </div>

                                        <div className="grid grid-cols-12 gap-3 flex-grow overflow-hidden opacity-90">
                                            <div className="col-span-8 bg-slate-50 rounded-xl border border-slate-200/80 p-3.5 flex flex-col justify-between">
                                                <div>
                                                    <span className="text-[8px] uppercase tracking-wider font-bold text-slate-400">Extraction Progress</span>
                                                    <h5 className="text-[12px] font-bold text-slate-800 font-sora mt-0.5">Dental Clinics (CA)</h5>
                                                </div>
                                                <div className="h-10 w-full flex items-end gap-1 pb-1">
                                                    {[20, 50, 30, 80, 40, 90, 60, 40, 80].map((h, i) => (
                                                        <div key={i} className="flex-grow bg-pink-100 rounded-sm relative h-full">
                                                            <div className="absolute bottom-0 left-0 right-0 bg-pink-500 rounded-sm" style={{ height: `${h}%` }} />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="col-span-4 flex flex-col gap-2">
                                                <div className="bg-slate-50 rounded-xl border border-slate-200/80 p-2.5 flex flex-col justify-between flex-grow">
                                                    <span className="text-[7px] uppercase font-bold text-slate-400">Total Scraped</span>
                                                    <span className="text-xs font-bold text-slate-800 font-mono leading-none">142,504</span>
                                                </div>
                                                <div className="bg-slate-50 rounded-xl border border-slate-200/80 p-2.5 flex flex-col justify-between flex-grow">
                                                    <span className="text-[7px] uppercase font-bold text-slate-400">Proxy Relays</span>
                                                    <span className="text-xs font-bold text-pink-600 font-mono leading-none">45 Active</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Stage 4: Code/Development (React syntax editor) */}
                                {stage === 3 && (
                                    <motion.div
                                        key="code"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 flex flex-col text-left font-mono text-[9px] md:text-[9.5px] leading-relaxed text-slate-300 bg-[#0B0F19]"
                                    >
                                        <div className="bg-[#121824] border-b border-slate-800/80 px-3.5 py-1.5 flex items-center justify-between">
                                            <span className="text-[8px] font-semibold text-slate-400">LeadMiner.js</span>
                                            <span className="text-[8px] text-blue-400">React · Next.js</span>
                                        </div>
                                        <div className="p-4 flex-grow relative overflow-hidden select-none">
                                            <div className="pl-6 flex flex-col gap-0.5">
                                                <p><span className="text-pink-500">import</span> React <span className="text-pink-500">from</span> <span className="text-emerald-400">"react"</span>;</p>
                                                <p><span className="text-pink-500">import</span> &#123; motion &#125; <span className="text-pink-500">from</span> <span className="text-emerald-400">"framer-motion"</span>;</p>
                                                <p className="mt-2"><span className="text-pink-500">export default function</span> <span className="text-blue-400">CampaignPanel</span>() &#123;</p>
                                                <p className="pl-4"><span className="text-pink-500">return</span> (</p>
                                                <p className="pl-8">&lt;<span className="text-teal-400">div</span> <span className="text-purple-400">className</span>=<span className="text-emerald-400">"bg-slate-900 border"</span>&gt;</p>
                                                <p className="pl-12">&lt;<span className="text-teal-400">ActivityChart</span> /&gt;</p>
                                                <p className="pl-8">&lt;/<span className="text-teal-400">div</span>&gt;</p>
                                                <p className="pl-4">);</p>
                                                <p>&#125;</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Stage 5: Testing (Validation checklists) */}
                                {stage === 4 && (
                                    <motion.div
                                        key="testing"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 flex flex-col p-5 text-left bg-white font-sans"
                                    >
                                        <div className="flex items-center gap-1.5 border-b border-slate-100 pb-2 mb-3.5">
                                            <ShieldCheck className="w-4 h-4 text-emerald-500" />
                                            <span className="text-[9px] font-bold text-slate-800 font-mono tracking-widest">PRODUCTION TESTING CONSOLE</span>
                                        </div>

                                        <div className="flex flex-col gap-3 flex-grow my-auto font-mono text-[9px] text-slate-655">
                                            <div className="flex items-center justify-between bg-slate-50 rounded p-2 border border-slate-200">
                                                <span>✓ Proxy Rotation Integration</span>
                                                <span className="text-emerald-600 font-bold">100% PASS</span>
                                            </div>
                                            <div className="flex items-center justify-between bg-slate-50 rounded p-2 border border-slate-200">
                                                <span>✓ Data Parsing Schema Uptime</span>
                                                <span className="text-emerald-600 font-bold">99.8% PASS</span>
                                            </div>
                                            <div className="flex items-center justify-between bg-slate-50 rounded p-2 border border-slate-200">
                                                <span>✓ Server Endpoint Rate Limiters</span>
                                                <span className="text-emerald-600 font-bold">100% PASS</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Stage 6: Deployment (Docker console builds) */}
                                {stage === 5 && (
                                    <motion.div
                                        key="deployment"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 flex flex-col text-left font-mono text-[8.5px] leading-relaxed text-slate-400 bg-[#0B0F19] p-4 h-full overflow-hidden"
                                    >
                                        <div className="flex items-center gap-1.5 border-b border-slate-800/80 pb-2 mb-2">
                                            <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                                            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Docker Container Build logs</span>
                                        </div>
                                        <div className="flex-grow flex flex-col gap-1 overflow-hidden select-none">
                                            <p className="text-indigo-400 font-semibold">&gt; docker build -t leadminer-scraper:latest .</p>
                                            <p className="text-slate-500">Step 1/5 : FROM node:20-alpine</p>
                                            <p className="text-slate-350">---&gt; Loading dependencies... Done</p>
                                            <p className="text-slate-500">Step 4/5 : RUN npm run build</p>
                                            <p className="text-slate-350">---&gt; Exporting static client assets...</p>
                                            <p className="text-green-400 font-bold">&gt; docker-compose up -d [CONTAINER RUNNING]</p>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Stage 7: Final Launch */}
                                {stage === 6 && (
                                    <motion.div
                                        key="launch"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="absolute inset-0 flex flex-col p-4 text-left bg-white text-slate-655 select-none"
                                    >
                                        {/* Styled Figma Workspace border and header */}
                                        <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3.5">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
                                                <span className="text-[10px] font-black text-slate-900 font-mono tracking-widest font-sora">LEADMINER</span>
                                            </div>
                                            <span className="text-[7.5px] font-mono text-emerald-600 border border-emerald-250 bg-emerald-50 px-2 py-0.5 rounded">Live App</span>
                                        </div>

                                        <div className="grid grid-cols-12 gap-3.5 flex-grow overflow-hidden">
                                            <div className="col-span-8 bg-slate-50 rounded-xl border border-slate-200 p-3.5 flex flex-col justify-between shadow-inner">
                                                <div>
                                                    <span className="text-[8px] uppercase tracking-wider text-slate-400 font-bold block mb-0.5">Extraction Activity</span>
                                                    <h4 className="text-xs font-bold text-slate-800 leading-tight">Campaign: Dental Clinics (SF)</h4>
                                                </div>
                                                {/* SVG Area Chart */}
                                                <div className="w-full h-16 mt-2 relative">
                                                    <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                                                        <defs>
                                                            <linearGradient id="launchChartGlow" x1="0" y1="0" x2="0" y2="1">
                                                                <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
                                                                <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                                                            </linearGradient>
                                                        </defs>
                                                        <path d="M0 38 Q20 10 45 15 T100 5 L100 40 L0 40 Z" fill="url(#launchChartGlow)" />
                                                        <path d="M0 38 Q20 10 45 15 T100 5" fill="none" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
                                                    </svg>
                                                    <div className="absolute top-1 right-[20%] w-2 h-2 rounded-full bg-emerald-400 border-2 border-white shadow-[0_0_8px_#10b981] animate-ping" />
                                                </div>
                                            </div>

                                            <div className="col-span-4 flex flex-col gap-2.5">
                                                <div className="bg-slate-50 rounded-xl border border-slate-200 p-2.5 flex flex-col justify-between flex-grow shadow-md">
                                                    <span className="text-[7px] uppercase font-bold text-slate-400">Total Scraped</span>
                                                    <span className="text-sm font-bold text-slate-800 font-mono leading-none tracking-tight">142,504</span>
                                                </div>
                                                <div className="bg-slate-50 rounded-xl border border-slate-200 p-2.5 flex flex-col justify-between flex-grow shadow-md">
                                                    <span className="text-[7px] uppercase font-bold text-slate-400">Proxy Health</span>
                                                    <span className="text-sm font-bold text-emerald-600 font-mono leading-none tracking-tight">99.8%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            
                        </div>
                    </div>

                </div>

                {/* Progress Pipeline Dots */}
                <div className="flex flex-row items-center gap-2 md:gap-4 mt-8 z-20">
                    {STAGES.map((item, idx) => {
                         const isActive = stage === idx;
                         return (
                             <div 
                                 key={idx} 
                                 className="flex flex-col items-center gap-1 cursor-pointer pointer-events-auto"
                                 onClick={() => {
                                     if (sectionRef.current) {
                                         const secHeight = sectionRef.current.offsetHeight;
                                         const scrollTarget = sectionRef.current.offsetTop + (idx * (secHeight / STAGES.length));
                                         window.scrollTo({
                                             top: scrollTarget + 100,
                                             behavior: "smooth"
                                         });
                                     }
                                 }}
                             >
                                 <span className={`text-[8.5px] font-mono font-bold transition-all duration-300 ${
                                     isActive ? "text-slate-800" : "text-slate-400 hover:text-slate-600"
                                 }`}>
                                     {item.label}
                                 </span>
                                 <div className={`w-10 md:w-14 h-1.5 rounded-full transition-all duration-500 ${
                                     isActive ? "bg-[var(--accent-global)] shadow-[0_0_8px_rgba(124,58,237,0.3)]" : "bg-slate-200"
                                 }`} />
                             </div>
                         );
                    })}
                </div>
            </motion.div>
        </div>
    </div>
);
}
