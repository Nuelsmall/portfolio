import { about } from "@/consants";
import React from "react";

const Intro = () => {
  return (
    <div
      id="about"
      className="w-full scroll-mt-24 flex items-center p-10 justify-center bg-gray-200 py-20 max-lg:py-10"
    >
      <div className="xl:grid-cols-3 xl:grid-rows-2 lg:grid-rows-[2fr_1fr_1fr] lg:grid-cols-2 max-lg:grid-cols-1 max-lg:grid-rows-[3fr_1fr_1fr_1fr] *:rounded-xl grid gap-5 w-full max-w-350 ">
        <div className="xl:col-[1/2] xl:row-[1/3] bg-black lg:col-[1/3] lg:row-[1/2] flex  flex-col gap-2 text-white/70 text-sm leading-6 p-6 ">
          <h2 className="text-xl text-white font-semibold ">
            {about.introHeading}
          </h2>
          <div className="flex-1 flex flex-col gap-3">
            {about.introSections.map((sec, i) => {
              return (
                <p key={i} className="">
                  {sec}
                </p>
              );
            })}
          </div>
          <button className="bg-white  p-2 cursor-pointer items-center rounded-xl justify-center h-12 mt-5 w-full text-black flex">
            <div className=" w-full group h-full overflow-hidden">
              <div
                className={`h-full group-hover:-translate-y-full text-md font-semibold *:flex *:items-center *:justify-center duration-300 flex flex-col *:h-full *:shrink-0`}
              >
                <span>View Details</span>
                <span>View Details</span>
              </div>
            </div>
          </button>
        </div>
        <div className=" bg-white xl:col-[2/3] xl:row-[1/2] lg:col-[1/2] lg:row-[2/3] p-6">
          <div className="flex justify-between items-end py-1 border-b-2 border-gray-400/30">
            <p className="text-5xl font-semibold">{about.years.number}+</p>
            <span className="p-1 text-xl text-gray-500">years</span>
          </div>
          <p className="py-2 text-sm">{about.years.content}</p>
        </div>
        <div className="bg-white xl:col-[3/4] xl:row-[1/2] lg:col-[2/3] lg:row-[2/3] p-6">
          <div className="flex justify-between items-end py-1 border-b-2 border-gray-400/30">
            <p className="text-5xl font-semibold">{about.projects.number}+</p>
            <span className="p-1 text-xl text-gray-500">projects</span>
          </div>
          <p className="py-2 text-sm">{about.projects.content}</p>
        </div>
        <div className="bg-white xl:col-[2/4] xl:row-[2/3] lg:col-[1/3] lg:row-[3/4] p-6">
          <div className="flex justify-between items-end py-1 border-b-2 border-gray-400/30">
            <p className="text-5xl font-semibold">{about.brands.number}+</p>
            <span className="p-1 text-xl text-gray-500">brands</span>
          </div>
          <p className="py-2 text-sm">{about.brands.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
