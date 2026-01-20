

"use client";

import { useState } from "react";
import { PdfViewer } from "@/components/ui/pdf-viewer";
import { CodeIntro } from "@/components/sections/code-intro";
import { Hero } from "@/components/sections/hero";
import { SkillsSection } from "@/components/sections/skills";
import { resumeData } from "@/data/resume";
import { Card } from "@/components/ui/card";
import { Award, Database } from "lucide-react";
import { ParticlesBackground } from "@/components/effects/particles-background";
import { FloatingDock } from "@/components/ui/floating-dock";
import { ScrollConfetti } from "@/components/ui/scroll-confetti";

export default function Home() {
    const [selectedCert, setSelectedCert] = useState<string | null>(null);
    const [showAllCerts, setShowAllCerts] = useState(false);

    const visibleCerts = showAllCerts ? resumeData.certifications : resumeData.certifications.slice(0, 6);

    const getCertificateIcon = (name: string) => {
        if (name.includes("SQL")) return <Database className="w-4 h-4 text-blue-600" />;
        if (name.includes("Power BI")) return (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="text-blue-600">
                <path d="M6 14h4v6H6v-6zm6-5h4v11h-4V9zm6-5h4v16h-4V4z" />
            </svg>
        );
        if (name.includes("Python")) return (
            <div
                className="w-4 h-4 bg-current text-blue-600"
                style={{
                    maskImage: "url(/LOGOPYTHON.png)",
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskImage: "url(/LOGOPYTHON.png)",
                    WebkitMaskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center"
                }}
            />
        );
        return <Award className="w-4 h-4 text-blue-600" />;
    };

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
                        <h2 className="text-3xl md:text-4xl font-bold font-outfit text-primary mb-12 flex items-center justify-center gap-3">
                            <span className="bg-primary/5 p-2 rounded-lg">🏆</span>
                            Cursos & Certificados
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {visibleCerts.map((cert, index) => (
                                <Card
                                    key={index}
                                    noScale
                                    onClick={() => cert.link && cert.link !== "#" && setSelectedCert(cert.link)}
                                    className="flex flex-col gap-4 p-5 transition-all duration-300 relative overflow-hidden group hover:border-blue-200/50 hover:shadow-lg hover:shadow-blue-500/5 cursor-pointer"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white via-60% to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                    <div className="relative z-10 flex flex-col h-full justify-between gap-4">
                                        <div className="flex items-start justify-between w-full">
                                            <div className="bg-blue-50/50 p-2 rounded-full ring-1 ring-blue-100/50">
                                                {getCertificateIcon(cert.name)}
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
                                                Ver Certificado
                                                <span className="group-hover:translate-x-0.5 transition-transform inline-block ml-1">→</span>
                                            </span>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>

                        {!showAllCerts && (
                            <div className="flex justify-center mt-12">
                                <button
                                    onClick={() => setShowAllCerts(true)}
                                    className="px-6 py-2 rounded-full bg-white border border-zinc-200 text-sm font-medium text-zinc-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm active:scale-95"
                                >
                                    Ver todos os certificados
                                </button>
                            </div>
                        )}
                    </section>
                </div>

                <footer id="contact" className="mt-24 md:mt-32 pt-8 border-t border-zinc-100 text-center text-zinc-500 text-sm pb-8">
                    <p>&copy; {new Date().getFullYear()} {resumeData.basics.name}. Todos os direitos reservados.</p>
                </footer>
            </div>

            <PdfViewer
                isOpen={!!selectedCert}
                onClose={() => setSelectedCert(null)}
                pdfUrl={selectedCert || ""}
            />
        </div>
    );
}
