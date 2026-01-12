"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

/**
 * SpiritualFloatingButton Component
 * Refined Vertical Sticky Tab on the right edge of the screen.
 * Discrete and user-friendly size.
 */
export default function SpiritualFloatingButton() {
  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 pointer-events-none"
    >
      <Link
        href="https://www.swaminarayan.yoga/"
        target="_blank"
        rel="noopener noreferrer"
        className="block pointer-events-auto group"
      >
        <div className="bg-primary text-white px-2 py-4 sm:px-2.5 sm:py-6 rounded-l-xl transition-all duration-300 transform flex items-center justify-center">
          <span
            className="font-bold text-xs sm:text-sm capitalize whitespace-nowrap"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(0deg)",
            }}
          >
            Connect with us spiritually
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
