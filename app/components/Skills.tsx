import React from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "C", "SQL", "Bash"]
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "React", "Next.js", "Tailwind", "Shadcn"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "Nginx"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Prisma", "Mongoose"]
  },
  {
    title: "DevOps",
    skills: ["Docker", "Kubernetes", "Helm", "Jenkins", "ArgoCD", "GitOps", "CI/CD", "Ingress"]
  },
  {
    title: "Monitoring",
    skills: ["Prometheus", "Grafana"]
  },
  {
    title: "Cloud",
    skills: ["AWS", "DigitalOcean", "Vercel"]
  },
  {
    title: "Testing",
    skills: ["Selenium", "JUnit"]
  },
  {
    title: "Version Control",
    skills: ["Git", "GitHub"]
  },
  {
    title: "Other",
    skills: ["DSA", "OOP", "OS", "Networking", "System Design", "Streamlit", "PowerBI"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="w-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Skills</h2>
        <div className="space-y-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl font-semibold mb-4 text-white/80">{category.title}</h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {category.skills.map((s) => (
                  <li key={s}>
                    <span className="inline-flex items-center justify-center w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/90">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


