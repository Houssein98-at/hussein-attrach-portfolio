"use client";

import { experienceAreas } from "@/data/clients";
import { motion } from "framer-motion";

export function Clients() {
  return (
    <section className="py-24 bg-muted/30" id="clients">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">UAE Government & Enterprise Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto md:mx-0">
            Experience delivering, supporting, and enhancing enterprise-grade Correspondence Tracking System (CTS) solutions for government entities and large organizations across the UAE.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experienceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 6) * 0.1 }}
                className="p-8 rounded-xl border border-border/50 bg-card hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 flex flex-col h-full"
              >
                <div className="mb-6 inline-flex p-3 rounded-lg bg-accent/10 text-accent">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {area.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-muted-foreground mt-12 italic"
        >
          Client identities are not disclosed in accordance with confidentiality requirements.
        </motion.p>
      </div>
    </section>
  );
}
