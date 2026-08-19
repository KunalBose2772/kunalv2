"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Layers, Sparkles, Server, Cpu, Database, 
  ArrowRight, ToggleLeft, ToggleRight, Check, Activity
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function SaasService() {
    const [caching, setCaching] = useState(false);
    const [indexing, setIndexing] = useState(false);
    const [replicas, setReplicas] = useState(false);

    const calculateLatency = () => {
        let base = 480; // ms
        if (indexing) base -= 240;
        if (caching) base -= 180;
        if (replicas) base -= 50;
        return Math.max(9, base);
    };

    const getRecommendation = () => {
        if (!indexing && !caching && !replicas) return "System in unoptimized state. Slow database reads detected.";
        if (indexing && caching && replicas) return "Optimal state. All queries served in <10ms via memory cache!";
        return "Performance improved, but server is still bottlenecked by direct disk reads.";
    };

    return (
        <main className="min-h-screen bg-[#03050c] text-white pt-28">
            {/* Ambient Background Lights */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <div 
                    className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full opacity-15 blur-[120px]"
                    style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 80%)" }}
                />
                <div 
                    className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full opacity-20 blur-[130px]"
                    style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 80%)" }}
                />
            </div>

            <div className="max-w-[1480px] w-full mx-auto px-6 md:px-12 relative z-10">
                
                {/* 1. HERO */}
                <div className="text-center py-16 md:py-24 max-w-3xl mx-auto space-y-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-[#8b5cf6] bg-purple-500/10 border border-purple-500/20">
                        <Sparkles className="w-3.5 h-3.5" /> High-Performance Infrastructure
                    </span>
                    <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-none font-sora">
                        Headless SaaS & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Database Scaling.</span>
                    </h1>
                    <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                        I design and deploy secure, distributed backend engines, cloud-native microservices, and serverless architectures engineered to handle thousands of requests per second.
                    </p>
                    <div className="pt-4">
                        <Link 
                            href="/contact?service=saas"
                            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-extrabold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
                        >
                            Design System Architecture <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* 2. TECHNICAL SPEC PILLARS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
                    <div className="bg-[#0c101a] border border-slate-800/80 rounded-3xl p-6 shadow-xl hover:border-slate-700 transition-all">
                        <Server className="w-10 h-10 text-purple-500 mb-4" />
                        <h3 className="text-lg font-bold font-sora mb-2">Microservices & APIs</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            Decoupled Node.js and FastAPI services with bulletproof JWT session authentication, robust CORS headers, and detailed Swagger interface specs.
                        </p>
                    </div>
                    <div className="bg-[#0c101a] border border-slate-800/80 rounded-3xl p-6 shadow-xl hover:border-slate-700 transition-all">
                        <Cpu className="w-10 h-10 text-blue-500 mb-4" />
                        <h3 className="text-lg font-bold font-sora mb-2">Serverless Computing</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            Deploying modular AWS Lambda and Vercel edge functions to optimize compute charges and scale seamlessly from zero to millions of users.
                        </p>
                    </div>
                    <div className="bg-[#0c101a] border border-slate-800/80 rounded-3xl p-6 shadow-xl hover:border-slate-700 transition-all">
                        <Database className="w-10 h-10 text-emerald-500 mb-4" />
                        <h3 className="text-lg font-bold font-sora mb-2">Supabase & SQL Scaling</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            Database schema migrations, custom indexing optimization, Postgres trigger configurations, and connection pooler settings.
                        </p>
                    </div>
                </div>

                {/* 3. INTERACTIVE DB LATENCY WIDGET */}
                <div className="my-16 bg-slate-50 dark:bg-[#0c101a] border border-slate-200 dark:border-slate-800/80 rounded-[32px] p-8 md:p-12 text-slate-900 dark:text-white shadow-2xl relative overflow-hidden">
                    
                    <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
                        {/* Configurator Column */}
                        <div className="lg:col-span-6 space-y-6">
                            <div>
                                <span className="text-[10px] font-mono font-bold tracking-widest text-purple-600 dark:text-purple-400 uppercase">Backend Sandbox</span>
                                <h3 className="text-2xl md:text-3xl font-black font-sora tracking-tight mt-1">Database Query Optimizer</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">Toggle architectural optimizations below to simulate instant latency gains in queries.</p>
                            </div>

                            <div className="space-y-4">
                                {/* Toggle 1: Indexing */}
                                <div className="flex items-center justify-between p-4 bg-white dark:bg-[#070a0f] border border-slate-200 dark:border-slate-850 rounded-2xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-450 flex items-center justify-center font-bold">1</div>
                                        <div className="text-left">
                                            <span className="text-xs font-bold block">Apply Database Indexing</span>
                                            <span className="text-[10px] text-slate-500 dark:text-slate-400">Optimizes lookup complexity from O(N) to O(log N).</span>
                                        </div>
                                    </div>
                                    <button onClick={() => setIndexing(!indexing)} className="cursor-pointer">
                                        {indexing ? <ToggleRight className="w-9 h-9 text-purple-500" /> : <ToggleLeft className="w-9 h-9 text-slate-350 dark:text-slate-700" />}
                                    </button>
                                </div>

                                {/* Toggle 2: Redis Caching */}
                                <div className="flex items-center justify-between p-4 bg-white dark:bg-[#070a0f] border border-slate-200 dark:border-slate-850 rounded-2xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-450 flex items-center justify-center font-bold">2</div>
                                        <div className="text-left">
                                            <span className="text-xs font-bold block">Implement Redis Caching</span>
                                            <span className="text-[10px] text-slate-500 dark:text-slate-400">Stores frequently fetched JSON models directly in RAM.</span>
                                        </div>
                                    </div>
                                    <button onClick={() => setCaching(!caching)} className="cursor-pointer">
                                        {caching ? <ToggleRight className="w-9 h-9 text-purple-500" /> : <ToggleLeft className="w-9 h-9 text-slate-350 dark:text-slate-700" />}
                                    </button>
                                </div>

                                {/* Toggle 3: Read Replicas */}
                                <div className="flex items-center justify-between p-4 bg-white dark:bg-[#070a0f] border border-slate-200 dark:border-slate-850 rounded-2xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-450 flex items-center justify-center font-bold">3</div>
                                        <div className="text-left">
                                            <span className="text-xs font-bold block">Configure Read Replicas</span>
                                            <span className="text-[10px] text-slate-500 dark:text-slate-400">Distributes read operations over secondary geo-nodes.</span>
                                        </div>
                                    </div>
                                    <button onClick={() => setReplicas(!replicas)} className="cursor-pointer">
                                        {replicas ? <ToggleRight className="w-9 h-9 text-purple-500" /> : <ToggleLeft className="w-9 h-9 text-slate-350 dark:text-slate-700" />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Display Column */}
                        <div className="lg:col-span-6 bg-white dark:bg-[#06090e] border border-slate-200 dark:border-slate-800/60 rounded-3xl p-8 flex flex-col justify-between shadow-2xl h-full min-h-[340px]">
                            <div className="space-y-4">
                                <span className="text-[9px] font-mono font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase">Simulated Database Telemetry</span>
                                
                                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-900 pb-4">
                                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">QUERY LATENCY:</span>
                                    <div className="flex items-baseline gap-1 text-slate-800 dark:text-white font-sora">
                                        <span className="text-4xl md:text-5xl font-black tracking-tight">{calculateLatency()}</span>
                                        <span className="text-xs font-mono font-bold text-slate-450 dark:text-slate-500">ms</span>
                                    </div>
                                </div>

                                <div className="space-y-2 py-2">
                                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-755 dark:text-slate-300">
                                        <Activity className="w-4 h-4 text-purple-500 shrink-0" />
                                        <span>{getRecommendation()}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <Link 
                                    href="/contact?service=saas"
                                    className="w-full text-center py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs uppercase tracking-wider block transition-all shadow-md cursor-pointer"
                                >
                                    Discuss System Architecture
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
