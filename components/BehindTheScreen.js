"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Disc, Monitor, Compass, Coffee, Headphones, BookOpen, GitCommit, Heart } from "lucide-react";

const TRACKS = [
    { title: "Lofi Focus Beats", artist: "ChilledCow", duration: "2:40" },
    { title: "Synthwave Night Run", artist: "Mitch Murder", duration: "3:15" },
    { title: "Ambient Coding Flow", artist: "Brian Eno", duration: "4:02" }
];

const NOTES = [
    "Design systems are code, not drawings.",
    "A page with layout shifts is a broken page.",
    "Write code for humans, optimize for compilers.",
    "Remove simple listeners on unmount, always."
];

export default function BehindTheScreen() {
    const [activeTrack, setActiveTrack] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [coffeeLevel, setCoffeeLevel] = useState(100);
    const [noteIndex, setNoteIndex] = useState(0);
    const [lastPressedKey, setLastPressedKey] = useState("PRESS ANY KEY");

    // Capture physical keyboard keypresses
    useEffect(() => {
        const handleKeyDown = (e) => {
            const keyStr = e.key.toUpperCase();
            if (keyStr.length === 1 || keyStr === "ENTER" || keyStr === "SPACE") {
                setLastPressedKey(keyStr === " " ? "SPACE" : keyStr);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const sipCoffee = () => {
        if (coffeeLevel > 0) {
            setCoffeeLevel(prev => Math.max(prev - 20, 0));
        } else {
            setCoffeeLevel(100); // refill
        }
    };

    return (
        <section className="relative py-20 lg:py-28 border-t border-slate-200 bg-slate-50 z-10 flex flex-col justify-center overflow-hidden">
            <div className="max-w-[1480px] w-full mx-auto px-6 md:px-12 relative z-10">
                
                {/* Section Header */}
                <div className="text-center max-w-xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider text-[var(--accent-global)] bg-[var(--accent-global-dim)] mb-4 font-mono">
                        <Monitor className="w-3 h-3 text-[var(--accent-global)]" />
                        WORKSPACE & PERSONALITY
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-black text-slate-900 tracking-tight leading-none mb-4 font-sora">
                        Behind The Screen.
                    </h2>
                    <p className="text-slate-500 text-xs md:text-sm">
                        An interactive look at my daily development environment and workflow essentials.
                    </p>
                </div>

                {/* Desk Workspace Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 w-full">
                    
                    {/* 1. MONITOR & SPOTIFY (8 cols) */}
                    <div className="md:col-span-8 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:border-slate-300 transition-all duration-300 relative overflow-hidden group">
                        
                        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                            <div className="flex items-center gap-2">
                                <Monitor className="w-5 h-5 text-blue-500" />
                                <span className="text-[10px] font-mono font-bold text-slate-800 tracking-widest uppercase">Kunal OS Workspace</span>
                            </div>
                            <span className="text-[8px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">SYSTEMS nominal</span>
                        </div>

                        {/* Monitor Screen Area */}
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center flex-grow">
                            
                            {/* Github mini contributions blocks grid */}
                            <div className="sm:col-span-6 flex flex-col gap-3">
                                <span className="text-[8.5px] font-mono font-bold text-slate-500 uppercase tracking-wider">Commit Log Activity</span>
                                <div className="grid grid-cols-7 gap-1.5 w-fit">
                                    {Array.from({ length: 28 }).map((_, i) => {
                                        // Random shade of green/slate
                                        const colorIdx = i % 5 === 0 ? "bg-emerald-500" : i % 3 === 0 ? "bg-emerald-600" : i % 2 === 0 ? "bg-emerald-100" : "bg-slate-100";
                                        return (
                                            <div 
                                                key={i} 
                                                className={`w-3.5 h-3.5 rounded-sm ${colorIdx} transition-all duration-300 hover:scale-1.15 cursor-pointer`}
                                            />
                                        );
                                    })}
                                </div>
                                <span className="text-[7.5px] font-mono text-slate-500">42 commits pushed today</span>
                            </div>

                            {/* Spotify audio player widget */}
                            <div className="sm:col-span-6 bg-slate-50 border border-slate-200 p-4 rounded-2xl flex flex-col justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center relative overflow-hidden">
                                        <Disc className={`w-5 h-5 text-blue-500 ${isPlaying ? 'animate-spin' : ''}`} />
                                    </div>
                                    <div className="flex flex-col overflow-hidden">
                                        <span className="text-[10px] font-bold text-slate-800 truncate">{TRACKS[activeTrack].title}</span>
                                        <span className="text-[8px] text-slate-500 truncate">{TRACKS[activeTrack].artist}</span>
                                    </div>
                                </div>

                                {/* Live visualizer bars */}
                                <div className="flex items-end gap-1.5 h-6 my-4 px-1">
                                    {Array.from({ length: 12 }).map((_, i) => {
                                        // Random animated heights
                                        const h = isPlaying ? [10, 24, 15, 30, 8][i % 5] : 4;
                                        return (
                                            <motion.div
                                                key={i}
                                                animate={{ height: isPlaying ? h : 4 }}
                                                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.05 }}
                                                className="flex-grow bg-blue-500/80 rounded-sm"
                                            />
                                        );
                                    })}
                                </div>

                                <div className="flex items-center justify-between text-[8px] font-bold">
                                    <button 
                                        onClick={() => setIsPlaying(!isPlaying)}
                                        className="text-blue-600 bg-blue-50 hover:bg-blue-100/60 px-2.5 py-1 rounded transition-colors"
                                    >
                                        {isPlaying ? "PAUSE" : "PLAY"}
                                    </button>
                                    <button 
                                        onClick={() => setActiveTrack((prev) => (prev + 1) % TRACKS.length)}
                                        className="text-slate-500 hover:text-slate-800 transition-colors"
                                    >
                                        NEXT ➔
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* 2. COFFEE CUP (4 cols) */}
                    <div className="md:col-span-4 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:border-slate-300 transition-all duration-300 relative overflow-hidden group">
                        <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">[ ☕ Coffee Refueler ]</span>
                        
                        <div className="flex flex-col items-center justify-center flex-grow my-4">
                            {/* Coffee Mug Drawing */}
                            <div className="relative w-16 h-20 bg-slate-50 border-2 border-slate-200 rounded-b-2xl rounded-t-sm flex flex-col justify-end overflow-hidden mb-4 cursor-pointer" onClick={sipCoffee}>
                                {/* Floating Steam paths */}
                                <div className="absolute top-1 left-1/2 -translate-x-1/2 flex gap-1 z-15 pointer-events-none">
                                    <div className="w-0.5 h-6 bg-slate-400/40 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                                    <div className="w-0.5 h-6 bg-slate-400/40 rounded-full animate-bounce" style={{ animationDelay: "0.5s" }} />
                                    <div className="w-0.5 h-6 bg-slate-400/40 rounded-full animate-bounce" style={{ animationDelay: "0.8s" }} />
                                </div>

                                {/* Coffee fill height block */}
                                <motion.div
                                    animate={{ height: `${coffeeLevel}%` }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full bg-[#5c4033] border-t border-amber-800/40 shadow-inner"
                                />
                            </div>

                            <span className="text-xs font-bold text-slate-800">Click Mug to Sip</span>
                            <span className="text-[10px] text-slate-500 mt-1 font-mono">
                                {coffeeLevel > 0 ? `Level: ${coffeeLevel}%` : "Empty! Click to Refill"}
                            </span>
                        </div>

                        <p className="text-[10px] text-slate-500 leading-normal font-medium">Fueled by Single Origin beans to keep compilation speeds high.</p>
                    </div>

                    {/* 3. KEYBOARD KEYBOARD (4 cols) */}
                    <div className="md:col-span-4 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:border-slate-300 transition-all duration-300 relative overflow-hidden group">
                        <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">[ ⌨ Mechanical Deck ]</span>
                        
                        <div className="flex flex-col items-center justify-center flex-grow my-4">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-blue-600 font-black text-base shadow-[0_4px_10px_rgba(59,130,246,0.05)] mb-4 select-none">
                                {lastPressedKey}
                            </div>
                            <span className="text-xs font-bold text-slate-800">Interactive Keyboard</span>
                            <span className="text-[10px] text-slate-500 mt-1">Press any physical key on your keyboard!</span>
                        </div>

                        <p className="text-[10px] text-slate-500 leading-normal font-medium">Listens to window events, highlighting keycodes dynamically.</p>
                    </div>

                    {/* 4. NOTEBOOK DEV TIPS (4 cols) */}
                    <div className="md:col-span-4 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:border-slate-300 transition-all duration-300 relative overflow-hidden group">
                        <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">[ 📓 Field Notebook ]</span>
                        
                        <div className="flex flex-col justify-center flex-grow my-6 min-h-[90px] select-none cursor-pointer" onClick={() => setNoteIndex((prev) => (prev + 1) % NOTES.length)}>
                            <BookOpen className="w-5 h-5 text-purple-400 mb-3" />
                            <p className="font-sans font-medium italic text-slate-700 text-sm leading-relaxed font-sora">
                                "{NOTES[noteIndex]}"
                            </p>
                        </div>

                        <div className="flex items-center justify-between text-[8px] font-bold text-slate-400">
                            <span>Click to Flip Page</span>
                            <span>PAGE {noteIndex + 1} / 4</span>
                        </div>
                    </div>

                    {/* 5. HEADPHONES PULSER (4 cols) */}
                    <div className="md:col-span-4 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:border-slate-300 transition-all duration-300 relative overflow-hidden group">
                        <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">[ 🎧 Headphones ]</span>
                        
                        <div className="flex flex-col items-center justify-center flex-grow my-4">
                            <Headphones className="w-10 h-10 text-emerald-500 group-hover:scale-1.1 transition-transform duration-300 mb-3" />
                            <span className="text-xs font-bold text-slate-800">Active Noise Cancelling</span>
                            <span className="text-[10px] text-slate-500 mt-1">Focus Mode: ON</span>
                        </div>

                        <p className="text-[10px] text-slate-500 leading-normal font-medium">Keeping distraction out and clean logic compilation in.</p>
                    </div>

                </div>

            </div>
        </section>
    );
}
