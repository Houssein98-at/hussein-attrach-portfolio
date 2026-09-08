"use client";

import { ctsProjectData } from "@/data/ctsData";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { motion } from "framer-motion";

export function CTSCard() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Featured Platform</h2>
          <p className="text-muted-foreground max-w-2xl">
            A comprehensive enterprise solution engineered for scale and security.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-6">
                {ctsProjectData.platform.map((p, idx) => (
                  <Badge key={idx} variant="secondary">{p}</Badge>
                ))}
                <Badge variant="default" className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20">{ctsProjectData.status}</Badge>
              </div>
              
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-3">{ctsProjectData.title}</h3>
              <p className="text-lg font-medium text-muted-foreground mb-6">{ctsProjectData.subtitle}</p>
              
              <p className="text-foreground/80 mb-8 leading-relaxed">
                Production Flutter platform for secure correspondence, document, signing, delegation, workflow, reporting, and organizational processes across government and enterprise environments.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center mb-8 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-accent">•</span>
                  <span>{ctsProjectData.development}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">•</span>
                  <span>{ctsProjectData.clientDeployments} Client Deployments</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">•</span>
                  <span>Android + iOS</span>
                </div>
              </div>

              <div>
                <Button asChild size="lg">
                  <Link href="/projects/cts">Explore CTS Case Study &rarr;</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-muted/30 p-8 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-border relative overflow-hidden min-h-[400px]">
              {/* Abstract graphic representing the platform */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="w-[120%] h-[120%] border-[40px] rounded-full border-accent/20 animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute w-[80%] h-[80%] border-[20px] rounded-full border-purple-500/20 animate-[spin_40s_linear_infinite_reverse]"></div>
              </div>
              
              <div className="relative z-10 w-full max-w-sm aspect-[9/16] bg-card rounded-3xl border-[8px] border-border shadow-2xl flex flex-col overflow-hidden">
                <div className="h-6 w-full bg-border flex justify-center items-center">
                  <div className="w-16 h-1 rounded-full bg-muted-foreground/30"></div>
                </div>
                <div className="flex-1 bg-background p-4 flex flex-col gap-4">
                  <div className="h-10 w-full rounded-md bg-muted animate-pulse"></div>
                  <div className="flex gap-2">
                    <div className="h-20 flex-1 rounded-md bg-muted animate-pulse animation-delay-200"></div>
                    <div className="h-20 flex-1 rounded-md bg-muted animate-pulse animation-delay-400"></div>
                  </div>
                  <div className="h-32 w-full rounded-md bg-muted animate-pulse animation-delay-500"></div>
                  <div className="h-24 w-full rounded-md bg-muted animate-pulse animation-delay-700"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
