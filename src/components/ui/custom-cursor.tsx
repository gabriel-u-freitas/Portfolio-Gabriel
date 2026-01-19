"use client";

import { motion } from "framer-motion";

interface HeroCursorProps {
    x: number;
    y: number;
    isHoveringLink?: boolean;
}

export function HeroCursor({ x, y, isHoveringLink = false }: HeroCursorProps) {
    // Configuration for the outer ring's "lag" effect
    const springConfig = {
        type: "spring",
        stiffness: 2240, // Extremely snappy (Requested)
        damping: 80,
        mass: 0.5
    };

    return (
        <>
            {/* Outer Ring - Follows with delay/spring physics */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-50 border border-blue-600 rounded-full"
                animate={{
                    x: x - 16, // Center the 32px ring (32/2 = 16)
                    y: y - 16,
                    scale: isHoveringLink ? 1.5 : 1, // Slight expansion on hover
                    opacity: isHoveringLink ? 0.5 : 1,
                    borderColor: isHoveringLink ? "#2563EB" : "#2563EB"
                }}
                transition={springConfig}
                style={{
                    width: 32,
                    height: 32,
                }}
            />

            {/* Inner Dot - Follows instantly (or very fast) */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-50 bg-blue-600 rounded-full"
                animate={{
                    x: x - 4, // Center the 8px dot (8/2 = 4)
                    y: y - 4,
                    scale: isHoveringLink ? 2.5 : 1, // Calculate expansion: 8px * 2.5 = 20px
                    opacity: isHoveringLink ? 0.5 : 1
                }}
                transition={{
                    type: "tween",
                    ease: "linear",
                    duration: 0 // Instant follow for precision
                }}
                style={{
                    width: 8,
                    height: 8,
                }}
            />
        </>
    );
}
