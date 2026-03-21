"use client";

import { reviews } from "@/consants";
import Image from "next/image";
import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const Reviews = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.14,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 28,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="reviews"
      className="w-full scroll-mt-24 bg-gray-100 px-4 py-10 sm:px-6 lg:px-10 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="mb-8 max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
            Reviews
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-black sm:text-3xl">
            What people say
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
            A few kind words from people I’ve worked with across product and
            design projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid w-full gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -6,
                      transition: { duration: 0.2 },
                    }
              }
              className="group rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: shouldReduceMotion ? 0 : i * 0.08,
                  }}
                  className="order-2"
                >
                  <Image
                    src={review.image ?? "/default.jpg"}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-gray-100"
                    alt={review.name}
                    width={100}
                    height={100}
                  />
                </motion.div>

                <div className="order-1 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-400">
                  ”
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-gray-700 sm:text-[15px]">
                {review.quote}
              </p>

              <div className="mt-6 border-t border-gray-100 pt-4">
                <p className="text-sm font-semibold text-black">{review.name}</p>
                <p className="text-sm text-gray-500">{review.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;