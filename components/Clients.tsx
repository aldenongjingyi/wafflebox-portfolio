// Add client logo image files to /public/images/clients/
// Filenames should match the `logo` field below
const clients = [
  { name: "The Elixir", logo: "/images/clients/elixir.png" },
  { name: "Vegan Pesto", logo: "/images/clients/vegan-pesto.png" },
  { name: "Saludent", logo: "/images/clients/saludent.png" },
  { name: "Scoban", logo: "/images/clients/scoban.png" },
  { name: "Kyoot Kids Play Cafe", logo: "/images/clients/kyoot.png" },
  { name: "Sunway GDC", logo: "/images/clients/sunway-gdc.png" },
];

export default function Clients() {
  return (
    <section className="py-24 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-white/30 text-xs font-semibold tracking-[0.25em] uppercase mb-12">
          Brands We&apos;ve Worked With
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {clients.map((client) => (
            <div
              key={client.name}
              className="opacity-30 hover:opacity-70 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              {/* Replace with <Image> once you add logos */}
              <span className="text-white text-sm font-semibold tracking-widest uppercase">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
