import React from "react";

const projects = [
  { title: "AI Chat Bot", href: "https://chat-bot-psi-seven.vercel.app/", desc: "LLM based AI chat bot app" },
  { title: "Book Exchange System", href: "https://book-loop-navy.vercel.app/", desc: "A user friendly P2P book exchange app" },
  { title: "Whiteboard – Workspace Organizer", href: "https://white-board-one-zeta.vercel.app/", desc: "A workspace organizer easy to use for students and teachers" },
  { title: "INR/USD Exchange Rate Prediction", href: "https://github.com/saichandra-1", desc: "A non-parametric approach of predicting the USD/INR" },
  { title: "Fake Engagement Detection in Social Media", href: "https://fake-engagement-detection-in-social-media.streamlit.app/", desc: "ML way of finding fake engagement detection on social media bot/human class" },
  { title: "ELEGANCE", href: "https://elegance-langingpage.vercel.app/", desc: "A landing page for the shopping website" },
  { title: "StepWise", href: "https://step-wise-seven.vercel.app/", desc: "A landing page for the footwear brand" },
  { title: "Web-Based-Wallet", href: "https://web-based-wallet-theta.vercel.app/", desc: "Web 3.0 wallet" },
  { title: "StockBubble", href: "https://stock-bubble.vercel.app/", desc: "A website that shows the Nifty 50 prices in a bubble way" },
  { title: "Real-Time Brand Sentiment Analysis", href: "https://real-time-brand-sentiment-analysis-dashboard-vibtvmrqgxniadquh.streamlit.app/", desc: "Multi social media brand sentiment analysis using X and Reddit" },
  { title: "QR Generator", href: "https://saichandra-1.github.io/QR-Generator/", desc: "Multi design QR generator" },
  { title: "Live YT Comment Analysis", href: "https://github.com/saichandra-1/live-YT-comment-analysis", desc: "Live YouTube comment analysis" },
  { title: "Chat App", href: "https://rew-websocket-chat-app.vercel.app/", desc: "Realtime chat using WebSockets" },
  { title: "Doctor Consult", href: "https://doctor-consultation-eight.vercel.app", desc: "Appointment and consult flow" },
  { title: "MSIR", href: "https://msir.vercel.app", desc: "Landing and marketing site" },
  { title: "Zerodha Clone", href: "https://saichandra-1.github.io/zerodha-landingpage/", desc: "Landing page clone" },
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


