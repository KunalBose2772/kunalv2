"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, MousePointer, BellRing, Settings, Loader2, Cpu, Database, Server, CheckCircle2, Sliders, BarChart3 } from "lucide-react";

export default function Capabilities() {
    // Statics / Toggles for components
    const [modalOpen, setModalOpen] = useState(false);
    const [priceTier, setPriceTier] = useState(1); // 0: Low, 1: Balanced, 2: Intense
    const [hoveredDockIndex, setHoveredDockIndex] = useState(null);
    const [activeWorkerScale, setActiveWorkerScale] = useState("Balanced");
    const [dashboardCount, setDashboardCount] = useState(142504);

    // Cursor tracking card
    const cursorCardRef = useRef(null);
    const [localCursor, setLocalCursor] = useState({ x: 0, y: 0, isHovered: false });

    const handleCursorMove = (e) => {
        if (!cursorCardRef.current) return;
        const rect = cursorCardRef.current.getBoundingClientRect();
        setLocalCursor({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            isHovered: true
        });
    };

    // Particles array for Card 1 (Button Sparkles)
    const [particles, setParticles] = useState([]);
    const triggerParticles = () => {
        const newParticles = Array.from({ length: 8 }).map((_, i) => ({
            id: Date.now() + i,
            angle: (i * 45 * Math.PI) / 180,
            dist: Math.random() * 40 + 20
        }));
        setParticles(newParticles);
        setTimeout(() => setParticles([]), 700);
    };

    return (
        <section id="capabilities" className="relative py-20 lg:py-28 border-t border-slate-900 bg-[#070a0f] z-10 flex flex-col justify-center overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.015] pointer-events-none" />

            <div className="max-w-[1480px] w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-12 lg:gap-16">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-start text-left max-w-2xl"
                >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider text-[var(--accent-global)] bg-[var(--accent-global-dim)] mb-4 font-mono">
                        <Sparkles className="w-3 h-3 text-[var(--accent-global)] animate-pulse" />
                        LIVE COMPONENT GALLERY
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-black text-white tracking-tight leading-none mb-4 font-sora">
                        I Build Systems.
                    </h2>
                    <p className="text-slate-500 text-xs md:text-sm">
                        Hover and interact with these custom-engineered UI elements to experience frontend design craftsmanship firsthand.
                    </p>
                </motion.div>

                {/* 3x3 Floating Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
                    
                    {/* 1. INTERACTIVE BUTTON */}
                    <div className="group relative w-full aspect-[4/3] rounded-3xl bg-[#0c101a] border border-slate-800/80 p-6 flex flex-col justify-between overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:border-slate-700/85 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300">
                        <span className="text-[9px] font-mono font-bold text-slate-600 uppercase tracking-widest">[ 01. Button Particle Boom ]</span>
                        <div className="flex justify-center items-center flex-grow relative">
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={triggerParticles}
                                className="relative bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.25)] flex items-center gap-1.5 transition-colors duration-200"
                            >
                                <Sparkles className="w-4 h-4" />
                                Click Me
                                {/* Particles */}
                                {particles.map((p) => (
                                    <motion.span
                                        key={p.id}
                                        initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                                        animate={{
                                            x: Math.cos(p.angle) * p.dist,
                                            y: Math.sin(p.angle) * p.dist,
                                            opacity: 0,
                                            scale: 0.5
                                        }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="absolute w-1.5 h-1.5 rounded-full bg-blue-300 pointer-events-none"
                                    />
                                ))}
                            </motion.button>
                        </div>
                        <p className="text-[10px] text-slate-500 leading-normal font-medium">Click to emit dynamic particles using local state management.</p>
                    </div>

                    {/* 2. LOCAL CURSOR TRACKER */}
                    <div 
                        ref={cursorCardRef}
                        onMouseMove={handleCursorMove}
                        onMouseEnter={() => setLocalCursor(prev => ({ ...prev, isHovered: true }))}
                        onMouseLeave={() => setLocalCursor(prev => ({ ...prev, isHovered: false }))}
                        className="group relative w-full aspect-[4/3] rounded-3xl bg-[#0c101a] border border-slate-800/80 p-6 flex flex-col justify-between overflow-hidden cursor-none shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:border-slate-700/85 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300"
                    >
                        <span className="text-[9px] font-mono font-bold text-slate-600 uppercase tracking-widest">[ 02. Cursor Magnet ]</span>
                        <div className="flex justify-center items-center flex-grow relative">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest pointer-events-none">Hover Area</span>
                            {/* Local Cursor Ring */}
                            <motion.div
                                animate={{
                                    x: localCursor.x,
                                    y: localCursor.y,
                                    scale: localCursor.isHovered ? 1 : 0,
                                    opacity: localCursor.isHovered ? 0.8 : 0
                                }}
                                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                                className="absolute pointer-events-none -ml-4 -mt-4 w-8 h-8 rounded-full border border-blue-500 flex items-center justify-center"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            </motion.div>
                        </div>
                        <p className="text-[10px] text-slate-500 leading-normal font-medium">A local magnetic bubble cursor tracking mouse coordinates inside the frame.</p>
                    </div>

                    {/* 3. MICRO MODAL DIALOG */}
                    <div className="group relative w-full aspect-[4/3] rounded-3xl bg-[#0c101a] border border-slate-800/80 p-6 flex flex-col justify-between overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:border-slate-700/85 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300">
                        <span className="text-[9px] font-mono font-bold text-slate-600 uppercase tracking-widest">[ 03. Overlay Modal ]</span>
                        <div className="flex justify-center items-center flex-grow relative">
                            <button
                                onClick={() => setModalOpen(true)}
                                className="bg-[#111726] border border-slate-800 text-slate-300 font-semibold text-xs py-2 px-5 rounded-lg hover:text-white hover:border-slate-650 transition-colors"
                            >
                                Launch Modal
                            </button>

                            <AnimatePresence>
                                {modalOpen && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 bg-[#080b11]/90 backdrop-blur-sm z-30 flex items-center justify-center p-4"
                                    >
                                        <motion.div
                                            initial={{ scale: 0.9, y: 15 }}
                                            animate={{ scale: 1, y: 0 }}
                                            exit={{ scale: 0.9, y: 15 }}
                                            className="bg-[#0c101a] border border-slate-850 rounded-2xl p-4 w-full max-w-[210px] text-center shadow-2xl relative"
                                        >
                                            <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                                            <h5 className="text-[11px] font-bold text-white mb-1 font-sora">Process Started</h5>
                                            <p className="text-[8.5px] text-slate-500 mb-3">Scraping task initialized in background console.</p>
                                            <button
                                                onClick={() => setModalOpen(false)}
                                                className="bg-slate-800 text-white font-bold text-[8.5px] py-1.5 px-4 rounded hover:bg-slate-700 transition-colors"
                                            >
                                                Dismiss
                                            </button>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <p className="text-[10px] text-slate-500 leading-normal font-medium">AnimatePresence overlays morphing state for seamless transition entries.</p>
                    </div>

                    {/* 4. DYNAMIC PROGRESS CHART CARD */}
                    <div className="group relative w-full aspect-[4/3] rounded-3xl bg-[#0c101a] border border-slate-800/80 p-6 flex flex-col justify-between overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:border-slate-700/85 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300">
                        <span className="text-[9px] font-mono font-bold text-slate-600 uppercase tracking-widest">[ 04. Stat Tracker Dashboard ]</span>
                        <div className="flex flex-col justify-center flex-grow select-none">
                            <span className="text-[7.5px] uppercase font-bold text-slate-500">Leads Enriched</span>
                            <div className="flex items-baseline gap-1 mt-0.5">
                                <motion.span className="text-xl font-bold font-mono text-white tracking-tight">
                                    {dashboardCount.toLocaleString()}
                                </motion.span>
                                <span className="text-[8px] text-emerald-400 font-bold">▲ +432</span>
                            </div>
                            {/* Sparks Mini Chart */}
                            <div className="w-full h-8 flex items-end gap-1 mt-3.5">
                                {[35, 60, 45, 80, 55, 95, 75].map((h, i) => (
                                    <div key={i} className="flex-grow bg-slate-800/50 rounded-sm h-full relative">
                                        <motion.div
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h}%` }}
                                            transition={{ duration: 0.8, delay: i * 0.05 }}
                                            className="absolute bottom-0 left-0 right-0 bg-blue-500/85 rounded-sm"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="text-[10px] text-slate-500 leading-normal font-medium">Hovering increments mock values. Charts adjust height bars dynamically.</p>
                    </div>

                    {/* 5. AESTHETIC PATH LOADER */}
                    <div className="group relative w-full aspect-[4/3] rounded-3xl bg-[#0c101a] border border-slate-800/80 p-6 flex flex-col justify-between overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:border-slate-700/85 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300">
                        <span className="text-[9px] font-mono font-bold text-slate-600 uppercase tracking-widest">[ 05. System Loader ]</span>
                        <div className="flex flex-col justify-center items-center flex-grow">
                            <Loader2 className="w-7 h-7 text-blue-500 animate-spin mb-2" />
                            <span className="text-[9px] font-mono font-bold text-slate-500 tracking-wider animate-pulse uppercase">LOADING microservices...</span>
                        </div>
                        <p className="text-[10px] text-slate-500 leading-normal font-medium">SVG circle lines revolving smoothly to show system operations.</p>
                    </div>

                    {/* 6. SERVER INSTANCE SCALER */}
                    <div className="group relative w-full aspect-[4/3] rounded-3xl bg-[#0c101a] border border-slate-800/80 p-6 flex flex-col justify-between overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:border-slate-700/85 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300">
                        <span className="text-[9px] font-mono font-bold text-slate-600 uppercase tracking-widest">[ 06. Resource Allocation ]</span>
                        <div className="flex flex-col justify-center flex-grow select-none">
                            <div className="flex items-center justify-between w-full mb-2">
                                <span className="text-white font-bold text-[11px] font-sora">Worker Node Scale</span>
                                <span className="text-slate-400 font-mono text-[9px]">
                                    {activeWorkerScale === "1x Node" ? "2,500 req/s" : activeWorkerScale === "Balanced" ? "6,500 req/s" : activeWorkerScale === "Max Node" ? "18,000 req/s" : "Auto-Scaling"}
                                </span>
                            </div>
                            <div className="flex gap-2">
                                {["1x Node", "Balanced", "Max Node", "Auto"].map((sz) => (
                                    <button
                                        key={sz}
                                        onClick={() => setActiveWorkerScale(sz)}
                                        className={`flex-grow py-1 rounded-md text-[8.5px] font-bold border transition-colors ${
                                            activeWorkerScale === sz
                                                ? "bg-blue-600 text-white border-blue-600"
                                                : "bg-[#111622] text-slate-400 border-slate-800 hover:text-white"
                                        }`}
                                    >
                                        {sz}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <p className="text-[10px] text-slate-500 leading-normal font-medium">Active server allocation states trigger instant resource adjustments.</p>
                    </div>

                    {/* 7. APPLE STYLE NAVBAR DOCK */}
                    <div className="group relative w-full aspect-[4/3] rounded-3xl bg-[#0c101a] border border-slate-800/80 p-6 flex flex-col justify-between overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:border-slate-700/85 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300">
                        <span className="text-[9px] font-mono font-bold text-slate-600 uppercase tracking-widest">[ 07. Workspace Dock ]</span>
                        <div className="flex justify-center items-center flex-grow">
                            <div className="bg-[#111726]/80 border border-slate-850 px-3.5 py-2.5 rounded-2xl flex items-center gap-3">
                                {[
                                    { icon: Cpu, color: "text-amber-400" },
                                    { icon: Database, color: "text-blue-400" },
                                    { icon: Server, color: "text-emerald-400" },
                                    { icon: Settings, color: "text-slate-400" }
                                ].map((item, idx) => {
                                    const IconComponent = item.icon;
                                    const isHovered = hoveredDockIndex === idx;
                                    const isNeighbor = hoveredDockIndex !== null && Math.abs(hoveredDockIndex - idx) === 1;

                                    return (
                                        <motion.div
                                            key={idx}
                                            onMouseEnter={() => setHoveredDockIndex(idx)}
                                            onMouseLeave={() => setHoveredDockIndex(null)}
                                            animate={{
                                                scale: isHovered ? 1.3 : isNeighbor ? 1.15 : 1
                                            }}
                                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                            className="w-7 h-7 bg-slate-900 border border-slate-800/60 rounded-lg flex items-center justify-center cursor-pointer shadow-sm"
                                        >
                                            <IconComponent className={`w-3.5 h-3.5 ${item.color}`} />
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                        <p className="text-[10px] text-slate-500 leading-normal font-medium">Classic Dock Magnification implemented using neighboring node index offsets.</p>
                    </div>

                    {/* 8. THREAD ALLOCATOR SLIDER */}
                    <div className="group relative w-full aspect-[4/3] rounded-3xl bg-[#0c101a] border border-slate-800/80 p-6 flex flex-col justify-between overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:border-slate-700/85 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300">
                        <span className="text-[9px] font-mono font-bold text-slate-600 uppercase tracking-widest">[ 08. Pricing Slider ]</span>
                        <div className="flex flex-col justify-center flex-grow select-none">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-[9.5px] font-bold text-white font-sora">
                                    {priceTier === 0 ? "Single Crawler Thread" : priceTier === 1 ? "Balanced Automation" : "Intense Scale-Out"}
                                </span>
                                <span className="text-[10px] font-bold font-mono text-blue-400">
                                    {priceTier === 0 ? "5 Crawler" : priceTier === 1 ? "25 Crawler" : "150 Crawler"}
                                </span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="2"
                                step="1"
                                value={priceTier}
                                onChange={(e) => setPriceTier(parseInt(e.target.value))}
                                className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500 outline-none"
                            />
                        </div>
                        <p className="text-[10px] text-slate-500 leading-normal font-medium">Dragging inputs computes complex crawler loads and active queue slots.</p>
                    </div>

                    {/* 9. REACTIVE UPTIME CHART */}
                    <div className="group relative w-full aspect-[4/3] rounded-3xl bg-[#0c101a] border border-slate-800/80 p-6 flex flex-col justify-between overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:border-slate-700/85 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300">
                        <span className="text-[9px] font-mono font-bold text-slate-600 uppercase tracking-widest">[ 09. Interactive Columns ]</span>
                        <div className="flex items-end justify-center gap-4 flex-grow pb-1">
                            {[
                                { label: "Mon", val: 99.99, color: "bg-blue-500/20 hover:bg-blue-500" },
                                { label: "Tue", val: 99.98, color: "bg-emerald-500/20 hover:bg-emerald-500" },
                                { label: "Wed", val: 99.99, color: "bg-purple-500/20 hover:bg-purple-500" },
                                { label: "Thu", val: 99.95, color: "bg-amber-500/20 hover:bg-amber-500" }
                            ].map((bar, i) => (
                                <div key={i} className="flex flex-col items-center gap-1.5 flex-grow max-w-[32px]">
                                    <div className="w-full bg-[#111726] rounded-t-md h-16 relative overflow-hidden">
                                        <motion.div
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${bar.val - 99}%` }}
                                            transition={{ duration: 0.8 }}
                                            className={`absolute bottom-0 left-0 right-0 rounded-t-sm transition-colors duration-250 cursor-pointer ${bar.color}`}
                                        />
                                    </div>
                                    <span className="text-[7.5px] font-mono text-slate-500 font-bold">{bar.label}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-[10px] text-slate-500 leading-normal font-medium">Uptime telemetry graphs showing database API responsiveness indexes.</p>
                    </div>

                </div>

            </div>
        </section>
    );
}
