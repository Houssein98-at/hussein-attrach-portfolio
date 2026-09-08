"use client";

import { profileData } from "@/data/profile";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-6 text-muted-foreground">
            <GraduationCap size={32} />
          </div>
          <h2 className="font-serif text-3xl font-bold mb-8">Education</h2>
          
          <div className="space-y-2">
            <h3 className="text-xl font-medium">{profileData.education.field}</h3>
            <p className="text-muted-foreground">{profileData.education.university}</p>
            <p className="text-sm font-medium text-accent">Graduated {profileData.education.graduation}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
