"use client";

import Image from "next/image";
import { resumeData } from "@/data/resume";
import { Card } from "@/components/ui/card";
import { TechMarquee } from "@/components/ui/tech-marquee";
import { Database } from "lucide-react";

// Map flags to languages
const flagMap: Record<string, string> = {
    "Português": "/brasil.webp",
    "Inglês": "/Flag_of_the_United_States.png",
    "Espanhol": "/espanhol.svg",
    "Italiano": "/italia.svg",
};

export function SkillsSection() {
    return (
        <section className="flex flex-col gap-3 relative items-center w-full">
            {/* Background decoration removed */}

            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl font-bold font-outfit text-primary mb-4 flex items-center gap-3">
                <span className="bg-primary/5 p-2 rounded-lg">👨🏻‍💻</span>
                Skills
            </h2>

            {/* Skills (Tech Marquee) */}
            <div className="w-full max-w-4xl">
                <Card className="overflow-hidden backdrop-blur-sm bg-white/50 border-zinc-100 shadow-sm">
                    <TechMarquee />
                </Card>
            </div>

            {/* Languages Grid (Centered, No Header) */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-2xl">
                {resumeData.skills.languages.map((lang, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden flex items-center justify-between p-3 bg-white/50 backdrop-blur-sm border border-zinc-200/50 rounded-xl hover:shadow-md hover:border-blue-500/20 transition-all duration-300 group cursor-default"
                    >
                        {/* Hover Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/30 to-blue-50/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                        <div className="flex items-center gap-3 relative z-10">
                            <div className="relative w-8 h-8 flex items-center justify-center filter drop-shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                                <Image
                                    src={flagMap[lang.language] || "/placeholder.png"}
                                    alt={lang.language}
                                    width={32}
                                    height={32}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <span className="font-semibold text-sm text-zinc-700 tracking-tight group-hover:text-blue-700 transition-colors">
                                {lang.language}
                            </span>
                        </div>

                        <span className="relative z-10 px-2 py-0.5 rounded-md bg-white border border-zinc-100 text-zinc-500 text-[10px] font-bold uppercase tracking-wider shadow-sm group-hover:border-blue-100 group-hover:text-blue-600 transition-colors">
                            {lang.level}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
