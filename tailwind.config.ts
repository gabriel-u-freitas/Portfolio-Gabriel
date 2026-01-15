import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                outfit: ["var(--font-outfit)", "sans-serif"],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "#0F172A", // Deep Blue
                    foreground: "#FFFFFF",
                },
                accent: {
                    DEFAULT: "#3B82F6", // Blue-500
                    foreground: "#FFFFFF",
                },
                muted: {
                    DEFAULT: "#F4F4F5", // Zinc-100
                    foreground: "#71717A", // Zinc-500
                },
            },
            borderRadius: {
                xl: "1rem",
                "2xl": "1.5rem",
            },
        },
    },
    plugins: [],
};
export default config;
