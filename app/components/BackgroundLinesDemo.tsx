import React from "react";
import { BackgroundLines } from "../components/ui/background-lines";

// export function BackgroundLinesDemo() {
//   return (
//     <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
//       <div className="absolute justify-center flex items-center w-100 h-100 bg-amber-400 rounded-full ">
      
//       <div className="">
//         Project 1
//       </div>

        // <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 absolute z-20 font-bold tracking-tight">
        //   Projects
        // </h2>


//       </div>
      
//     </BackgroundLines>
//   );
// }




export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <ProjectsComponent />
      </BackgroundLines>
  );
}


const ProjectsComponent = () => {
  const projects = [
    { id: 1, name: "Project 1", url: "https://rew-websocket-chat-app.vercel.app/" },
    { id: 2, name: "Project 2", url: "https://doctor-consultation-eight.vercel.app" },
    { id: 3, name: "Project 3", url: "https://msir.vercel.app" },
    {id:4, name: "Project 4", url: "https://saichandra-1.github.io/zerodha-landingpage/"}
  ];

  return (
    <div className="absolute w-96 h-96 mx-auto">
      
      {/* Amber circle */}
      <div className="absolute inset-0  rounded-full z-10"></div>

      {/* Title */}
      <h2 className="absolute inset-0 flex items-center justify-center  font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-900 to-neutral-700 z-20  dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans">
        Projects
      </h2>

      {/* Dots on circle border */}
      {projects.map((project, index) => {
        const angle = (360 / projects.length) * index - 90;
        const radians = (angle * Math.PI) / 180;
        const dotX = 192 + 192 * Math.cos(radians);
        const dotY = 192 + 192 * Math.sin(radians);
        return (
          <div
            key={project.id}
            className="absolute w-2 h-2 bg-amber-800 rounded-full z-30"
            style={{
              left: `${dotX}px`,
              top: `${dotY}px`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        );
      })}

      {/* Project names */}
      {projects.map((project, index) => {
        const angle = (360 / projects.length) * index - 90;
        const radians = (angle * Math.PI) / 180;
        const textX = 192 + 240 * Math.cos(radians);
        const textY = 192 + 240 * Math.sin(radians);
        return (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute  text-amber-600 z-30"
            style={{
              left: `${textX}px`,
              top: `${textY}px`,
              transform: 'translate(-50%, -50%)',
            }}
          >
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          {project.name}
        </span>
      </button>
          </a>
        );
      })}
    </div>
  );
};

