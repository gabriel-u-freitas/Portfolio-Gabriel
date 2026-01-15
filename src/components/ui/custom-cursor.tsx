"use client";

import { motion } from "framer-motion";

interface HeroCursorProps {
    x: number;
    y: number;
}

export function HeroCursor({ x, y }: HeroCursorProps) {
    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-50 -ml-3 -mt-3"
            animate={{ x, y }}
            transition={{ duration: 0, ease: "linear" }}
        >
            {/* Custom Minimalist Arrow */}
            <svg
                width="27"
                height="27"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-md relative z-10"
                style={{ transform: "rotate(22.4deg)", transformOrigin: "3px 3px" }}
            >
                <path
                    d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
                    fill="#2563EB" // blue-600
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                />
            </svg>

            {/* Speech Bubble */}
            <div className="absolute top-[18.2px] left-[14px] bg-blue-600 text-white text-sm font-bold px-3 pt-1 pb-2 rounded-full rounded-tl-none shadow-lg whitespace-nowrap z-20 flex items-center justify-center">
                Hi there!
            </div>
        </motion.div>
    );
}
