import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Project = ({
  p,
}: {
  p: { name: string; description: string; type: string; image: string; href?: string };
}) => {
  const [hovered, setHovered] = useState(false);
  const isInteractive = Boolean(p.href);
  const actionLabel = isInteractive ? "View Details" : "Case Study Soon";

  const actionContent = (
    <div className=" w-full h-full overflow-hidden">
      <div
        className={`h-full text-lg font-semibold *:flex *:items-center *:justify-center duration-300 ${
          hovered && isInteractive && "-translate-y-full"
        }  flex flex-col *:h-full *:shrink-0`}
      >
        <span>{actionLabel}</span>
        <span>{actionLabel}</span>
      </div>
    </div>
  );
  return (
    <div className="w-full h-110 max-lg:h-fit relative rounded-xl overflow-hidden flex max-lg:flex-col-reverse">
      <div className="p-8 bg-gray-200 flex flex-col rounded-xl">
        <h2 className="text-2xl text-neutral-900 font-semibold">{p.name}</h2>
        <p className="text-md mt-2 text-neutral-600">{p.description}</p>
        <p className="flex flex-1 mt-5 capitalize justify-between text-neutral-600 tetx-lg">
          Project Type <span>{p.type}</span>
        </p>
        {isInteractive ? (
          <Link
            href={p.href as string}
            className="bg-black p-2 cursor-pointer items-center rounded-xl justify-center h-12 mt-5 w-full text-white flex"
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
          >
            {actionContent}
          </Link>
        ) : (
          <div className="bg-black/70 p-2 items-center rounded-xl justify-center h-12 mt-5 w-full text-white flex cursor-not-allowed">
            {actionContent}
          </div>
        )}
      </div>
      <Image
        src={p.image}
        className="border w-full rounded-xl"
        width={800}
        height={400}
        alt={p.name}
      />
    </div>
  );
};

export default Project;
