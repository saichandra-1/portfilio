import React from "react";

const projects = [
  { title: "Chat App", href: "https://rew-websocket-chat-app.vercel.app/", desc: "Realtime chat using WebSockets." },
  { title: "Doctor Consult", href: "https://doctor-consultation-eight.vercel.app", desc: "Appointment and consult flow." },
  { title: "MSIR", href: "https://msir.vercel.app", desc: "Landing and marketing site." },
  { title: "Zerodha Clone", href: "https://saichandra-1.github.io/zerodha-landingpage/", desc: "Landing page clone." },
  { title: "ELEGANCE shopping site",href :"https://elegance-langingpage.vercel.app/",desc:"desi shopping app"},
  { title: "AI chat bot ",href :"https://chat-bot-rho-self.vercel.app/",desc:"A AI chat bot with open ai model"},
  { title: "Web 3.O wallet",href :"https://web-based-wallet-theta.vercel.app/",desc:"Web based WEB 3.O wallet"},
  { title: "Book loop",href :"https://book-loop-dun.vercel.app/",desc:"Book exchange and Reading circle system mad for book lovers"},
  { title: "Step Wise",href :"https://step-wise-seven.vercel.app/",desc:"A shoes selling palrtfom for the peopel"}
];

export default function Projects() {
  return (
    <section id="projects" className="w-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.href} href={p.href} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <span className="opacity-70 group-hover:opacity-100">→</span>
              </div>
              <p className="text-white/70 mt-2 text-sm">{p.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


