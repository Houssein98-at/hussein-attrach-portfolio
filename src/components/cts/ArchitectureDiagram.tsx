"use client";

import { motion } from "framer-motion";
import { Smartphone, Server, Database, Lock, Globe } from "lucide-react";

export function ArchitectureDiagram() {
  return (
    <div className="py-12">
      <div className="bg-card border border-border rounded-2xl p-6 md:p-12 overflow-hidden relative">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl font-bold mb-2">High-Level Mobile Integration</h3>
            <p className="text-sm text-muted-foreground">Simplified conceptual view of the mobile integration landscape.</p>
          </div>
          
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
            
            {/* Mobile Layer */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-md bg-accent/5 border border-accent/20 rounded-xl p-6 text-center shadow-sm relative"
            >
              <div className="absolute -left-3 -top-3 bg-background p-2 rounded-lg border border-border text-accent">
                <Smartphone size={24} />
              </div>
              <h4 className="font-bold text-lg mb-1">CTS Mobile Platform</h4>
              <p className="text-sm text-muted-foreground mb-4">Flutter / Dart</p>
              <div className="flex justify-center gap-4">
                <div className="bg-background px-4 py-2 rounded-md text-sm font-medium border border-border shadow-sm w-full">Android</div>
                <div className="bg-background px-4 py-2 rounded-md text-sm font-medium border border-border shadow-sm w-full">iOS</div>
              </div>
            </motion.div>

            {/* Connecting lines */}
            <div className="flex gap-12 h-16 w-full max-w-xs justify-center relative">
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-0.5 bg-gradient-to-b from-accent/50 to-border"
              ></motion.div>
              
              {/* Data packets animation */}
              <motion.div 
                animate={{ y: [0, 64], opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="absolute left-[50%] -translate-x-[50%] w-2 h-2 rounded-full bg-accent"
              ></motion.div>
            </div>

            {/* API Layer */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="w-full max-w-sm bg-muted border border-border rounded-xl p-4 text-center shadow-sm flex items-center justify-center gap-3 relative"
            >
              <Globe className="text-muted-foreground" size={20} />
              <h4 className="font-medium text-foreground">REST API Gateway</h4>
            </motion.div>

            {/* Connecting lines */}
            <div className="h-16 flex justify-center relative w-full">
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-0.5 bg-gradient-to-b from-border to-muted-foreground/30"
              ></motion.div>
            </div>

            {/* Enterprise Services Layer */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="w-full max-w-lg grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <div className="bg-card border border-border rounded-lg p-4 text-center shadow-sm flex flex-col items-center gap-2">
                <Database className="text-blue-500" size={20} />
                <span className="text-xs font-semibold">CTS Core</span>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center shadow-sm flex flex-col items-center gap-2">
                <Server className="text-emerald-500" size={20} />
                <span className="text-xs font-semibold">DMS Services</span>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center shadow-sm flex flex-col items-center gap-2">
                <Lock className="text-amber-500" size={20} />
                <span className="text-xs font-semibold">IAM / Auth</span>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
