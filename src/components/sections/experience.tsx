"use client";

import { resumeData } from "@/data/resume";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Counter } from "@/components/effects/counter";
import { motion } from "framer-motion";

export function ExperienceSection() {
    return (
        <section className="mb-24">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-extrabold text-primary mb-12 flex items-center gap-3 tracking-tighter"
            >
                <span className="bg-primary/5 p-2 rounded-xl text-3xl">💼</span>
                Experiência
            </motion.h2>

            <div className="flex flex-col gap-6 max-w-4xl mx-auto">
                {resumeData.experience.map((exp, index) => {
                    const isStarkAnalyst = exp.role === "Analista de M&A" && exp.company === "Stark Investment Banking";

                    return (
                        <motion.div
                            key={index}
                            className="w-full"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card
                                // Hover effect is now intrinsic to the Card component, but we can override or add specific styles here if needed.
                                // The Card component handles scale, shadow, and border spring animations.
                                className={cn(
                                    "h-full flex flex-col justify-between relative transition-all duration-300 border-zinc-100/80 hover:z-10 bg-white",
                                    isStarkAnalyst && "bg-gradient-to-br from-white to-zinc-50/40"
                                )}>
                                <div>
                                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 gap-3">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 leading-tight tracking-tight">{exp.role}</h3>
                                            <p className="text-lg text-zinc-500 font-medium mt-1">{exp.company}</p>
                                        </div>
                                        <span className={cn(
                                            "inline-flex px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap w-fit tracking-wide uppercase bg-zinc-100 text-zinc-600"
                                        )}>
                                            {exp.period}
                                        </span>
                                    </div>

                                    {exp.description && (
                                        <p className="text-zinc-600 text-base leading-relaxed mb-6 font-light">
                                            {exp.description}
                                        </p>
                                    )}

                                    {isStarkAnalyst && (
                                        <div className="mb-6 p-6 rounded-2xl bg-white/80 border border-primary/5 shadow-sm relative overflow-hidden group backdrop-blur-sm">
                                            <div className="relative z-10 flex flex-col">
                                                <span className="text-xs uppercase tracking-wider text-zinc-500 font-bold mb-2">Volume Transacionado</span>
                                                <div className="flex items-baseline gap-1">
                                                    <Counter
                                                        value={650}
                                                        prefix="R$"
                                                        suffix="M+"
                                                        className="text-6xl font-extrabold text-primary tabular-nums tracking-tighter"
                                                    />
                                                </div>
                                                <p className="text-sm text-zinc-500 mt-2 font-medium">Em fusões e aquisições (Sell-side)</p>
                                            </div>
                                            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity transform scale-150 duration-500">
                                                <div className="w-32 h-32 bg-accent rounded-full blur-3xl"></div>
                                            </div>
                                        </div>
                                    )}

                                    {exp.highlights && exp.highlights.length > 0 && (
                                        <ul className="space-y-3">
                                            {exp.highlights.map((highlight, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-zinc-600">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-primary/60" />
                                                    <span className="leading-relaxed font-light">{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </Card>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
