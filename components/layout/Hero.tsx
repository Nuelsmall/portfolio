import React from "react";
import Talk from "../ui/talk";
import Email from "../ui/email";
import Resume from "../ui/Resume";
import Profile from "../ui/profile";
import { useRef, useEffect } from "react";
import Image from "next/image";

const carouselItems: string[] = [
  "/Discora.png",
  "/Edventur.png",
  "/dinendash.png",
  "/Paypoint.png",
];

const Hero = () => {
  const groupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!groupRef.current) return;
    const width = groupRef.current.offsetWidth;
    document.documentElement.style.setProperty("--loop-distance", `${width}px`);
  }, []);

  return (
    <div
      id="home"
      className="flex scroll-mt-24 px-5 py-8 sm:p-10 flex-col gap-5 items-center"
    >
      <h1
        id="heroText"
        className="max-w-[12ch] sm:max-w-[14ch] md:max-w-[16ch] text-center font-semibold tracking-tight text-[clamp(2.6rem,11vw,4.5rem)] leading-[0.95]"
      >
        <span className="text-gray-500">Good design </span>
        solves problems. <span className="text-gray-500"><br></br> Great design </span>
        changes behavior.
      </h1>

      <p className="max-w-xs sm:max-w-xl text-center text-base sm:text-lg md:text-xl leading-7 text-gray-500">
        Merging business sense and design clarity to craft solutions that drive
        growth and delight users.
      </p>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
        <Talk hero={true} />
        <Resume hero={true} />
        <Email hero={true} />
      </div>

      <div className="w-full flex items-center justify-center mt-6 sm:mt-10 relative max-w-339 overflow-hidden h-[28rem] sm:h-140">
        <div className="absolute top-0 left-0 h-full w-20 bg-linear-to-r from-gray-100 to-transparent z-2"></div>
        <div className="absolute top-0 right-0 h-full w-20 bg-linear-to-l from-gray-100 to-transparent z-2"></div>

        <div className="flex w-max absolute max-lg:hidden top-1/2 -translate-y-1/2 hero-carousel-track">
          <div className="flex shrink-0 gap-4 pr-4" ref={groupRef}>
            {carouselItems.map((item, i) => {
              return (
                <div
                  key={`group-a-${i}`}
                  className="overflow-hidden shrink-0 w-80 h-50 rounded-lg bg-white/60 flex items-center justify-center text-sm text-gray-600"
                >
                  <Image
                    src={item}
                    alt=""
                    className="w-full h-full"
                    width={200}
                    height={200}
                  />
                </div>
              );
            })}
          </div>

          <div className="flex shrink-0 gap-4 pr-4">
            {carouselItems.map((item, i) => {
              return (
                <div
                  key={`group-b-${i}`}
                  className="overflow-hidden shrink-0 w-80 h-50 rounded-lg bg-white/60 flex items-center justify-center text-sm text-gray-600"
                >
                  <Image
                    src={item}
                    alt=""
                    className="w-full h-full"
                    width={200}
                    height={200}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <Profile />
      </div>
    </div>
  );
};

export default Hero;