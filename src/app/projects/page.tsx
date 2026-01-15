"use client";

import { useState } from "react";
import { projectsData } from "@/data/projects";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, X, LayoutGrid, Database } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const categories = ["All", "Power BI", "SQL", "Python"];

export default function ProjectsPage() {
    const [filter, setFilter] = useState<string[]>(["All"]);

    const handleFilterClick = (category: string) => {
        if (category === "All") {
            setFilter(["All"]);
            return;
        }

        setFilter((prev) => {
            // If selecting a category while "All" is active, clear "All" and set new category
            if (prev.includes("All")) {
                return [category];
            }

            // If category is already selected
            if (prev.includes(category)) {
                const newFilter = prev.filter((c) => c !== category);
                // If it was the last category, revert to "All"
                return newFilter.length === 0 ? ["All"] : newFilter;
            }

            // Add new category
            return [...prev, category];
        });
    };

    const clearFilters = () => setFilter(["All"]);

    const filteredProjects = projectsData.filter((project) =>
        filter.includes("All") || filter.includes(project.category)
    );

    const getCategoryIcon = (category: string, isSelected: boolean) => {
        const colorClass = isSelected ? "text-white" : "text-blue-600";

        switch (category) {
            case "All":
                return null;
            case "SQL":
                return <Database size={18} className={colorClass} />;
            case "Power BI":
                return (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className={colorClass}>
                        <path d="M6 14h4v6H6v-6zm6-5h4v11h-4V9zm6-5h4v16h-4V4z" />
                    </svg>
                );
            case "Python":
                return (
                    <div
                        className={cn("w-[15px] h-[15px] bg-current", colorClass)}
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
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-zinc-50 py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-primary transition-colors mb-8 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Voltar para o início
                </Link>

                <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
                    <div>
                        <h1 className="font-outfit text-4xl md:text-5xl font-bold text-primary mb-2">
                            Meus Projetos
                        </h1>
                        <p className="text-zinc-500 text-lg">
                            Uma coleção de trabalhos e estudos na área de dados
                        </p>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-3 w-full md:w-auto">
                        <div className="flex flex-wrap gap-2 items-center">
                            <AnimatePresence>
                                {!filter.includes("All") && (
                                    <motion.button
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        onClick={clearFilters}
                                        className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border border-red-500 text-red-500 hover:bg-red-50 transition-colors"
                                    >
                                        <X size={16} strokeWidth={3} />
                                        Limpar filtros
                                    </motion.button>
                                )}
                            </AnimatePresence>

                            {categories.map((cat) => {
                                const isSelected = filter.includes(cat);
                                return (
                                    <button
                                        key={cat}
                                        onClick={() => handleFilterClick(cat)}
                                        className={cn(
                                            "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all active:scale-95",
                                            isSelected
                                                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105"
                                                : "bg-transparent border border-zinc-300 text-zinc-600 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 hover:scale-105"
                                        )}
                                    >
                                        {getCategoryIcon(cat, isSelected)}
                                        {cat}
                                    </button>
                                );
                            })}
                        </div>
                        <p className="text-zinc-400 text-sm font-medium">
                            {filteredProjects.length} {filteredProjects.length === 1 ? 'projeto encontrado' : 'projetos encontrados'}
                        </p>
                    </div>
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="h-full flex flex-col p-6 hover:shadow-xl transition-all duration-300 border-zinc-200/60 bg-white">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={cn(
                                            "px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider",
                                            project.category === "Power BI" && "bg-yellow-100 text-yellow-700",
                                            project.category === "SQL" && "bg-blue-100 text-blue-700",
                                            project.category === "Python" && "bg-green-100 text-green-700"
                                        )}>
                                            {project.category}
                                        </div>
                                    </div>

                                    <h3 className="font-outfit text-xl font-bold text-gray-900 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-zinc-500 mb-6 flex-grow leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="text-xs bg-zinc-100 text-zinc-600 px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.link}
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors mt-auto group"
                                    >
                                        Ver detalhes
                                        <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
                                    </a>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-24 text-zinc-400"
                    >
                        <p className="text-xl">Nenhum projeto encontrado nesta categoria ainda.</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
