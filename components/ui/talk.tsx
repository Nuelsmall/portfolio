"use client"

import React, { useState } from "react";

const Phone = () => {
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
      <path d="M13 2a9 9 0 0 1 9 9" />
      <path d="M13 6a5 5 0 0 1 5 5" />
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>
  );
};

const Talk = ({ hero }: { hero?: boolean }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className={`${hero ? `bg-black` : "bg-white"} p-2 cursor-pointer items-center rounded-xl justify-center h-12 w-32 text-white flex`}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <p
        className={`${hero ? `text-white` : "text-black"} relative h-6 w-5 overflow-hidden`}
      >
        <span
          className={`flex  text-sm *:h-6 *:flex *:items-center *:justify-center absolute w-full flex-col ${hovered && "-translate-y-1/2"} top-0 duration-500 transition-transform`}
        >
          <Phone />
          <Phone />
        </span>
      </p>
      <p
        className={`${hero ? `text-white` : "text-black"} relative h-6  overflow-hidden w-20 `}
      >
        <span
          className={`flex text-md font-medium *:h-6 *:flex *:items-center  *:justify-center absolute  w-full flex-col ${!hovered && "-translate-y-1/2"} top-0 duration-500 transition-transform`}
        >
          <span>Let&apos;s talk</span>
          <span>Let&apos;s talk</span>
        </span>
      </p>
    </button>
  );
};

export default Talk;
