import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="w-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Contact</h2>
        <p className="text-white/80 mb-6">Have an opportunity or want to say hi? Reach out.</p>
        <div className="flex flex-wrap items-center gap-3">
          <a href="mailto:chandrasai908@gmail.com" className="rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90">Email me</a>
          <a href="https://github.com/saichandra-1" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-4 py-2 text-sm font-medium text-white hover:bg-white/10">GitHub</a>
          <a href="https://www.linkedin.com/in/sai-chandra-7b2528250" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-4 py-2 text-sm font-medium text-white hover:bg-white/10">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}


