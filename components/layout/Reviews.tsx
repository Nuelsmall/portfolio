import { reviews } from "@/consants";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";



const Reviews = () => {
  const [lefts, setLefts] = useState(0);
  const [right, setRight] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    if (wrapperRef.current.offsetWidth < 927) return;
    console.log(wrapperRef.current.offsetWidth);
    function handleScroll() {
      const scroll = window.scrollY;
      console.log(scroll);
      const leftScroll = Math.min(1 + scroll * 0.1, 50);
      const rightScroll = Math.min(1 + scroll * 0.1, 50);

      setRight(rightScroll);
      setLefts(leftScroll);

      console.log(leftScroll, rightScroll);
    }

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="reviews"
      className="w-full scroll-mt-24 flex items-center p-10 justify-center bg-gray-200 py-20 max-lg:py-10"
    >
      <div
        ref={wrapperRef}
        className="max-w-350 w-full items-stretch gap-5 grid grid-cols-1 lg:grid-cols-3"
      >
        {reviews.map((review, i) => {
          return (
            <div
              key={i}
              className="p-5 bg-white rounded-xl flex flex-col gap-5 flex-1"
            >
              <Image
                src={review.image ?? "/default.jpg"}
                className="w-12 self-end rounded-full"
                alt={review.name}
                width={100}
                height={100}
              />
              <p>&quot;{review.quote} &quot;</p>
              <p className="flex flex-col text-md">{review.name} <span className="text-sm">{review.company}</span></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
