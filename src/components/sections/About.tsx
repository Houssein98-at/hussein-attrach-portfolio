"use client";

import { profileData } from "@/data/profile";
import { motion } from "framer-motion";

export function About() {
  return (
    <section className="py-24" id="about">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl font-bold sticky top-24"
            >
              Beyond the Interface.
            </motion.h2>
          </div>
          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground whitespace-pre-line"
            >
              {profileData.aboutText}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
