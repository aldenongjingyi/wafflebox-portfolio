const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const team = [
  {
    name: "Alden",
    role: "Co-Founder · Photographer",
    bio: "Behind the lens and behind the brand. Alden leads creative direction and shoots everything from moody product work to fast-paced event coverage — always with an eye for what makes a brand feel real.",
    photo: "/images/team/alden.jpg",
  },
  {
    name: "ShuJin",
    role: "Co-Founder · Photographer",
    bio: "ShuJin brings a quiet precision to every project — the kind of shooter who sees the frame before anyone else does. Whether it's portraits or commercial work, the results speak for themselves.",
    photo: "/images/team/shujin.jpg",
  },
];

export default function Creatives() {
  return (
    <section id="creatives" className="py-32 px-6 border-t border-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <p className="text-black/40 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            The Team
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            The creatives
            <br />
            <span className="text-black/30">behind the camera.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-black/10">
          {team.map((member) => (
            <div key={member.name} className="bg-white group">
              {/* Photo */}
              <div className="aspect-[4/5] overflow-hidden bg-black/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${BASE}${member.photo}`}
                  alt={member.name}
                  className="w-full h-full object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>

              {/* Info */}
              <div className="p-8 border-t border-black/10">
                <p className="text-black/30 text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                  {member.role}
                </p>
                <h3 className="text-3xl font-black tracking-tight mb-4">{member.name}</h3>
                <p className="text-black/50 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
