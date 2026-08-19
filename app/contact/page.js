"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, Phone, MapPin, Calendar, Clock, CheckCircle, 
  ArrowRight, Sparkles, AlertCircle, ChevronRight
} from "lucide-react";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ContactPage() {
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [bookingSuccess, setBookingSuccess] = useState(false);

    const days = [
        { name: "Mon", date: "24 Aug" },
        { name: "Tue", date: "25 Aug" },
        { name: "Wed", date: "26 Aug" },
        { name: "Thu", date: "27 Aug" },
        { name: "Fri", date: "28 Aug" }
    ];

    const times = ["10:00 AM", "12:30 PM", "02:00 PM", "04:30 PM"];

    const handleBook = () => {
        if (!selectedDay || !selectedTime) return;
        setBookingSuccess(true);
    };

    return (
        <main className="min-h-screen bg-[#03050c] text-white pt-28">
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <div 
                    className="absolute top-[10%] left-[1/2] -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-15 blur-[150px]"
                    style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 80%)" }}
                />
            </div>

            <div className="max-w-[1480px] w-full mx-auto px-6 md:px-12 relative z-10">
                
                {/* 1. HERO */}
                <div className="text-center py-12 max-w-3xl mx-auto space-y-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-500 bg-blue-500/10 border border-blue-500/20">
                        <Sparkles className="w-3.5 h-3.5" /> Book A Free Consultation
                    </span>
                    <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight font-sora">
                        Let's Engineer Your Next <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Software Asset.</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-10 items-stretch">
                    
                    {/* Left: Contact Info & Meeting Scheduler */}
                    <div className="lg:col-span-6 flex flex-col gap-6">
                        
                        {/* Instant Booking Widget */}
                        <div className="bg-slate-50 dark:bg-[#0c101a] border border-slate-200 dark:border-slate-800/80 rounded-[32px] p-6 md:p-8 text-slate-900 dark:text-white shadow-2xl relative overflow-hidden flex flex-col justify-between">
                            <div className="space-y-5">
                                <div className="text-left">
                                    <span className="text-[9px] font-mono font-bold tracking-widest text-blue-600 dark:text-blue-450 uppercase block">Instant Scheduler</span>
                                    <h3 className="text-xl font-bold font-sora mt-0.5">Secure A Technical Session</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">Select a timezone-nominal slot to speak directly with Kunal.</p>
                                </div>

                                {!bookingSuccess ? (
                                    <>
                                        {/* Day Select */}
                                        <div className="space-y-2">
                                            <span className="text-xs font-bold text-slate-700 dark:text-slate-350 block">SELECT DATE</span>
                                            <div className="grid grid-cols-5 gap-2">
                                                {days.map((d) => (
                                                    <button 
                                                        key={d.date}
                                                        onClick={() => setSelectedDay(d.date)}
                                                        className={`p-2.5 rounded-xl border text-center cursor-pointer transition-all flex flex-col items-center ${
                                                            selectedDay === d.date 
                                                            ? "border-blue-500 bg-blue-50/50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 font-bold"
                                                            : "border-slate-200 dark:border-slate-850 bg-white dark:bg-transparent text-slate-655 dark:text-slate-400"
                                                        }`}
                                                    >
                                                        <span className="text-[10px] uppercase font-mono">{d.name}</span>
                                                        <span className="text-xs font-bold mt-1">{d.date.split(" ")[0]}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Time Select */}
                                        <div className="space-y-2">
                                            <span className="text-xs font-bold text-slate-700 dark:text-slate-350 block">AVAILABLE SLOTS (IST)</span>
                                            <div className="grid grid-cols-2 gap-2">
                                                {times.map((t) => (
                                                    <button 
                                                        key={t}
                                                        onClick={() => setSelectedTime(t)}
                                                        className={`p-3 rounded-xl border text-center cursor-pointer transition-all text-xs font-mono font-bold ${
                                                            selectedTime === t 
                                                            ? "border-blue-500 bg-blue-50/50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400"
                                                            : "border-slate-200 dark:border-slate-850 bg-white dark:bg-transparent text-slate-655 dark:text-slate-400"
                                                        }`}
                                                    >
                                                        {t}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <button 
                                            onClick={handleBook}
                                            disabled={!selectedDay || !selectedTime}
                                            className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider block transition-all shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-center"
                                        >
                                            Confirm Calendar Booking
                                        </button>
                                    </>
                                ) : (
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                                    >
                                        <CheckCircle className="w-16 h-16 text-emerald-500" />
                                        <div className="space-y-1">
                                            <h4 className="text-lg font-bold text-slate-850 dark:text-white">Slot Reserved Successfully!</h4>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
                                                Kunal will email you a secure Google Meet invitation for <span className="font-bold text-blue-600 dark:text-blue-450">{selectedDay} at {selectedTime}</span>.
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </div>

                        {/* Direct Channel badges */}
                        <div className="grid grid-cols-2 gap-4">
                            <a href="mailto:kunalbose2570@gmail.com" className="bg-[#0c101a] border border-slate-850 hover:border-slate-700 p-5 rounded-2xl text-left block group">
                                <Mail className="w-6 h-6 text-blue-500 mb-2 group-hover:scale-105 transition-transform" />
                                <span className="text-[10px] font-mono text-slate-500 block uppercase font-bold">Email Direct</span>
                                <span className="text-xs font-bold text-slate-300 mt-1 block truncate">kunalbose2570@gmail.com</span>
                            </a>
                            <a href="tel:7667341075" className="bg-[#0c101a] border border-slate-850 hover:border-slate-700 p-5 rounded-2xl text-left block group">
                                <Phone className="w-6 h-6 text-purple-500 mb-2 group-hover:scale-105 transition-transform" />
                                <span className="text-[10px] font-mono text-slate-500 block uppercase font-bold">Phone Channel</span>
                                <span className="text-xs font-bold text-slate-300 mt-1 block">+91 76673 41075</span>
                            </a>
                        </div>
                    </div>

                    {/* Right: Embedded Interactive CLI Wizard */}
                    <div className="lg:col-span-6 flex flex-col justify-stretch">
                        <Contact />
                    </div>

                </div>

            </div>

            <Footer />
        </main>
    );
}
