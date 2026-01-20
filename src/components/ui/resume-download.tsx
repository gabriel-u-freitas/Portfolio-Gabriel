"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";


export function ResumeDownload() {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => setIsOpen(!isOpen);



    return (
        <div className="relative z-50" ref={containerRef}>
            <button
                onClick={toggleDropdown}
                className={`
                    inline-flex items-center gap-2 px-8 py-3.5 rounded-full 
                    bg-transparent border border-zinc-300 text-zinc-600 
                    hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 
                    transition-all hover:scale-105 active:scale-95 font-semibold
                    ${isOpen ? 'border-blue-600 text-blue-600 bg-blue-50' : ''}
                `}
                aria-label="Opções de Download do Currículo"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <Download size={20} />
                <span className="text-base">Baixar Currículo</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-full left-0 mb-2 w-[280px] origin-bottom-left"
                    >
                        <div className="rounded-2xl shadow-xl bg-white border border-zinc-200 overflow-hidden p-2 space-y-1">
                            <a
                                href="/CV Gabriel Uzêda de Freitas - v3 - EN.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-xl transition-colors text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 text-left"
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="text-lg opacity-70 w-6 flex justify-center">
                                    <span className="inline-flex w-full h-auto shadow-sm rounded-sm overflow-hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342" className="w-full h-full object-cover">
                                            <path fill="#FFF" d="M0 0h513v342H0z"></path>
                                            <path d="M0 0h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.7h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513V342H0z" fill="#D80027"></path>
                                            <path fill="#2E52B2" d="M0 0h256.5v184.1H0z"></path>
                                            <path d="m47.8 138.9-4-12.8-4.4 12.8H26.2l10.7 7.7-4 12.8 10.9-7.9 10.6 7.9-4.1-12.8 10.9-7.7zm56.3 0-4.1-12.8-4.2 12.8H82.6l10.7 7.7-4 12.8 10.7-7.9 10.8 7.9-4-12.8 10.7-7.7zm56.5 0-4.3-12.8-4 12.8h-13.5l11 7.7-4.2 12.8 10.7-7.9 11 7.9-4.2-12.8 10.7-7.7zm56.2 0-4-12.8-4.2 12.8h-13.3l10.8 7.7-4 12.8 10.7-7.9 10.8 7.9-4.3-12.8 11-7.7zM100 75.3l-4.2 12.8H82.6L93.3 96l-4 12.6 10.7-7.8 10.8 7.8-4-12.6 10.7-7.9h-13.4zm-56.2 0-4.4 12.8H26.2L36.9 96l-4 12.6 10.9-7.8 10.6 7.8L50.3 96l10.9-7.9H47.8zm112.5 0-4 12.8h-13.5l11 7.9-4.2 12.6 10.7-7.8 11 7.8-4.2-12.6 10.7-7.9h-13.2zm56.5 0-4.2 12.8h-13.3l10.8 7.9-4 12.6 10.7-7.8 10.8 7.8-4.3-12.6 11-7.9h-13.5zm-169-50.6-4.4 12.6H26.2l10.7 7.9-4 12.7L43.8 50l10.6 7.9-4.1-12.7 10.9-7.9H47.8zm56.2 0-4.2 12.6H82.6l10.7 7.9-4 12.7L100 50l10.8 7.9-4-12.7 10.7-7.9h-13.4zm56.3 0-4 12.6h-13.5l11 7.9-4.2 12.7 10.7-7.9 11 7.9-4.2-12.7 10.7-7.9h-13.2zm56.5 0-4.2 12.6h-13.3l10.8 7.9-4 12.7 10.7-7.9 10.8 7.9-4.3-12.7 11-7.9h-13.5z" fill="#FFF"></path>
                                        </svg>
                                    </span>
                                </span>
                                <span className="flex-1 truncate font-medium">Versão em inglês (PDF)</span>
                            </a>
                            <a
                                href="/CV_Gabriel_Uzeda_de_Freitas.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-xl transition-colors text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 text-left"
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="text-lg opacity-70 w-6 flex justify-center">
                                    <span className="inline-flex w-full h-auto shadow-sm rounded-sm overflow-hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342" className="w-full h-full object-cover">
                                            <path fill="#009b3a" d="M0 0h513v342H0z"></path>
                                            <path fill="#fedf00" d="m256.5 19.3 204.9 151.4L256.5 322 50.6 170.7z"></path>
                                            <circle fill="#FFF" cx="256.5" cy="171" r="80.4"></circle>
                                            <path fill="#002776" d="M215.9 165.7c-13.9 0-27.4 2.1-40.1 6 .6 43.9 36.3 79.3 80.3 79.3 27.2 0 51.3-13.6 65.8-34.3-24.9-31-63.2-51-106-51zm119 20.3c.9-5 1.5-10.1 1.5-15.4 0-44.4-36-80.4-80.4-80.4-33.1 0-61.5 20.1-73.9 48.6 10.9-2.2 22.1-3.4 33.6-3.4 46.8.1 89 19.5 119.2 50.6z"></path>
                                        </svg>
                                    </span>
                                </span>
                                <span className="flex-1 truncate font-medium">Versão em português (PDF)</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
