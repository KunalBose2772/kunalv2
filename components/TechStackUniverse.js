"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Atom, Compass, Layers, Globe, Server, FileCode, Database, Terminal, Settings } from "lucide-react";

const PLANETS = [
    { name: "React", icon: Atom, size: 55, color: "text-[#0ea5e9] border-[#0ea5e9]/30 bg-[#0ea5e9]/5", speed: 0.8, distance: 90, desc: "Modular interface architecture" },
    { name: "Next.js", icon: Globe, size: 60, color: "text-slate-900 border-slate-300 bg-slate-50", speed: 0.6, distance: 150, desc: "Server-side rendering framework" },
    { name: "Framer Motion", icon: Compass, size: 65, color: "text-pink-650 border-pink-200 bg-pink-50", speed: 0.5, distance: 210, desc: "Smooth canvas animations" },
    { name: "GSAP", icon: Layers, size: 55, color: "text-[#78b502] border-[#88ce02]/30 bg-[#88ce02]/5", speed: 0.7, distance: 260, desc: "Complex timeline scroll engines" },
    { name: "Tailwind", icon: Settings, size: 50, color: "text-[#0ea5e9] border-[#38bdf8]/35 bg-[#38bdf8]/5", speed: 0.9, distance: 300, desc: "Responsive layout tokens" },
    { name: "Node.js", icon: Server, size: 58, color: "text-emerald-650 border-emerald-200 bg-emerald-50", speed: 0.55, distance: 350, desc: "Microservices & task execution" },
    { name: "WordPress", icon: Database, size: 55, color: "text-sky-600 border-sky-200 bg-sky-50", speed: 0.45, distance: 390, desc: "Custom themes & headless systems" },
    { name: "PHP", icon: FileCode, size: 50, color: "text-[#5c6096] border-[#777bb4]/30 bg-[#777bb4]/5", speed: 0.65, distance: 430, desc: "OOP server side systems development" },
    { name: "MongoDB", icon: Terminal, size: 54, color: "text-green-650 border-green-200 bg-green-50", speed: 0.4, distance: 470, desc: "Scalable document stores indexing" }
];

export default function TechStackUniverse() {
    const containerRef = useRef(null);
    const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
    const [activePlanet, setActivePlanet] = useState(null);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const posX = e.clientX - rect.left - centerX;
        const posY = e.clientY - rect.top - centerY;
        // Limit movement offset values
        setMouseOffset({
            x: (posX / centerX) * 45,
            y: (posY / centerY) * 45
        });
    };

    const handleMouseLeave = () => {
        setMouseOffset({ x: 0, y: 0 });
    };

    return (
        <section 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative py-20 lg:py-28 border-t border-slate-200 bg-white z-10 flex flex-col justify-center overflow-hidden h-[100vh]"
        >
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[30%] left-[30%] w-[450px] h-[450px] rounded-full bg-blue-50/40 blur-[150px]" />
                <div className="absolute bottom-[30%] right-[30%] w-[400px] h-[400px] rounded-full bg-purple-50/40 blur-[140px]" />
            </div>

            {/* Orbit paths vector layers */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                {[120, 200, 280, 360, 440, 520, 600, 680, 760].map((d, i) => (
                    <div 
                        key={i}
                        className="absolute border border-slate-200/60 rounded-full"
                        style={{
                            width: `${d}px`,
                            height: `${d}px`,
                            transform: `translate(${mouseOffset.x * (0.15 * i)}px, ${mouseOffset.y * (0.15 * i)}px)`,
                            transition: "transform 0.4s ease-out"
                        }}
                    />
                ))}
            </div>

            <div className="max-w-[1480px] w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col h-full justify-between pointer-events-none">
                
                {/* Header text */}
                <div className="text-center max-w-xl mx-auto z-20 pointer-events-auto">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-global)] to-indigo-650 font-sans font-bold tracking-[0.25em] text-xs uppercase block mb-3 font-mono">
                        TECH STACK UNIVERSE
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-black text-slate-900 tracking-tight leading-none mb-4 font-sora">
                        Modern Tech Universe.
                    </h2>
                    <p className="text-slate-500 text-xs md:text-sm max-w-sm mx-auto">
                        Move your mouse across the cosmos to navigate technology systems orbiting the central codebase core.
                    </p>
                </div>

                {/* Central Cosmos Engine Area */}
                <div className="relative flex items-center justify-center flex-grow w-full my-8">
                    
                    {/* The central base core */}
                    <motion.div
                        style={{
                            x: mouseOffset.x * 0.1,
                            y: mouseOffset.y * 0.1
                        }}
                        transition={{ type: "spring", stiffness: 120, damping: 25 }}
                        className="w-16 h-16 rounded-full bg-white border border-slate-200 shadow-[0_10px_35px_rgba(59,130,246,0.15)] flex items-center justify-center z-30 pointer-events-auto cursor-pointer"
                    >
                        <Atom className="w-6.5 h-6.5 text-blue-500 animate-spin" />
                    </motion.div>

                    {/* Orbiting technology planets */}
                    {PLANETS.map((planet, idx) => {
                        const Icon = planet.icon;
                        const angleRad = (idx * (360 / PLANETS.length) * Math.PI) / 180;
                        const initialX = Math.cos(angleRad) * planet.distance;
                        const initialY = Math.sin(angleRad) * planet.distance;
                        
                        // Physics offset calculation based on planet layer depth
                        const posX = initialX + mouseOffset.x * (1.1 - idx * 0.08);
                        const posY = initialY + mouseOffset.y * (1.1 - idx * 0.08);

                        return (
                            <motion.div
                                key={planet.name}
                                style={{
                                    x: posX,
                                    y: posY,
                                    width: planet.size,
                                    height: planet.size
                                }}
                                transition={{ type: "spring", stiffness: 100, damping: 22 }}
                                onMouseEnter={() => setActivePlanet(planet)}
                                onMouseLeave={() => setActivePlanet(null)}
                                className={`absolute rounded-full border shadow-sm flex items-center justify-center pointer-events-auto cursor-pointer transition-transform duration-300 hover:scale-1.15 z-20 ${planet.color}`}
                            >
                                <Icon className="w-5 h-5" />
                                
                                {/* Label tag on hover */}
                                <div className="absolute top-[108%] pointer-events-none select-none px-2 py-0.5 bg-[#0a0d14] border border-slate-800 rounded text-[8.5px] font-mono font-bold text-white tracking-wide opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {planet.name}
                                </div>
                            </motion.div>
                        );
                    })}

                    {/* Details tooltip panel */}
                    <AnimatePresence>
                        {activePlanet && (
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 15 }}
                                className="absolute bottom-6 bg-white border border-slate-200 rounded-2xl p-3.5 w-full max-w-[280px] text-center shadow-[0_20px_40px_rgba(0,0,0,0.06)] z-40 pointer-events-auto"
                            >
                                <span className="text-[8.5px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-0.5">Technology Selected</span>
                                <h4 className="text-sm font-bold text-slate-850 font-sora mb-1.5 flex items-center justify-center gap-1.5">
                                    {(() => {
                                        const PlanetIcon = activePlanet.icon;
                                        return <PlanetIcon className="w-4 h-4 text-blue-500" />;
                                    })()}
                                    {activePlanet.name}
                                </h4>
                                <p className="text-[10px] text-slate-600 leading-normal font-medium">{activePlanet.desc}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>

                <div className="h-6" />

            </div>
        </section>
    );
}
