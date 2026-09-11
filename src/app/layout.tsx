import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { BottomNav } from "@/components/layout/BottomNav";
import { Footer } from "@/components/layout/Footer";
import { profileData } from "@/data/profile";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profileData.name} | ${profileData.title}`,
  description: `Portfolio of ${profileData.name}, ${profileData.title} and Software Engineer specializing in enterprise Android and iOS applications, Flutter, REST APIs, Firebase, and government digital solutions.`,
  authors: [{ name: profileData.name }],
  keywords: ["Flutter", "Mobile Developer", "Senior Developer", "iOS", "Android", "Enterprise"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex-1 pb-16 md:pb-0">{children}</main>
          <BottomNav />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
