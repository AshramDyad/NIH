"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/**
 * Event Banner Popup Component
 * Shows an event banner popup after page load with smooth animation.
 * Features:
 * - Appears 1 second after page load
 * - Smooth fade-in and scale-up animation
 * - Close button in top-right corner
 * - Click backdrop to close
 * - Press Escape key to close
 * - Body scroll lock when open
 * - Fully responsive design
 */
export default function EventBannerPopup() {
  const [isOpen, setIsOpen] = useState(false);

  // Show popup after 1 second delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Close only if clicking the backdrop, not the modal content
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="event-banner-title"
        >
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative"
          >
            {/* Event Image Container with max-height */}
            <div className="relative">
              {/* Close Button - positioned at top-right corner of image */}
              <button
                onClick={handleClose}
                className="absolute -top-3 -right-3 z-10 rounded-full flex items-center justify-center p-1.5 bg-primary transition-all duration-200 cursor-pointer"
                aria-label="Close event banner"
              >
                <X className="size-4 text-white" />
              </button>

              <Image
                src="/images/event.jpeg"
                alt="International Conference on YOGA & Holistic Health 2026 - 7th & 8th February 2026 at Shri Swaminarayan Ashram, Rishikesh"
                width={800}
                height={1200}
                className="w-full h-auto max-h-[85vh] object-contain"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
