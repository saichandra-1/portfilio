"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";

export function SparklesPreview() {
  return (
    <div className="h-[60rem] relative w-full bg-black flex flex-col items-start justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="ml-40 flex flex-col gap-10 items-start justify-center h-full">
        <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold  text-white relative z-20">
        SKILLS
        </h1>
        <div className="text-neutral-500 text-sm w-[1200px] dark:text-neutral-300">
            <ul className="flex gap-10">
                <li className="text-white text-2xl font-bold">HTML</li>
                <li className="text-white text-2xl font-bold">CSS</li>
                <li className="text-white text-2xl font-bold">JavaScript</li>
                <li className="text-white text-2xl font-bold">TypeScript</li>
                <li className="text-white text-2xl font-bold">Node.js</li>
                <li className="text-white text-2xl font-bold">Next.js</li>
                <li className="text-white text-2xl font-bold">React.js</li>
                <li className="text-white text-2xl font-bold">Tailwind CSS</li>
            </ul>
            <ul className="flex gap-10 mt-10">
                <li className="text-white text-2xl font-bold">Postgre sql</li>
                <li className="text-white text-2xl font-bold">Prisma DB</li>
                <li className="text-white text-2xl font-bold">Mongo DB</li>
                <li className="text-white text-2xl font-bold">Express.js</li>
                <li className="text-white text-2xl font-bold">Docker</li>
                <li className="text-white text-2xl font-bold">Bun</li>
                </ul>
            <ul className="flex gap-10 mt-10">
                <li className="text-white text-2xl font-bold">VS Code</li>
                <li className="text-white text-2xl font-bold">GitHub</li>
                <li className="text-white text-2xl font-bold">C</li>
                <li className="text-white text-2xl font-bold">Python</li>
                <li className="text-white text-2xl font-bold">Java</li>
                <li className="text-white text-2xl font-bold">. . .</li>
            </ul>
        </div>
      </div>
    </div>
  );
}
