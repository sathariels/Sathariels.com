"use client";

import { motion } from "motion/react";
import { gridContainerVariants } from "@/lib/animation/variants";
import { projects } from "@/lib/constants/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
    return (
        <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            variants={gridContainerVariants}
            initial="hidden"
            animate="visible"
        >
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </motion.div>
    );
}
