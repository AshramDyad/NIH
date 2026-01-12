'use client';

import { useState, useRef, useEffect, ReactNode, useCallback } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';

interface DropdownProps {
    trigger: ReactNode;
    children: ReactNode;
    align?: 'left' | 'right';
}

/**
 * Reusable dropdown component with smooth animations.
 * - Click outside to close
 * - Escape key to close
 * - Smooth scale/opacity animation
 */
export function Dropdown({ trigger, children, align = 'right' }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const closeDropdown = useCallback(() => {
        setIsOpen(false);
    }, []);

    // Handle click outside
    useClickOutside(dropdownRef, closeDropdown);

    // Handle Escape key
    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        }

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Trigger */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer"
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                {trigger}
            </button>

            {/* Dropdown Content */}
            <div
                className={`
          absolute top-full mt-2 z-50
          ${align === 'right' ? 'right-0' : 'left-0'}
          min-w-[200px] bg-white rounded-lg shadow-lg border border-gray-200
          transition-all duration-200 ease-out origin-top-right
          ${isOpen
                        ? 'opacity-100 scale-100 pointer-events-auto'
                        : 'opacity-0 scale-95 pointer-events-none'
                    }
        `}
            >
                {children}
            </div>
        </div>
    );
}
