"use client";

import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from "recharts";
import { motion } from "framer-motion";

interface SkillData {
    subject: string;
    A: number;
    fullMark: number;
}

const data: SkillData[] = [
    { subject: "Excel (VBA)", A: 95, fullMark: 100 },
    { subject: "Power BI", A: 90, fullMark: 100 },
    { subject: "SQL", A: 75, fullMark: 100 },
    { subject: "Python", A: 80, fullMark: 100 },
    { subject: "Modeling", A: 85, fullMark: 100 },
    { subject: "Valuation", A: 85, fullMark: 100 },
];

export function SkillsRadar() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-[300px] -ml-6"
        >
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                    <PolarGrid stroke="#e4e4e7" />
                    <PolarAngleAxis
                        dataKey="subject"
                        tick={{ fill: "#52525b", fontSize: 12, fontWeight: 500 }}
                    />
                    <Radar
                        name="Nível"
                        dataKey="A"
                        stroke="#0F172A"
                        strokeWidth={2}
                        fill="#0F172A"
                        fillOpacity={0.1}
                    />
                    <Tooltip
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        itemStyle={{ color: '#0F172A', fontWeight: 'bold' }}
                        cursor={{ stroke: '#F97316', strokeWidth: 2 }}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </motion.div>
    );
}
