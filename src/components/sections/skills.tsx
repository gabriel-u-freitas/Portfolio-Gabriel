"use client";

import { resumeData } from "@/data/resume";
import { Card } from "@/components/ui/card";
import { SkillsRadar } from "@/components/effects/radar-chart";
import { Database, Cpu, Globe } from "lucide-react"; // Import architecture icons

export function SkillsSection() {
    return (
        <section className="gap-6 flex flex-col mb-16 relative">
            {/* Huge Icon Background - Architecture */}
            <div className="absolute -top-20 -right-20 -z-10 opacity-[0.03] text-primary rotate-12 pointer-events-none">
                <Database size={400} />
            </div>

            <Card className="flex flex-col gap-4 overflow-hidden backdrop-blur-sm bg-white/90">
                <h3 className="text-xl font-extrabold tracking-tight text-primary z-10">Hard Skills Visualization</h3>
                <SkillsRadar />

                <div className="flex flex-wrap gap-2 mt-4">
                    {resumeData.skills.hard.map((skill, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 bg-zinc-50 text-zinc-600 rounded text-xs font-medium border border-zinc-100"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="flex flex-col gap-4 backdrop-blur-sm bg-white/90 relative overflow-hidden">

                    {/* Subtle Huge Icon for Soft Skills */}
                    <div className="absolute -bottom-10 -right-10 opacity-[0.04] text-primary pointer-events-none">
                        <Cpu size={200} />
                    </div>

                    <h3 className="text-xl font-extrabold tracking-tight text-primary">Soft Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        {resumeData.skills.soft.map((skill, index) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 bg-zinc-50 text-zinc-700 border border-zinc-100 rounded-lg text-sm font-semibold hover:border-accent/40 transition-colors"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </Card>

                <Card className="flex flex-col gap-4 backdrop-blur-sm bg-white/90 relative overflow-hidden">

                    {/* Subtle Huge Icon for Languages */}
                    <div className="absolute -bottom-10 -right-10 opacity-[0.04] text-primary pointer-events-none">
                        <Globe size={200} />
                    </div>

                    <h3 className="text-xl font-extrabold tracking-tight text-primary">Idiomas</h3>
                    <div className="space-y-3">
                        {resumeData.skills.languages.map((lang, index) => (
                            <div key={index} className="flex justify-between items-center text-sm p-2 hover:bg-zinc-50 rounded-lg transition-colors">
                                <span className="font-bold text-zinc-800">{lang.language}</span>
                                <span className="text-zinc-600 font-light tracking-wide">{lang.level}</span>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </section>
    );
}
