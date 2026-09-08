import { profileData } from "@/data/profile";
import { Mail, MessageCircle, Code, Briefcase } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-24">
      <div className="container mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <div className="flex flex-col items-center md:items-start max-w-sm text-center md:text-left">
          <span className="font-serif text-2xl font-bold mb-4">{profileData.monogram}</span>
          <p className="text-muted-foreground text-sm">
            Senior Flutter Developer specializing in enterprise and government mobile applications.
          </p>
        </div>
        
        <div className="flex gap-6">
          <a href={`mailto:${profileData.contact.email}`} className="text-muted-foreground hover:text-accent transition-colors" aria-label="Email">
            <Mail size={24} />
          </a>
          <a href={profileData.contact.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="GitHub">
            <Code size={24} />
          </a>
          <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="LinkedIn">
            <Briefcase size={24} />
          </a>
          <a href={profileData.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors" aria-label="WhatsApp">
            <MessageCircle size={24} />
          </a>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
