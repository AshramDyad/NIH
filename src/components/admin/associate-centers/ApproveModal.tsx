import React from 'react';
import { Check, CheckCircle2, MapPin, AlertCircle, Loader2 } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { AssociateCenterApplication } from '@/app/actions/associateCenterApplications';

interface ApproveModalProps {
    application: AssociateCenterApplication;
    isSubmitting: boolean;
    onClose: () => void;
    onApprove: () => void;
}

export function ApproveModal({ application, isSubmitting, onClose, onApprove }: ApproveModalProps) {
    return (
        <Modal
            title="Approve Application"
            maxWidth="xl"
            onClose={onClose}
            footer={
                <div className="flex flex-col sm:flex-row gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 px-6 py-3 rounded-xl border border-zinc-200 text-zinc-700 font-semibold hover:bg-zinc-50 transition-all"
                        disabled={isSubmitting}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onApprove}
                        className="flex-1 px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Approving...
                            </>
                        ) : (
                            <>
                                <Check size={20} />
                                Approve Center
                            </>
                        )}
                    </button>
                </div>
            }
        >
            <div className="space-y-6 text-center">
                <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                    <CheckCircle2 size={40} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-zinc-900">Approve Application?</h3>
                    <p className="text-zinc-500 mt-2">
                        You are about to approve the registration for{' '}
                        <span className="font-bold text-zinc-900 wrap-break-word">{application.hospital_name}</span>.
                    </p>
                    <p className="text-sm text-zinc-500 mt-1 flex items-center justify-center gap-1.5 font-medium">
                        <MapPin size={14} className="text-zinc-400" />
                        {application.district}, {application.state}
                    </p>
                </div>

                <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-4 text-sm text-emerald-800 flex items-start gap-3 text-left">
                    <AlertCircle size={18} className="shrink-0 text-emerald-600" />
                    <p>This will officially register the center and list it on the public &quot;Registered Institutions&quot; page.</p>
                </div>
            </div>
        </Modal>
    );
}
