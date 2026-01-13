"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className, ...props }: CardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                borderColor: "rgba(249, 115, 22, 0.4)" // Accent Orange Glow
            }}
            transition={{
                duration: 0.5,
                ease: "easeOut",
                hover: {
                    duration: 0.3,
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                }
            }}
            className={cn(
                "bg-white rounded-2xl border border-zinc-100 shadow-sm p-6 transition-colors duration-300",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}
