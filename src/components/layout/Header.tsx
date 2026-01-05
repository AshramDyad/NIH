"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { User, FileText, Calendar, Menu, X, ChevronRight, ChevronLeft, UserPlus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useHeaderConfig } from "./HeaderProvider";
import type { MobileMenuItem } from "@/types/header";

// Animation variants for premium mobile menu
const overlayVariants = {
  closed: { opacity: 0, backdropFilter: "blur(0px)" },
  open: { opacity: 1, backdropFilter: "blur(8px)" }
};

const menuVariants = {
  closed: { x: "100%", opacity: 0 },
  open: { x: "0%", opacity: 1 }
};

const containerVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 }
    }
  }
};

const subMenuVariants = {
  closed: { x: "100%" },
  open: { x: "0%" }
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [activeNestedSubMenu, setActiveNestedSubMenu] = useState<string | null>(null);
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);

  // Get dynamic header configuration
  const headerConfig = useHeaderConfig();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const navLinks = headerConfig?.navLinks || [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Activities", href: "/activities" },
    { name: "Careers", href: "/careers" },
  ];
  const ctaButtons = headerConfig?.ctaButtons || [
    {
      name: "Membership",
      href: "/membership",
      icon: <User size={18} />,
      hasDropdown: true,
      dropdownItems: [
        { name: "Membership form", href: "https://forms.gle/gyXBhDGFnFX9vkmS7", isExternal: true },
        { name: "Active Members", href: "/members/active" },
        { name: "Member's Institutions", href: "/members/institutions" },
        { name: "Lifetime Members", href: "/members/lifetime" },
        { name: "Associate Centres", href: "/members/associate" },
      ]
    },
    {
      name: "Course Brochure",
      href: "/pdfs/brochure-in-sequence-2025.pdf",
      icon: <FileText size={18} />,
      isExternal: true
    },
    {
      name: "Events",
      href: "/events",
      icon: <Calendar size={18} />
    },
    {
      name: "Join us",
      href: "https://forms.gle/DEajoyPQMDhhh1tC9",
      icon: <UserPlus size={18} />,
      isExternal: true
    },
  ];

  // Mobile menu items structure matching the video design
  const mobileMenuItems: readonly MobileMenuItem[] = headerConfig?.mobileMenuItems || [
    { id: "home", name: "HOME", href: "/" },
    {
      id: "about-us",
      name: "ABOUT US",
      hasChildren: true,
      children: [
        { name: "About NIH", href: "/about" },
        { name: "Chairman's Message", href: "/about/chairman" },
        { name: "Secretary Column", href: "/about/secretary" },
        { name: "Central Council Board", href: "/about/central-council-board" },
        { name: "Aims and Objectives", href: "/about/aims" },
        { name: "Course Brochure", href: "/pdfs/brochure-in-sequence-2025.pdf" },
        { name: "Holistic 'n' Wellness: Monthly E-Magazine", href: "/about/magazine" },
      ]
    },
    {
      id: "members",
      name: "MEMBERS",
      hasChildren: true,
      children: [
        { name: "NIH Active Members", href: "/members/active" },
        { name: "Lifetime Members", href: "/members/lifetime" },
        { name: "Members Institutions", href: "/members/institutions" },
        { name: "Yoga Volunteer Members", href: "/members/yoga-volunteer" },
        { name: "Yoga Professional Members", href: "/members/yoga-professional" },
        { name: "Associate Centres", href: "/members/associate" }
      ]
    },
    {
      id: "activities",
      name: "ACTIVITIES",
      hasChildren: true,
      children: [
        { name: "Projects", href: "/activities/projects" },
        { name: "Franchise", href: "/activities/franchise" },
        { name: "Training Progamme", href: "/activities/training" },
        { name: "Internship", href: "/activities/internship" },
        { name: "Volunteership", href: "/activities/volunteership" },
        { name: "NIH Events", href: "/events" },
        { name: "Retreat Programmes", href: "/activities/retreat" }
      ]
    },
    {
      id: "membership",
      name: "MEMBERSHIP",
      hasChildren: true,
      children: [
        { name: "Become NIH Member", href: "https://forms.gle/gyXBhDGFnFX9vkmS7" }
      ]
    },
    {
      id: "media",
      name: "MEDIA",
      hasChildren: true,
      children: [
        { name: "Photo Gallery", href: "/media/photo-gallery" },
        { name: "Achievements", href: "/media/achievements" },
        { name: "Video Gallery", href: "/media/video-gallery" },
        { name: "Media Coverage", href: "/media/coverage" }
      ]
    },
    { id: "join-us", name: "JOIN US", href: "https://forms.gle/DEajoyPQMDhhh1tC9" },
    { id: "careers", name: "CAREERS", href: "/careers" },
    { id: "contact-us", name: "CONTACT US", href: "/contact" }
  ] as const;

  return (
    <>
      <header
        style={{
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.9)" : "white",
          backdropFilter: isScrolled ? "blur(8px)" : "none",
          boxShadow: isScrolled ? "0 4px 6px -1px rgb(0 0 0 / 0.1)" : "none",
        }}
        className="sticky top-0 z-50 w-full transition-all duration-300"
      >
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="NIH Logo"
                  width={180}
                  height={60}
                  className="h-14 w-auto"
                  priority
                />
              </Link>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-medium text-black"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            {/* Right side buttons */}
            <div className="hidden xl:flex items-center space-x-4">
              {ctaButtons.map((btn) => (
                <div
                  key={btn.name}
                  className="relative"
                  onMouseEnter={() => btn.hasDropdown && setHoveredBtn(btn.name)}
                  onMouseLeave={() => btn.hasDropdown && setHoveredBtn(null)}
                >
                  {btn.hasDropdown ? (
                    <>
                      <button
                        className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all hover:shadow-md bg-primary text-white hover:bg-opacity-90 cursor-pointer`}
                      >
                        {btn.icon}
                        {btn.name}
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {hoveredBtn === btn.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-60"
                          >
                            <div className="bg-white rounded-2xl p-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] min-w-60 border border-secondary/10">
                              <div className="flex flex-col gap-1">
                                {btn.dropdownItems?.map((item) => (
                                  <div key={item.name}>
                                    <Link
                                      href={item.href}
                                      target={item.isExternal ? "_blank" : undefined}
                                      rel={item.isExternal ? "noopener noreferrer" : undefined}
                                      className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-secondary hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-all duration-200"
                                    >
                                      {item.name}
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={btn.href}
                      target={btn.isExternal ? "_blank" : undefined}
                      rel={btn.isExternal ? "noopener noreferrer" : undefined}
                      className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all hover:shadow-md ${btn.name === "Membership"
                        ? "bg-primary text-white hover:bg-opacity-90"
                        : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                        }`}
                    >
                      {btn.icon}
                      {btn.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            {/* Mobile menu button */}
            <div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center cursor-pointer rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-secondary focus:outline-none"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X size={24} />
                ) : (
                  <Menu size={24} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Moved outside <header> to avoid containing block issues with backdrop-filter */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Glassmorphic Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => { setIsMenuOpen(false); setActiveSubMenu(null); setActiveNestedSubMenu(null); }}
              className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Slide-in Menu Panel */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:max-w-87.5 bg-secondary/95 backdrop-blur-xl z-60 shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Animated Background Element */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

              {/* Header section - White background for logo contrast */}
              <div className="relative flex items-center justify-between p-4 border-b border-gray-100 bg-white shadow-sm">
                <Image
                  src="/logo.png"
                  alt="NIH Logo"
                  width={140}
                  height={45}
                  className="h-10 w-auto"
                />
                <button
                  onClick={() => { setIsMenuOpen(false); setActiveSubMenu(null); setActiveNestedSubMenu(null); }}
                  className="text-secondary hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100 group"
                  aria-label="Close menu"
                >
                  <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>

              {/* Menu Items Container */}
              <div className="relative flex-1 overflow-y-auto overflow-x-hidden no-scrollbar">
                <motion.div
                  variants={containerVariants}
                  initial="closed"
                  animate="open"
                  className="py-6"
                >
                  {mobileMenuItems.map((item) => (
                    <motion.div
                      key={item.id}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6"
                    >
                      {item.href ? (
                        <Link
                          href={item.href}
                          target={(item.href.startsWith("http") || item.href.endsWith(".pdf")) ? "_blank" : undefined}
                          rel={(item.href.startsWith("http") || item.href.endsWith(".pdf")) ? "noopener noreferrer" : undefined}
                          onClick={() => { setIsMenuOpen(false); setActiveSubMenu(null); setActiveNestedSubMenu(null); }}
                          className="flex items-center group py-4 border-b border-white/5"
                        >
                          <span className="text-white/90 group-hover:text-primary font-bold text-base tracking-wider transition-colors uppercase">
                            {item.name}
                          </span>
                        </Link>
                      ) : (
                        <button
                          onClick={() => setActiveSubMenu(item.id)}
                          className="w-full flex items-center justify-between group py-4 border-b border-white/5"
                        >
                          <span className="text-white/90 group-hover:text-primary font-bold text-base tracking-wider transition-colors uppercase">
                            {item.name}
                          </span>
                          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <ChevronRight size={18} className="text-white/40 group-hover:text-primary" />
                          </div>
                        </button>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Bottom Quick Links / Footer in Menu */}
              <div className="relative mt-auto p-4 bg-black/20 border-t border-white/10">
                <div className="flex flex-col gap-4">
                  <Link
                    href="https://forms.gle/DEajoyPQMDhhh1tC9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-white text-center py-3 rounded-xl font-bold text-sm tracking-widest hover:bg-primary/90 transition-all shadow-lg active:scale-95 uppercase"
                  >
                    Join Us Today
                  </Link>
                </div>
              </div>

              {/* Sub-Menu Panel - Sliding from right */}
              <AnimatePresence>
                {activeSubMenu && (
                  <motion.div
                    variants={subMenuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    transition={{ type: "spring", damping: 30, stiffness: 300 }}
                    className="absolute inset-0 bg-secondary z-20 flex flex-col"
                  >
                    {/* Sub-menu Header */}
                    <div className="flex items-center gap-4 px-4 py-6 border-b border-white/10 bg-white/5 backdrop-blur-md">
                      <button
                        onClick={() => setActiveSubMenu(null)}
                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-colors"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <div className="flex flex-col">
                        <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest leading-none mb-1">Explore</span>
                        <span className="text-white font-bold text-lg tracking-tight leading-none">
                          {mobileMenuItems.find(i => i.id === activeSubMenu)?.name}
                        </span>
                      </div>
                    </div>

                    {/* Sub-menu Items with staggering */}
                    <div className="flex-1 overflow-y-auto py-6 no-scrollbar">
                      <motion.div
                        variants={containerVariants}
                        initial="closed"
                        animate="open"
                        className="space-y-2 px-4"
                      >
                        {mobileMenuItems.find(i => i.id === activeSubMenu)?.children?.map((subItem) => (
                          <motion.div
                            key={subItem.name}
                            variants={itemVariants}
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {subItem.hasChildren ? (
                              <button
                                onClick={() => setActiveNestedSubMenu(subItem.name)}
                                className="w-full group flex items-center justify-between py-3 px-4 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
                              >
                                <span className="text-white/70 group-hover:text-white font-medium text-base transition-colors">
                                  {subItem.name}
                                </span>
                                <ChevronRight size={18} className="text-white/40 group-hover:text-primary" />
                              </button>
                            ) : (
                              <Link
                                href={subItem.href || "#"}
                                target={(subItem.href?.startsWith("http") || subItem.href?.endsWith(".pdf")) ? "_blank" : undefined}
                                rel={(subItem.href?.startsWith("http") || subItem.href?.endsWith(".pdf")) ? "noopener noreferrer" : undefined}
                                onClick={() => { setIsMenuOpen(false); setActiveSubMenu(null); setActiveNestedSubMenu(null); }}
                                className="group flex items-center py-3 px-4 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
                              >
                                <span className="text-white/70 group-hover:text-white font-medium text-base transition-colors">
                                  {subItem.name}
                                </span>
                              </Link>
                            )}
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Nested Sub-Menu Panel (Third Level) - Sliding from right */}
              <AnimatePresence>
                {activeNestedSubMenu && activeSubMenu && (
                  <motion.div
                    variants={subMenuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    transition={{ type: "spring", damping: 30, stiffness: 300 }}
                    className="absolute inset-0 bg-secondary z-30 flex flex-col"
                  >
                    {/* Nested sub-menu Header */}
                    <div className="flex items-center gap-4 px-4 py-6 border-b border-white/10 bg-white/5 backdrop-blur-md">
                      <button
                        onClick={() => setActiveNestedSubMenu(null)}
                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-colors"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <div className="flex flex-col">
                        <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest leading-none mb-1">Explore</span>
                        <span className="text-white font-bold text-lg tracking-tight leading-none">
                          {activeNestedSubMenu}
                        </span>
                      </div>
                    </div>

                    {/* Nested sub-menu Items */}
                    <div className="flex-1 overflow-y-auto py-6 no-scrollbar">
                      <motion.div
                        variants={containerVariants}
                        initial="closed"
                        animate="open"
                        className="space-y-2 px-4"
                      >
                        {mobileMenuItems
                          .find(i => i.id === activeSubMenu)
                          ?.children?.find(c => c.name === activeNestedSubMenu)
                          ?.children?.map((nestedItem) => (
                            <motion.div
                              key={nestedItem.name}
                              variants={itemVariants}
                              whileHover={{ x: 5 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Link
                                href={nestedItem.href}
                                target={(nestedItem.href.startsWith("http") || nestedItem.href.endsWith(".pdf")) ? "_blank" : undefined}
                                rel={(nestedItem.href.startsWith("http") || nestedItem.href.endsWith(".pdf")) ? "noopener noreferrer" : undefined}
                                onClick={() => { setIsMenuOpen(false); setActiveSubMenu(null); setActiveNestedSubMenu(null); }}
                                className="group flex items-center py-3 px-4 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
                              >
                                <span className="text-white/70 group-hover:text-white font-medium text-base transition-colors">
                                  {nestedItem.name}
                                </span>
                              </Link>
                            </motion.div>
                          ))}
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
export default Header;