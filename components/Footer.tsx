export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-white/20 text-xs font-semibold tracking-widest uppercase">
          © {new Date().getFullYear()} WaffleBox Productions
        </span>
        <span className="text-white/20 text-xs">
          We shoot. We edit. We vibe.
        </span>
      </div>
    </footer>
  );
}
