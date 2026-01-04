"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { projectCardVariants } from "@/lib/animation/variants";
import { Project } from "@/lib/constants/projects";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div
            className="bg-card rounded-[20px] overflow-hidden cursor-pointer group"
            variants={projectCardVariants}
            whileHover="hover"
        >
            {/* Image Container */}
            <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                    src={project.imgSrc}
                    alt={project.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-4 md:p-5">
                <h3 className="text-lg md:text-xl font-medium text-foreground mb-2 transition-colors group-hover:text-accent">
                    {project.name}
                </h3>
                <p className="text-sm md:text-base text-foreground/70 line-clamp-2 leading-relaxed">
                    {project.description}
                </p>
            </div>
        </motion.div>
    );
}
