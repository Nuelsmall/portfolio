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

  // Project snapshot data (hardcoded for now, could be loaded dynamically)
  let snapshotItems: { label: string; value: string }[] = [];
  if (p.name === "Edventur") {
    snapshotItems = [
      { label: "Role", value: "Product Designer" },
      { label: "Scope", value: "Study Mode experience" },
      { label: "Platform", value: "Mobile app" },
      { label: "Focus", value: "Upload to quiz completion journey" },
      { label: "Outcome", value: "High-fidelity concept tested with users" },
    ];
  } else if (p.name === "RentWise") {
    snapshotItems = [
      { label: "Role", value: "Product Designer" },
      { label: "Scope", value: "Rental platform design" },
      { label: "Platform", value: "Mobile app" },
      { label: "Focus", value: "User Journey, Affinity Mapping, User flow, Information Architecture" },
      { label: "Outcome", value: "Improved usability and increased engagement" },
    ];
  } else if (p.name === "Verbum Dei Academy Admin Portal") {
    snapshotItems = [
      { label: "Role", value: "UI/UX Designer" },
      { label: "Scope", value: "School admin portal" },
      { label: "Platform", value: "Web app" },
      { label: "Focus", value: "Information architecture and visual refresh" },
      { label: "Outcome", value: "Modern, accessible, and informative site" },
    ];
  }

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
        {/* <p className="flex flex-1 mt-5 capitalize justify-between text-neutral-600 tetx-lg">
          Project Type <span>{p.type}</span>
        </p> */}
        {/* Project Snapshot for Edventur as a simple list */}
        {snapshotItems.length > 0 && (
          <ul className="mt-5 list-none list-inside text-md text-gray-700">
            {snapshotItems.map((item) => (
              <li key={item.label}>
                <span className="font-semibold">{item.label}:</span> {item.value}
              </li>
            ))}
          </ul>
        )}
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
