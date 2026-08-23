export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 border-t border-white/10">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-white text-xs font-semibold tracking-[0.25em] uppercase mb-6">
          Get In Touch
        </p>
        <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-6">
          Ready to
          <br />
          <span className="text-white">shoot?</span>
        </h2>
        <p className="text-white/50 text-lg max-w-md mx-auto mb-12">
          Tell us what you need. We&apos;ll make it happen — fast, sharp, and on brand.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/60124065559"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-white text-black font-black text-sm tracking-widest uppercase hover:bg-zinc-200 transition-colors duration-200"
          >
            WhatsApp Us
          </a>
          <a
            href="mailto:waffleboxproductions@gmail.com"
            className="px-10 py-5 border border-white/20 text-white font-bold text-sm tracking-widest uppercase hover:border-white/60 transition-colors duration-200"
          >
            Email Us
          </a>
          <a
            href="https://www.instagram.com/waffleboxproductions/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 border border-white/20 text-white font-bold text-sm tracking-widest uppercase hover:border-white/60 transition-colors duration-200"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
