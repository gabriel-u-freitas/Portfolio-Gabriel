import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "#0F172A", // Deep Blue
                    foreground: "#FFFFFF",
                },
                accent: {
                    DEFAULT: "#F97316", // Vibrant Orange
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
