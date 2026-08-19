"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Clock, Globe, Briefcase } from "lucide-react";

const STATS = [
    { id: "projects", label: "Completed Projects", target: 50, suffix: "+", icon: Briefcase, color: "text-blue-400" },
    { id: "satisfaction", label: "Client Satisfaction", target: 98, suffix: "%", icon: CheckCircle2, color: "text-emerald-400" },
    { id: "years", label: "Years Experience", target: 4, suffix: "+", icon: Clock, color: "text-purple-400" },
    { id: "technologies", label: "Technologies Used", target: 15, suffix: "+", icon: Globe, color: "text-amber-400" }
];

function StatCard({ stat }) {
    const [count, setCount] = useState(0);
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const duration = 1800; // ms
        const end = stat.target;
        const stepTime = Math.max(Math.floor(duration / end), 20);

        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) {
                clearInterval(timer);
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [isInView, stat.target]);

    const Icon = stat.icon;

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0c101a] border border-slate-800/80 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:border-slate-700/85 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300"
        >
            {/* Ambient indicator glow */}
            <div className="absolute top-0 right-0 w-[120px] h-[120px] rounded-full bg-slate-900/10 blur-[50px] group-hover:bg-slate-850/20 transition-all duration-300 pointer-events-none" />

            <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <span className="text-[9px] font-mono font-bold text-slate-655 uppercase tracking-widest">Validated Metric</span>
            </div>

            <div className="flex flex-col">
                <div className="flex items-baseline">
                    <span className="text-[clamp(44px,6vw,72px)] font-black text-white font-mono leading-none tracking-tight">
                        {count}
                    </span>
                    <span className={`text-2xl font-black font-mono ml-0.5 ${stat.color}`}>
                        {stat.suffix}
                    </span>
                </div>
                <span className="text-slate-400 font-bold text-sm md:text-base mt-2">
                    {stat.label}
                </span>
            </div>
        </motion.div>
    );
}

export default function ClientResults() {
    return (
        <section className="relative py-20 lg:py-28 border-t border-slate-900 bg-[#070a0f] z-10 flex flex-col justify-center overflow-hidden">
            {/* Sliding Grid Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div 
                    className="absolute inset-0 w-[200%] h-[200%] bg-grid-white/[0.015]"
                    style={{
                        animation: "gridSlide 20s linear infinite"
                    }}
                />
            </div>

            <style jsx global>{`
                @keyframes gridSlide {
                    0% {
                        transform: translate(0, 0);
                    }
                    100% {
                        transform: translate(-50%, -50%);
                    }
                }
            `}</style>

            <div className="max-w-[1480px] w-full mx-auto px-6 md:px-12 relative z-10">
                
                {/* Header text */}
                <div className="text-center max-w-xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider text-[var(--accent-global)] bg-[var(--accent-global-dim)] mb-4 font-mono">
                        <CheckCircle2 className="w-3 h-3 text-[var(--accent-global)]" />
                        PERFORMANCE STATISTICS
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-black text-white tracking-tight leading-none mb-4 font-sora">
                        Client Results.
                    </h2>
                    <p className="text-slate-500 text-xs md:text-sm">
                        Quantifiable metrics built on solid infrastructure, speed optimizations, and database longevity.
                    </p>
                </div>

                {/* 4 Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
                    {STATS.map((stat) => (
                        <StatCard key={stat.id} stat={stat} />
                    ))}
                </div>

            </div>
        </section>
    );
}
