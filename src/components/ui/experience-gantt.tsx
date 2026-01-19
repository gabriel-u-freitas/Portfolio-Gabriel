"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Counter } from "@/components/effects/counter";

interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    description: string;
    highlights?: string[];
}

interface ExperienceGanttProps {
    data: ExperienceItem[];
}

// Helper to parse "Abr 2024" to a number (Year + Month/12)
const parseDate = (dateStr: string) => {
    const months: Record<string, number> = {
        "Jan": 0, "Fev": 1, "Mar": 2, "Abr": 3, "Mai": 4, "Jun": 5,
        "Jul": 6, "Ago": 7, "Set": 8, "Out": 9, "Nov": 10, "Dez": 11
    };

    // Clean string (handle "Conclusão prevista" etc if passed, though mostly for start/end)
    // Format expected: "Mmm YYYY"
    const parts = dateStr.trim().split(" ");
    if (parts.length !== 2) return 0; // Fallback

    const month = months[parts[0]];
    const year = parseInt(parts[1]);

    if (isNaN(year) || month === undefined) return 0;

    return year + (month / 12);
};

export function ExperienceGantt({ data }: ExperienceGanttProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(0); // Default to first (most recent)

    // Process data for the chart
    const chartData = useMemo(() => {
        let minDate = Infinity;
        let maxDate = -Infinity;

        const items = data.map((item, index) => {
            const [startStr, endStr] = item.period.split(" – ");
            const start = parseDate(startStr);
            const end = endStr === "Presente" || endStr === "Atualmente"
                ? new Date().getFullYear() + (new Date().getMonth() / 12)
                : parseDate(endStr);

            if (start < minDate) minDate = start;
            if (end > maxDate) maxDate = end;

            return { ...item, start, end, originalIndex: index };
        });

        // Add some buffer to the timeline
        minDate -= 0.2;
        maxDate += 0.2;

        return { items, minDate, maxDate, duration: maxDate - minDate };
    }, [data]);

    return (
        <div className="w-full max-w-6xl mx-auto px-4 md:px-0 flex flex-col gap-8">
            {/* Chart Area */}
            <div className="relative w-full bg-white/50 rounded-2xl border border-zinc-200 p-6 md:p-8 overflow-hidden shadow-sm">
                <div className="flex flex-col gap-6">
                    {/* Header */}
                    <div className="flex justify-between items-end mb-4 border-b border-zinc-100 pb-2">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Timeline de Projetos</h3>
                        <div className="flex gap-4 text-xs font-mono text-zinc-400">
                            {[2021, 2022, 2023, 2024, 2025].map(year => (
                                <span key={year}>{year}</span>
                            ))}
                        </div>
                    </div>

                    {/* Bars */}
                    <div className="flex flex-col gap-3 relative min-h-[200px]">
                        {/* Grid Lines (Vertical) */}
                        <div className="absolute inset-0 flex justify-between pointer-events-none opacity-20">
                            {/* Simplified grid - strictly visually aligned for now as dynamic is complex */}
                            {[0, 0.25, 0.5, 0.75, 1].map((pos) => (
                                <div key={pos} className="h-full w-px bg-zinc-300 dashed" style={{ left: `${pos * 100}%`, position: 'absolute' }} />
                            ))}
                        </div>

                        {chartData.items.map((item, index) => {
                            const widthPercent = ((item.end - item.start) / chartData.duration) * 100;
                            const leftPercent = ((item.start - chartData.minDate) / chartData.duration) * 100;
                            const isSelected = selectedIndex === index;

                            return (
                                <motion.div
                                    key={index}
                                    className="relative h-10 md:h-12 flex items-center group cursor-pointer"
                                    onClick={() => setSelectedIndex(index)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {/* Label (Left aligned absolute or flex? Let's keep it clean, maybe inside or tooltip? 
                                       Let's put the role label to the left of the bar if space, or inside)
                                    */}

                                    {/* Bar Track */}
                                    <div className="absolute left-0 right-0 h-full flex items-center">
                                        <div
                                            className={cn(
                                                "h-8 md:h-10 rounded-lg relative transition-all duration-300 shadow-sm border",
                                                isSelected
                                                    ? "bg-blue-600 border-blue-500 shadow-blue-200"
                                                    : "bg-white border-zinc-200 hover:border-blue-300 hover:bg-blue-50"
                                            )}
                                            style={{
                                                left: `${leftPercent}%`,
                                                width: `${widthPercent}%`,
                                                minWidth: '4px'
                                            }}
                                        >
                                            {/* Label Inside (if wide enough) or overlay */}
                                            <div className="absolute inset-0 flex items-center px-3 overflow-hidden whitespace-nowrap">
                                                <span className={cn(
                                                    "text-xs md:text-sm font-bold truncate",
                                                    isSelected ? "text-white" : "text-zinc-600"
                                                )}>
                                                    {item.company}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Detailed View Panel */}
            <div className="min-h-[300px]">
                <AnimatePresence mode="wait">
                    {selectedIndex !== null && (
                        <motion.div
                            key={selectedIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Card className="p-6 md:p-8 border-none shadow-xl bg-white relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-blue-600" />

                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">{chartData.items[selectedIndex].role}</h3>
                                        <div className="flex items-center gap-3 mt-2">
                                            <span className="text-lg text-blue-600 font-semibold">{chartData.items[selectedIndex].company}</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                                            <span className="text-sm font-mono text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded">
                                                {chartData.items[selectedIndex].period}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Specific Stark Analyst Metric */}
                                    {chartData.items[selectedIndex].role === "Analista de M&A" && chartData.items[selectedIndex].company === "Stark Investment Banking" && (
                                        <div className="bg-blue-50 px-4 py-2 rounded-xl border border-blue-100 flex flex-col items-end">
                                            <span className="text-[10px] uppercase font-bold text-blue-400">Transacionado</span>
                                            <Counter
                                                value={650}
                                                prefix="R$"
                                                suffix="M+"
                                                className="text-2xl font-black text-blue-600"
                                            />
                                        </div>
                                    )}
                                </div>

                                <p className="text-zinc-600 text-lg leading-relaxed mb-6 max-w-3xl">
                                    {chartData.items[selectedIndex].description}
                                </p>

                                {chartData.items[selectedIndex].highlights && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {chartData.items[selectedIndex].highlights?.map((highlight, i) => (
                                            <div key={i} className="flex items-start gap-3 bg-zinc-50 p-3 rounded-lg border border-zinc-100">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                                <span className="text-sm text-zinc-600 font-medium">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </Card>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
