"use client";

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

export function ScrollConfetti() {
    const [hasFired, setHasFired] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (hasFired) return;

            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;

            // Trigger when user is near bottom (50px threshold)
            if (windowHeight + scrollTop >= documentHeight - 50) {
                setHasFired(true);
                triggerConfetti();
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Also check on mount in case page is already at bottom
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [hasFired]);

    const triggerConfetti = () => {
        const duration = 2 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

        const randomInRange = (min: number, max: number) =>
            Math.random() * (max - min) + min;

        // Blue palette matching the theme
        const colors = [
            "#2563EB", // Blue-600 (Main)
            "#3B82F6", // Blue-500
            "#1D4ED8", // Blue-700
            "#60A5FA", // Blue-400
            "#EFF6FF", // Blue-50 (White-ish)
        ];

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            // Confetti from left and right corners or random positions?
            // "Explodir" suggests maybe from the bottom or random. 
            // Let's do random bursts from the bottom area for a "celebration" feel.

            confetti({
                ...defaults,
                particleCount,
                colors: colors,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            });
            confetti({
                ...defaults,
                particleCount,
                colors: colors,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            });
        }, 250);
    };

    return null;
}
