"use client";

import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Phone } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section id="hero" className="min-h-[70vh] flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24 gap-12 pt-16 md:pt-24">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-8 max-w-4xl flex-1 order-2 md:order-1 text-center md:text-left"
            >
                <div>
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter text-primary leading-[0.95] mb-4">
                        {resumeData.basics.name}
                    </h1>
                    <p className="text-2xl sm:text-3xl md:text-4xl text-zinc-600 font-medium tracking-tight">
                        {resumeData.basics.label}
                    </p>
                </div>

                <p className="text-lg md:text-xl text-zinc-500 max-w-2xl leading-relaxed font-light tracking-wide mx-auto md:mx-0">
                    {resumeData.basics.summary}
                </p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="flex flex-wrap gap-4 justify-center md:justify-start pt-2"
                >
                    <a
                        href="/CV_Gabriel_Uzeda_de_Freitas.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25 font-semibold"
                        aria-label="Baixar Currículo"
                    >
                        <span className="text-base">Baixar Currículo</span>
                    </a>

                    <a
                        href={resumeData.basics.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 font-medium"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                        LinkedIn
                    </a>
                    <a
                        href={`mailto:${resumeData.basics.email}`}
                        className="inline-flex items-center justify-center p-3.5 rounded-full bg-white border border-zinc-200 text-zinc-500 hover:bg-zinc-50 hover:text-primary transition-all hover:scale-105 active:scale-95"
                        aria-label="Email"
                    >
                        <Mail size={20} />
                    </a>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className="relative order-1 md:order-2 shrink-0"
            >
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-[2rem] rotate-6 opacity-20 blur-3xl animate-pulse"></div>
                    <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-white/50 shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-500 ring-1 ring-zinc-900/5">
                        <Image
                            src="/profile.png"
                            alt={resumeData.basics.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
