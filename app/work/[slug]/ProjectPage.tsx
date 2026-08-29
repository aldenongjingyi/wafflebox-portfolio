"use client";

import Link from "next/link";
import { Project } from "@/lib/projects";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function ProjectPage({
  project,
  categoryLabel,
}: {
  project: Project;
  categoryLabel: string;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-12">
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

      {/* KoiStudies visual divider */}
      <div className="w-full h-48 md:h-64 overflow-hidden">
        <iframe
          src={`${BASE}/synthralos-halftone.html`}
          title="Koi Studies"
          sandbox="allow-scripts"
          allow="autoplay"
          className="w-full h-full border-0"
          style={{ display: "block" }}
        />
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
