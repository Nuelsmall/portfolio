import React, { useState } from "react";
import { projects } from "@/consants";
import Image from "next/image";
import Project from "../ui/project";
import Link from "next/link";

function Arrow() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m12 16 4-4-4-4" />
      <path d="M8 12h8" />
    </svg>
  );
}

const Projects = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      id="projects"
      className="w-full scroll-mt-24 p-10 flex items-center justify-center py-20 gap-5 max-lg:py-10"
    >
      <div className="flex flex-col max-w-350 gap-5 w-full">
        <p className="border w-fit px-3 py-1 rounded-full text-sm text-orange-800">
          Projects
        </p>
        <div className="flex gap-5 max-lg:flex-col items-center max-lg:items-start justify-between">
          <h2 className="text-3xl w-full max-w-140 lg:max-w-150 leading-1- font-semibold">
            Designing meaningful user experiences with grit, growth, and thoughtful simplicity.

          </h2>
         <Link href={"/projects"}>
          <button
            className={` p-2 cursor-pointer items-center rounded-xl justify-center h-12 w-35 bg-gray-200 text-black flex`}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
          >
            <p className={`relative h-6  overflow-hidden w-23 `}>
              <span
                className={`flex text-sm font-medium *:h-6 *:flex *:items-center  *:justify-center absolute  w-full flex-col ${!hovered && "-translate-y-1/2"} top-0 duration-500 transition-transform`}
              >
                <span>All Projects</span>
                <span>All Projects</span>
              </span>
            </p>
            <p className={` relative h-6 w-5 overflow-hidden`}>
              <span
                className={`flex  text-sm *:h-6 *:flex *:items-center *:justify-center absolute w-full flex-col ${hovered && "-translate-y-1/2"} top-0 duration-500 transition-transform`}
              >
                <Arrow />
                <Arrow />
              </span>
            </p>
          </button></Link>
        </div>
        <div className="flex flex-col items-center justify-center  mt-6 gap-8">
          {projects.slice(0, 3).map((p, i) => {
            console.log(p.image)
            return (<Project p={p} key={i}/>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
