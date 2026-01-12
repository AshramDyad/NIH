"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/**
 * SpiritualFloatingButton Component
 * Premium Floating Action Button (FAB) with Custom Image Icon.
 * - Desktop: Expands on hover.
 * - Mobile: Expands on tap.
 * - Design: White background to contrast with the orange logo.
 */
export default function SpiritualFloatingButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleExpand = () => {
    setIsExpanded(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsExpanded(false);
    }, 5000);
  };

  const handleCollapse = () => {
    setIsExpanded(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!isExpanded) {
      e.preventDefault();
      handleExpand();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-20 flex items-center justify-end">
      <motion.div
        onMouseEnter={handleExpand}
        onMouseLeave={handleCollapse}
        onTouchStart={() => {
          if (!isExpanded) handleExpand();
        }}
        layout
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="overflow-hidden bg-white border border-gray-100 rounded-full shadow-lg group active:scale-95 transition-transform"
      >
        <a
          href="https://www.swaminarayan.yoga/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="flex items-center no-underline cursor-pointer"
          aria-label="Connect with Us Spiritually"
        >
          {/* Icon Section (Custom Image) */}
          <div className="flex items-center justify-center p-2 transition-transform duration-300 group-hover:scale-110">
            <div className="relative size-8 sm:size-10">
              <Image
                src="/icon.png"
                alt="Spiritual Icon"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Text Section (Animated Expansion) */}
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <span className="pr-5 sm:pr-6 font-bold text-[#4a3b33] text-[13px] sm:text-sm whitespace-nowrap tracking-tight">
                  Connect with Us Spiritually
                </span>
              </motion.span>
            )}
          </AnimatePresence>
        </a>
      </motion.div>
    </div>
  );
}
