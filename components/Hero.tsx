"use client";

import dynamic from "next/dynamic";

const LiquidFormBackground = dynamic(
  () =>
    import("@designcodeio/threeui/components/LiquidFormBackground").then(
      (m) => ({ default: m.LiquidFormBackground })
    ),
  { ssr: false }
);

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* ThreeUI background */}
      <div className="absolute inset-0 z-0">
        <LiquidFormBackground />
      </div>

      {/* Fade to white at bottom so hero bleeds into the white page */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-white" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <p className="text-white/50 text-sm font-semibold tracking-[0.25em] uppercase mb-6">
          Photography · Content · Design
        </p>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6 text-white">
          WaffleBox
          <br />
          Productions
        </h1>
        <p className="text-white/60 text-lg md:text-xl max-w-xl mx-auto mb-10">
          Not your average production house.
          <br />
          We shoot. We edit. We vibe.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#work"
            className="px-8 py-4 bg-white text-black font-bold text-sm tracking-widest uppercase hover:bg-zinc-200 transition-colors duration-200"
          >
            See Our Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/40 text-white font-bold text-sm tracking-widest uppercase hover:border-white transition-colors duration-200"
          >
            Let&apos;s Work Together
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
