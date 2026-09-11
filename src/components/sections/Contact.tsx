"use client";

import { profileData } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Code, Briefcase } from "lucide-react";

export function Contact() {
  return (
    <section className="py-32 bg-accent text-accent-foreground text-center" id="contact">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let&apos;s Build Something Together.
          </h2>
          {/* <p className="text-lg md:text-xl text-accent-foreground/90 mb-12 max-w-2xl mx-auto">
            I&apos;m currently available for freelance opportunities or full-time roles. 
            Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p> */}

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="default" className="bg-white text-accent hover:bg-white/90" asChild>
              <a href={`mailto:${profileData.contact.email}`}>
                <Mail className="mr-2" size={20} /> Email Me
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white" asChild>
              <a href={profileData.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" size={20} /> WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white hidden sm:inline-flex" asChild>
              <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer">
                <Briefcase className="mr-2" size={20} /> LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white hidden sm:inline-flex" asChild>
              <a href={profileData.contact.github} target="_blank" rel="noopener noreferrer">
                <Code className="mr-2" size={20} /> GitHub
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-4 mt-6 sm:hidden">
            <Button size="icon" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white h-12 w-12 rounded-full" asChild>
              <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Briefcase size={20} />
              </a>
            </Button>
            <Button size="icon" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white h-12 w-12 rounded-full" asChild>
              <a href={profileData.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Code size={20} />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
