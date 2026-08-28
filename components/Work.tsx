import Link from "next/link";
import { categories } from "@/lib/projects";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="mb-20">
        <p className="text-black/40 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
          Our Work
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">
          The results
          <br />
          <span className="text-black/30">speak for themselves.</span>
        </h2>
      </div>

      <div className="space-y-20">
        {categories.map((cat, i) => (
          <div key={cat.slug}>
            {/* Category header */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-black/30 font-mono">
                0{i + 1}
              </span>
              <h3 className="text-2xl font-black tracking-tight">{cat.label}</h3>
              <div className="flex-1 h-px bg-black/10" />
              <span className="text-xs text-black/20 font-mono">
                {cat.projects.length} {cat.projects.length === 1 ? "project" : "projects"}
              </span>
            </div>

            {/* Projects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10">
              {cat.projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="group bg-white block overflow-hidden"
                >
                  {/* Cover image */}
                  <div className="overflow-hidden aspect-[4/3]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`${BASE}${project.coverImage}`}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Project info */}
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-sm">{project.title}</p>
                      <p className="text-black/40 text-xs mt-0.5">
                        {project.images.length} {project.images.length === 1 ? "shot" : "shots"}
                      </p>
                    </div>
                    <span className="text-black/20 group-hover:text-black group-hover:translate-x-1 transition-all duration-200 text-lg">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
