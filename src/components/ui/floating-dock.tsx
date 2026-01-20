"use client";

import { motion } from "framer-motion";
import { Home, User, Cpu, Award, FolderKanban } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const dockItems = [
    { icon: Home, label: "Início", href: "/" },
    { icon: User, label: "Sobre", href: "#about" },
    { icon: Cpu, label: "Habilidades", href: "#skills" },
    { icon: Award, label: "Certificados", href: "#certifications" },
    { icon: FolderKanban, label: "Projetos", href: "/projects" },
];

export function FloatingDock() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <motion.div
                className="flex items-center gap-4 bg-white/80 backdrop-blur-xl border border-zinc-200 px-6 py-3 rounded-full shadow-2xl"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
            >
                {dockItems.map((item, index) => {
                    const isHovered = hoveredIndex === index;

                    return (
                        <Link
                            key={index}
                            href={item.href}
                            className="relative group flex items-center justify-center"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <motion.div
                                animate={{
                                    scale: isHovered ? 1.2 : 1,
                                    y: isHovered ? 5 : 0,
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="p-3 bg-zinc-100/50 rounded-full hover:bg-zinc-100 transition-colors border border-zinc-200/50"
                            >
                                <item.icon size={24} className="text-zinc-600 group-hover:text-zinc-900" />
                            </motion.div>

                            {/* Tooltip */}
                            <motion.span
                                initial={{ opacity: 0, y: -10, x: "-50%" }}
                                animate={{
                                    opacity: isHovered ? 1 : 0,
                                    y: isHovered ? 0 : -10,
                                    x: "-50%"
                                }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-1/2 mt-2 px-2 py-1 bg-zinc-900 text-white text-xs rounded-md whitespace-nowrap pointer-events-none shadow-lg"
                            >
                                {item.label}
                            </motion.span>
                        </Link>
                    );
                })}
            </motion.div>
        </div>
    );
}
