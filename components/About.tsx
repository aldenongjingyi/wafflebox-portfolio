export default function About() {
  return (
    <section id="about" className="py-32 px-6 border-t border-black/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div>
          <p className="text-black/40 text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-8">
            A studio built
            <br />
            on the belief that
            <br />
            visuals close deals.
          </h2>
          <div className="space-y-4 text-black/50 text-base leading-relaxed max-w-lg">
            <p>
              WaffleBox Productions is a remote-first creative studio of photographers
              with 5+ years of experience — handling photography, content, and design
              for brands that want to stand out.
            </p>
            <p>
              We&apos;ve worked with food brands, health products, university clubs, and
              everything in between — bringing the same level of craft and energy to
              every project.
            </p>
            <p>No average here. Just results.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px bg-black/10">
          {[
            { value: "18+", label: "Projects Delivered" },
            { value: "5+", label: "Years of Experience" },
            { value: "3", label: "Services Under One Roof" },
            { value: "Fast", label: "Turnaround" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white p-8">
              <div className="text-3xl font-black mb-2">{stat.value}</div>
              <div className="text-black/40 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
