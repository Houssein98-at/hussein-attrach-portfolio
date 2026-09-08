"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { profileData } from "@/data/profile";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check initial theme
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "CTS Platform", href: "/projects/cts" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md hidden md:block">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-bold tracking-tighter">
          {profileData.monogram}
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-accent",
                    pathname === link.href ? "text-accent" : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <a 
                href="#contact" 
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
