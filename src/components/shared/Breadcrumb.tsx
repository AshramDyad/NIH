"use client";

import Link from 'next/link';
import type { BreadcrumbProps } from '@/types/breadcrumb';
import { useBreadcrumbItems } from '@/utils/breadcrumb';

/**
 * Paths that should not be clickable in breadcrumbs
 * These are parent pages that have been removed but still appear in navigation hierarchy
 */
const DISABLED_PATHS = ['/academics', '/general-information'];

/**
 * Reusable breadcrumb component for Next.js App Router
 * Automatically detects current page and generates navigation path
 */
export default function Breadcrumb({
    items,
    separator = '>',
}: BreadcrumbProps) {
    // Always call the hook first (React Hooks rules)
    const generatedItems = useBreadcrumbItems();
    // Use custom items if provided, otherwise use generated items
    const breadcrumbItems = items ?? generatedItems;

    return (
        <section className="bg-primary/10 py-4">
            <div className="mx-auto container px-6">
                <nav className="flex flex-wrap items-center gap-2 text-gray-700 text-sm md:text-base" aria-label="Breadcrumb">
                    {breadcrumbItems.map((item, index) => {
                        const isLast = index === breadcrumbItems.length - 1;
                        const isDisabled = item.href && DISABLED_PATHS.includes(item.href);

                        return (
                            <li key={index} className="flex items-center gap-2">
                                {item.href && !isDisabled ? (
                                    <Link
                                        href={item.href}
                                        className="hover:text-primary transition-colors font-medium whitespace-nowrap"
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span
                                        className={`font-medium whitespace-nowrap ${isLast ? 'text-primary' : 'text-gray-700 cursor-default'}`}
                                        {...(isLast && { 'aria-current': 'page' })}
                                    >
                                        {item.label}
                                    </span>
                                )}
                                {!isLast && (
                                    <span className="shrink-0" aria-hidden="true">
                                        {separator}
                                    </span>
                                )}
                            </li>
                        );
                    })}
                </nav>
            </div>
        </section>
    );
}
