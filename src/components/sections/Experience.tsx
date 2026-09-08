"use client";

import { experienceData } from "@/data/experience";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section className="py-24 bg-muted/50" id="experience">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl">
            Developing and maintaining enterprise mobile solutions.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experienceData.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-border/50">
                <CardHeader className="bg-card pb-6 border-b border-border/50">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <CardTitle className="text-2xl font-serif mb-2">{job.position}</CardTitle>
                      <CardDescription className="text-base font-medium text-foreground">
                        {job.company} • {job.specialization}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <Badge variant="secondary" className="text-sm px-3 py-1">
                        {job.period}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{job.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="grid md:grid-cols-2 gap-4">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span className="text-muted-foreground text-sm leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
