"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, Sparkles, ShieldCheck, Mail, Calendar, 
  ArrowRight, Check, Activity, BarChart3, Clock, 
  UserCheck, Database, DollarSign
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function CrmProduct() {
    const [timeframe, setTimeframe] = useState("30"); // 30, 90, year
    
    const getStats = () => {
        if (timeframe === "30") {
            return { leads: 142, revenue: 14200, conversion: "18.4%", tickets: 4 };
        }
        if (timeframe === "90") {
            return { leads: 489, revenue: 52800, conversion: "21.2%", tickets: 12 };
        }
        return { leads: 2104, revenue: 248900, conversion: "23.8%", tickets: 41 };
    };

    const stats = getStats();

    return (
        <main className="min-h-screen bg-[#03050c] text-white pt-28">
            {/* Ambient background glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <div 
                    className="absolute top-[12%] right-[10%] w-[400px] h-[400px] rounded-full opacity-20 blur-[130px]"
                    style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 80%)" }}
                />
            </div>

            <div className="max-w-[1480px] w-full mx-auto px-6 md:px-12 relative z-10">
                
                {/* 1. HERO */}
                <div className="text-center py-16 md:py-24 max-w-3xl mx-auto space-y-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-[#8b5cf6] bg-purple-500/10 border border-purple-500/20">
                        <Sparkles className="w-3.5 h-3.5" /> Complete Business Operating Hub
                    </span>
                    <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-none font-sora">
                        NextGen Multi-Company <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">CRM Dashboard.</span>
                    </h1>
                    <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                        A production-grade, multi-tenant administrative engine designed to manage employee roles, database records, invoices, tickets, and sales activities across multiple companies.
                    </p>
                    <div className="pt-4">
                        <Link 
                            href="/contact?product=crm_demo"
                            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-extrabold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
                        >
                            Schedule Interactive CRM Demo <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* 2. INTERACTIVE DASHBOARD TELEMETRY WIDGET */}
                <div className="bg-[#070a0f] border border-slate-800 rounded-[32px] overflow-hidden shadow-2xl p-6 md:p-8 my-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 pb-6 gap-4">
                        <div className="text-left">
                            <span className="text-[10px] font-mono font-bold text-[#8b5cf6] uppercase tracking-wider block">CRM Sandbox View</span>
                            <h3 className="text-xl font-bold font-sora mt-0.5">Mock Telemetry & Ingestion</h3>
                        </div>

                        {/* Configurator */}
                        <div className="flex gap-2">
                            {[
                                { id: "30", label: "Last 30 Days" },
                                { id: "90", label: "Last 90 Days" },
                                { id: "year", label: "Full Year" }
                            ].map((tf) => (
                                <button 
                                    key={tf.id}
                                    onClick={() => setTimeframe(tf.id)}
                                    className={`px-4.5 py-2 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer ${
                                        timeframe === tf.id 
                                        ? "bg-[#8b5cf6] text-white"
                                        : "bg-[#0d131f] text-slate-455 border border-slate-800 hover:border-slate-700"
                                    }`}
                                >
                                    {tf.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Miniature Dashboard Stats grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                        <div className="bg-[#0c101a] border border-slate-850 rounded-2xl p-5 text-left">
                            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block">New Leads Ingested</span>
                            <span className="text-3xl font-black font-sora text-white mt-1 block">{stats.leads}</span>
                        </div>
                        <div className="bg-[#0c101a] border border-slate-850 rounded-2xl p-5 text-left">
                            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block">Simulated Revenue</span>
                            <span className="text-3xl font-black font-sora text-[#8b5cf6] mt-1 block">${stats.revenue.toLocaleString()}</span>
                        </div>
                        <div className="bg-[#0c101a] border border-slate-850 rounded-2xl p-5 text-left">
                            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block">Pipeline Conversion</span>
                            <span className="text-3xl font-black font-sora text-emerald-400 mt-1 block">{stats.conversion}</span>
                        </div>
                        <div className="bg-[#0c101a] border border-slate-850 rounded-2xl p-5 text-left">
                            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block">Open Support Tickets</span>
                            <span className="text-3xl font-black font-sora text-amber-400 mt-1 block">{stats.tickets}</span>
                        </div>
                    </div>

                    {/* Secondary interactive log stream */}
                    <div className="mt-6 bg-[#03060a] border border-slate-850 rounded-2xl p-5 text-left text-xs font-mono text-slate-400">
                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-900 pb-2.5 mb-2.5">
                            Recent Telecaller Logs & DB Commits
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <Clock className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                                <span>[10:14:02 AM] Telecaller <span className="text-white font-bold">Rohan</span> updated Lead <span className="text-white">ApexCare</span>: quotation_sent</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <UserCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                <span>[09:48:19 AM] Account Created: Telecaller role assigned to user <span className="text-white">rohan@agency.in</span></span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Database className="w-3.5 h-3.5 text-[#8b5cf6] shrink-0" />
                                <span>[09:12:05 AM] System DB Sync: Nominal database migration deployed successfully.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. CAPABILITIES GRID */}
                <div className="py-16 text-center">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#8b5cf6] uppercase">Core Features</span>
                    <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tight mt-1 font-sora">What NextGen CRM Manages</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
                        <div className="bg-[#0c101a] border border-slate-850 p-6 rounded-3xl space-y-3">
                            <h3 className="text-lg font-bold text-white font-sora flex items-center gap-2">
                                <span className="w-1.5 h-4 bg-purple-500 rounded-full" /> Lead Pipelines & Logs
                            </h3>
                            <p className="text-slate-400 text-xs leading-relaxed">
                                Track source metrics (Google Ads, referral, email), budget ranges, client follow-up dates, call duration registers, and custom interaction logs on a single screen.
                            </p>
                        </div>
                        <div className="bg-[#0c101a] border border-slate-850 p-6 rounded-3xl space-y-3">
                            <h3 className="text-lg font-bold text-white font-sora flex items-center gap-2">
                                <span className="w-1.5 h-4 bg-purple-500 rounded-full" /> Invoice & PDF Dispatch
                            </h3>
                            <p className="text-slate-400 text-xs leading-relaxed">
                                Auto-generate beautifully formatted PDF quotes and invoices. Track bank transfer transactions, pending balances, partial deposits, and due date alerts.
                            </p>
                        </div>
                        <div className="bg-[#0c101a] border border-slate-850 p-6 rounded-3xl space-y-3">
                            <h3 className="text-lg font-bold text-white font-sora flex items-center gap-2">
                                <span className="w-1.5 h-4 bg-purple-500 rounded-full" /> Ticket Categories & Comments
                            </h3>
                            <p className="text-slate-400 text-xs leading-relaxed">
                                Categorize customer queries (technical, billing, sales) with priority tags. Assign tickets to active developers or designers, log comments, and mark updates.
                            </p>
                        </div>
                        <div className="bg-[#0c101a] border border-slate-850 p-6 rounded-3xl space-y-3">
                            <h3 className="text-lg font-bold text-white font-sora flex items-center gap-2">
                                <span className="w-1.5 h-4 bg-purple-500 rounded-full" /> Employee Attendance Roster
                            </h3>
                            <p className="text-slate-400 text-xs leading-relaxed">
                                Unified HRMS system to track developer check-ins, sales calls, active role permissions (Telecaller, Admin, Superadmin), and basic monthly payroll logs.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </main>
    );
}
