"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const photos = [
    "/1.jpeg",
    "/2.jpeg",
    "/3.jpeg",
    "/4.jpeg",
    "/5.jpeg",
    "/6.jpeg",
];

export function CodeIntro() {
    const containerRef = useRef<HTMLElement>(null);
    const [isActive, setIsActive] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 100%", "start 0%"] // Track from entrance to exit of viewport
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Trigger ON when element is past 65% of screen
        // 0 = Bottom of screen
        // 1 = Top of screen
        if (latest > 0.65 && !isActive) {
            setIsActive(true);
        }

        // Trigger OFF only when element goes back down to 50%
        // This provides the requested "scroll more up" hysteresis
        if (latest < 0.5 && isActive) {
            setIsActive(false);
        }
    });

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section ref={containerRef} className="w-full max-w-3xl mx-auto px-2 md:px-4 mb-32 relative z-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative group"
            >
                {/* Code Window */}
                <Card className="bg-[#282C34] border-zinc-700/50 rounded-xl shadow-2xl relative z-10 overflow-hidden">
                    {/* Window Header */}
                    <div className="bg-[#21252B] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                        </div>
                        <div className="flex-1 text-center">
                            <span className="text-xs text-zinc-400 font-mono">portfolio.sql</span>
                        </div>
                    </div>

                    {/* Window Content */}
                    <div className="px-1 py-2 md:p-6 overflow-x-auto">
                        <pre className="font-mono text-[9px] sm:text-xs md:text-sm lg:text-base leading-relaxed text-zinc-400 w-max">
                            <code className="block">
                                {"\n"}
                                <span className="text-violet-400">SELECT</span> *{"\n"}
                                <span className="text-violet-400">FROM</span> <span className="text-zinc-100">people</span> <span className="text-violet-400">AS</span> <span className="text-zinc-100">p</span>{"\n"}
                                <span className="text-violet-400">LEFT JOIN</span> <span className="text-zinc-100">attributes</span> <span className="text-violet-400">AS</span> <span className="text-zinc-100">a</span>{"\n"}
                                <span className="text-violet-400">ON</span> <span className="text-zinc-100">p.id</span> = <span className="text-zinc-100">a.id</span>{"\n"}
                                <span className="text-violet-400">WHERE</span> <span className="text-zinc-100">name</span> = <span className="text-blue-400">'Gabriel Freitas'</span>{"\n"}
                                <span className="text-violet-400">AND</span> <span className="text-zinc-100">passion</span> <span className="text-violet-400">IN</span> (<span className="text-blue-400">'data'</span>, <span className="text-blue-400">'technology'</span>, <span className="text-blue-400">'problem solving'</span>, <span className="text-blue-400">'travelling'</span>){"\n"}
                                <span className="text-violet-400">AND</span> <span className="text-zinc-100">education</span> = <span className="text-blue-400">'Administração Empresarial @ Esag UDESC'</span>{"\n"}
                                <span className="text-violet-400">AND</span> <span className="text-zinc-100">location</span> = <span className="text-blue-400">'Florianópolis, Brasil'</span><span className="text-zinc-500">;</span>
                            </code>
                        </pre>
                    </div>
                </Card>

                {/* Photo Gallery Container */}
                <div
                    className="absolute -bottom-16 left-0 w-full h-80 z-20 flex items-end pointer-events-none"
                >
                    <div className="relative w-full h-full pointer-events-auto">
                        <div
                            className="absolute bottom-0 w-full flex items-center justify-center p-4"
                            style={{ width: "100%" }}
                        >
                            <motion.div
                                className="relative h-64 w-full max-w-[800px] flex items-center justify-center"
                                animate={isActive ? "visible" : "hidden"}
                                variants={{
                                    visible: {
                                        transition: { staggerChildren: isMobile ? 0.08 : 0.1 }
                                    },
                                    hidden: {}
                                }}
                            >
                                {photos.map((photo, index) => {
                                    const spacing = isMobile ? 58 : 150;
                                    const targetX = (index - 2.5) * spacing;

                                    const startX = isMobile ? (150 + (index * 5)) : (350 + (index * 5));
                                    const startY = isMobile ? (60 - (index * 2)) : (60 - (index * 4));
                                    const targetY = isMobile ? 120 : 180;

                                    return (
                                        <motion.div
                                            key={index}
                                            className="absolute w-24 h-36 md:w-44 md:h-60 bg-zinc-800 rounded-xl shadow-2xl overflow-hidden origin-center"
                                            whileHover={{ scale: 1.2, zIndex: 100 }}
                                            whileTap={{ scale: 1.2, zIndex: 100 }}
                                            variants={{
                                                hidden: {
                                                    x: startX,
                                                    y: startY,
                                                    rotate: (index % 2 === 0 ? 3 : -3) * (index + 1),
                                                    scale: (1 - (index * 0.05)) * (isMobile ? 0.6 : 1),
                                                    zIndex: index,
                                                    transition: {
                                                        duration: 0.5
                                                    }
                                                },
                                                visible: {
                                                    x: targetX,
                                                    y: targetY,
                                                    rotate: 0,
                                                    scale: 1,
                                                    zIndex: 10 + index,
                                                    transition: {
                                                        type: "spring",
                                                        stiffness: 100,
                                                        damping: 20
                                                    }
                                                }
                                            }}
                                        >
                                            <Image
                                                src={photo}
                                                alt={`Gallery ${index + 1}`}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 150px, 300px"
                                            />
                                        </motion.div>
                                    );
                                })}

                                {/* Hint visual - Fades out on trigger */}
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 1, x: 370, y: 40 },
                                        visible: { opacity: 0, x: 370, y: 40 }
                                    }}
                                    className="hidden md:block absolute bottom-60 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg pointer-events-none z-50 whitespace-nowrap"
                                >
                                    Ver fotos 📸
                                </motion.div>

                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section >
    );
}
