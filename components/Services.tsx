const services = [
  {
    number: "01",
    title: "Production",
    description:
      "Full-service shoots from concept to delivery. Products, portraits, events — we handle the full production so you can focus on your brand.",
    tags: ["Product Shoots", "Portraits", "Event Coverage"],
  },
  {
    number: "02",
    title: "Content",
    description:
      "Scroll-stopping content built for social. Reels, carousels, and campaigns that actually perform — not just look good.",
    tags: ["Reels & Video", "Social Campaigns", "Brand Content"],
  },
  {
    number: "03",
    title: "Design",
    description:
      "Visuals that carry the brand beyond the shoot. Event posters, launch graphics, and everything in between.",
    tags: ["Event Posters", "Launch Graphics", "Brand Design"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <p className="text-white text-xs font-semibold tracking-[0.25em] uppercase mb-4">
          What We Do
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">
          Full stack studio.
          <br />
          <span className="text-white/40">No middlemen.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-px bg-white/10">
        {services.map((s) => (
          <div
            key={s.number}
            className="bg-[#080808] p-10 flex flex-col gap-6 group hover:bg-[#111] transition-colors duration-300"
          >
            <span className="text-white text-xs font-mono tracking-widest">
              {s.number}
            </span>
            <h3 className="text-2xl font-black tracking-tight">{s.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed flex-1">
              {s.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {s.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-white/40 border border-white/10 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
