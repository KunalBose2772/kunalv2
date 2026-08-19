"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, Sparkles, Server, Globe2, ShieldAlert, 
  ArrowRight, Search, Play, Pause, RefreshCw, Cpu, Database
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function ScrapersService() {
    const [niche, setNiche] = useState("Dentists");
    const [location, setLocation] = useState("New York");
    const [isRunning, setIsRunning] = useState(false);
    const [logs, setLogs] = useState([]);
    const [leadsCount, setLeadsCount] = useState(0);

    const nichePresets = ["Dentists", "Real Estate Agents", "Restaurants", "Marketing Agencies", "Gyms"];
    const locationPresets = ["New York", "London", "Sydney", "Mumbai", "Bangalore"];

    useEffect(() => {
        if (!isRunning) return;

        const timer = setInterval(() => {
            setLeadsCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
            
            const randomCompany = [
                "Apex Care", "Summit Realty", "Prime Bites", "Nova Agency", "Pulse Fitness", 
                "Core Wellness", "Metro Properties", "Urban Grill", "Velocity Media", "Iron Gym"
            ][Math.floor(Math.random() * 10)];
            
            const randomDomain = randomCompany.toLowerCase().replace(/\s+/g, "") + ".com";
            
            const newLog = {
                timestamp: new Date().toLocaleTimeString(),
                company: randomCompany,
                email: `contact@${randomDomain}`,
                phone: `+1 (555) ${Math.floor(100 + Math.random() * 900)}-${Math.floor(1000 + Math.random() * 9000)}`,
                status: "Success - Extracted"
            };

            setLogs((prev) => [newLog, ...prev.slice(0, 7)]);
        }, 1200);

        return () => clearInterval(timer);
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
        setLogs([{
            timestamp: new Date().toLocaleTimeString(),
            company: "System Initializer",
            email: "Connecting proxy channels...",
            phone: "IP Rotation OK",
            status: "Running"
        }]);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleClear = () => {
        setLogs([]);
        setLeadsCount(0);
        setIsRunning(false);
    };

    return (
        <main className="min-h-screen bg-[#03050c] text-white pt-28">
            {/* Background Ambient Glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <div 
                    className="absolute top-[15%] right-[10%] w-[450px] h-[450px] rounded-full opacity-20 blur-[130px]"
                    style={{ background: "radial-gradient(circle, #00e5ff 0%, transparent 80%)" }}
                />
                <div 
                    className="absolute top-[50%] left-[5%] w-[400px] h-[400px] rounded-full opacity-15 blur-[120px]"
                    style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 80%)" }}
                />
            </div>

            <div className="max-w-[1480px] w-full mx-auto px-6 md:px-12 relative z-10">
                
                {/* 1. HERO */}
                <div className="text-center py-16 md:py-24 max-w-3xl mx-auto space-y-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-[#00e5ff] bg-cyan-500/10 border border-cyan-500/20">
                        <Sparkles className="w-3.5 h-3.5" /> High-Performance Lead Extraction
                    </span>
                    <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-none font-sora">
                        Distributed Web <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Scraping Networks.</span>
                    </h1>
                    <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                        I build multi-threaded custom scrapers, Google Maps lead extractors, and microservice databases designed to bypass Cloudflare and harvest thousands of validated leads daily.
                    </p>
                    <div className="pt-4">
                        <Link 
                            href="/contact?service=scrapers"
                            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-extrabold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
                        >
                            Request Custom Scraper Proposal <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* 2. TECHNICAL SPEC PILLARS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
                    <div className="bg-[#0c101a] border border-slate-800/80 rounded-3xl p-6 shadow-xl hover:border-slate-700 transition-all">
                        <Globe2 className="w-10 h-10 text-cyan-400 mb-4" />
                        <h3 className="text-lg font-bold font-sora mb-2">Proxy Rotation & Headless</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            Using Puppeteer, Playwright, and dynamic IP residential proxies to simulate human interactions and avoid rates blocking.
                        </p>
                    </div>
                    <div className="bg-[#0c101a] border border-slate-800/80 rounded-3xl p-6 shadow-xl hover:border-slate-700 transition-all">
                        <Cpu className="w-10 h-10 text-purple-400 mb-4" />
                        <h3 className="text-lg font-bold font-sora mb-2">Multi-Threaded Pipelines</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            Asynchronous workers engineered with Python (Celery/FastAPI) and Go to ingest and sanitize raw HTML payloads rapidly.
                        </p>
                    </div>
                    <div className="bg-[#0c101a] border border-slate-800/80 rounded-3xl p-6 shadow-xl hover:border-slate-700 transition-all">
                        <Database className="w-10 h-10 text-emerald-400 mb-4" />
                        <h3 className="text-lg font-bold font-sora mb-2">Database Clean & Export</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            Validating phone numbers, matching company domains to corporate emails, and delivering clean, downloadable CSV/XLSX logs.
                        </p>
                    </div>
                </div>

                {/* 3. SIMULATOR WIDGET (Developer CLI look) */}
                <div className="my-16 bg-[#070a0f] border border-slate-800 rounded-[32px] overflow-hidden shadow-2xl">
                    
                    {/* Header */}
                    <div className="px-6 py-4 bg-[#0a0f18] border-b border-slate-800/70 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <span className="text-[11px] font-mono font-bold text-slate-500 ml-2">LeadMiner_Simulator_v2.0.sh</span>
                        </div>
                        <div className="flex items-center gap-4 text-xs font-bold text-[#00e5ff] font-mono">
                            <span>TOTAL EXTRACTED: {leadsCount}</span>
                        </div>
                    </div>

                    {/* Inputs Area */}
                    <div className="p-6 bg-[#070a0f] border-b border-slate-800/60 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                        <div className="md:col-span-4 space-y-2">
                            <label className="text-[10px] font-mono font-bold tracking-wider text-slate-450 uppercase">1. Select Target Niche</label>
                            <select 
                                value={niche} 
                                onChange={(e) => setNiche(e.target.value)}
                                className="w-full bg-[#0d131f] border border-slate-800 rounded-xl px-4 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-cyan-500 cursor-pointer"
                                disabled={isRunning}
                            >
                                {nichePresets.map((n) => <option key={n} value={n}>{n}</option>)}
                            </select>
                        </div>
                        
                        <div className="md:col-span-4 space-y-2">
                            <label className="text-[10px] font-mono font-bold tracking-wider text-slate-450 uppercase">2. Target Location</label>
                            <select 
                                value={location} 
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full bg-[#0d131f] border border-slate-800 rounded-xl px-4 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-cyan-500 cursor-pointer"
                                disabled={isRunning}
                            >
                                {locationPresets.map((l) => <option key={l} value={l}>{l}</option>)}
                            </select>
                        </div>

                        <div className="md:col-span-4 flex gap-3">
                            {!isRunning ? (
                                <button 
                                    onClick={handleStart}
                                    className="flex-grow py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all"
                                >
                                    <Play className="w-3.5 h-3.5 fill-current" /> Start Miner
                                </button>
                            ) : (
                                <button 
                                    onClick={handleStop}
                                    className="flex-grow py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all"
                                >
                                    <Pause className="w-3.5 h-3.5" /> Pause
                                </button>
                            )}
                            <button 
                                onClick={handleClear}
                                className="px-4 py-3 rounded-xl bg-slate-850 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer transition-all"
                                title="Reset Terminal"
                            >
                                <RefreshCw className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>

                    {/* Console Output Logs */}
                    <div className="p-6 bg-[#03060a] min-h-[220px] font-mono text-[11px] leading-relaxed text-slate-400 space-y-2 overflow-y-auto max-h-[300px]">
                        {logs.length === 0 && (
                            <div className="text-slate-500 italic py-8 text-center">
                                Select configuration options above and click "Start Miner" to simulate active network crawling...
                            </div>
                        )}
                        <AnimatePresence>
                            {logs.map((log, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-900/50 pb-1.5 gap-1"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-[#00e5ff]">{log.timestamp}</span>
                                        <span className="text-white font-bold">{log.company}</span>
                                        <span className="text-slate-500">{log.email}</span>
                                        <span className="text-slate-500">{log.phone}</span>
                                    </div>
                                    <span className={`text-[10px] uppercase font-bold shrink-0 self-end md:self-center ${log.status.includes("Success") ? "text-emerald-500" : "text-amber-400"}`}>
                                        {log.status}
                                    </span>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                </div>

            </div>

            <Footer />
        </main>
    );
}
