"use client"
import Link from "next/link";
import React, { useState } from "react";


const FileText = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-md"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
    </svg>
  );
};


const Resume = ({ hero }: { hero?: boolean }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={"https://drive.google.com/file/d/1rQI9q67QdWP5x5NuDGjhCUqZCnOtFN6N/view?usp=sharing"} target="_blank">
      <button
        className={`${hero ? `bg-black` : "bg-white"} p-2 cursor-pointer items-center rounded-xl justify-center h-12 w-40 text-white flex`}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        <p
  className={`${hero ? "text-white" : "text-black"} relative h-6 w-5 overflow-hidden`}
>
  <span
    className={`flex text-sm *:h-6 *:flex *:items-center *:justify-center absolute w-full flex-col ${
      hovered && "-translate-y-1/2"
    } top-0 duration-500 transition-transform`}
  >
    <FileText />
    <FileText />
  </span>
</p>
        <p
          className={`${hero ? `text-white` : "text-black"} relative h-6  overflow-hidden w-23`}
        >
          <span
            className={`flex text-md *:block font-medium *:h-6  *:items-center  *:justify-center absolute  w-full flex-col ${!hovered && "-translate-y-1/2"} top-0 duration-500 transition-transform`}
          >
            <span>View my CV</span>
            <span>View my CV</span>
          </span>
        </p>
      </button>
    </Link>
  );
};

export default Resume;
