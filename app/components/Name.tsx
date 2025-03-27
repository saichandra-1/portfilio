"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";

export function Name() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[50rem] h-auto rounded-xl p-6 border">
        
        {/* Title */}
        <CardItem
          translateZ={50}
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Hello , Welcome & Meet me
        </CardItem>

        {/* Description */}
        <CardItem
          as="div"
          translateZ={60}
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          The grate Full Stack WEB developer
        </CardItem>

        {/* Image */}
        <CardItem translateZ={100} className="w-full mt-4">
          <div className="text-white text-8xl font-bold ">
            Sai Chandra
          </div>
        </CardItem> 
      </CardBody>
    </CardContainer>
  );
}
