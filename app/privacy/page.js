"use client";

import Footer from "@/components/Footer";
import { Sparkles, ShieldCheck } from "lucide-react";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#03050c] text-white pt-28">
            <div className="max-w-[800px] mx-auto px-6 relative z-10 py-12 text-left space-y-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-500 bg-blue-500/10 border border-blue-500/20">
                    <ShieldCheck className="w-3.5 h-3.5" /> Legal & Security Compliance
                </span>
                <h1 className="text-3xl md:text-5xl font-heading font-black tracking-tight font-sora">Privacy Policy</h1>
                <p className="text-slate-400 text-xs font-mono">Last Updated: August 18, 2026</p>

                <div className="space-y-6 text-xs md:text-sm text-slate-400 leading-relaxed font-sans">
                    <p>
                        At Built by Kunal, accessible from builtbykunal.online, one of our main priorities is the privacy of our visitors and subscribers. This Privacy Policy document contains types of information that is collected and recorded by our platform and how we use it.
                    </p>

                    <h3 className="text-lg font-bold text-white font-sora pt-4">1. Data Ingestion & Crawling Systems</h3>
                    <p>
                        Our B2B search crawler, LeadMiner, parses publicly accessible business directory schemas, websites, and map records. We process contact records (corporate names, validated emails, telephone numbers) solely for standard B2B prospecting purposes. We do not extract personal consumer financial credentials or secure private credentials.
                    </p>

                    <h3 className="text-lg font-bold text-white font-sora pt-4">2. Cookies and Log Files</h3>
                    <p>
                        builtbykunal.online follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and number of clicks.
                    </p>

                    <h3 className="text-lg font-bold text-white font-sora pt-4">3. Data Security</h3>
                    <p>
                        All user configurations, tickets, leads, and API tokens are secured with industry-standard JWT signatures and TLS database connection pools. We do not sell or lease subscriber information to third-party ad brokers.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
