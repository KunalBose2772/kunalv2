"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, cubicBezier } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const easeOutExpo = cubicBezier(0.16, 1, 0.3, 1);
const easeInOutQuart = cubicBezier(0.76, 0, 0.24, 1);
const easeInOut = cubicBezier(0.25, 0.1, 0.25, 1);

export default function HeroAbout() {
    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({
        dx: 0,
        dy: 0,
        heroLeft: 0,
        heroTop: 0,
        heroWidth: 0,
        heroHeight: 0,
        aboutWidth: 0,
        aboutHeight: 0,
        windowHeight: 800,
        isReady: false
    });

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePos({ x, y });
    };

    const measurePlaceholders = () => {
        const heroEl = document.getElementById("hero-portrait-placeholder");
        const aboutEl = document.getElementById("about-portrait-placeholder");
        if (heroEl && aboutEl) {
            const heroRect = heroEl.getBoundingClientRect();
            const aboutRect = aboutEl.getBoundingClientRect();
            
            // Document-relative coordinates
            const scrollY = window.scrollY;
            const scrollX = window.scrollX;
            
            const heroPageTop = heroRect.top + scrollY;
            const heroPageLeft = heroRect.left + scrollX;
            const aboutPageTop = aboutRect.top + scrollY;
            const aboutPageLeft = aboutRect.left + scrollX;

            const dx = aboutPageLeft - heroPageLeft;
            const dy = aboutPageTop - heroPageTop;

            setDimensions({
                dx,
                dy,
                heroLeft: heroPageLeft,
                heroTop: heroPageTop,
                heroWidth: heroRect.width,
                heroHeight: heroRect.height,
                aboutWidth: aboutRect.width,
                aboutHeight: aboutRect.height,
                windowHeight: window.innerHeight,
                isReady: true
            });
        }
    };

    useEffect(() => {
        // Measure after mount
        measurePlaceholders();

        // Remeasure after a short delay for layout settlement
        const timer1 = setTimeout(measurePlaceholders, 100);
        const timer2 = setTimeout(measurePlaceholders, 300);

        // Listen for resize events
        window.addEventListener("resize", measurePlaceholders);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            window.removeEventListener("resize", measurePlaceholders);
        };
    }, []);

    // Scroll progress from Framer Motion
    const { scrollY } = useScroll();
    
    // Apply Spring physics to scroll position for buttery smooth transitions
    const smoothScrollY = useSpring(scrollY, {
        damping: 55,
        stiffness: 280,
        mass: 0.8
    });
    
    const windowHeight = dimensions.windowHeight;

    // Shared Portrait Transforms (using smoothScrollY)
    // Use easeInOutQuart for a uniform, synchronized scroll transition
    const x = useTransform(
        smoothScrollY,
        [0, windowHeight * 0.15, windowHeight * 0.8, windowHeight],
        [0, 0, dimensions.dx, dimensions.dx],
        { ease: easeInOutQuart }
    );

    const y = useTransform(
        smoothScrollY,
        [0, windowHeight * 0.15, windowHeight * 0.8, windowHeight],
        [0, 0, dimensions.dy, dimensions.dy],
        { ease: easeInOutQuart }
    );

    const width = useTransform(
        smoothScrollY,
        [0, windowHeight * 0.15, windowHeight * 0.8, windowHeight],
        [dimensions.heroWidth, dimensions.heroWidth, dimensions.aboutWidth || dimensions.heroWidth, dimensions.aboutWidth || dimensions.heroWidth],
        { ease: easeInOutQuart }
    );

    const height = useTransform(
        smoothScrollY,
        [0, windowHeight * 0.15, windowHeight * 0.8, windowHeight],
        [dimensions.heroHeight, dimensions.heroHeight, dimensions.aboutHeight || dimensions.heroHeight, dimensions.aboutHeight || dimensions.heroHeight],
        { ease: easeInOutQuart }
    );

    // Opacity: stays fully visible throughout the transition
    const opacity = useTransform(
        smoothScrollY,
        [0, windowHeight * 0.9, windowHeight],
        [1, 1, 1]
    );

    const imageGrayscale = useTransform(
        smoothScrollY,
        [0, windowHeight * 0.2, windowHeight * 0.75],
        [100, 100, 0]
    );

    const grayscaleFilter = useTransform(
        imageGrayscale,
        (val) => `grayscale(${val}%)`
    );

    // Hero content transitions (using smoothScrollY)
    const subtitleOpacity = useTransform(smoothScrollY, [0, windowHeight * 0.15], [1, 0]);
    const subtitleY = useTransform(smoothScrollY, [0, windowHeight * 0.15], [0, -25]);

    const titleOpacity = useTransform(smoothScrollY, [0, windowHeight * 0.22], [1, 0]);
    const titleY = useTransform(smoothScrollY, [0, windowHeight * 0.22], [0, -35]);

    const badgeOpacity = useTransform(smoothScrollY, [0, windowHeight * 0.12], [1, 0]);
    const descOpacity = useTransform(smoothScrollY, [0, windowHeight * 0.18], [1, 0]);

    const mobileNameOpacity = useTransform(smoothScrollY, [0, windowHeight * 0.18], [1, 0]);
    const mobileNameY = useTransform(smoothScrollY, [0, windowHeight * 0.18], [0, -25]);
    const mobileDesignationOpacity = useTransform(smoothScrollY, [0, windowHeight * 0.22], [1, 0]);
    const mobileDesignationY = useTransform(smoothScrollY, [0, windowHeight * 0.22], [0, -25]);
    const mobileCtaOpacity = useTransform(smoothScrollY, [0, windowHeight * 0.15], [1, 0]);

    const footerOpacity = useTransform(smoothScrollY, [0, windowHeight * 0.15], [1, 0]);
    const heroBgOpacity = useTransform(smoothScrollY, [0, windowHeight * 0.8], [1, 0]);

    // About content transitions (using smoothScrollY)
    const aboutOpacity = useTransform(smoothScrollY, [windowHeight * 0.35, windowHeight * 0.75], [0, 1]);
    const aboutY = useTransform(smoothScrollY, [windowHeight * 0.35, windowHeight * 0.75], [45, 0]);

    const widgetsOpacity = useTransform(smoothScrollY, [windowHeight * 0.4, windowHeight * 0.8], [0, 1]);

    return (
        <div ref={containerRef} className="relative w-full">
            
            {/* ========================================================================= */}
            {/* HERO SECTION */}
            {/* ========================================================================= */}
            <section className="relative h-screen overflow-hidden flex flex-col justify-between hero-blue-glow select-none">
                {/* Background Video & Glows */}
                <motion.div style={{ opacity: heroBgOpacity }} className="absolute inset-0 pointer-events-none z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-[0.06] dark:opacity-[0.22] mix-blend-multiply dark:mix-blend-screen"
                    >
                        <source src="/hero.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 hero-grid opacity-[0.03] dark:opacity-[0.015]" />
                    <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-blue-500/8 dark:bg-blue-600/4 blur-[80px] md:blur-[130px]" />
                    <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full bg-indigo-500/8 dark:bg-indigo-600/4 blur-[60px] md:blur-[110px]" />
                </motion.div>

                {/* Subtitle: "Hey, there" */}
                <motion.div 
                    style={{ opacity: subtitleOpacity, y: subtitleY }}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
                    className="absolute top-[18%] lg:top-[16%] left-1/2 -translate-x-1/2 z-10 pointer-events-none text-center w-full"
                >
                    <span className="font-serif italic font-light text-[clamp(36px,6vw,96px)] text-foreground/90 tracking-normal block">
                        Hey, there
                    </span>
                </motion.div>

                {/* Main Content Layout */}
                <div className="w-[calc(100%-48px)] max-w-[1480px] mx-auto px-7 z-10 flex-grow flex flex-col justify-between relative h-full pointer-events-none">
                    <div className="h-20" />

                    {/* Left Block (Desktop Only) */}
                    <div className="hidden lg:block absolute bottom-[10%] left-7 z-30 max-w-[30%] pointer-events-none">
                        <motion.div 
                            style={{ opacity: badgeOpacity }}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.75 }}
                            className="hidden lg:flex mb-8 justify-start pointer-events-auto"
                        >
                            <div className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-foreground/10 bg-background/50 backdrop-blur-md shadow-sm">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                </span>
                                <span className="text-xs font-semibold tracking-wide text-foreground/80">
                                    Available for new opportunities
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            style={{ opacity: titleOpacity, y: titleY }}
                            initial={{ opacity: 0, y: 35 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                            className="flex flex-col"
                        >
                            <span className="font-heading font-black uppercase text-[clamp(28px,6vw,105px)] leading-[0.9] tracking-[-0.04em] text-foreground">
                                I AM <br /> KUNAL <br /> BOSE
                            </span>
                        </motion.div>
                    </div>

                    {/* Right Block (Desktop Only) */}
                    <div className="hidden lg:block absolute bottom-[10%] right-7 z-30 max-w-[30%] text-right pointer-events-none">
                        <motion.div 
                            style={{ opacity: descOpacity }}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.75 }}
                            className="hidden lg:block mb-10 max-w-[320px] ml-auto text-right pointer-events-auto"
                        >
                            <p className="text-sm leading-relaxed text-foreground/60 font-sans tracking-wide">
                                Architecting high-performance digital systems and web experiences that connect users with value.
                            </p>
                        </motion.div>

                        <motion.div
                            style={{ opacity: titleOpacity, y: titleY }}
                            initial={{ opacity: 0, y: 35 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                            className="flex flex-col"
                        >
                            <span className="font-heading font-black uppercase text-[clamp(20px,4.5vw,68px)] leading-[0.9] tracking-[-0.04em] text-foreground">
                                FULL-STACK <br /> DEVELOPER
                            </span>
                        </motion.div>
                    </div>

                    {/* Mobile/Tablet Centered Block */}
                    <div className="lg:hidden flex flex-col items-center text-center absolute top-[26%] left-1/2 -translate-x-1/2 w-[calc(100%-48px)] z-30 pointer-events-none">
                        <motion.h1
                            style={{ opacity: mobileNameOpacity, y: mobileNameY }}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            className="font-heading font-black uppercase text-[36px] sm:text-[48px] leading-[0.9] tracking-[-0.03em] text-foreground"
                        >
                            I AM KUNAL BOSE
                        </motion.h1>
                        
                        <motion.h2
                            style={{ opacity: mobileDesignationOpacity, y: mobileDesignationY }}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="font-heading font-bold uppercase text-[14px] sm:text-[16px] tracking-[0.18em] text-foreground/75 mt-3"
                        >
                            FULL-STACK DEVELOPER
                        </motion.h2>

                        <motion.div
                            style={{ opacity: mobileCtaOpacity }}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.75 }}
                            className="flex items-center gap-6 mt-7 pointer-events-auto"
                        >
                            <Link
                                href="#contact"
                                className="text-[11px] font-bold tracking-[0.2em] uppercase text-foreground hover:text-blue-500 transition-colors py-2"
                            >
                                Get in Touch
                            </Link>
                            <span className="text-foreground/20 font-light select-none">|</span>
                            <Link
                                href="#work"
                                className="text-[11px] font-bold tracking-[0.2em] uppercase text-foreground hover:text-blue-500 transition-colors py-2"
                            >
                                View Work
                            </Link>
                        </motion.div>
                    </div>

                    {/* Placeholder for the Shared Portrait inside Hero */}
                    <div 
                        id="hero-portrait-placeholder" 
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[49vh] sm:h-[59vh] lg:h-[74vh] max-w-[270px] sm:max-w-[400px] lg:max-w-[610px] pointer-events-none opacity-0"
                    />

                    <div className="flex-grow hidden lg:block pointer-events-none" />

                    {/* Footer bar at the bottom (Desktop Only) */}
                    <div className="hidden lg:flex z-30 pt-6 pb-6 w-full flex-row items-center justify-between gap-6 mt-auto">
                        <motion.div
                            style={{ opacity: footerOpacity }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                            className="flex items-center gap-3"
                        >
                            <div className="flex -space-x-2">
                                <div className="w-6 h-6 rounded-full bg-slate-300 dark:bg-slate-700 border border-background overflow-hidden relative">
                                    <div className="w-full h-full bg-gradient-to-tr from-blue-500 to-indigo-500" />
                                </div>
                                <div className="w-6 h-6 rounded-full bg-slate-300 dark:bg-slate-700 border border-background overflow-hidden relative">
                                    <div className="w-full h-full bg-gradient-to-tr from-emerald-500 to-teal-500" />
                                </div>
                                <div className="w-6 h-6 rounded-full bg-slate-300 dark:bg-slate-700 border border-background overflow-hidden relative">
                                    <div className="w-full h-full bg-gradient-to-tr from-rose-500 to-orange-500" />
                                </div>
                            </div>
                            <span className="text-[11px] font-semibold text-foreground/50 tracking-wide">
                                Trusted by clients at top tech companies worldwide
                            </span>
                        </motion.div>

                        <motion.div
                            style={{ opacity: footerOpacity }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                            className="pointer-events-auto"
                        >
                            <Link
                                href="#contact"
                                className="group flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] uppercase text-foreground hover:text-blue-500 transition-all duration-300"
                            >
                                Get in Touch
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ========================================================================= */}
            {/* ABOUT SECTION */}
            {/* ========================================================================= */}
            <section id="about" className="relative py-12 lg:py-16 bg-white/5 dark:bg-slate-950/20 backdrop-blur-xl border-b border-slate-200/10 dark:border-white/5 z-10 flex items-center overflow-hidden">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-[1480px] w-full mx-auto px-6 md:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        
                        {/* Left Column (Heading & Paragraph) */}
                        <motion.div
                            className="lg:col-span-7 flex flex-col items-start text-left"
                            style={{ opacity: aboutOpacity, y: aboutY }}
                        >
                            <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs md:text-sm mb-4 block">
                                AVAILABLE FOR FREELANCE
                            </span>

                            <h2 className="text-[clamp(36px,5vw,64px)] leading-[1.05] font-heading font-bold text-foreground mb-6 tracking-tight">
                                Turning Visionary Ideas<br />
                                <span className="text-brand-accent opacity-90">Into High-Performance Products.</span>
                            </h2>

                            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium max-w-xl leading-relaxed">
                                I am a freelance full-stack developer dedicated to building fast, secure, and easy-to-use web applications that solve real-world problems. Whether you want to launch a new product, automate your workflow, or build a custom web solution from scratch, let's collaborate to make it a reality.
                            </p>
                        </motion.div>

                        {/* Right Column - Transition Image Placeholder */}
                        <div className="lg:col-span-5 relative w-full flex items-center justify-center pointer-events-none mt-16 lg:mt-0">
                            {/* Portrait Placeholder Container */}
                            <div className="relative w-full max-w-[240px] sm:max-w-[360px] lg:max-w-[480px] aspect-[4/5] -translate-y-6 md:-translate-y-8">
                                {/* Subtle Ambient Glow */}
                                <motion.div 
                                    style={{ opacity: widgetsOpacity }}
                                    className="absolute inset-0 -m-8 bg-brand-accent/20 dark:bg-brand-accent/15 blur-[60px] rounded-full pointer-events-none" 
                                />

                                {/* Portrait Placeholder in the Center */}
                                <div 
                                    id="about-portrait-placeholder" 
                                    className="w-full h-full pointer-events-none opacity-0 z-20"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================================= */}
            {/* SHARED ELEMENT PORTRAIT TRANSITION */}
            {/* ========================================================================= */}
            {dimensions.isReady && (
                <motion.div
                    style={{
                        position: "absolute",
                        top: dimensions.heroTop,
                        left: dimensions.heroLeft,
                        width,
                        height,
                        x,
                        y,
                        opacity,
                        zIndex: 20,
                        pointerEvents: "none"
                    }}
                >
                    {/* Ambient Glow placed outside the overflow-hidden container to prevent clipping */}
                    <div className="absolute inset-0 -z-10 pointer-events-none rounded-full bg-blue-500/15 dark:bg-blue-600/10 blur-[80px]" />

                    {/* Interactive Mouse Hover Spotlight Glow placed outside to prevent edge clipping */}
                    <div 
                        className="absolute pointer-events-none rounded-full bg-gradient-to-r from-blue-500/25 to-indigo-500/15 blur-[70px] md:blur-[90px] -z-10"
                        style={{
                            opacity: isHovered ? 1 : 0,
                            width: '380px',
                            height: '380px',
                            left: `${mousePos.x}px`,
                            top: `${mousePos.y}px`,
                            transform: `translate(-50%, -50%) scale(${isHovered ? 1 : 0.75})`,
                            transition: 'opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                        }}
                    />

                    <div 
                        className={`relative w-full h-full cursor-none pointer-events-auto transition-all duration-700 ease-out ${isHovered ? 'scale-[1.04]' : 'scale-100'}`}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >

                        {/* Base Image with scroll-animated grayscale filter */}
                        <motion.div 
                            style={{ filter: grayscaleFilter }}
                            className="absolute inset-0"
                        >
                            <Image
                                src="/hero.png"
                                alt="Developer Portrait"
                                fill
                                className={`object-contain object-bottom transition-all duration-700 ease-out ${
                                    isHovered ? 'brightness-[1.05] contrast-[1.03]' : 'brightness-[0.95] dark:brightness-[0.85]'
                                }`}
                                priority
                            />
                        </motion.div>

                        {/* Color Overlay Image */}
                        <Image
                            src="/hero.png"
                            alt="Developer Portrait"
                            fill
                            className="object-contain object-bottom absolute inset-0 pointer-events-none"
                            style={{
                                maskImage: isHovered
                                    ? `radial-gradient(circle 160px at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 100%)`
                                    : 'radial-gradient(circle 0px at 0px 0px, black 0%, transparent 0%)',
                                WebkitMaskImage: isHovered
                                    ? `radial-gradient(circle 160px at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 100%)`
                                    : 'radial-gradient(circle 0px at 0px 0px, black 0%, transparent 0%)',
                            }}
                            priority
                        />
                    </div>
                </motion.div>
            )}

            {/* Fallback image rendered inline inside the Hero section ONLY during hydration (when dimensions are not calculated yet) */}
            {!dimensions.isReady && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[49vh] sm:h-[59vh] lg:h-[74vh] max-w-[270px] sm:max-w-[400px] lg:max-w-[610px] z-20 pointer-events-none">
                    <div className="relative w-full h-full">
                        <Image
                            src="/hero.png"
                            alt="Developer Portrait"
                            fill
                            className="object-contain object-bottom grayscale brightness-[0.85]"
                            priority
                        />
                    </div>
                </div>
            )}

        </div>
    );
}
