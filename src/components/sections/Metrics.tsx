"use client";

import { profileData } from "@/data/profile";
import { motion } from "framer-motion";

export function Metrics() {
  return (
    <section className="py-20 border-y border-border bg-card/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {profileData.metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center space-y-2"
            >
              <span className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                {metric.value}
              </span>
              <span className="text-xs md:text-sm font-medium tracking-wider text-muted-foreground uppercase">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
