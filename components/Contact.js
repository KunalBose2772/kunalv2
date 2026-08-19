"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Phone, Terminal as TermIcon, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    // Terminal Wizard Flow States
    // 0: Initial prompt ("press enter to start-contact-wizard")
    // 1: Entering Name
    // 2: Entering Email
    // 3: Entering Project Message
    // 4: Sending payload
    // 5: Finished Success
    const [wizardStep, setWizardStep] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [history, setHistory] = useState([
        { text: "kunal@terminal:~$ start-contact-wizard", type: "cmd" },
        { text: "Initializing secure CLI contact wizard...", type: "info" },
        { text: "-------------------------------------------------", type: "info" }
    ]);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const inputRef = useRef(null);
    const consoleBottomRef = useRef(null);

    // Focus input on terminal area click
    const focusTerminalInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    // Auto scroll terminal logs to bottom
    useEffect(() => {
        if (consoleBottomRef.current) {
            consoleBottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [history, wizardStep]);

    // Handle initial wizard setup
    useEffect(() => {
        if (wizardStep === 0) {
            setHistory(prev => [
                ...prev,
                { text: "Please enter your full name below:", type: "prompt" }
            ]);
            setWizardStep(1);
        }
    }, [wizardStep]);

    const handleFormSubmit = async (finalData) => {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(finalData)
            });
            if (res.ok) {
                setHistory(prev => [
                    ...prev,
                    { text: "Status: 200 OK - Secure packet transmission complete.", type: "success" },
                    { text: "-------------------------------------------------", type: "info" },
                    { text: "Message received successfully! I will reach out shortly.", type: "success" }
                ]);
                setWizardStep(5);
            } else {
                throw new Error("Bad status");
            }
        } catch (err) {
            setHistory(prev => [
                ...prev,
                { text: "Transmission Error. Failed to send payload via API.", type: "error" },
                { text: "Direct backup: Please email kunalbose2570@gmail.com directly.", type: "error" }
            ]);
            setWizardStep(5);
        }
    };

    const handleInputSubmit = (e) => {
        e.preventDefault();
        const trimmed = inputValue.trim();
        if (!trimmed && wizardStep !== 3) return; // allow empty message maybe? No, let's validate

        if (wizardStep === 1) {
            // Submitted Name
            setFormData(prev => ({ ...prev, name: trimmed }));
            setHistory(prev => [
                ...prev,
                { text: `> Name: ${trimmed}`, type: "user" },
                { text: "Please enter your email address:", type: "prompt" }
            ]);
            setInputValue("");
            setWizardStep(2);
        } else if (wizardStep === 2) {
            // Submitted Email
            if (!trimmed.includes("@")) {
                setHistory(prev => [
                    ...prev,
                    { text: `> Email: ${trimmed}`, type: "user" },
                    { text: "Error: Invalid email structure. Please try again:", type: "error" }
                ]);
                setInputValue("");
                return;
            }
            setFormData(prev => ({ ...prev, email: trimmed }));
            setHistory(prev => [
                ...prev,
                { text: `> Email: ${trimmed}`, type: "user" },
                { text: "Tell me briefly about your project requirements:", type: "prompt" }
            ]);
            setInputValue("");
            setWizardStep(3);
        } else if (wizardStep === 3) {
            // Submitted Message
            const finalData = { ...formData, message: trimmed };
            setFormData(prev => ({ ...prev, message: trimmed }));
            setHistory(prev => [
                ...prev,
                { text: `> Project Brief: ${trimmed}`, type: "user" },
                { text: "Compiling packet structures...", type: "info" },
                { text: "Uploading payload to server database...", type: "info" }
            ]);
            setInputValue("");
            setWizardStep(4);
            handleFormSubmit(finalData);
        }
    };

    return (
        <section id="contact" className="relative py-20 lg:py-28 border-t border-slate-200 bg-slate-50 z-10 flex flex-col justify-center overflow-hidden min-h-[90vh]">
            <div className="max-w-[1480px] w-full mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Column: Pitch & Identity Info */}
                    <div className="lg:col-span-5 flex flex-col text-left">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider text-[var(--accent-global)] bg-[var(--accent-global-dim)] mb-4 font-mono">
                            <Mail className="w-3.5 h-3.5 text-[var(--accent-global)]" />
                            GET IN TOUCH
                        </span>
                        <h2 className="text-3xl md:text-5xl font-heading font-black text-slate-900 tracking-tight leading-none mb-6 font-sora">
                            Let's Build <br />
                            Something Great.
                        </h2>
                        <p className="text-slate-655 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                            If you need a frontend engineer who approaches applications from a systems perspective, let's start a conversation. 
                        </p>

                        {/* Direct Contacts Info */}
                        <div className="flex flex-col gap-3.5 mb-10">
                            <a 
                                href="mailto:kunalbose2570@gmail.com" 
                                className="flex items-center gap-2.5 text-slate-600 hover:text-slate-900 transition-colors text-sm font-semibold"
                            >
                                <Mail className="w-4.5 h-4.5 text-blue-500" />
                                kunalbose2570@gmail.com
                            </a>
                            <a 
                                href="tel:7667341075" 
                                className="flex items-center gap-2.5 text-slate-600 hover:text-slate-900 transition-colors text-sm font-semibold"
                            >
                                <Phone className="w-4.5 h-4.5 text-blue-500" />
                                +91 76673 41075
                            </a>
                        </div>

                        {/* Social Buttons */}
                        <div className="flex flex-wrap items-center gap-3">
                            <Link href="https://github.com/KunalBose2772" target="_blank" className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center bg-white text-slate-500 hover:border-blue-500 hover:text-slate-800 transition-colors">
                                <Github className="w-4.5 h-4.5" />
                            </Link>
                            <Link href="https://linkedin.com/in/kunal-bose-a45926269" target="_blank" className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center bg-white text-slate-500 hover:border-blue-500 hover:text-slate-800 transition-colors">
                                <Linkedin className="w-4.5 h-4.5" />
                            </Link>
                            <Link href="https://x.com/KunalBose2772" target="_blank" className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center bg-white text-slate-500 hover:border-blue-500 hover:text-slate-800 transition-colors">
                                <Twitter className="w-4.5 h-4.5" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Split CLI Terminal */}
                    <div className="lg:col-span-7">
                        <div 
                            onClick={focusTerminalInput}
                            className="w-full max-w-[620px] mx-auto bg-[#05070a] border border-slate-800 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col min-h-[340px] text-left font-mono text-xs md:text-sm select-none cursor-text"
                        >
                            {/* Window Header */}
                            <div className="bg-[#121824] border-b border-slate-900/50 px-4 py-2.5 flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                                </div>
                                <div className="flex items-center gap-1 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                                    <TermIcon className="w-3.5 h-3.5 text-blue-500" />
                                    CLI Contact Wizard
                                </div>
                                <span className="text-[10px] text-slate-655">v1.0.8</span>
                            </div>

                            {/* Logs & Inputs Viewport */}
                            <div className="p-5 flex-grow flex flex-col gap-2 overflow-y-auto max-h-[300px]">
                                {history.map((line, idx) => {
                                    let textColor = "text-slate-400";
                                    if (line.type === "cmd") textColor = "text-blue-400 font-semibold";
                                    if (line.type === "user") textColor = "text-green-400 font-semibold";
                                    if (line.type === "prompt") textColor = "text-white font-semibold";
                                    if (line.type === "success") textColor = "text-emerald-400 font-semibold";
                                    if (line.type === "error") textColor = "text-rose-500 font-semibold";

                                    return (
                                        <p key={idx} className={`leading-relaxed whitespace-pre-wrap ${textColor}`}>
                                            {line.text}
                                        </p>
                                    );
                                })}

                                {/* Active prompt input field */}
                                {wizardStep > 0 && wizardStep < 4 && (
                                    <form onSubmit={handleInputSubmit} className="flex items-center gap-1">
                                        <span className="text-green-400 font-bold font-mono">
                                            {wizardStep === 1 ? "Name: " : wizardStep === 2 ? "Email: " : "Project: "}
                                        </span>
                                        <input
                                            ref={inputRef}
                                            type={wizardStep === 2 ? "email" : "text"}
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            className="flex-grow bg-transparent border-none outline-none text-green-400 font-bold font-mono focus:ring-0 p-0 m-0 w-full"
                                            autoFocus
                                            placeholder="Type and press Enter..."
                                        />
                                    </form>
                                )}

                                {/* Auto-scroll dummy anchor */}
                                <div ref={consoleBottomRef} />
                            </div>

                            {/* Footer control info */}
                            <div className="bg-[#090c13] border-t border-slate-900/50 px-4 py-2 flex justify-between items-center text-[9px] text-slate-500">
                                <span>Exit code: 0</span>
                                <span>Press [Enter] to submit entries</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
