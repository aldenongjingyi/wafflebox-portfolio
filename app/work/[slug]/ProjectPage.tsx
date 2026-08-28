"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Project } from "@/lib/projects";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const ConstellationField = dynamic(
  () =>
    import("@designcodeio/threeui/components/ConstellationField").then(
      (m) => ({ default: m.ConstellationField })
    ),
  { ssr: false }
);

export default function ProjectPage({
  project,
  categoryLabel,
}: {
  project: Project;
  categoryLabel: string;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-[70vh] flex items-end overflow-hidden bg-black">
        {/* ThreeUI background */}
        <div className="absolute inset-0 z-0">
          <ConstellationField />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Back link */}
        <Link
          href="/#work"
          className="absolute top-8 left-8 z-20 text-white/60 hover:text-white text-xs font-semibold tracking-widest uppercase transition-colors flex items-center gap-2"
        >
          ← Work
        </Link>

        {/* Project title */}
        <div className="relative z-20 px-8 pb-12 md:px-16">
          <p className="text-white/40 text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            {categoryLabel}
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none">
            {project.title}
          </h1>
          <p className="text-white/50 mt-4 max-w-lg text-base">{project.description}</p>
        </div>
      </div>

      {/* Photo grid */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        {project.images.length === 0 ? (
          <div className="text-center py-32 text-black/30">
            <p className="text-sm tracking-widest uppercase">Photos coming soon</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 gap-4">
            {project.images.map((src, i) => (
              <div key={i} className="break-inside-avoid mb-4 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${BASE}${src}`}
                  alt={`${project.title} ${i + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer nav */}
      <div className="border-t border-black/10 px-6 py-10 max-w-6xl mx-auto flex justify-between items-center">
        <Link
          href="/#work"
          className="text-xs font-bold tracking-widest uppercase text-black/40 hover:text-black transition-colors"
        >
          ← All Work
        </Link>
        <Link
          href="/#contact"
          className="px-6 py-3 bg-black text-white text-xs font-bold tracking-widest uppercase hover:bg-zinc-800 transition-colors"
        >
          Work With Us
        </Link>
      </div>
    </div>
  );
}
