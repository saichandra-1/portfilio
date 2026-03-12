import React from "react";

Based on everything across all your resumes and projects:


const skills = [
  // Languages
  "C", "Java", "Python", "JavaScript", "TypeScript", "SQL",

  // Frontend
  "HTML", "CSS", "React", "Next.js", "Tailwind", "ShadCN", "Turbo Repo", "Mono Repo",

  // Backend
  "Node.js", "Express.js", "Hono", "REST API", "Microservices",

  // Databases
  "MongoDB", "PostgreSQL", "Prisma", "Redis", "NoSQL",

  // DevOps & Cloud
  "Git", "GitHub", "Docker", "Kubernetes", "AWS", "CI/CD", "GitOps", "Helm", "Ingress", "Prometheus",

  // AI & ML
  "TensorFlow", "Keras", "Scikit-learn", "OpenCV", "Pandas", "NumPy", "Transfer Learning",

  // Core CS
  "DSA", "OOP", "Operating Systems", "Computer Networks", "System Design", "Linux",

  // Tools & Others
  "Tableau", "n8n", "Jupyter Notebook", "Google Colab", "Bash",
];


export default function Skills() {
  return (
    <section id="skills" className="w-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {skills.map((s) => (
            <li key={s} className="">
              <span className="inline-flex items-center justify-center w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/90">{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


