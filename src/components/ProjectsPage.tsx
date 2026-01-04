"use client";

import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsGrid from "@/components/ProjectsGrid";
import { pageEnterVariants } from "@/lib/animation/variants";

export default function ProjectsPage() {
    return (
        <div className="flex flex-col min-h-screen font-sans pt-2 md:pt-0 lg:py-6 xl:py-0 xl:pb-6">
            <Navbar />

            <motion.main
                className="flex-1 flex flex-col pb-4 md:pb-6"
                variants={pageEnterVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Page Header */}
                <motion.div
                    className="mb-6 md:mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-2">
                        Projects
                    </h1>
                    <p className="text-foreground/60 text-base md:text-lg">
                        A collection of my creative works and experiments
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="flex-1">
                    <ProjectsGrid />
                </div>
            </motion.main>

            <Footer className="mb-4" />
        </div>
    );
}
