"use client";

import { useState, useEffect } from "react";
import { ctsScreenshots } from "@/data/ctsData";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function ScreenshotGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <div className="py-12">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="font-serif text-2xl font-bold">Selected Application Screens</h3>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-500/80 text-xs font-medium border border-amber-500/20">
            <ShieldCheck size={14} />
            Privacy Protected
          </span>
        </div>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Selected interface examples from my work on enterprise CTS solutions. Identifiable information has been intentionally obscured to protect client and user confidentiality.
        </p>
      </div>
      
      <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory px-4 md:px-2 scroll-px-4 md:scroll-px-2 scrollbar-hide w-full">
        {ctsScreenshots.map((screenshot, index) => (
          <div 
            key={index} 
            className="snap-start shrink-0 w-[280px] sm:w-[320px] flex flex-col group cursor-pointer first:ml-2 last:mr-4"
            onClick={() => openLightbox(index)}
          >
            <div className="relative aspect-[9/19] rounded-[2.5rem] overflow-hidden border-[12px] border-zinc-900 dark:border-zinc-800 bg-zinc-950 mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
              {/* Phone Notch */}
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-30">
                <div className="w-1/3 h-full bg-zinc-900 dark:bg-zinc-800 rounded-b-xl"></div>
              </div>
              
              <Image 
                src={screenshot.image} 
                alt={screenshot.alt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 280px, 320px"
              />

              {/* Privacy Masking */}
              {(screenshot as any).blurRegions?.map((region: any, rIdx: number) => (
                <div 
                  key={rIdx}
                  className="absolute z-10 bg-background/50 backdrop-blur-md"
                  style={{
                    top: region.top,
                    left: region.left,
                    right: region.right,
                    width: region.width,
                    height: region.height,
                    borderRadius: region.borderRadius || '4px'
                  }}
                />
              ))}
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="bg-background/90 text-foreground p-3 rounded-full backdrop-blur-sm shadow-sm transform translate-y-4 group-hover:translate-y-0 transition-all">
                  <Maximize2 size={20} />
                </div>
              </div>
            </div>
            
            <div className="px-2">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-1 block">
                {screenshot.category}
              </span>
              <h4 className="font-medium text-foreground text-lg mb-1">{screenshot.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{screenshot.description}</p>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute top-4 right-4 sm:top-8 sm:right-8 rounded-full bg-background/50 hover:bg-background z-50"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
            >
              <X size={24} />
            </Button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-h-full max-w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[80vh] aspect-[9/19] rounded-[3rem] overflow-hidden border-[16px] border-zinc-900 dark:border-zinc-800 bg-zinc-950 shadow-2xl">
                {/* Phone Notch */}
                <div className="absolute top-0 inset-x-0 h-8 flex justify-center z-30">
                  <div className="w-1/3 h-full bg-zinc-900 dark:bg-zinc-800 rounded-b-2xl"></div>
                </div>
                
                <Image 
                  src={ctsScreenshots[selectedImage].image} 
                  alt={ctsScreenshots[selectedImage].alt}
                  fill
                  className="object-cover object-top"
                />

                {/* Privacy Masking */}
                {(ctsScreenshots[selectedImage] as any).blurRegions?.map((region: any, rIdx: number) => (
                  <div 
                    key={rIdx}
                    className="absolute z-10 bg-background/50 backdrop-blur-xl"
                    style={{
                      top: region.top,
                      left: region.left,
                      right: region.right,
                      width: region.width,
                      height: region.height,
                      borderRadius: region.borderRadius || '4px'
                    }}
                  />
                ))}
              </div>
              
              <div className="mt-6 text-center max-w-md bg-card border border-border p-4 rounded-xl shadow-sm">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-1">
                  {ctsScreenshots[selectedImage].category}
                </span>
                <h4 className="font-medium text-lg mb-1">{ctsScreenshots[selectedImage].title}</h4>
                <p className="text-sm text-muted-foreground">{ctsScreenshots[selectedImage].description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
