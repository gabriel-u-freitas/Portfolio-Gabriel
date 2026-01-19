"use client";

import { resumeData } from "@/data/resume";
import { ExperienceGantt } from "@/components/ui/experience-gantt";
import { motion } from "framer-motion";

export function ExperienceSection() {
    return (
        <section className="mb-24">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-extrabold text-primary mb-16 flex items-center justify-center gap-3 tracking-tighter"
            >
                <span className="bg-primary/5 p-2 rounded-xl text-3xl">📊</span>
                Timeline de Carreira
            </motion.h2>

            <ExperienceGantt data={resumeData.experience} />
        </section>
    );
}
