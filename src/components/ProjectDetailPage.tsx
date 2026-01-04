"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ProjectDetail } from "@/data/projectDetails";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { pageEnterVariants } from "@/lib/animation/variants";
import { ArrowLeft, ExternalLink, Github, Box } from "lucide-react";

interface ProjectDetailPageProps {
    project: ProjectDetail;
}

export default function ProjectDetailPage({ project }: ProjectDetailPageProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="flex flex-col min-h-screen relative font-sans">
            <div className="flex flex-col min-h-screen pt-2 md:pt-0 lg:py-6 xl:py-0 xl:pb-6">
                <Navbar />

                <motion.main
                    className="flex-1 flex flex-col pb-4 md:pb-6 px-4 lg:px-10"
                    variants={pageEnterVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="w-full max-w-7xl mx-auto"
                    >
                        {/* Back Link */}
                        <motion.div variants={itemVariants} className="mb-4">
                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-2 text-foreground/60 hover:text-accent transition-colors text-sm uppercase tracking-wide font-medium"
                            >
                                <ArrowLeft size={16} />
                                Back to Projects
                            </Link>
                        </motion.div>

                        {/* Hero Image */}
                        <motion.div
                            variants={itemVariants}
                            className="relative w-full aspect-video md:aspect-[21/9] rounded-[20px] overflow-hidden shadow-2xl mb-8 md:mb-10 bg-card"
                        >
                            <Image
                                src={project.heroImage}
                                alt={project.title}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                            />
                        </motion.div>

                        {/* Content Container */}
                        <div className="max-w-4xl">
                            {/* Title */}
                            <motion.h1
                                variants={itemVariants}
                                className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6"
                            >
                                {project.title}
                            </motion.h1>

                            {/* Description */}
                            <motion.div
                                variants={itemVariants}
                                className="prose prose-invert prose-lg max-w-none text-foreground/80 mb-10 leading-relaxed"
                            >
                                {project.description.split('\n').map((paragraph, index) => (
                                    <p key={index} className="mb-4 last:mb-0">
                                        {paragraph}
                                    </p>
                                ))}
                            </motion.div>

                            {/* Links */}
                            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                                {/* Demo Link */}
                                <Link
                                    href={project.links.demo || "#"}
                                    target={project.links.demo && project.links.demo !== "#" ? "_blank" : undefined}
                                    rel={project.links.demo && project.links.demo !== "#" ? "noopener noreferrer" : undefined}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${project.links.demo && project.links.demo !== "#"
                                            ? "bg-foreground text-background hover:bg-white hover:scale-105"
                                            : "bg-card text-foreground/40 cursor-not-allowed"
                                        }`}
                                    aria-disabled={!project.links.demo || project.links.demo === "#"}
                                >
                                    <ExternalLink size={20} />
                                    Live Demo
                                </Link>

                                {/* Asset Link */}
                                <Link
                                    href={project.links.asset || "#"}
                                    target={project.links.asset && project.links.asset !== "#" ? "_blank" : undefined}
                                    rel={project.links.asset && project.links.asset !== "#" ? "noopener noreferrer" : undefined}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all border ${project.links.asset && project.links.asset !== "#"
                                            ? "border-foreground/20 bg-transparent text-foreground hover:bg-card hover:border-accent hover:text-accent"
                                            : "border-card bg-card text-foreground/40 cursor-not-allowed"
                                        }`}
                                    aria-disabled={!project.links.asset || project.links.asset === "#"}
                                >
                                    <Box size={20} />
                                    View Asset
                                </Link>

                                {/* GitHub Link */}
                                <Link
                                    href={project.links.github || "#"}
                                    target={project.links.github && project.links.github !== "#" ? "_blank" : undefined}
                                    rel={project.links.github && project.links.github !== "#" ? "noopener noreferrer" : undefined}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all border ${project.links.github && project.links.github !== "#"
                                            ? "border-foreground/20 bg-transparent text-foreground hover:bg-card hover:border-accent hover:text-accent"
                                            : "border-card bg-card text-foreground/40 cursor-not-allowed"
                                        }`}
                                    aria-disabled={!project.links.github || project.links.github === "#"}
                                >
                                    <Github size={20} />
                                    Source Code
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.main>

                <Footer className="mb-4" showSignature={false} />
            </div>
        </div>
    );
}
