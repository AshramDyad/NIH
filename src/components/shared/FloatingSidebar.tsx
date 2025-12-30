"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface FloatingSidebarProps {
    children: React.ReactNode;
}

export default function FloatingSidebar({ children }: FloatingSidebarProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="hidden md:block">
            {/* Floating Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed top-1/2 left-0 z-30 flex items-center justify-center bg-primary text-white p-4 rounded-r-xl shadow-lg -translate-y-1/2 cursor-pointer"
            >
                <Menu className="w-6 h-6" />
            </button>

            {/* Modal / Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
                        />

                        {/* Sidebar Panel */}
                        <motion.div
                            initial={{ x: '-110%', y: '-50%' }}
                            animate={{ x: 0, y: '-50%' }}
                            exit={{ x: '-110%', y: '-50%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed left-4 top-1/2 w-full max-w-[380px] h-auto max-h-[85vh] bg-white shadow-sm z-50 rounded-2xl flex flex-col overflow-hidden"
                        >
                            {/* Sticky Header */}
                            <div className="flex items-center justify-between p-4 border-b shadow">
                                <h2 className="text-xl font-black text-zinc-900">Navigation</h2>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-zinc-100 rounded-full transition-colors text-zinc-500 hover:text-zinc-800 cursor-pointer"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Scrollable Content Container */}
                            <div className="flex-1 overflow-y-auto p-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                {children}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
