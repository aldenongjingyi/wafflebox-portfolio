const clients = [
  "The Elixir",
  "Vegan Pesto",
  "Saludent",
  "Scoban",
  "Kyoot Kids Play Cafe",
  "Sunway GDC",
];

export default function Clients() {
  return (
    <section className="py-24 px-6 border-t border-black/10">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-black/30 text-xs font-semibold tracking-[0.25em] uppercase mb-12">
          Brands We&apos;ve Worked With
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {clients.map((client) => (
            <span
              key={client}
              className="text-black/30 hover:text-black text-sm font-semibold tracking-widest uppercase transition-colors duration-300"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
