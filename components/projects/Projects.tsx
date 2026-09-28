"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import { projects } from "@/components/projects/ProjectsData";
import { motion, AnimatePresence } from "framer-motion";

export const Projects = () => {
    const [selectedTab, setSelectedTab] = useState<"all" | "personal" | "freelance">("all");

    const personalCount = projects.filter((p) => p.category === "personal").length;
    const freelanceCount = projects.filter((p) => p.category === "freelance").length;

    const tabs = [
        { id: "all", label: "All Projects", count: projects.length },
        { id: "personal", label: "Personal Projects", count: personalCount },
        { id: "freelance", label: "Freelance Projects", count: freelanceCount },
    ] as const;

    const filteredProjects = selectedTab === "all"
        ? projects
        : projects.filter((project) => project.category === selectedTab);

    return (
        <section className="section-wrapper" id="projects">
            <SectionHeader title="Projects" dir="r" />

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-3 my-8 flex-wrap">
                {tabs.map((tab) => {
                    const isActive = selectedTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            type="button"
                            onClick={() => setSelectedTab(tab.id)}
                            className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 select-none outline-none border ${
                                isActive
                                    ? "text-white border-transparent shadow-[0_0_20px_rgba(252,140,3,0.35)]"
                                    : "text-text/75 hover:text-text bg-background-light hover:bg-[#2b2b2b] border-white/5"
                            }`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeProjectCategory"
                                    className="absolute inset-0 bg-brand rounded-full z-0"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{tab.label}</span>
                            <span
                                className={`relative z-10 text-xs px-2 py-0.5 rounded-full transition-colors font-medium ${
                                    isActive
                                        ? "bg-black/25 text-white"
                                        : "bg-background text-text/60"
                                }`}
                            >
                                {tab.count}
                            </span>
                        </button>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full min-h-[400px]">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.title}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Project {...project} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
};
