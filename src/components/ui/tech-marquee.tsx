"use client";

import { motion } from "framer-motion";
import {
    Database,
    FileSpreadsheet,
    Terminal,
    BarChart3,
    Calculator,
    PieChart,
    Server,
    Layers,
    Code,
    Cpu,
    Globe
} from "lucide-react";

const skills = [
    { name: "Excel", icon: FileSpreadsheet, color: "text-green-600", bg: "bg-green-50", border: "border-green-100" },
    { name: "SQL", icon: Database, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
    { name: "Python", icon: Terminal, color: "text-yellow-600", bg: "bg-yellow-50", border: "border-yellow-100" },
    { name: "Power BI", icon: BarChart3, color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-100" },
    { name: "DAX", icon: Calculator, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" },
    { name: "Tableau", icon: PieChart, color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100" },
    { name: "DataBricks", icon: Layers, color: "text-red-600", bg: "bg-red-50", border: "border-red-100" },
];

// Duplicate skills to ensure seamless looping
const marqueeSkills = [...skills, ...skills, ...skills];

export function TechMarquee() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-transparent my-8">
            <div className="flex w-full overflow-hidden">
                <motion.div
                    className="flex min-w-full shrink-0 gap-4 py-4"
                    animate={{
                        x: ["0%", "-100%"],
                    }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {marqueeSkills.map((skill, index) => (
                        <div
                            key={index}
                            className={`flex shrink-0 items-center gap-2 rounded-full border ${skill.border} ${skill.bg} px-6 py-3 shadow-sm transition-transform hover:scale-105 hover:shadow-md cursor-default`}
                        >
                            <skill.icon className={`h-5 w-5 ${skill.color}`} />
                            <span className={`text-sm font-semibold ${skill.color}`}>
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Second duplicate div for seamless loop (technically rendered side-by-side) - 
                    Actually, the strategy above uses a long list and translates -100%. 
                    To be truly seamless, we often need two identical lists translating together. 
                    Let's adjust: render TWO `motion.div`s side by side.
                */}
                <motion.div
                    className="flex min-w-full shrink-0 gap-4 py-4 ml-4"
                    animate={{
                        x: ["0%", "-100%"],
                    }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {marqueeSkills.map((skill, index) => (
                        <div
                            key={index}
                            className={`flex shrink-0 items-center gap-2 rounded-full border ${skill.border} ${skill.bg} px-6 py-3 shadow-sm transition-transform hover:scale-105 hover:shadow-md cursor-default`}
                        >
                            <skill.icon className={`h-5 w-5 ${skill.color}`} />
                            <span className={`text-sm font-semibold ${skill.color}`}>
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Gradient Masks for Fade Effect */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent dark:from-background" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent dark:from-background" />
        </div>
    );
}
