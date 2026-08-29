"use client";

import Link from "next/link";
import { Project } from "@/lib/projects";
import PhotoCardStack from "@/components/PhotoCardStack";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function ProjectPage({
  project,
  categoryLabel,
}: {
  project: Project;
  categoryLabel: string;
}) {
  const images = project.images.map((src) => `${BASE}${src}`);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-4">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-black/30 hover:text-black text-xs font-semibold tracking-widest uppercase transition-colors mb-10"
        >
          ← Work
        </Link>

        <p className="text-black/30 text-xs font-semibold tracking-[0.25em] uppercase mb-3">
          {categoryLabel}
        </p>
        <h1 className="text-5xl md:text-7xl font-black text-black tracking-tight leading-none mb-5">
          {project.title}
        </h1>
        <p className="text-black/50 text-base md:text-lg max-w-xl leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Card stack photo showcase */}
      <PhotoCardStack images={images} title={project.title} />

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
