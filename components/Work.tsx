"use client";

import { useState } from "react";
import Image from "next/image";

type Category = "All" | "Product" | "Portrait" | "Commercial";

const projects = [
  {
    id: 1,
    title: "Hari-Hara",
    category: "Product" as Category,
    image: "/images/work/product-hari-hara.jpg",
    description: "Studio product photography",
  },
  {
    id: 2,
    title: "Vegan Pesto",
    category: "Product" as Category,
    image: "/images/work/product-vegan-pesto.jpg",
    description: "Lifestyle product photography",
  },
  {
    id: 3,
    title: "Scoban",
    category: "Product" as Category,
    image: "/images/work/product-scoban.jpg",
    description: "Clean product photography",
  },
  {
    id: 4,
    title: "Saludent",
    category: "Product" as Category,
    image: "/images/work/product-saludent.jpg",
    description: "Herbal product photography",
  },
  {
    id: 5,
    title: "Beverages",
    category: "Product" as Category,
    image: "/images/work/product-drinks.jpg",
    description: "Moody drinks photography",
  },
  {
    id: 6,
    title: "Food",
    category: "Product" as Category,
    image: "/images/work/product-food.jpg",
    description: "Food photography",
  },
  {
    id: 7,
    title: "Portrait Session",
    category: "Portrait" as Category,
    image: "/images/work/portrait-1.jpg",
    description: "Studio portrait",
  },
  {
    id: 8,
    title: "Portrait Session",
    category: "Portrait" as Category,
    image: "/images/work/portrait-2.jpg",
    description: "Studio portrait",
  },
  {
    id: 9,
    title: "Klinik Anda",
    category: "Commercial" as Category,
    image: "/images/work/event-klinik.jpg",
    description: "Commercial exterior photography",
  },
  {
    id: 10,
    title: "Sunway Graduation",
    category: "Portrait" as Category,
    image: "/images/work/event-graduation-1.jpg",
    description: "Graduation photography at Sunway University",
  },
  {
    id: 11,
    title: "Sunway Graduation",
    category: "Portrait" as Category,
    image: "/images/work/event-graduation-2.jpg",
    description: "Graduation photography at Sunway University",
  },
  {
    id: 12,
    title: "Sunway Graduation",
    category: "Portrait" as Category,
    image: "/images/work/event-graduation-3.jpg",
    description: "Graduation photography at Sunway University",
  },
];

const categories: Category[] = ["All", "Product", "Portrait", "Commercial"];

export default function Work() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="mb-12">
        <p className="text-[#e8c547] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
          Our Work
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
          The results
          <br />
          <span className="text-white/40">speak for themselves.</span>
        </h2>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-xs font-semibold tracking-widest uppercase transition-colors duration-200 ${
                active === cat
                  ? "bg-[#e8c547] text-black"
                  : "border border-white/20 text-white/50 hover:border-white/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="break-inside-avoid mb-4 group relative overflow-hidden bg-[#111]"
          >
            <div className="relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={1000}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[#e8c547] text-xs font-mono tracking-widest uppercase mb-2">
                  {project.category}
                </span>
                <h3 className="text-white font-bold text-lg leading-tight">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm mt-1">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
