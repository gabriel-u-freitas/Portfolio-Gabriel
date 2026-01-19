

import { CodeIntro } from "@/components/sections/code-intro";
import { Hero } from "@/components/sections/hero";
import { SkillsSection } from "@/components/sections/skills";
import { resumeData } from "@/data/resume";
import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";
import { ParticlesBackground } from "@/components/effects/particles-background";
import { FloatingDock } from "@/components/ui/floating-dock";
import { ScrollConfetti } from "@/components/ui/scroll-confetti";

export default function Home() {
    return (
        <div className="relative isolate min-h-screen">
            {/* Hero Background Gradient */}
            <div className="absolute top-0 inset-x-0 h-[90vh] -z-20 bg-gradient-to-b from-blue-50 via-blue-50/40 to-white pointer-events-none" />

            <ScrollConfetti />
            <div className="absolute inset-x-0 h-[95vh] top-[52px] md:top-[83px] z-0 pointer-events-none">
                <ParticlesBackground />
            </div>

            <FloatingDock />

            {/* Top Margin Spacer (allows background to show but keeps cursor default) */}
            <div className="h-[52px] md:h-[83px] w-full" />

            {/* Full width Hero for cursor events */}
            <Hero />

            <div className="relative z-10 px-4 pb-4 pt-0 md:px-8 md:pb-8 md:pt-0 max-w-7xl mx-auto">



                <div className="flex flex-col gap-24 max-w-4xl mx-auto" id="about">

                    <CodeIntro />


                    <div id="skills" className="scroll-mt-32">
                        <SkillsSection />
                    </div>

                    <section id="certifications" className="scroll-mt-32">
                        <h2 className="text-3xl md:text-4xl font-bold font-outfit text-primary mb-8 flex items-center justify-center gap-3">
                            <span className="bg-primary/5 p-2 rounded-lg">🏆</span>
                            Certificados
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {resumeData.certifications.map((cert, index) => (
                                <Card
                                    key={index}
                                    noScale
                                    className="flex flex-col gap-4 p-5 transition-all duration-300 relative overflow-hidden group hover:border-blue-200/50 hover:shadow-lg hover:shadow-blue-500/5"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white via-60% to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                    <div className="relative z-10 flex flex-col h-full justify-between gap-4">
                                        <div className="flex items-start justify-between w-full">
                                            <div className="bg-blue-50/50 p-2 rounded-full ring-1 ring-blue-100/50">
                                                <Award className="w-4 h-4 text-blue-600" />
                                            </div>
                                            <span className="text-[10px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                                                {cert.date.split(" ").pop()}
                                            </span>
                                        </div>

                                        <div className="space-y-1">
                                            <h3 className="font-bold text-sm text-zinc-800 leading-snug group-hover:text-blue-700 transition-colors">
                                                {cert.name}
                                            </h3>
                                            <p className="text-xs text-zinc-500 font-medium">
                                                {cert.issuer}
                                            </p>
                                        </div>

                                        <div className="flex w-full justify-end pt-2">
                                            <span className="text-[10px] font-semibold text-zinc-400 group-hover:text-blue-600 flex items-center gap-1 transition-colors">
                                                View certificate
                                                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                                            </span>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </section>
                </div>

                <footer id="contact" className="mt-24 md:mt-32 pt-8 border-t border-zinc-100 text-center text-zinc-500 text-sm pb-8">
                    <p>&copy; {new Date().getFullYear()} {resumeData.basics.name}. Todos os direitos reservados.</p>
                </footer>
            </div>
        </div>
    );
}
