"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="WaffleBox Productions"
            width={120}
            height={40}
            className="h-9 w-auto invert"
          />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/50 hover:text-white text-xs font-semibold tracking-widest uppercase transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="text-xs font-bold tracking-widest uppercase bg-[#e8c547] text-black px-5 py-2.5 hover:bg-white transition-colors duration-200"
        >
          Hire Us
        </a>
      </div>
    </nav>
  );
}
