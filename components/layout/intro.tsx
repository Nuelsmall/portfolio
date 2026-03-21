import { about } from "@/consants";
import Link from "next/link";
import React from "react";
import CountUpOnView from "@/components/ui/CountUpOnView";

const StatCard = ({
  number,
  label,
  content,
  wide = false,
}: {
  number: number;
  label: string;
  content: string;
  wide?: boolean;
}) => {
  return (
    <div className={`rounded-2xl bg-white p-5 sm:p-6 ${wide ? "xl:col-span-2" : ""}`}>
      <div className="flex items-end justify-between border-b border-gray-200 pb-3">
        <CountUpOnView
          end={number}
          suffix="+"
          className="text-4xl sm:text-5xl font-semibold text-black"
        />
        <span className="text-sm sm:text-base text-gray-500">{label}</span>
      </div>
      <p className="pt-3 text-sm leading-6 text-gray-600">{content}</p>
    </div>
  );
};

const Intro = () => {
  return (
    <section
      id="about"
      className="w-full scroll-mt-24 bg-gray-100 px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-16"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-4 sm:gap-5 lg:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-2xl bg-black p-5 sm:p-6 lg:col-span-2 xl:col-span-1 xl:row-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
            About me
          </p>

          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold leading-tight text-white">
            {about.introHeading}
          </h2>

          <div className="mt-4 space-y-3 text-sm sm:text-[15px] leading-7 text-white/75">
            {about.introSections.map((sec, i) => (
              <p key={i}>{sec}</p>
            ))}
          </div>

          <p className="mt-4 text-sm sm:text-[15px] font-medium text-white">
            Designing with empathy, clarity, and intention.
          </p>

          <Link
            href="/about"
            className="mt-6 flex h-11 w-full items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black transition hover:bg-white/90 sm:w-auto sm:min-w-[180px]"
          >
            View Details
          </Link>
        </div>

        <StatCard
          number={Number(about.years.number)}
          label="years"
          content={about.years.content}
        />

        <StatCard
          number={Number(about.projects.number)}
          label="projects"
          content={about.projects.content}
        />

        <StatCard
          number={Number(about.brands.number)}
          label="brands"
          content={about.brands.content}
          wide
        />
      </div>
    </section>
  );
};

export default Intro;