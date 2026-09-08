import { Hero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Experience } from "@/components/sections/Experience";
import { CTSCard } from "@/components/sections/CTSCard";
import { Clients } from "@/components/sections/Clients";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <About />
      <TechStack />
      <Experience />
      <CTSCard />
      <Clients />
      <Education />
      <Contact />
    </>
  );
}
