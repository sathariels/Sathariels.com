"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCard from "@/components/ContactCard";
import ParticlesBackground from "@/components/ParticlesBackground";
import { motion } from "motion/react";
import { pageEnterVariants } from "@/lib/animation/variants";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen relative font-sans overflow-hidden">
            {/* Background Layer */}
            <ParticlesBackground />

            <div className="relative z-10 flex flex-col min-h-screen pt-2 md:pt-0 lg:py-6 xl:py-0 xl:pb-6">
                <Navbar />

                <motion.main
                    className="flex-1 flex items-center justify-center p-4"
                    variants={pageEnterVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* We wrap ContactCard in a div to ensure it doesn't try to fill the whole screen if flexbox acts up, 
              though ContactCard has max-w definitions. */}
                    <div className="w-full max-w-4xl">
                        <ContactCard />
                    </div>
                </motion.main>

                <Footer className="mb-4" showSignature={false} />
            </div>
        </div>
    );
}
