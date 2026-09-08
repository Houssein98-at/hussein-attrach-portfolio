"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Briefcase, FileText, Mail, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function BottomNav() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Experience", href: "/#experience", icon: Briefcase },
    { name: "CTS", href: "/projects/cts", icon: FileText },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-t border-border pb-safe">
      <div className="flex items-center justify-around h-16 px-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href.includes('#') && false); // Simple active state for mobile
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full space-y-1 text-xs font-medium transition-colors",
                isActive ? "text-accent" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              <span>{item.name}</span>
            </Link>
          );
        })}
        <button
          onClick={toggleTheme}
          className="flex flex-col items-center justify-center w-full h-full space-y-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          <span>Theme</span>
        </button>
      </div>
    </div>
  );
}
