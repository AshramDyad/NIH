import React from 'react';
import { Trash2, AlertCircle, Loader2 } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { AssociateCenterApplication } from '@/app/actions/associateCenterApplications';

interface DeleteModalProps {
    application: AssociateCenterApplication;
    isSubmitting: boolean;
    onClose: () => void;
    onDelete: () => void;
}

export function DeleteModal({ application, isSubmitting, onClose, onDelete }: DeleteModalProps) {
    return (
        <Modal
            title="Delete Application"
            maxWidth="xl"
            onClose={onClose}
            footer={
                <div className="flex flex-col sm:flex-row gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 px-6 py-3 rounded-xl border border-zinc-200 text-zinc-700 font-semibold hover:bg-zinc-50 transition-all"
                        disabled={isSubmitting}
                    >
                        Go Back
                    </button>
                    <button
                        onClick={onDelete}
                        className="flex-1 px-6 py-3 rounded-xl bg-rose-600 text-white font-semibold hover:bg-rose-700 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Deleting...
                            </>
                        ) : (
                            <>
                                <Trash2 size={20} />
                                Delete Forever
                            </>
                        )}
                    </button>
                </div>
            }
        >
            <div className="space-y-6 text-center">
                <div className="w-20 h-20 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mx-auto">
                    <Trash2 size={40} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-zinc-900">Delete Application?</h3>
                    <p className="text-zinc-500 mt-2">
                        Are you sure you want to permanently delete{' '}
                        <span className="font-bold text-zinc-900 wrap-break-word">{application.hospital_name}</span>?
                    </p>
                </div>

                {application.status === 'approved' && (
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-sm text-amber-800 flex items-start gap-3 text-left shadow-sm">
                        <AlertCircle size={18} className="shrink-0 text-amber-600" />
                        <p><strong>Warning:</strong> This center is already approved. Deleting will also remove its profile from the public search.</p>
                    </div>
                )}

                <p className="text-xs text-zinc-400 font-medium tracking-wide uppercase">This action cannot be undone</p>
            </div>
        </Modal>
    );
}
