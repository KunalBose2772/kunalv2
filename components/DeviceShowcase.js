"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence, useTransform } from "framer-motion";

// =========================================================================
// PREMIUM SVG INDICATOR ICONS
// =========================================================================

const LaptopIndicatorIcon = ({ isActive }) => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="11" rx="1.5" stroke={isActive ? "#3B82F6" : "currentColor"} fill={isActive ? "rgba(59, 130, 246, 0.1)" : "none"} />
        <path d="M1 17h22v1.5a1.5 1.5 0 0 1-1.5 1.5H2.5A1.5 1.5 0 0 1 1 18.5V17z" stroke={isActive ? "#3B82F6" : "currentColor"} />
        <path d="M10 17h4" stroke={isActive ? "#3B82F6" : "currentColor"} strokeLinecap="round" />
    </svg>
);

const TabletIndicatorIcon = ({ isActive }) => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="14" rx="2" stroke={isActive ? "#10B981" : "currentColor"} fill={isActive ? "rgba(16, 185, 129, 0.1)" : "none"} />
        <circle cx="20" cy="11" r="0.8" fill={isActive ? "#10B981" : "currentColor"} />
    </svg>
);

const MobileIndicatorIcon = ({ isActive }) => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="2" width="12" height="20" rx="2.5" stroke={isActive ? "#6366F1" : "currentColor"} fill={isActive ? "rgba(99, 102, 241, 0.1)" : "none"} />
        <circle cx="12" cy="19" r="0.8" fill={isActive ? "#6366F1" : "currentColor"} />
    </svg>
);

const DashboardIndicatorIcon = ({ isActive }) => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="18" rx="2" stroke={isActive ? "#06B6D4" : "currentColor"} fill={isActive ? "rgba(6, 182, 212, 0.1)" : "none"} />
        <circle cx="5" cy="6" r="0.8" fill={isActive ? "#06B6D4" : "currentColor"} />
        <circle cx="7.5" cy="6" r="0.8" fill={isActive ? "#06B6D4" : "currentColor"} />
        <circle cx="10" cy="6" r="0.8" fill={isActive ? "#06B6D4" : "currentColor"} />
        <path d="M6 12h12M6 16h8" stroke={isActive ? "#06B6D4" : "currentColor"} strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
    </svg>
);

const CodeIndicatorIcon = ({ isActive }) => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 6L2 12L8 18" stroke={isActive ? "#EC4899" : "currentColor"} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 6L22 12L16 18" stroke={isActive ? "#EC4899" : "currentColor"} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 5L10 19" stroke={isActive ? "#EC4899" : "currentColor"} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default function DeviceShowcase() {
    const showcaseRef = useRef(null);
    const [stage, setStage] = useState(0);

    // Track scroll progress of this showcase section (desktop only)
    const { scrollYProgress } = useScroll({
        target: showcaseRef,
        offset: ["start start", "end end"]
    });

    // Smooth entry/exit opacity and scale transformations
    const contentOpacity = useTransform(scrollYProgress, [0, 0.08, 0.92, 1], [0, 1, 1, 0]);
    const contentScale = useTransform(scrollYProgress, [0, 0.08, 0.92, 1], [0.96, 1, 1, 0.96]);

    // Divide the scroll progress into 5 stages (only active on desktop scroll)
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest < 0.20) {
            setStage(0); // Laptop
        } else if (latest < 0.40) {
            setStage(1); // Tablet
        } else if (latest < 0.60) {
            setStage(2); // Mobile
        } else if (latest < 0.80) {
            setStage(3); // Dashboard
        } else {
            setStage(4); // Code Editor
        }
    });

    // Define device layout properties for each stage on Desktop
    const getStageStyles = (stageIndex) => {
        switch (stageIndex) {
            case 0: // Laptop
                return {
                    width: 580,
                    height: 360,
                    borderRadius: "12px",
                    rotateX: 0,
                    rotateY: 0,
                    rotateZ: 0,
                    scale: 1,
                    boxShadow: "0px 20px 50px -12px rgba(0,0,0,0.5), 0px 0px 1px 1px rgba(255,255,255,0.05)"
                };
            case 1: // Tablet
                return {
                    width: 500,
                    height: 360,
                    borderRadius: "12px",
                    rotateX: 0,
                    rotateY: 0,
                    rotateZ: 0,
                    scale: 1,
                    boxShadow: "0px 20px 50px -12px rgba(0,0,0,0.5), 0px 0px 1px 1px rgba(255,255,255,0.05)"
                };
            case 2: // Mobile (Vertical portrait)
                return {
                    width: 200,
                    height: 410,
                    borderRadius: "16px",
                    rotateX: 0,
                    rotateY: 8,
                    rotateZ: 0,
                    scale: 1,
                    boxShadow: "0px 15px 40px -10px rgba(0,0,0,0.6), 0px 0px 1px 1px rgba(255,255,255,0.05)"
                };
            case 3: // Dashboard (Isometric/Browser window)
                return {
                    width: 620,
                    height: 340,
                    borderRadius: "8px",
                    rotateX: 6,
                    rotateY: -8,
                    rotateZ: 0,
                    scale: 0.98,
                    boxShadow: "-15px 20px 50px -10px rgba(0,0,0,0.6), 0px 0px 1px 1px rgba(255,255,255,0.05)"
                };
            case 4: // Code Editor (Frontal IDE)
                return {
                    width: 600,
                    height: 340,
                    borderRadius: "8px",
                    rotateX: 0,
                    rotateY: 0,
                    rotateZ: 0,
                    scale: 1,
                    boxShadow: "0px 20px 50px -12px rgba(0,0,0,0.5), 0px 0px 1px 1px rgba(255,255,255,0.05)"
                };
            default:
                return {};
        }
    };

    const currentStyle = getStageStyles(stage);

    // Supporting Background glows & coords based on stage
    const getGlowBg = (idx) => {
        switch (idx) {
            case 0: return "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0) 70%)";
            case 1: return "radial-gradient(circle, rgba(16,185,129,0.18) 0%, rgba(16,185,129,0) 70%)";
            case 2: return "radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(99,102,241,0) 70%)";
            case 3: return "radial-gradient(circle, rgba(6,182,212,0.18) 0%, rgba(6,182,212,0) 70%)";
            case 4: return "radial-gradient(circle, rgba(236,72,153,0.18) 0%, rgba(236,72,153,0) 70%)";
            default: return "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0) 70%)";
        }
    };

    const getGlowPosition = (idx) => {
        switch (idx) {
            case 0: return { x: "10%", y: "15%" };
            case 1: return { x: "35%", y: "25%" };
            case 2: return { x: "15%", y: "5%" };
            case 3: return { x: "40%", y: "20%" };
            case 4: return { x: "20%", y: "30%" };
            default: return { x: "10%", y: "15%" };
        }
    };

    return (
        <>
            {/* =========================================================================
                1. MOBILE & TABLET LAYOUT (<1024px) - Pure CSS Responsiveness
                ========================================================================= */}
            <div 
                className="block lg:hidden relative py-16 w-full bg-[#050713] border-t border-slate-900/50 px-6 select-none overflow-hidden"
                style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.02) 1px, transparent 0)",
                    backgroundSize: "24px 24px"
                }}
            >
                {/* Dynamic Ambient Glow */}
                <motion.div
                    animate={{
                        background: getGlowBg(stage),
                    }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    className="absolute w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70"
                />

                <div className="relative z-10 flex flex-col gap-6 max-w-xl mx-auto w-full">
                    {/* Left Column Content */}
                    <div className="flex flex-col text-left">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-sans font-bold tracking-[0.2em] text-[10px] uppercase block mb-2">
                            ENGINEERING RESPONSIVE SYSTEMS
                        </span>
                        <h2 className="text-2xl font-heading font-black text-white tracking-tight leading-tight mb-2">
                            One Codebase. <br />
                            <span className="text-slate-400">Adaptive Ecosystems.</span>
                        </h2>
                        <p className="text-slate-500 text-xs leading-relaxed mb-4">
                            Tap a device to see how LeadMiner dynamically mutates across physical device form factors, keeping users connected to value at any screen size.
                        </p>

                        {/* Interactive Selector Tabs */}
                        <div className="flex flex-row flex-wrap items-center gap-3">
                            {[
                                { label: "Laptop", icon: LaptopIndicatorIcon, color: "rgba(59, 130, 246, 0.4)", activeColor: "#3B82F6", glowColor: "rgba(59,130,246,0.25)" },
                                { label: "Tablet", icon: TabletIndicatorIcon, color: "rgba(16, 185, 129, 0.4)", activeColor: "#10B981", glowColor: "rgba(16,185,129,0.25)" },
                                { label: "Mobile", icon: MobileIndicatorIcon, color: "rgba(99, 102, 241, 0.4)", activeColor: "#6366F1", glowColor: "rgba(99,102,241,0.25)" },
                                { label: "Dashboard", icon: DashboardIndicatorIcon, color: "rgba(6, 182, 212, 0.4)", activeColor: "#06B6D4", glowColor: "rgba(6,182,212,0.25)" },
                                { label: "Source Code", icon: CodeIndicatorIcon, color: "rgba(236, 72, 153, 0.4)", activeColor: "#EC4899", glowColor: "rgba(236,72,153,0.25)" }
                            ].map((item, idx) => {
                                const Icon = item.icon;
                                const isActive = stage === idx;
                                return (
                                    <button 
                                        key={idx}
                                        onClick={() => setStage(idx)}
                                        className="flex flex-col items-center gap-1.5 focus:outline-none group cursor-pointer"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            animate={{
                                                backgroundColor: isActive ? "rgba(255, 255, 255, 0.05)" : "rgba(255,255,255,0.01)",
                                                borderColor: isActive ? item.activeColor : "rgba(255,255,255,0.06)",
                                                color: isActive ? item.activeColor : "#64748b",
                                                boxShadow: isActive ? `0 0 12px 2px ${item.glowColor}, inset 0 1px 1px rgba(255,255,255,0.1)` : "none"
                                            }}
                                            className="w-9 h-9 rounded-xl border flex items-center justify-center relative overflow-hidden backdrop-blur-md"
                                        >
                                            <Icon isActive={isActive} />
                                        </motion.div>
                                        <span className={`text-[8px] font-bold tracking-wider transition-colors duration-300 font-mono uppercase ${
                                            isActive ? "text-white" : "text-slate-500"
                                        }`}>
                                            {item.label.split(" ")[0]}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Image Viewport (Flat Card for Mobile) */}
                    <div className="w-full flex items-center justify-center z-10 mt-2">
                        <div 
                            className="relative w-full bg-[#05070c] rounded-xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.5)] border border-white/5 transition-all duration-300"
                            style={{
                                aspectRatio: stage === 2 ? "0.49" : stage === 1 ? "1.35" : "1.6",
                                maxWidth: stage === 2 ? "200px" : "100%"
                            }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={stage}
                                    src={
                                        stage === 0 ? "/showcase-laptop.png" :
                                        stage === 1 ? "/showcase-tablet.png" :
                                        stage === 2 ? "/showcase-mobile.png" :
                                        stage === 3 ? "/showcase-dashboard.png" :
                                        "/showcase-code.png"
                                    }
                                    alt={`Ecosystem State ${stage}`}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-full object-cover"
                                />
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            {/* =========================================================================
                2. DESKTOP LAYOUT (>=1024px) - Interactive 3D Sticky Scroll Pinned
                ========================================================================= */}
            <div 
                ref={showcaseRef} 
                className="hidden lg:block relative min-h-[420vh] w-full bg-[#050713] border-t border-slate-900/50 select-none"
                style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.02) 1px, transparent 0)",
                    backgroundSize: "24px 24px"
                }}
            >
                {/* Dynamic Stirring Ambient Glow */}
                <motion.div
                    animate={{
                        background: getGlowBg(stage),
                        left: getGlowPosition(stage).x,
                        top: getGlowPosition(stage).y
                    }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    className="absolute w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none z-0"
                />

                {/* Sticky Split Layout Container */}
                <div className="sticky top-0 h-screen w-full flex items-center justify-center z-10 px-6 md:px-12 lg:px-20 overflow-hidden">
                    <motion.div
                        style={{ opacity: contentOpacity, scale: contentScale }}
                        className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
                    >
                        {/* Left Column: Heading, Subheading & Stage Indicators */}
                        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center text-left z-20">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-sans font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase block mb-2">
                                ENGINEERING RESPONSIVE SYSTEMS
                            </span>
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight leading-tight mb-3">
                                One Codebase. <br />
                                <span className="text-slate-400">Adaptive Ecosystems.</span>
                            </h2>
                            <p className="text-slate-500 text-xs md:text-sm max-w-md mb-6 leading-relaxed hidden sm:block">
                                Scroll to see how LeadMiner dynamically mutates across physical device form factors, keeping users connected to value at any screen size.
                            </p>

                            {/* Device indicators (Left-aligned & layout responsive) */}
                            <div className="flex flex-row flex-wrap items-center gap-3">
                                {[
                                    { label: "Laptop", icon: LaptopIndicatorIcon, color: "rgba(59, 130, 246, 0.4)", activeColor: "#3B82F6", glowColor: "rgba(59,130,246,0.25)" },
                                    { label: "Tablet", icon: TabletIndicatorIcon, color: "rgba(16, 185, 129, 0.4)", activeColor: "#10B981", glowColor: "rgba(16,185,129,0.25)" },
                                    { label: "Mobile", icon: MobileIndicatorIcon, color: "rgba(99, 102, 241, 0.4)", activeColor: "#6366F1", glowColor: "rgba(99,102,241,0.25)" },
                                    { label: "Dashboard", icon: DashboardIndicatorIcon, color: "rgba(6, 182, 212, 0.4)", activeColor: "#06B6D4", glowColor: "rgba(6,182,212,0.25)" },
                                    { label: "Source Code", icon: CodeIndicatorIcon, color: "rgba(236, 72, 153, 0.4)", activeColor: "#EC4899", glowColor: "rgba(236,72,153,0.25)" }
                                ].map((item, idx) => {
                                    const Icon = item.icon;
                                    const isActive = stage === idx;
                                    return (
                                        <button 
                                            key={idx}
                                            onClick={() => {
                                                if (showcaseRef.current) {
                                                    const rect = showcaseRef.current.getBoundingClientRect();
                                                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                                                    const sectionTop = rect.top + scrollTop;
                                                    const totalHeight = rect.height;
                                                    const segmentHeight = totalHeight / 5;
                                                    window.scrollTo({
                                                        top: sectionTop + segmentHeight * idx + 20,
                                                        behavior: "smooth"
                                                    });
                                                }
                                            }}
                                            className="flex flex-col items-center gap-1.5 focus:outline-none group cursor-pointer"
                                        >
                                            <motion.div
                                                whileHover={{ scale: 1.06, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                animate={{
                                                    backgroundColor: isActive ? "rgba(255, 255, 255, 0.05)" : "rgba(255,255,255,0.01)",
                                                    borderColor: isActive ? item.activeColor : "rgba(255,255,255,0.06)",
                                                    color: isActive ? item.activeColor : "#64748b",
                                                    boxShadow: isActive ? `0 0 16px 2px ${item.glowColor}, inset 0 1px 1px rgba(255,255,255,0.1)` : "none"
                                                }}
                                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                                className="w-10 h-10 rounded-2xl border flex items-center justify-center relative overflow-hidden backdrop-blur-md"
                                            >
                                                <Icon isActive={isActive} />
                                            </motion.div>
                                            <span className={`text-[8.5px] font-bold tracking-wider transition-colors duration-300 font-mono uppercase ${
                                                isActive ? "text-white" : "text-slate-500 group-hover:text-slate-350"
                                            }`}>
                                                {item.label.split(" ")[0]}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Column: Animated Showcase Viewport (Borderless Box Shadow) */}
                        <div className="col-span-12 lg:col-span-7 flex items-center justify-center w-full h-[32vh] md:h-[42vh] lg:h-[55vh] z-20">
                            <motion.div
                                animate={{
                                    width: currentStyle.width,
                                    height: currentStyle.height,
                                    borderRadius: currentStyle.borderRadius,
                                    rotateX: currentStyle.rotateX,
                                    rotateY: currentStyle.rotateY,
                                    rotateZ: currentStyle.rotateZ,
                                    scale: currentStyle.scale,
                                    boxShadow: currentStyle.boxShadow
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 20,
                                    mass: 0.8
                                }}
                                style={{
                                    perspective: 1200,
                                    transformStyle: "preserve-3d"
                                }}
                                className="relative bg-transparent flex flex-col overflow-hidden"
                            >
                                <div className="relative w-full h-full flex flex-col flex-grow bg-transparent overflow-hidden">
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={stage}
                                            src={
                                                stage === 0 ? "/showcase-laptop.png" :
                                                stage === 1 ? "/showcase-tablet.png" :
                                                stage === 2 ? "/showcase-mobile.png" :
                                                stage === 3 ? "/showcase-dashboard.png" :
                                                "/showcase-code.png"
                                            }
                                            alt={`Ecosystem State ${stage}`}
                                            initial={{ opacity: 0, filter: "blur(4px)", scale: 0.98 }}
                                            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                                            exit={{ opacity: 0, filter: "blur(4px)", scale: 0.98 }}
                                            transition={{ duration: 0.35, ease: "easeInOut" }}
                                            className="w-full h-full object-cover rounded-inherit"
                                        />
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
