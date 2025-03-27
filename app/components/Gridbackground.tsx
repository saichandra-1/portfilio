import { cn } from "../lib/utils";
import React from "react";
import { Name } from "./Name";

export function Gridbackground() {
  return (
    <div className="relative flex h-[60rem] w-full items-center justify-start  bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center  bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        <div className="ml-40 flex flex-col">
            <Name/>
            <div>
                <p className="text-neutral-500 text-sm max-w-2xl mt-2 dark:text-neutral-300">{
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
