import { ExperienceSection } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { SkillsSection } from "@/components/sections/skills";
import { resumeData } from "@/data/resume";
import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Calendar } from "lucide-react";
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

                <div id="experience" className="scroll-mt-32">
                    <ExperienceSection />
                </div>

                <div className="flex flex-col gap-24 max-w-4xl mx-auto" id="about">

                    <section id="education">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 flex items-center gap-3">
                            <span className="bg-primary/5 p-2 rounded-lg">🎓</span>
                            Educação
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {resumeData.education.map((edu, index) => (
                                <Card
                                    key={index}
                                    className="flex flex-col gap-4 h-full"
                                    whileHover={{ scale: 1.02, transition: { duration: 0.2, type: "spring" } }}
                                >
                                    <div className="bg-zinc-100 p-3 rounded-xl text-zinc-600 w-fit">
                                        <GraduationCap size={28} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900 leading-snug">{edu.degree}</h3>
                                        <p className="text-zinc-600 font-medium">{edu.institution}</p>
                                        <div className="flex flex-col gap-1 text-sm mt-3 text-zinc-500">
                                            <span className="flex items-center gap-2">
                                                <Calendar size={14} /> {edu.period}
                                            </span>
                                            {edu.note && (
                                                <span className="font-semibold text-primary/80 bg-primary/5 px-2 py-0.5 rounded w-fit">{edu.note}</span>
                                            )}
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <div id="skills" className="scroll-mt-32">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 flex items-center gap-3">
                            <span className="bg-primary/5 p-2 rounded-lg">🚀</span>
                            Skills & Idiomas
                        </h2>
                        <SkillsSection />
                    </div>

                    <section id="certifications" className="scroll-mt-32">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 flex items-center gap-3">
                            <span className="bg-primary/5 p-2 rounded-lg">🏆</span>
                            Certificados
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {resumeData.certifications.map((cert, index) => (
                                <Card
                                    key={index}
                                    className="flex gap-4 items-start p-5 hover:bg-zinc-50/80 transition-colors"
                                >
                                    <div className="bg-white border border-zinc-100 p-2 rounded-lg shrink-0 shadow-sm text-sm font-bold text-primary w-12 h-12 flex items-center justify-center">
                                        {cert.issuer.substring(0, 2).toUpperCase()}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm text-gray-900 leading-snug mb-1">{cert.name}</h3>
                                        <p className="text-xs text-zinc-500 mb-1">{cert.issuer}</p>
                                        <span className="text-[10px] text-zinc-600 flex items-center gap-1 bg-zinc-100 w-fit px-1.5 py-0.5 rounded">
                                            {cert.date}
                                        </span>
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
