'use client';

import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
    title: string;
    children: React.ReactNode;
    onClose: () => void;
    maxWidth?: 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
    footer?: React.ReactNode;
}

export function Modal({ title, children, onClose, maxWidth = '3xl', footer }: ModalProps) {
    const maxWidthClass = {
        'xl': 'max-w-xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
        '4xl': 'max-w-4xl',
        '5xl': 'max-w-5xl'
    }[maxWidth];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className={`bg-white rounded-2xl shadow-2xl ${maxWidthClass} w-full max-h-[90vh] overflow-hidden flex flex-col animate-in zoom-in-95 duration-200`}>
                <div className="flex items-center justify-between p-6 border-b border-zinc-100 shrink-0">
                    <h2 className="text-xl font-bold text-zinc-900">{title}</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-zinc-100 rounded-xl transition-all text-zinc-400 hover:text-zinc-600"
                    >
                        <X size={20} />
                    </button>
                </div>
                <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">{children}</div>
                {footer && (
                    <div className="p-6 border-t border-zinc-100 shrink-0 bg-white">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );
}
