"use client";

import { profileData } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-6">
              {profileData.name.split(" ")[0]} <br />
              <span className="text-accent">{profileData.name.split(" ")[1]}</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl md:text-3xl font-medium text-muted-foreground mb-4">
              {profileData.title} <br className="hidden md:block"/> 
              <span className="text-lg md:text-xl font-normal">{profileData.location}</span>
            </h2>
            <p className="text-base md:text-lg mb-8 max-w-2xl whitespace-pre-line text-foreground/80 leading-relaxed">
              {profileData.heroText}
            </p>
            
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              {profileData.availability}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild size="lg">
              <Link href="/projects/cts">Explore My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
