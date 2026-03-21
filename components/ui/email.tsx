// "use client"

// import Link from "next/link";
// import { useState } from "react";

// const Mail = () => {
//   return (
//     <svg
//       width="16"
//       height="16"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="text-md"
//     >
//       <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
//       <path d="M3 7l9 6 9-6" />
//     </svg>
//   );
// };

// const Email = ({ hero }: { hero?: boolean }) => {
//   const [hovered, setHovered] = useState(false);


//   return (
//     <Link href={"mailto:nueljohn90@gmail.com"} type="">
//     <button
//       className={`${hero ? "bg-gray-200" : "bg-gray-300/15 "} shadow hover:btn p-1 cursor-pointer items-center rounded-xl h-12 w-32 text-white flex`}
//       onMouseOver={() => setHovered(true)}
//       onMouseOut={() => setHovered(false)}
//     >
      
//       <p className={` relative h-6 flex-1 overflow-hidden`}>
//         <span
//           className={` ${hero && "text-black"} flex text-lmd *:h-6 *:flex *:items-center *:justify-center absolute w-full flex-col ${hovered && "-translate-y-1/2"} top-0 duration-500 transition-transform`}
//         >
//           <span>Email me</span>
//           <span>Email me</span>
//         </span>
//       </p>
//     </button></Link>
//   );
// };

// export default Email;

"use client";

import Link from "next/link";
import { useState } from "react";

const Mail = () => {
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
      <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
};

const Email = ({ hero }: { hero?: boolean }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href="mailto:nueljohn90@gmail.com">
      <button
        className={`${
          hero ? "bg-gray-200 text-black" : "bg-gray-300/15 text-white"
        } shadow hover:btn p-1 cursor-pointer items-center rounded-xl h-12 w-32 flex`}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        <p
          className={`${
            hero ? "text-black" : "text-white"
          } relative h-6 w-5 overflow-hidden ml-2`}
        >
          <span
            className={`flex text-sm *:h-6 *:flex *:items-center *:justify-center absolute w-full flex-col ${
              hovered && "-translate-y-1/2"
            } top-0 duration-500 transition-transform`}
          >
            <Mail />
            <Mail />
          </span>
        </p>

        <p className="relative h-6 flex-1 overflow-hidden">
          <span
            className={`flex text-md *:h-6 *:flex *:items-center *:justify-center absolute w-full flex-col ${
              hovered && "-translate-y-1/2"
            } top-0 duration-500 transition-transform`}
          >
            <span>Email me</span>
            <span>Email me</span>
          </span>
        </p>
      </button>
    </Link>
  );
};

export default Email;