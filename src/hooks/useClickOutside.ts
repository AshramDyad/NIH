'use client';

import { RefObject, useEffect } from 'react';

/**
 * Custom hook to detect clicks outside of a referenced element.
 * @param ref - React ref object pointing to the element to monitor
 * @param callback - Function to call when a click outside is detected
 */
export function useClickOutside<T extends HTMLElement>(
    ref: RefObject<T | null>,
    callback: () => void
): void {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, callback]);
}
