"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, Code2, ArrowRight, ToggleLeft, ToggleRight, 
  Activity, Check, ShieldCheck, Cpu
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function NextjsService() {
    const [rsc, setRsc] = useState(false);
    const [splitting, setSplitting] = useState(false);
    const [edgeCache, setEdgeCache] = useState(false);

    const calculateMetrics = () => {
        let baseBundle = 380; // KB
        let baseFcp = 2.2; // seconds

        if (rsc) {
            baseBundle -= 180;
            baseFcp -= 0.5;
        }
        if (splitting) {
            baseBundle -= 120;
            baseFcp -= 0.3;
        }
        if (edgeCache) {
            baseFcp -= 0.8;
        }

        return {
            bundle: Math.max(45, baseBundle),
            fcp: Math.max(0.2, parseFloat(baseFcp.toFixed(1)))
        };
    };

    const getRecommendation = () => {
        const { bundle, fcp } = calculateMetrics();
        if (bundle > 250) return "Large javascript bundle size blocks page thread hydration. Users experience visual lag.";
        if (fcp > 0.8) return "Partially optimized. Edge middleware caches could reduce rendering start times.";
        return "Optimal state! Micro-bundle size delivered in milliseconds via edge network.";
    };

    const { bundle, fcp } = calculateMetrics();

    return (
        <main className="min-h-screen bg-[#03050c] text-white pt-28 relative">
            {/* Ambient Background Lights */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <div 
                    className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full opacity-15 blur-[120px]"
                    style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 80%)" }}
                />
                <div 
                    className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full opacity-20 blur-[130px]"
                    style={{ background: "radial-gradient(circle, #00e5ff 0%, transparent 80%)" }}
                />
            </div>

            <div className="max-w-[1480px] w-full mx-auto px-6 md:px-12 relative z-10">
                
                {/* 1. HERO SECTION */}
                <div className="text-center py-16 md:py-24 max-w-3xl mx-auto space-y-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-[#00e5ff] bg-cyan-500/10 border border-cyan-500/20">
                        <Sparkles className="w-3.5 h-3.5" /> High-Performance Frontend Systems
                    </span>
                    <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-none font-sora">
                        Next.js & React <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Web Engineering.</span>
                    </h1>
                    <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                        I build premium Next.js applications featuring responsive layouts, custom Tailwind designs, and modular architectures designed to rank on Google.
                    </p>
                    <div className="pt-4">
                        <Link 
                            href="/contact?service=nextjs"
                            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                        >
                            Request Next.js Proposal <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* 2. TECHNICAL SPEC PILLARS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
                    <div className="bg-[#0c101a] border border-slate-800/80 rounded-3xl p-6 shadow-xl hover:border-slate-700 transition-all">
                        <Code2 className="w-10 h-10 text-blue-500 mb-4" />
                        <h3 className="text-lg font-bold font-sora mb-2">App Router & SSR</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            Full implementation of React Server Components, server-side data hydration, and static generation to guarantee 100/100 performance scores.
                        </p>
                    </div>
                    <div className="bg-[#0c101a] border border-slate-800/80 rounded-3xl p-6 shadow-xl hover:border-slate-700 transition-all">
                        <Cpu className="w-10 h-10 text-purple-500 mb-4" />
                        <h3 className="text-lg font-bold font-sora mb-2">Headless Integration</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            Secure data fetching, OAuth sessions setup, and Stripe checkout APIs integrated directly into edge server actions.
                        </p>
                    </div>
                    <div className="bg-[#0c101a] border border-slate-800/80 rounded-3xl p-6 shadow-xl hover:border-slate-700 transition-all">
                        <ShieldCheck className="w-10 h-10 text-emerald-500 mb-4" />
                        <h3 className="text-lg font-bold font-sora mb-2">Edge Runtime & Middleware</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            Routing validation rules, geo-location redirects, custom analytics hooks, and low-latency API actions served instantly at edge node boundaries.
                        </p>
                    </div>
                </div>

                {/* 3. INTERACTIVE OPTIMIZER WIDGET */}
                <div className="my-16 bg-slate-50 dark:bg-[#0c101a] border border-slate-200 dark:border-slate-800/80 rounded-[32px] p-8 md:p-12 text-slate-900 dark:text-white shadow-2xl relative overflow-hidden">
                    
                    <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
                        {/* Configurator Column */}
                        <div className="lg:col-span-6 space-y-6">
                            <div>
                                <span className="text-[10px] font-mono font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">Engine Sandbox</span>
                                <h3 className="text-2xl md:text-3xl font-black font-sora tracking-tight mt-1">Bundle & FCP Optimizer</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">Toggle architectural optimizations below to simulate frontend bundle and hydration efficiency gains.</p>
                            </div>

                            <div className="space-y-4">
                                {/* Toggle 1: React Server Components */}
                                <div className="flex items-center justify-between p-4 bg-white dark:bg-[#070a0f] border border-slate-200 dark:border-slate-850 rounded-2xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-450 flex items-center justify-center font-bold font-mono">1</div>
                                        <div className="text-left">
                                            <span className="text-xs font-bold block">Use React Server Components</span>
                                            <span className="text-[10px] text-slate-500 dark:text-slate-400">Moves layout data operations to server side, cutting page weight.</span>
                                        </div>
                                    </div>
                                    <button onClick={() => setRsc(!rsc)} className="cursor-pointer">
                                        {rsc ? <ToggleRight className="w-9 h-9 text-blue-500" /> : <ToggleLeft className="w-9 h-9 text-slate-350 dark:text-slate-700" />}
                                    </button>
                                </div>

                                {/* Toggle 2: Dynamic Imports */}
                                <div className="flex items-center justify-between p-4 bg-white dark:bg-[#070a0f] border border-slate-200 dark:border-slate-850 rounded-2xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-450 flex items-center justify-center font-bold font-mono">2</div>
                                        <div className="text-left">
                                            <span className="text-xs font-bold block">Dynamic Code Splitting</span>
                                            <span className="text-[10px] text-slate-500 dark:text-slate-400">Splits routing chunks so browser loads bundle elements lazily.</span>
                                        </div>
                                    </div>
                                    <button onClick={() => setSplitting(!splitting)} className="cursor-pointer">
                                        {splitting ? <ToggleRight className="w-9 h-9 text-blue-500" /> : <ToggleLeft className="w-9 h-9 text-slate-350 dark:text-slate-700" />}
                                    </button>
                                </div>

                                {/* Toggle 3: Edge Caching */}
                                <div className="flex items-center justify-between p-4 bg-white dark:bg-[#070a0f] border border-slate-200 dark:border-slate-850 rounded-2xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-450 flex items-center justify-center font-bold font-mono">3</div>
                                        <div className="text-left">
                                            <span className="text-xs font-bold block">Configure Edge Cache Headers</span>
                                            <span className="text-[10px] text-slate-500 dark:text-slate-400">Stores fully serialized templates at closest node border CDN.</span>
                                        </div>
                                    </div>
                                    <button onClick={() => setEdgeCache(!edgeCache)} className="cursor-pointer">
                                        {edgeCache ? <ToggleRight className="w-9 h-9 text-blue-500" /> : <ToggleLeft className="w-9 h-9 text-slate-350 dark:text-slate-700" />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Display Column */}
                        <div className="lg:col-span-6 bg-white dark:bg-[#06090e] border border-slate-200 dark:border-slate-800/60 rounded-3xl p-8 flex flex-col justify-between shadow-2xl h-full min-h-[340px]">
                            <div className="space-y-4">
                                <span className="text-[9px] font-mono font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase">Simulated Production Metrics</span>
                                
                                <div className="grid grid-cols-2 gap-4 border-b border-slate-100 dark:border-slate-900 pb-4">
                                    <div className="text-left">
                                        <span className="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 block">JS BUNDLE SIZE</span>
                                        <div className="flex items-baseline gap-1 text-slate-800 dark:text-white font-sora mt-1">
                                            <span className={`text-4xl md:text-5xl font-black tracking-tight ${bundle < 150 ? "text-emerald-500" : bundle < 250 ? "text-amber-500" : "text-rose-500"}`}>{bundle}</span>
                                            <span className="text-xs font-mono font-bold text-slate-450 dark:text-slate-500">KB</span>
                                        </div>
                                    </div>

                                    <div className="text-left border-l border-slate-100 dark:border-slate-900 pl-4">
                                        <span className="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 block">FIRST CONTENTFUL PAINT</span>
                                        <div className="flex items-baseline gap-1 text-slate-800 dark:text-white font-sora mt-1">
                                            <span className="text-4xl md:text-5xl font-black tracking-tight">{fcp}</span>
                                            <span className="text-xs font-mono font-bold text-slate-450 dark:text-slate-500">s</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2 py-2">
                                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-755 dark:text-slate-300">
                                        <Activity className="w-4 h-4 text-blue-500 shrink-0" />
                                        <span>{getRecommendation()}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <Link 
                                    href="/contact?service=nextjs"
                                    className="w-full text-center py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider block transition-all shadow-md cursor-pointer"
                                >
                                    Discuss Next.js Frontend
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </main>
    );
}
