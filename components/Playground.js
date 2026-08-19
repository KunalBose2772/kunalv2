"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal, Settings, Sliders, Dribbble } from "lucide-react";

export default function Playground() {
    // -------------------------------------------------------------
    // Sandbox 1: Physics Gravity Canvas
    // -------------------------------------------------------------
    const physicsRef = useRef(null);
    const [balls, setBalls] = useState([]);

    useEffect(() => {
        const canvas = physicsRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let animationFrameId;

        // Ball class definition
        class Ball {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.radius = Math.random() * 6 + 4;
                this.color = `hsl(${Math.random() * 360}, 85%, 60%)`;
                this.vx = (Math.random() - 0.5) * 4;
                this.vy = Math.random() * -3 - 2;
                this.gravity = 0.25;
                this.friction = 0.8;
            }
            update() {
                this.vy += this.gravity;
                this.x += this.vx;
                this.y += this.vy;

                // Collide floor
                if (this.y + this.radius > canvas.height) {
                    this.y = canvas.height - this.radius;
                    this.vy = -this.vy * this.friction;
                    this.vx = this.vx * this.friction;
                }
                // Collide walls
                if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
                    this.vx = -this.vx;
                }
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.shadowBlur = 10;
                ctx.shadowColor = this.color;
                ctx.fill();
                ctx.closePath();
            }
        }

        // Initialize with a few balls
        let currentBalls = [];
        for (let i = 0; i < 8; i++) {
            currentBalls.push(new Ball(canvas.width / 2, 40));
        }

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.shadowBlur = 0; // reset
            currentBalls.forEach((b) => {
                b.update();
                b.draw();
            });
            animationFrameId = requestAnimationFrame(render);
        };
        render();

        const handleCanvasClick = (e) => {
            const rect = canvas.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            for (let i = 0; i < 4; i++) {
                currentBalls.push(new Ball(clickX, clickY));
            }
            // Cap balls list at 60 for performance
            if (currentBalls.length > 60) {
                currentBalls.splice(0, 10);
            }
        };

        canvas.addEventListener("click", handleCanvasClick);

        return () => {
            cancelAnimationFrame(animationFrameId);
            canvas.removeEventListener("click", handleCanvasClick);
        };
    }, []);

    // -------------------------------------------------------------
    // Sandbox 2: Sine Wave Plotter
    // -------------------------------------------------------------
    const [amplitude, setAmplitude] = useState(30);
    const [frequency, setFrequency] = useState(0.04);
    const waveCanvasRef = useRef(null);

    useEffect(() => {
        const canvas = waveCanvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let phase = 0;
        let animationFrameId;

        const drawWave = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.strokeStyle = "#3b82f6";
            ctx.lineWidth = 2.5;
            ctx.shadowBlur = 12;
            ctx.shadowColor = "#3b82f6";

            for (let x = 0; x < canvas.width; x++) {
                const y = canvas.height / 2 + Math.sin(x * frequency + phase) * amplitude;
                if (x === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }

            ctx.stroke();
            phase += 0.05;
            animationFrameId = requestAnimationFrame(drawWave);
        };
        drawWave();

        return () => cancelAnimationFrame(animationFrameId);
    }, [amplitude, frequency]);

    // -------------------------------------------------------------
    // Sandbox 3: Cyberpunk Digital Streams
    // -------------------------------------------------------------
    const matrixRef = useRef(null);
    const [matrixColor, setMatrixColor] = useState("#00ff66"); // green initial

    useEffect(() => {
        const canvas = matrixRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        
        const width = 240;
        const height = 150;
        canvas.width = width;
        canvas.height = height;

        const columns = Math.floor(width / 10);
        const yPositions = Array.from({ length: columns }).fill(0);

        const drawMatrix = () => {
            ctx.fillStyle = "rgba(7, 9, 14, 0.12)";
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = matrixColor;
            ctx.font = "8px monospace";

            yPositions.forEach((y, index) => {
                const text = String.fromCharCode(Math.floor(Math.random() * 93) + 33);
                const x = index * 10;
                ctx.fillText(text, x, y);

                if (y > height || Math.random() > 0.98) {
                    yPositions[index] = 0;
                } else {
                    yPositions[index] = y + 8;
                }
            });
        };

        const interval = setInterval(drawMatrix, 40);
        return () => clearInterval(interval);
    }, [matrixColor]);

    return (
        <section className="relative py-20 lg:py-28 border-t border-slate-900 bg-[#070a0f] z-10 flex flex-col justify-center overflow-hidden">
            <div className="max-w-[1480px] w-full mx-auto px-6 md:px-12 relative z-10">
                
                {/* Section Header */}
                <div className="text-center max-w-xl mx-auto mb-16">
                    <span className="text-brand-accent font-sans font-bold tracking-[0.25em] text-xs uppercase block mb-3">
                        EXPERIMENTAL SANDBOX
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-black text-white tracking-tight leading-none mb-4 font-sora">
                        Playground & Demos.
                    </h2>
                    <p className="text-slate-500 text-xs md:text-sm">
                        Experimental mathematical logic, physics nodes, and canvas pipelines rendered client-side.
                    </p>
                </div>

                {/* Experiments Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 w-full">
                    
                    {/* 1. GRAVITY PHYSICS (8 cols) */}
                    <div className="md:col-span-8 bg-[#0c101a] border border-slate-800/80 rounded-3xl p-6 flex flex-col justify-between shadow-xl min-h-[300px]">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                            <div className="flex items-center gap-1.5">
                                <Dribbble className="w-4 h-4 text-pink-500" />
                                <span className="text-[9.5px] font-mono font-bold text-white uppercase tracking-wider">Canvas Gravity Sandbox</span>
                            </div>
                            <span className="text-[7.5px] text-slate-500">Tap inside container to spawn nodes</span>
                        </div>

                        {/* Interactive Canvas */}
                        <div className="flex-grow flex items-center justify-center py-4 relative">
                            <canvas 
                                ref={physicsRef} 
                                width={480} 
                                height={180}
                                className="w-full h-[180px] bg-[#07090e] border border-slate-900 rounded-xl cursor-crosshair"
                            />
                        </div>

                        <p className="text-[10px] text-slate-500 font-medium">Bouncing physics loops computed using restitution elastic velocity matrices.</p>
                    </div>

                    {/* 2. CYBERPUNK MATRIX STREAM (4 cols) */}
                    <div className="md:col-span-4 bg-[#0c101a] border border-slate-800/80 rounded-3xl p-6 flex flex-col justify-between shadow-xl">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                            <div className="flex items-center gap-1.5">
                                <Terminal className="w-4 h-4 text-emerald-400" />
                                <span className="text-[9.5px] font-mono font-bold text-white uppercase tracking-wider">Digital Rain Matrix</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center flex-grow py-4 gap-4">
                            <canvas 
                                ref={matrixRef}
                                className="border border-slate-900 rounded-xl w-full max-w-[240px] h-[150px] bg-[#07090e]"
                            />
                            
                            {/* Color toggles */}
                            <div className="flex gap-2">
                                {[
                                    { color: "#00ff66", label: "GREEN" },
                                    { color: "#3b82f6", label: "BLUE" },
                                    { color: "#f43f5e", label: "PINK" }
                                ].map((c) => (
                                    <button
                                        key={c.color}
                                        onClick={() => setMatrixColor(c.color)}
                                        className="text-[8px] font-bold font-mono px-2 py-0.5 rounded border border-slate-800 bg-[#111622] hover:text-white"
                                        style={{ color: matrixColor === c.color ? matrixColor : "#64748b" }}
                                    >
                                        {c.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <p className="text-[10px] text-slate-500 font-medium">Interval streams feeding coordinate matrices in a repeating loop.</p>
                    </div>

                    {/* 3. MATHEMATICAL WAVE (12 cols) */}
                    <div className="md:col-span-12 bg-[#0c101a] border border-slate-800/80 rounded-3xl p-6 flex flex-col justify-between shadow-xl">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                            <div className="flex items-center gap-1.5">
                                <Sliders className="w-4 h-4 text-blue-500" />
                                <span className="text-[9.5px] font-mono font-bold text-white uppercase tracking-wider">Trigonometric Wave Generator</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6">
                            {/* Controls */}
                            <div className="lg:col-span-4 flex flex-col gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <div className="flex justify-between text-[9px] font-bold text-slate-400">
                                        <span>AMPLITUDE (HEIGHT)</span>
                                        <span>{amplitude}px</span>
                                    </div>
                                    <input 
                                        type="range" 
                                        min="10" 
                                        max="60" 
                                        value={amplitude} 
                                        onChange={(e) => setAmplitude(parseInt(e.target.value))}
                                        className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500 outline-none"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <div className="flex justify-between text-[9px] font-bold text-slate-400">
                                        <span>FREQUENCY (SPEED)</span>
                                        <span>{frequency.toFixed(3)}</span>
                                    </div>
                                    <input 
                                        type="range" 
                                        min="0.01" 
                                        max="0.10" 
                                        step="0.005"
                                        value={frequency} 
                                        onChange={(e) => setFrequency(parseFloat(e.target.value))}
                                        className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500 outline-none"
                                    />
                                </div>
                            </div>

                            {/* Canvas Plotter */}
                            <div className="lg:col-span-8 flex items-center justify-center">
                                <canvas 
                                    ref={waveCanvasRef}
                                    width={640}
                                    height={140}
                                    className="w-full h-[140px] bg-[#07090e] border border-slate-900 rounded-xl"
                                />
                            </div>
                        </div>

                        <p className="text-[10px] text-slate-500 font-medium">Trigonometric sine functions plotted across X-axis points, mutating real-time as offsets shift.</p>
                    </div>

                </div>

            </div>
        </section>
    );
}
