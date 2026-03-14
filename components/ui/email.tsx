"use client"

import Link from "next/link";
import { useState } from "react";

const Email = ({ hero }: { hero?: boolean }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={"mailto:nueljohn90@gmail.com"} type="">
    <button
      className={`${hero ? "bg-gray-200" : "bg-gray-300/15 "} shadow hover:btn p-1 cursor-pointer items-center rounded-xl h-12 w-32 text-white flex`}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <p className={` relative h-6 flex-1 overflow-hidden`}>
        <span
          className={` ${hero && "text-black"} flex text-lmd *:h-6 *:flex *:items-center *:justify-center absolute w-full flex-col ${hovered && "-translate-y-1/2"} top-0 duration-500 transition-transform`}
        >
          <span>Email me</span>
          <span>Email me</span>
        </span>
      </p>
    </button></Link>
  );
};

export default Email;
