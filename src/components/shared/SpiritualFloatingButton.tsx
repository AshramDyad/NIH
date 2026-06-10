"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const blinkMembership = {
  backgroundColor: ["#155b2e", "#1a8a3e", "#155b2e"],
};

const blinkConference = {
  backgroundColor: ["#f3972a", "#ffb347", "#f3972a"],
};

const blinkTransition = {
  duration: 0.7,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

export default function SpiritualFloatingButton() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      {/* Left side — Connect with us spiritually */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none"
      >
        <Link
          href="https://www.swaminarayan.yoga/"
          target="_blank"
          rel="noopener noreferrer"
          className="block pointer-events-auto group"
        >
          <div className="bg-primary text-white px-2 py-4 sm:px-2.5 sm:py-6 rounded-r-xl transition-all duration-300 flex items-center justify-center">
            <span
              className="font-bold text-xs sm:text-sm capitalize whitespace-nowrap"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              Connect with us spiritually
            </span>
          </div>
        </Link>
      </motion.div>

      {/* Right side — Membership & International Conference */}
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none flex flex-col gap-2"
      >
        <Link href="/vietnam-conference" className="block pointer-events-auto">
          <motion.div
            animate={blinkConference}
            transition={blinkTransition}
            className="text-white px-2 py-4 sm:px-2.5 sm:py-6 rounded-l-xl cursor-pointer flex items-center justify-center"
          >
            <span
              className="font-bold text-xs sm:text-sm capitalize whitespace-nowrap"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              International Conference
            </span>
          </motion.div>
        </Link>

        <Link
          href="https://forms.gle/gyXBhDGFnFX9vkmS7"
          target="_blank"
          rel="noopener noreferrer"
          className="block pointer-events-auto"
        >
          <motion.div
            animate={blinkMembership}
            transition={{ ...blinkTransition, delay: 0.65 }}
            className="text-white px-2 py-4 sm:px-2.5 sm:py-6 rounded-l-xl cursor-pointer flex items-center justify-center"
          >
            <span
              className="font-bold text-xs sm:text-sm capitalize whitespace-nowrap"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
              }}
            >
              Membership
            </span>
          </motion.div>
        </Link>
      </motion.div>
    </>
  );
}
