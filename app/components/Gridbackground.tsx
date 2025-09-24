import { cn } from "../lib/utils";
import React from "react";
import { Name } from "./Name";

export function Gridbackground() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-start bg-white dark:bg-black overflow-hidden">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-10 sm:py-12 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent w-full px-4 sm:px-8">
        <div className="flex flex-col ml-4 sm:ml-10 md:ml-20 lg:ml-40 max-w-[90vw] sm:max-w-2xl">
            <Name/>
            <div>
                <p className="text-neutral-500 text-xs sm:text-sm max-w-prose mt-3 sm:mt-4 dark:text-neutral-300 leading-relaxed">{
                  `"web developer with a passion for building dynamic, user-friendly
                projects. Experienced in designing and implementing responsive
                websites, and always eager to learn new technologies. Open to new
                challenges and keen to explore opportunities that foster growth and
                innovation"`
                  }
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}
