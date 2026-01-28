import React from 'react';

interface DetailItemProps {
    label: string;
    value: string | React.ReactNode;
    fullWidth?: boolean;
    icon?: React.ElementType;
}

export function DetailItem({ label, value, fullWidth, icon: Icon }: DetailItemProps) {
    return (
        <div className={`${fullWidth ? 'col-span-2' : ''} space-y-1.5`}>
            <dt className="text-sm text-zinc-700 flex items-center gap-2">
                {Icon && <Icon className="w-3.5 h-3.5" />}
                {label}
            </dt>
            <dd className="text-sm text-black bg-zinc-50/50 p-2.5 rounded-xl border border-zinc-100/50">
                {value || <span className="text-zinc-400 italic font-normal">Not provided</span>}
            </dd>
        </div>
    );
}
