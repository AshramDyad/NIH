import React, { useState } from 'react';
import Image from 'next/image';
import { Building2, Upload, Pencil, X, Check, Loader2 } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { AssociateCenterApplication, UpdateAssociateCenterData } from '@/app/actions/associateCenterApplications';

interface EditModalProps {
    application: AssociateCenterApplication;
    isSubmitting: boolean;
    onClose: () => void;
    onUpdate: (data: UpdateAssociateCenterData, logoFile: File | null) => Promise<void>;
}

export function EditModal({ application, isSubmitting, onClose, onUpdate }: EditModalProps) {
    const [editForm, setEditForm] = useState<UpdateAssociateCenterData>({
        hospitalName: application.hospital_name,
        fullAddress: application.full_address,
        district: application.district,
        state: application.state,
        phoneNumber: application.phone_number,
        email: application.email,
        website: application.website,
        administratorName: application.administrator_name,
        doctorName: application.doctor_name,
        phoneNo: application.phone_no,
        hospitalOpeningHour: application.hospital_opening_hour,
        weeklyHolidays: application.weekly_holidays || [],
        specialFeatures: application.special_features,
        otherInformation: application.other_information,
    });

    const [newLogoFile, setNewLogoFile] = useState<File | null>(null);
    const [logoPreview, setLogoPreview] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await onUpdate(editForm, newLogoFile);
    };

    return (
        <Modal
            title="Edit Application"
            maxWidth="4xl"
            onClose={onClose}
            footer={
                <div className="flex justify-end gap-3 w-full">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-6 py-2.5 rounded-xl border border-zinc-200 text-zinc-700 font-semibold hover:bg-zinc-50 transition-all disabled:opacity-50 flex-1 sm:flex-none"
                        disabled={isSubmitting}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        form="edit-associate-center-form"
                        className="px-8 py-2.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all disabled:opacity-50 flex items-center justify-center gap-2 flex-1 sm:flex-none"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Saving Changes...
                            </>
                        ) : (
                            <>
                                <Check size={20} />
                                Save Changes
                            </>
                        )}
                    </button>
                </div>
            }
        >
            <form id="edit-associate-center-form" onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    {/* Logo Upload - Full Width */}
                    <div className="md:col-span-2 flex items-center gap-6 p-6 bg-zinc-50 rounded-2xl border border-zinc-100 mb-2">
                        <div className="relative group shrink-0">
                            <div className="w-24 h-24 bg-white rounded-2xl border-2 border-dashed border-zinc-200 flex items-center justify-center overflow-hidden transition-all group-hover:border-primary">
                                {logoPreview || application.logo_url ? (
                                    <Image
                                        src={logoPreview || application.logo_url || ''}
                                        alt="Logo Preview"
                                        fill
                                        className="object-contain p-2"
                                    />
                                ) : (
                                    <Building2 className="w-8 h-8 text-zinc-300" />
                                )}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Upload className="text-white w-6 h-6" />
                                </div>
                            </div>
                            <input
                                type="file"
                                id="edit-logo-btn"
                                className="hidden"
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        setNewLogoFile(file);
                                        const reader = new FileReader();
                                        reader.onloadend = () => {
                                            setLogoPreview(reader.result as string);
                                        };
                                        reader.readAsDataURL(file);
                                    }
                                }}
                            />
                            <label htmlFor="edit-logo-btn" className="absolute -bottom-2 -right-2 p-2 bg-primary text-white rounded-lg shadow-lg cursor-pointer hover:scale-110 transition-transform">
                                <Pencil size={14} />
                            </label>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-bold text-zinc-900">Center Logo</p>
                            <p className="text-xs text-zinc-500 mt-1">Click the pencil to change logo</p>
                            {(newLogoFile || logoPreview) && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        setNewLogoFile(null);
                                        setLogoPreview(null);
                                    }}
                                    className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 text-rose-600 border border-rose-100 hover:bg-rose-100 rounded-lg text-xs font-bold transition-all shadow-sm shadow-rose-100"
                                >
                                    <X size={14} />
                                    Revert Logo
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="block text-sm text-zinc-700 ml-1">Hospital / Centre Name <span className="text-red-500">*</span></label>
                        <input type="text" value={editForm.hospitalName} onChange={(e) => setEditForm({ ...editForm, hospitalName: e.target.value })} className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm" required />
                    </div>

                    <div className="space-y-1.5">
                        <label className="block text-sm text-zinc-700 ml-1">Full Postal Address <span className="text-red-500">*</span></label>
                        <textarea value={editForm.fullAddress} onChange={(e) => setEditForm({ ...editForm, fullAddress: e.target.value })} className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm" rows={1} required />
                    </div>

                    <div className="space-y-1.5">
                        <label className="block text-sm text-zinc-700 ml-1">District <span className="text-red-500">*</span></label>
                        <input type="text" value={editForm.district} onChange={(e) => setEditForm({ ...editForm, district: e.target.value })} className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm" required />
                    </div>

                    <div className="space-y-1.5">
                        <label className="block text-sm text-zinc-700 ml-1">State <span className="text-red-500">*</span></label>
                        <input type="text" value={editForm.state} onChange={(e) => setEditForm({ ...editForm, state: e.target.value })} className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm" required />
                    </div>

                    <div className="space-y-1.5">
                        <label className="block text-sm text-zinc-700 ml-1">Phone Number (Official) <span className="text-red-500">*</span></label>
                        <input type="tel" value={editForm.phoneNumber} onChange={(e) => setEditForm({ ...editForm, phoneNumber: e.target.value })} className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm" required />
                    </div>

                    <div className="space-y-1.5">
                        <label className="block text-sm text-zinc-700 ml-1">Official Email <span className="text-red-500">*</span></label>
                        <input type="email" value={editForm.email} onChange={(e) => setEditForm({ ...editForm, email: e.target.value })} className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm" required />
                    </div>

                    <div className="space-y-1.5">
                        <label className="block text-sm text-zinc-700 ml-1">Website</label>
                        <input type="url" value={editForm.website || ''} onChange={(e) => setEditForm({ ...editForm, website: e.target.value })} className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm" placeholder="https://example.com" />
                    </div>

                    <div className="hidden md:block" />

                    <div className="space-y-1.5">
                        <label className="block text-sm text-zinc-700 ml-1">Administrator Name <span className="text-red-500">*</span></label>
                        <input type="text" value={editForm.administratorName} onChange={(e) => setEditForm({ ...editForm, administratorName: e.target.value })} className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm" required />
                    </div>

                    <div className="space-y-1.5">
                        <label className="block text-sm text-zinc-700 ml-1">Doctor Name / CMO <span className="text-red-500">*</span></label>
                        <input type="text" value={editForm.doctorName} onChange={(e) => setEditForm({ ...editForm, doctorName: e.target.value })} className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm" required />
                    </div>

                    <div className="space-y-1.5">
                        <label className="block text-sm text-zinc-700 ml-1">Doctor Phone No. <span className="text-red-500">*</span></label>
                        <input type="tel" value={editForm.phoneNo} onChange={(e) => setEditForm({ ...editForm, phoneNo: e.target.value })} className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm" required />
                    </div>

                    <div className="space-y-1.5">
                        <label className="block text-sm text-zinc-700 ml-1">Opening Hours <span className="text-red-500">*</span></label>
                        <input type="text" value={editForm.hospitalOpeningHour} onChange={(e) => setEditForm({ ...editForm, hospitalOpeningHour: e.target.value })} className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm" required placeholder="e.g., 9:00 AM - 6:00 PM" />
                    </div>

                    <div className="md:col-span-2 space-y-3">
                        <label className="block text-sm text-zinc-700 ml-1">Weekly Holidays</label>
                        <div className="flex flex-wrap gap-2 p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                            {(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const).map((day) => (
                                <label key={day} className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all cursor-pointer ${editForm.weeklyHolidays.includes(day) ? 'bg-primary/10 border-primary text-primary' : 'bg-white border-zinc-200 text-zinc-500 hover:border-zinc-300'}`}>
                                    <input type="checkbox" checked={editForm.weeklyHolidays.includes(day)} onChange={(e) => {
                                        const updated = e.target.checked ? [...editForm.weeklyHolidays, day] : editForm.weeklyHolidays.filter((d) => d !== day);
                                        setEditForm({ ...editForm, weeklyHolidays: updated });
                                    }} className="hidden" />
                                    <span className="text-xs">{day}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-2 space-y-1.5">
                        <label className="block text-sm text-zinc-700 ml-1">Special Features</label>
                        <textarea value={editForm.specialFeatures || ''} onChange={(e) => setEditForm({ ...editForm, specialFeatures: e.target.value })} className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm" rows={3} />
                    </div>

                    <div className="md:col-span-2 space-y-1.5">
                        <label className="block text-sm text-zinc-700 ml-1">Other Information</label>
                        <textarea value={editForm.otherInformation || ''} onChange={(e) => setEditForm({ ...editForm, otherInformation: e.target.value })} className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm" rows={3} />
                    </div>
                </div>
            </form>
        </Modal>
    );
}
