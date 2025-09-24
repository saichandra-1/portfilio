"use client"
import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold tracking-wide">Sai Chandra</a>

        <button aria-label="Menu" onClick={() => setOpen(!open)} className="md:hidden text-white/80 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M3.75 5.25h16.5v1.5H3.75zM3.75 11.25h16.5v1.5H3.75zM3.75 17.25h16.5v1.5H3.75z" />
          </svg>
        </button>

        <ul className="hidden md:flex items-center gap-6 text-sm text-white/80">
          {links.map((l) => (
            <li key={l.href}><a href={l.href} className="hover:text-white transition-colors">{l.label}</a></li>
          ))}
        </ul>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <ul className="mx-auto max-w-6xl px-4 py-3 grid gap-3 text-white/90">
            {links.map((l) => (
              <li key={l.href}>
                <a onClick={() => setOpen(false)} href={l.href} className="block py-2">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}


