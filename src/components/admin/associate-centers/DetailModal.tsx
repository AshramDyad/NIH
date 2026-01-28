import React from 'react';
import Image from 'next/image';
import { User, Clock, MapPin, AlertCircle, Check, Building2 } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { DetailItem } from '@/components/ui/DetailItem';
import { AssociateCenterApplication } from '@/app/actions/associateCenterApplications';

interface DetailModalProps {
    application: AssociateCenterApplication;
    onClose: () => void;
    getStatusBadge: (status: AssociateCenterApplication['status']) => React.ReactNode;
}

export function DetailModal({ application, onClose, getStatusBadge }: DetailModalProps) {
    return (
        <Modal
            title="Application Details"
            maxWidth="4xl"
            onClose={onClose}
            footer={
                <div className="flex justify-end w-full">
                    <button
                        onClick={onClose}
                        className="px-8 py-2.5 rounded-xl bg-zinc-900 text-white font-semibold hover:bg-zinc-800 transition-all"
                    >
                        Close
                    </button>
                </div>
            }
        >
            <div className="space-y-8">
                {/* Summary Header */}
                <div className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                    <div className="w-24 h-24 relative rounded-2xl overflow-hidden bg-white border border-zinc-200 shadow-sm shrink-0">
                        <Image
                            src={application.logo_url}
                            alt={application.hospital_name}
                            fill
                            className="object-cover"
                            unoptimized
                        />
                    </div>
                    <div className="text-center sm:text-left space-y-2">
                        <h3 className="text-2xl font-bold text-zinc-900 leading-tight wrap-break-word">{application.hospital_name}</h3>
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                            {getStatusBadge(application.status)}
                            <span className="text-sm text-zinc-500 flex items-center gap-1.5 ml-2">
                                <Clock size={14} className="text-zinc-400" />
                                Applied on {new Date(application.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <DetailItem label="Hospital / Centre Name" value={application.hospital_name} icon={Building2} />
                    <DetailItem label="Full Postal Address" value={application.full_address} icon={MapPin} />

                    <DetailItem label="District" value={application.district} icon={MapPin} />
                    <DetailItem label="State" value={application.state} icon={MapPin} />

                    <DetailItem label="Phone Number (Official)" value={application.phone_number} icon={Clock} />
                    <DetailItem label="Official Email" value={application.email} icon={AlertCircle} />

                    <DetailItem label="Website" value={application.website} icon={AlertCircle} />
                    <div />

                    <DetailItem label="Administrator Name" value={application.administrator_name} icon={User} />
                    <DetailItem label="Doctor/CMO Name" value={application.doctor_name} icon={User} />

                    <DetailItem label="Doctor Phone No." value={application.phone_no} icon={Clock} />
                    <DetailItem label="Opening Hours" value={application.hospital_opening_hour} icon={Clock} />

                    <div className="md:col-span-2">
                        <DetailItem label="Weekly Holidays" value={Array.isArray(application.weekly_holidays) ? application.weekly_holidays.join(', ') : 'None'} icon={AlertCircle} fullWidth />
                    </div>
                    {application.special_features && (
                        <div className="md:col-span-2">
                            <DetailItem label="Special Features" value={application.special_features} fullWidth icon={Check} />
                        </div>
                    )}
                    {application.other_information && (
                        <div className="md:col-span-2">
                            <DetailItem label="Other Information" value={application.other_information} fullWidth icon={AlertCircle} />
                        </div>
                    )}
                </div>
            </div>
        </Modal>
    );
}
