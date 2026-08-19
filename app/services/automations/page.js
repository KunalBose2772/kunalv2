"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, Smartphone, ArrowRight, Play, Pause, 
  RefreshCw, Check, Activity, Terminal
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function AutomationsService() {
    const [triggerSource, setTriggerSource] = useState("Lead Form");
    const [destinationChannel, setDestinationChannel] = useState("WhatsApp Alert");
    const [isRunning, setIsRunning] = useState(false);
    const [logs, setLogs] = useState([]);
    const [runsCount, setRunsCount] = useState(0);

    const triggerPresets = ["Lead Form", "Stripe Payment", "Cal.com Booking", "GitHub Webhook"];
    const destPresets = ["WhatsApp Alert", "Salesforce Sync", "SendGrid Email", "Slack Message"];

    useEffect(() => {
        if (!isRunning) return;

        let step = 0;
        const interval = setInterval(() => {
            if (step === 0) {
                setLogs(prev => [
                    ...prev,
                    { text: `[10:04:12] Webhook received from: ${triggerSource}`, type: "info" }
                ]);
            } else if (step === 1) {
                setLogs(prev => [
                    ...prev,
                    { text: `[10:04:12] Validating API authentication headers... Status: OK`, type: "info" }
                ]);
            } else if (step === 2) {
                setLogs(prev => [
                    ...prev,
                    { text: `[10:04:13] Mapping payload model parameters to destination specs`, type: "info" }
                ]);
            } else if (step === 3) {
                setLogs(prev => [
                    ...prev,
                    { text: `[10:04:13] Initiating packet upload stream to: ${destinationChannel}`, type: "info" }
                ]);
            } else if (step === 4) {
                setLogs(prev => [
                    ...prev,
                    { text: `[10:04:14] Status: 200 OK. Transaction finished successfully.`, type: "success" },
                    { text: `-------------------------------------------------------`, type: "info" }
                ]);
                setRunsCount(prev => prev + 1);
                setIsRunning(false);
            }
            step++;
        }, 800);

        return () => clearInterval(interval);
    }, [isRunning, triggerSource, destinationChannel]);

    const handleStart = () => {
        setIsRunning(true);
        setLogs([{
            text: `[10:04:11] Initializing webhook relay pipeline client...`,
            type: "cmd"
        }]);
    };

    const handleClear = () => {
        setLogs([]);
        setRunsCount(0);
        setIsRunning(false);
    };

    return (
        <main className="min-h-screen bg-[#03050c] text-white pt-28 relative">
            {/* Ambient Background Lights */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <div 
                    className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full opacity-15 blur-[120px]"
                    style={{ background: "radial-gradient(circle, #10b981 0%, transparent 80%)" }}
                />
                <div 
                    className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full opacity-20 blur-[130px]"
                    style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 80%)" }}
                />
            </div>

            <div className="max-w-[1480px] w-full mx-auto px-6 md:px-12 relative z-10">
                
                {/* 1. HERO SECTION */}
                <div className="text-center py-16 md:py-24 max-w-3xl mx-auto space-y-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-[#10b981] bg-emerald-500/10 border border-emerald-500/20">
                        <Sparkles className="w-3.5 h-3.5" /> High-Efficiency Workflows
                    </span>
                    <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-none font-sora">
                        WhatsApp & API <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Workflow Automation.</span>
                    </h1>
                    <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                        Automate notifications, customer alert channels, Twilio/WhatsApp API messaging, and webhook relays to synchronize your B2B sales pipelines automatically.
                    </p>
                    <div className="pt-4">
                        <Link 
                            href="/contact?service=automations"
                            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-emerald-500/20"
                        >
                            Configure Automations Proposal <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* 2. TECHNICAL SPEC PILLARS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
                    <div className="bg-[#0c101a] border border-slate-800/80 rounded-3xl p-6 shadow-xl hover:border-slate-700 transition-all">
                        <Smartphone className="w-10 h-10 text-emerald-500 mb-4" />
                        <h3 className="text-lg font-bold font-sora mb-2">API Gateways & Webhooks</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            Connecting SaaS CRM events to external email channels, webhooks, Airtable bases, or Slack notification rooms securely.
                        </p>
                    </div>
                    <div className="bg-[#0c101a] border border-slate-800/80 rounded-3xl p-6 shadow-xl hover:border-slate-700 transition-all">
                        <Activity className="w-10 h-10 text-blue-500 mb-4" />
                        <h3 className="text-lg font-bold font-sora mb-2">WhatsApp Bot Scripting</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            Implementing template message dispatch, automated responses, customer contact categorization, and conversation log syncs.
                        </p>
                    </div>
                    <div className="bg-[#0c101a] border border-slate-800/80 rounded-3xl p-6 shadow-xl hover:border-slate-700 transition-all">
                        <Check className="w-10 h-10 text-purple-500 mb-4" />
                        <h3 className="text-lg font-bold font-sora mb-2">Cron Tasks & Relays</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            Automated daily reports compilation, database synchronization sync jobs, multi-channel webhook distribution, and status monitoring.
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
                            <span className="text-[11px] font-mono font-bold text-slate-500 ml-2">WorkflowRelay_Sprint_v1.0.sh</span>
                        </div>
                        <div className="flex items-center gap-4 text-xs font-bold text-[#10b981] font-mono">
                            <span>Relays Processed: {runsCount}</span>
                        </div>
                    </div>

                    {/* Inputs Area */}
                    <div className="p-6 bg-[#070a0f] border-b border-slate-800/60 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                        <div className="md:col-span-4 space-y-2">
                            <label className="text-[10px] font-mono font-bold tracking-wider text-slate-450 uppercase">1. Trigger Origin</label>
                            <select 
                                value={triggerSource} 
                                onChange={(e) => setTriggerSource(e.target.value)}
                                className="w-full bg-[#0d131f] border border-slate-800 rounded-xl px-4 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-emerald-500 cursor-pointer"
                                disabled={isRunning}
                            >
                                {triggerPresets.map((t) => <option key={t} value={t}>{t}</option>)}
                            </select>
                        </div>
                        
                        <div className="md:col-span-4 space-y-2">
                            <label className="text-[10px] font-mono font-bold tracking-wider text-slate-450 uppercase">2. Action Target</label>
                            <select 
                                value={destinationChannel} 
                                onChange={(e) => setDestinationChannel(e.target.value)}
                                className="w-full bg-[#0d131f] border border-slate-800 rounded-xl px-4 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-emerald-500 cursor-pointer"
                                disabled={isRunning}
                            >
                                {destPresets.map((d) => <option key={d} value={d}>{d}</option>)}
                            </select>
                        </div>

                        <div className="md:col-span-4 flex gap-3">
                            <button 
                                onClick={handleStart}
                                disabled={isRunning}
                                className="flex-grow py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Play className="w-3.5 h-3.5 fill-current" /> Trigger Relay
                            </button>
                            <button 
                                onClick={handleClear}
                                className="px-4 py-3 rounded-xl bg-slate-850 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center cursor-pointer transition-all"
                                title="Reset Logs"
                            >
                                <RefreshCw className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </div>

                    {/* Console Output Logs */}
                    <div className="p-6 bg-[#03060a] min-h-[220px] font-mono text-[11px] leading-relaxed text-slate-400 space-y-2 overflow-y-auto max-h-[300px]">
                        {logs.length === 0 && (
                            <div className="text-slate-500 italic py-8 text-center">
                                Select config routes above and click "Trigger Relay" to simulate live pipeline execution...
                            </div>
                        )}
                        <AnimatePresence>
                            {logs.map((log, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`pb-1 border-b border-slate-950/20 ${log.type === "success" ? "text-emerald-400 font-bold" : log.type === "cmd" ? "text-blue-400 font-semibold" : "text-slate-350"}`}
                                >
                                    {log.text}
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
