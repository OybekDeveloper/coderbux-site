import { Spotlight } from "@/components/ui/Spotlight";
import { SpotlightNew } from "@/components/ui/spotlight-new";
import React from "react";

export function Home() {
  return (
    <div id="home" className="rounded-none max-md:pt-28 h-screen w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="max-sm:hidden top-10 left-0 md:left-60 md:-top-20" fill="white" />
      <SpotlightNew />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-40 md:pt-0">
        <h1 className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          CoderBux <br /> ga xush kelibsiz
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Sizning it kompaniyangiz uchun texnologiyaning yangi ufqlarini kashf
          qilishga yordam beramiz. Yangi yechimlar va ilg'or tizimlar bilan
          biznesingizni rivojlantirishga yordam beramiz.
        </p>
      </div>
    </div>
  );
}
