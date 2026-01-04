"use client";

import { motion, AnimatePresence } from "motion/react";
import { backdropVariants } from "@/lib/animation/variants";
import ContactCard from "./ContactCard";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <ContactCard onClose={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}