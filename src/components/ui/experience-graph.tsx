"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Counter } from "@/components/effects/counter";

interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    description: string;
    highlights?: string[];
}

interface ExperienceGraphProps {
    data: ExperienceItem[];
}

export function ExperienceGraph({ data }: ExperienceGraphProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Scroll progress for the main line
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div ref={containerRef} className="relative w-full max-w-5xl mx-auto py-10 px-4 md:px-0">
            {/* The Vertical "Data Stream" Line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 md:-ml-[2px] bg-zinc-200">
                <motion.div
                    className="w-full bg-blue-600 origin-top"
                    style={{ scaleY, height: "100%" }}
                />
            </div>

            <div className="flex flex-col gap-12 md:gap-24 relative z-10">
                {data.map((exp, index) => {
                    const isStarkAnalyst = exp.role === "Analista de M&A" && exp.company === "Stark Investment Banking";
                    const isEven = index % 2 === 0;

                    return (
                        <div
                            key={index}
                            className={cn(
                                "flex flex-col md:flex-row items-center",
                                isEven ? "md:flex-row-reverse" : ""
                            )}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Card Side */}
                            <motion.div
                                className="w-full md:w-[calc(50%-40px)] mb-8 md:mb-0"
                                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <Card
                                    className={cn(
                                        "relative p-6 md:p-8 transition-all duration-500 border-zinc-100 bg-white group hover:shadow-xl hover:shadow-blue-900/5",
                                        hoveredIndex === index ? "border-blue-200 scale-[1.02]" : "",
                                        isStarkAnalyst && "bg-gradient-to-br from-white to-blue-50/30"
                                    )}
                                >
                                    {/* Tech Background Grid for Data feel */}
                                    <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

                                    <div className="relative z-10">
                                        <div className="flex flex-col gap-1 mb-4">
                                            <div className="flex items-center justify-between gap-2">
                                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                                                    {exp.role}
                                                </h3>
                                                {/* Mobile Period Badge */}
                                                <span className="md:hidden inline-flex px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-zinc-100 text-zinc-500">
                                                    {exp.period}
                                                </span>
                                            </div>
                                            <p className="text-base md:text-lg text-blue-600 font-medium">
                                                {exp.company}
                                            </p>
                                        </div>

                                        <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-6 font-light">
                                            {exp.description}
                                        </p>

                                        {isStarkAnalyst && (
                                            <div className="mb-6 p-4 rounded-xl bg-blue-50/50 border border-blue-100 relative overflow-hidden">
                                                <div className="relative z-10">
                                                    <span className="text-[10px] uppercase tracking-wider text-blue-400 font-bold">Transaction Volume</span>
                                                    <div className="flex items-baseline gap-1 mt-1">
                                                        <Counter
                                                            value={650}
                                                            prefix="R$"
                                                            suffix="M+"
                                                            className="text-4xl font-black text-blue-600 tabular-nums tracking-tighter"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {exp.highlights && exp.highlights.length > 0 && (
                                            <ul className="space-y-3">
                                                {exp.highlights.map((highlight, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-600">
                                                        <span className="mt-1.5 w-1 h-1 rounded-full shrink-0 bg-blue-400" />
                                                        <span className="font-light">{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </Card>
                            </motion.div>

                            {/* Node (The "Data Point") */}
                            <div className="absolute left-[20px] md:left-1/2 -ml-[20px] md:-ml-[20px] flex items-center justify-center w-10 h-10 z-20">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className={cn(
                                        "w-4 h-4 rounded-full border-[3px] transition-colors duration-300",
                                        hoveredIndex === index
                                            ? "bg-blue-600 border-blue-200"
                                            : "bg-white border-blue-600"
                                    )}
                                />
                                {/* Pulsing Effect */}
                                <motion.div
                                    animate={{
                                        scale: hoveredIndex === index ? [1, 1.5, 1] : 1,
                                        opacity: hoveredIndex === index ? [0.5, 0, 0.5] : 0
                                    }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="absolute inset-0 bg-blue-400 rounded-full opacity-0 -z-10"
                                />
                            </div>

                            {/* Date Side (Desktop Only) */}
                            <div className="hidden md:block w-1/2 px-10 text-right">
                                <div className={cn(
                                    "flex flex-col justify-center",
                                    isEven ? "items-start text-left" : "items-end text-right"
                                )}>
                                    <span className="text-4xl font-black text-zinc-200 tabular-nums tracking-tighter leading-none hover:text-blue-100 transition-colors cursor-default">
                                        {exp.period.split(' – ')[0].split(' ')[1] || exp.period}
                                    </span>
                                    <span className="text-sm font-bold uppercase tracking-widest text-blue-600 mt-2">
                                        {exp.period}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
