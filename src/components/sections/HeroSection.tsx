"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  
  const images = [
    "/Image/hero_bg_1.jpg",
    "/Image/hero_bg_2.jpg",
    "/Image/hero_bg_3.jpg",
  ];

  useEffect(() => {
    // Don't animate if user prefers reduced motion
    if (prefersReducedMotion) return;
    
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [prefersReducedMotion, images.length]);

  return (
    <div className="relative min-h-[100dvh] h-screen w-full overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 min-h-[100dvh]" aria-hidden>
        {images.map((src, index) => {
          const isLcp = index === 0;
          return (
          <div
            key={index}
            className={`absolute inset-0 ${
              prefersReducedMotion 
                ? '' 
                : 'transition-opacity duration-1000'
            } ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`The Lakes Las Vegas area — Las Vegas real estate hero ${index + 1}`}
              fill
              sizes="100vw"
              className="object-cover"
              priority={isLcp}
              fetchPriority={isLcp ? "high" : "low"}
              {...(!isLcp ? { loading: "lazy" as const } : {})}
              quality={isLcp ? 72 : 68}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          <span className="text-white">The Lakes Las Vegas</span>
          <br />
          <span className="text-blue-400 text-2xl md:text-3xl lg:text-5xl font-semibold">
            Homes for sale &amp; real estate
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
          West Las Vegas lake community near Summerlin—buy or sell with Dr. Jan Duffy, Berkshire
          Hathaway HomeServices Nevada Properties.
        </p>

        {/* RealScout Search Widget — min-height reserved in globals.css to limit CLS */}
        <div className="realscout-wrapper hero-realscout-slot mb-4 w-full max-w-2xl">
          <div
            dangerouslySetInnerHTML={{
              __html: `<realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>`,
            }}
          />
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/90 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-semibold">500+</span>
            <span>Properties Sold</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Since 2008</span>
            <span>Serving Las Vegas</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">5.0★</span>
            <span>on Realtor.com</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 ${
          prefersReducedMotion ? '' : 'animate-bounce'
        }`}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </div>
  );
}
