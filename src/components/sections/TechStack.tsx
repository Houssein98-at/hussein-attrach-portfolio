"use client";

import { skillsData, aiAssistedDevelopmentData } from "@/data/skills";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";

export function TechStack() {
  return (
    <section className="py-24" id="expertise">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl">
            Core competencies across mobile development, backend integration, and enterprise platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 hover:border-border transition-colors">
                <CardHeader>
                  <CardTitle className="text-sm tracking-wider text-muted-foreground uppercase">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="font-medium bg-muted text-foreground">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-muted/50 border-border/50">
            <CardHeader>
              <CardTitle className="text-xl font-serif">AI-Assisted Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                {aiAssistedDevelopmentData.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {aiAssistedDevelopmentData.tools.map((tool, idx) => (
                  <Badge key={idx} variant="outline" className="border-accent/20 text-accent bg-accent/5">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
