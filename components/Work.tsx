"use client";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const categories = [
  {
    name: "Product",
    projects: [
      {
        title: "Hari-Hara",
        images: ["/images/work/product-hari-hara.jpg"],
      },
      {
        title: "Vegan Pesto",
        images: ["/images/work/product-vegan-pesto.jpg"],
      },
      {
        title: "Scoban",
        images: ["/images/work/product-scoban.jpg"],
      },
      {
        title: "Saludent",
        images: ["/images/work/product-saludent.jpg"],
      },
      {
        title: "Beverages",
        images: ["/images/work/product-drinks.jpg"],
      },
      {
        title: "Food",
        images: ["/images/work/product-food.jpg"],
      },
    ],
  },
  {
    name: "Portrait",
    projects: [
      {
        title: "Portrait Session",
        images: [
          "/images/work/portrait-1.jpg",
          "/images/work/portrait-2.jpg",
        ],
      },
      {
        title: "Sunway Graduation",
        images: [
          "/images/work/event-graduation-1.jpg",
          "/images/work/event-graduation-2.jpg",
          "/images/work/event-graduation-3.jpg",
        ],
      },
    ],
  },
  {
    name: "Commercial",
    projects: [
      {
        title: "Klinik Anda",
        images: ["/images/work/event-klinik.jpg"],
      },
    ],
  },
];

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

      <div className="space-y-24">
        {categories.map((cat) => (
          <div key={cat.name}>
            {/* Category label */}
            <div className="flex items-center gap-4 mb-10">
              <span className="text-xs font-black tracking-[0.3em] uppercase text-black">
                {cat.name}
              </span>
              <div className="flex-1 h-px bg-black/10" />
              <span className="text-xs text-black/30 font-mono">
                {cat.projects.length} {cat.projects.length === 1 ? "project" : "projects"}
              </span>
            </div>

            {/* Projects grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.projects.map((project) => (
                <div key={project.title} className="group">
                  {/* Primary image */}
                  <div className="relative overflow-hidden bg-zinc-100 mb-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`${BASE}${project.images[0]}`}
                      alt={project.title}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Extra images shown as a strip if >1 */}
                    {project.images.length > 1 && (
                      <div className="absolute bottom-0 left-0 right-0 flex gap-1 p-2">
                        {project.images.slice(1).map((img, i) => (
                          <div
                            key={i}
                            className="flex-1 h-14 overflow-hidden"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={`${BASE}${img}`}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Project info */}
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-bold text-sm tracking-tight">{project.title}</h3>
                    {project.images.length > 1 && (
                      <span className="text-xs text-black/30 font-mono">
                        {project.images.length} shots
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
