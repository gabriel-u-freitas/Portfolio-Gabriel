"use client";

import { resumeData } from "@/data/resume";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, MessageCircle, Twitter, Phone, ArrowRight, Download, Target } from "lucide-react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { useState } from "react";
import Link from "next/link";
import { HeroCursor } from "@/components/ui/custom-cursor";
import { ResumeDownload } from "@/components/ui/resume-download";

export function Hero() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isHoveringLink, setIsHoveringLink] = useState(false); // New state for cursor expansion
    const [isClarityHovered, setIsClarityHovered] = useState(false);
    const [isShaking, setIsShaking] = useState(false);

    const triggerShake = () => {
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 1500);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        setCursorPosition({ x: touch.clientX, y: touch.clientY });
    };

    return (
        <section
            id="hero"
            className="w-full flex flex-col items-center justify-start mb-16 md:mb-24 gap-8 pt-[28px] md:pt-[45px] text-center cursor-none relative"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onTouchStart={(e) => {
                setIsHovering(true);
                handleTouchMove(e);
            }}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => setIsHovering(false)}
        >
            {/* Custom Cursor scoped to Hero */}
            {isHovering && <HeroCursor x={cursorPosition.x} y={cursorPosition.y} isHoveringLink={isHoveringLink} />}

            {/* Centered Content Container */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 w-full flex flex-col items-center gap-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    className="relative shrink-0"
                >
                    <div className="relative w-32 h-32 md:w-48 md:h-48 scale-[0.92]">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 to-blue-600 rounded-full rotate-6 opacity-20 blur-3xl animate-pulse"></div>
                        <div className="group relative w-full h-full rounded-full overflow-hidden border-4 border-white/50 shadow-2xl transition-all hover:scale-105 hover:shadow-blue-600 duration-500 ease-out ring-1 ring-zinc-900/5">
                            <Image
                                src="/profile.png"
                                alt={resumeData.basics.name}
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="space-y-6 max-w-4xl flex flex-col items-center"
                >
                    <div className="scale-[0.97]">
                        <h1 className="font-outfit text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-primary leading-tight mb-2">
                            Oi, me chamo <br className="block md:hidden" /> Gabriel e sou
                        </h1>
                        <div className="font-outfit text-4xl sm:text-5xl md:text-7xl text-blue-600 font-extrabold tracking-tight h-[1.5em] flex items-center justify-center">
                            <Typewriter
                                options={{
                                    strings: [
                                        "Analista de Dados",
                                        "Analista de Negócios",
                                        "Analista de BI"
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                    deleteSpeed: 30,
                                    cursor: "_",
                                }}
                            />
                        </div>
                    </div>

                    <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl leading-relaxed font-light tracking-wide mx-auto">
                        Profissional multidisciplinar apaixonado por transformar o{" "}
                        <motion.span
                            className="inline-block cursor-default"
                            onClick={triggerShake}
                            animate={isShaking ? {
                                x: [0, -2, 2, -2, 2, 0],
                                y: [0, 1, -1, 0],
                                transition: { duration: 0.4, repeat: Infinity }
                            } : {}}
                            whileHover={{
                                x: [0, -2, 2, -2, 2, 0],
                                y: [0, 1, -1, 0],
                                transition: { duration: 0.4, repeat: Infinity }
                            }}
                        >
                            caos dos dados
                        </motion.span>{" "}
                        em{" "}
                        <span
                            className="relative inline-flex items-center justify-center cursor-default"
                            onMouseEnter={() => setIsClarityHovered(true)}
                            onMouseLeave={() => setIsClarityHovered(false)}
                        >
                            <motion.span
                                animate={{
                                    color: isClarityHovered ? "#2563eb" : "currentColor",
                                }}
                                className="relative z-10"
                            >
                                clareza estratégica
                            </motion.span>

                            <AnimatePresence>
                                {isClarityHovered && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute left-full top-1/2 -translate-y-1/2 flex items-center ml-2 pointer-events-none"
                                    >
                                        <svg width="80" height="30" viewBox="0 0 80 30" fill="none" className="overflow-visible">
                                            <motion.path
                                                d="M 0 15 C 20 30, 50 0, 70 15"
                                                stroke="#2563eb"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                fill="transparent"
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1 }}
                                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                            />
                                            <motion.path
                                                d="M 60 8 L 70 15 L 60 22"
                                                stroke="#2563eb"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.4, duration: 0.1 }}
                                            />
                                        </svg>
                                        <div className="-ml-1 text-blue-600">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <motion.circle
                                                    cx="12" cy="12" r="10"
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    transition={{ delay: 0.6, duration: 0.2 }}
                                                />
                                                <motion.circle
                                                    cx="12" cy="12" r="6"
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    transition={{ delay: 0.5, duration: 0.2 }}
                                                />
                                                <motion.circle
                                                    cx="12" cy="12" r="2"
                                                    fill="currentColor"
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    transition={{ delay: 0.4, duration: 0.2 }}
                                                />
                                            </svg>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </span>
                        .
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="flex flex-wrap gap-4 justify-center pt-2"
                    >
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/25 font-semibold"
                            aria-label="Ver Projetos"
                            onMouseEnter={() => setIsHoveringLink(true)}
                            onMouseLeave={() => setIsHoveringLink(false)}
                        >
                            <span className="text-base">Ver Projetos</span>
                            <ArrowRight size={20} />
                        </Link>

                        <ResumeDownload />

                        <a
                            href={resumeData.basics.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center p-3.5 rounded-full bg-white border border-zinc-200 text-zinc-500 hover:bg-zinc-50 hover:text-[#0077b5] transition-all hover:scale-105 active:scale-95"
                            aria-label="LinkedIn"
                            onMouseEnter={() => setIsHoveringLink(true)}
                            onMouseLeave={() => setIsHoveringLink(false)}
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="https://wa.me/5548999816917"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center p-3.5 rounded-full bg-white border border-zinc-200 text-zinc-500 hover:bg-zinc-50 hover:text-green-600 transition-all hover:scale-105 active:scale-95"
                            aria-label="WhatsApp"
                            onMouseEnter={() => setIsHoveringLink(true)}
                            onMouseLeave={() => setIsHoveringLink(false)}
                        >
                            <Phone size={20} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
