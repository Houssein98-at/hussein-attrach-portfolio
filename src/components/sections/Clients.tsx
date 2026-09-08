"use client";

import { clientsData } from "@/data/clients";
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
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Enterprise & Government Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto md:mx-0">
            CTS has been deployed and supported across a diverse portfolio of government and enterprise organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {clientsData.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 8) * 0.05 }}
              className="p-6 rounded-xl border border-border/50 bg-card hover:border-accent/30 transition-colors flex flex-col justify-center min-h-[120px]"
            >
              <h4 className="font-medium text-foreground text-sm leading-snug">{client.name}</h4>
              <span className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">{client.category}</span>
            </motion.div>
          ))}
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-muted-foreground mt-12"
        >
          Organizations shown represent professional project/client experience and do not imply endorsement.
        </motion.p>
      </div>
    </section>
  );
}
