import React from "react";

export default function Hero() {
  return (
    <section id="home" className="relative w-screen min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full pt-16">
        <div className="flex flex-col gap-6">
          <span className="text-sm text-white/60">Hello, Welcome & Meet me</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">Sai
            <span className="block">Chandra</span>
          </h1>
          <p className="text-white/70 max-w-2xl">Web developer with a passion for building dynamic, user-friendly projects. Experienced in designing and implementing responsive websites, and always eager to learn new technologies.</p>
          <div className="flex gap-3">
            <a href="#projects" className="inline-flex items-center rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90">View Projects</a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-sm font-medium text-white hover:bg-white/10">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
}


