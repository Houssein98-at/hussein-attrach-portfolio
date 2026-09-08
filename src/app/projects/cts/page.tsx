import { ctsProjectData } from "@/data/ctsData";
import { Badge } from "@/components/ui/Badge";
import { ScreenshotGallery } from "@/components/cts/ScreenshotGallery";
import { ArchitectureDiagram } from "@/components/cts/ArchitectureDiagram";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: `${ctsProjectData.title} | Case Study`,
  description: ctsProjectData.subtitle,
};

export default function CTSProjectPage() {
  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Navigation */}
        <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-12 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
        </Link>
        
        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex flex-wrap gap-2 mb-6">
            {ctsProjectData.platform.map((p, idx) => (
              <Badge key={idx} variant="secondary" className="text-sm px-3 py-1 bg-accent/10 text-accent border-accent/20">
                {p}
              </Badge>
            ))}
            <Badge variant="default" className="text-sm px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20">
              {ctsProjectData.status}
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              Enterprise
            </Badge>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            {ctsProjectData.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl leading-relaxed">
            {ctsProjectData.subtitle}
          </p>
        </div>

        {/* Project Meta */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-border mb-16">
          <div>
            <span className="block text-sm text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Development</span>
            <span className="font-medium">{ctsProjectData.development}</span>
          </div>
          <div>
            <span className="block text-sm text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Role</span>
            <span className="font-medium">Senior Flutter Developer</span>
          </div>
          <div>
            <span className="block text-sm text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Scale</span>
            <span className="font-medium">{ctsProjectData.clientDeployments} Client Deployments</span>
          </div>
          <div>
            <span className="block text-sm text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Delivery</span>
            <span className="font-medium">Android + iOS</span>
          </div>
        </div>

        {/* Overview & Role */}
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-7">
            <h2 className="font-serif text-3xl font-bold mb-6">Project Overview</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground whitespace-pre-line leading-relaxed">
              {ctsProjectData.overview}
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="bg-muted rounded-2xl p-8 border border-border">
              <h2 className="font-serif text-2xl font-bold mb-4">My Role</h2>
              <p className="text-foreground/90 font-medium mb-6">
                Senior Flutter Developer
              </p>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                {ctsProjectData.myRole}
              </p>
              
              <h4 className="text-xs uppercase tracking-wider font-bold text-muted-foreground mb-4">Delivery Lifecycle</h4>
              <div className="flex flex-col space-y-4 relative before:absolute before:inset-y-0 before:left-[11px] before:w-0.5 before:bg-border">
                {["Architecture", "Development", "API Integration", "QA", "UAT", "Release", "Production Support"].map((step, idx) => (
                  <div key={idx} className="flex items-center gap-4 relative">
                    <div className="w-6 h-6 rounded-full bg-background border-2 border-accent flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <span className="font-medium text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Architecture */}
        <ArchitectureDiagram />

        {/* Screenshots Gallery */}
        <ScreenshotGallery />

        {/* Core Capabilities */}
        <div className="mb-24">
          <h2 className="font-serif text-3xl font-bold mb-8">Platform Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ctsProjectData.capabilities.map((cap, idx) => (
              <Card key={idx} className="border-border/50 shadow-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm tracking-wider text-muted-foreground uppercase">
                    {cap.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {cap.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Engineering Challenges */}
        <div className="mb-24">
          <h2 className="font-serif text-3xl font-bold mb-8">Engineering Challenges</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {ctsProjectData.engineeringChallenges.map((challenge, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-border bg-card">
                <h4 className="font-bold text-lg mb-2">{challenge.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center pt-12 border-t border-border">
          <h3 className="font-serif text-2xl font-bold mb-6">Want to learn more?</h3>
          <Button asChild size="lg">
            <Link href="/#contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
