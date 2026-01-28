'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
    Loader2,
    AlertCircle,
    Check,
    X,
    Eye,
    Pencil,
    Trash2,
    Building2,
    Upload,
} from 'lucide-react';
import {
    getAssociateCenterApplications,
    approveAssociateCenterApplication,
    deleteAssociateCenterApplication,
    updateAssociateCenterApplication,
    deleteLogoFromR2,
    type AssociateCenterApplication,
    type UpdateAssociateCenterData,
} from '@/app/actions/associateCenterApplications';

type StatusFilter = 'pending' | 'approved' | 'rejected' | 'all';

export default function AdminAssociateCentersPage() {
    const [applications, setApplications] = useState<AssociateCenterApplication[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Filter state
    const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
    const [hasCheckedDefaultTab, setHasCheckedDefaultTab] = useState(false);

    // Modal states
    const [selectedApplication, setSelectedApplication] = useState<AssociateCenterApplication | null>(null);
    const [isApproveModalOpen, setIsApproveModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    // Form state for Edit
    const [editForm, setEditForm] = useState<UpdateAssociateCenterData | null>(null);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [actionMessage, setActionMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    // New Logo state for Edit
    const [newLogoFile, setNewLogoFile] = useState<File | null>(null);
    const [logoPreview, setLogoPreview] = useState<string | null>(null);

    const fetchApplications = React.useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const data = await getAssociateCenterApplications(statusFilter);
            setApplications(data);

            // Conditional tab logic for initial load
            if (!hasCheckedDefaultTab && statusFilter === 'all') {
                setHasCheckedDefaultTab(true);
                if (data.length === 0) {
                    setStatusFilter('pending');
                }
            }
        } catch (err) {
            setError('Failed to load applications. Please refresh the page.');
            console.error('Error fetching applications:', err);
        } finally {
            setIsLoading(false);
        }
    }, [statusFilter, hasCheckedDefaultTab]);

    // Fetch applications on mount and filter change
    useEffect(() => {
        fetchApplications();
    }, [fetchApplications]);

    const handleApprove = async () => {
        if (!selectedApplication) return;

        setIsSubmitting(true);
        setActionMessage(null);

        try {
            const result = await approveAssociateCenterApplication(selectedApplication.id);

            if (result.success) {
                setActionMessage({ type: 'success', text: result.message });
                setIsApproveModalOpen(false);
                setSelectedApplication(null);
                fetchApplications();
            } else {
                setActionMessage({ type: 'error', text: result.message });
            }
        } catch (err) {
            console.error('Error approving application:', err);
            setActionMessage({ type: 'error', text: 'Failed to approve application' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async () => {
        if (!selectedApplication) return;

        setIsSubmitting(true);
        setActionMessage(null);

        try {
            const result = await deleteAssociateCenterApplication(selectedApplication.id);

            if (result.success) {
                setActionMessage({ type: 'success', text: result.message });
                setIsDeleteModalOpen(false);
                setSelectedApplication(null);
                fetchApplications();
            } else {
                setActionMessage({ type: 'error', text: result.message });
            }
        } catch (err) {
            console.error('Error deleting application:', err);
            setActionMessage({ type: 'error', text: 'Failed to delete application' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedApplication || !editForm) return;

        setIsSubmitting(true);
        setActionMessage(null);

        let finalLogoUrl = selectedApplication.logo_url;
        let oldLogoUrlToDelete: string | null = null;

        try {
            // 1. If a new logo is selected, upload it
            if (newLogoFile) {
                const formData = new FormData();
                formData.append('file', newLogoFile);
                formData.append('fileType', 'image');

                const response = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData,
                });

                const result = await response.json();
                if (!response.ok || !result.success) {
                    throw new Error(result.error || 'Failed to upload new logo');
                }

                finalLogoUrl = result.fileUrl;
                oldLogoUrlToDelete = selectedApplication.logo_url;
            }

            // 2. Update the application
            const result = await updateAssociateCenterApplication(
                selectedApplication.id,
                { ...editForm, logoUrl: finalLogoUrl },
                selectedApplication.status === 'approved' ? selectedApplication.institution_id : null
            );

            if (result.success) {
                setActionMessage({ type: 'success', text: result.message });
                setIsEditModalOpen(false);
                setSelectedApplication(null);
                setNewLogoFile(null);
                setLogoPreview(null);
                fetchApplications();
            } else {
                // If update failed but we uploaded a new logo, we should probably delete the new one too
                // but for now we'll just show the error.
                setActionMessage({ type: 'error', text: result.message });
            }
        } catch (err) {
            console.error('Error updating application:', err);
            setActionMessage({ type: 'error', text: err instanceof Error ? err.message : 'Failed to update application' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const openEditModal = (app: AssociateCenterApplication) => {
        setSelectedApplication(app);
        setEditForm({
            hospitalName: app.hospital_name,
            fullAddress: app.full_address,
            district: app.district,
            state: app.state,
            phoneNumber: app.phone_number,
            email: app.email,
            website: app.website || '',
            administratorName: app.administrator_name,
            doctorName: app.doctor_name,
            phoneNo: app.phone_no,
            hospitalOpeningHour: app.hospital_opening_hour,
            weeklyHolidays: Array.isArray(app.weekly_holidays) ? app.weekly_holidays : [],
            specialFeatures: app.special_features || '',
            otherInformation: app.other_information || '',
        });
        setNewLogoFile(null);
        setLogoPreview(null);
        setIsEditModalOpen(true);
    };

    // Status badge styling
    const getStatusBadgeClass = (status: string) => {
        switch (status) {
            case 'approved':
                return 'bg-green-100 text-green-700 ring-green-500/20';
            case 'rejected':
                return 'bg-red-100 text-red-700 ring-red-500/20';
            default:
                return 'bg-yellow-100 text-yellow-700 ring-yellow-500/20';
        }
    };

    return (
        <div className="p-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-black text-secondary mb-2">Associate Center Applications</h1>
                <p className="text-zinc-600">Manage hospital/centre registration applications</p>
            </div>

            {/* Status Tabs */}
            <div className="mb-6 flex gap-2 flex-wrap">
                {(['all', 'pending', 'approved', 'rejected'] as StatusFilter[]).map((status) => (
                    <button
                        key={status}
                        onClick={() => setStatusFilter(status)}
                        className={`px-4 py-2 rounded-lg font-semibold capitalize transition-colors ${statusFilter === status
                            ? 'bg-primary text-white'
                            : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                            }`}
                    >
                        {status}
                    </button>
                ))}
            </div>

            {/* Action Message */}
            {actionMessage && (
                <div
                    className={`mb-4 p-4 rounded-lg flex items-center gap-2 ${actionMessage.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                        }`}
                >
                    {actionMessage.type === 'success' ? <Check size={20} /> : <AlertCircle size={20} />}
                    <span>{actionMessage.text}</span>
                    <button onClick={() => setActionMessage(null)} className="ml-auto">
                        <X size={18} />
                    </button>
                </div>
            )}

            {/* Loading State */}
            {isLoading && (
                <div className="flex items-center justify-center py-12">
                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                    <span className="ml-2 text-zinc-600">Loading applications...</span>
                </div>
            )}

            {/* Error State */}
            {error && !isLoading && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-2 text-red-700">
                    <AlertCircle size={20} />
                    <span>{error}</span>
                </div>
            )}

            {/* Applications Table */}
            {!isLoading && !error && (
                <>
                    {applications.length === 0 ? (
                        <div className="text-center py-12 bg-zinc-50 rounded-lg">
                            <Building2 className="w-12 h-12 mx-auto text-zinc-400 mb-3" />
                            <p className="text-zinc-600 font-medium">No applications found</p>
                            <p className="text-sm text-zinc-500 mt-1">
                                {statusFilter === 'all'
                                    ? 'No applications have been submitted yet'
                                    : `No ${statusFilter} applications`}
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-zinc-200">
                            <table className="min-w-full divide-y divide-zinc-200">
                                <thead className="bg-zinc-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                                            Logo
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                                            Hospital/Centre
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                                            Location
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                                            Contact
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-zinc-200">
                                    {applications.map((app) => (
                                        <tr key={app.id} className="hover:bg-zinc-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="w-12 h-12 relative rounded-md overflow-hidden bg-zinc-100">
                                                    <Image
                                                        src={app.logo_url}
                                                        alt={app.hospital_name}
                                                        fill
                                                        className="object-cover"
                                                        unoptimized
                                                    />
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm font-medium text-zinc-900">{app.hospital_name}</div>
                                                <div className="text-sm text-zinc-500">Dr. {app.doctor_name}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-zinc-900">{app.district}</div>
                                                <div className="text-sm text-zinc-500">{app.state}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-zinc-900">{app.phone_number}</div>
                                                <div className="text-sm text-zinc-500">{app.email}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span
                                                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ring-1 ring-inset ${getStatusBadgeClass(
                                                        app.status
                                                    )}`}
                                                >
                                                    {app.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => {
                                                            setSelectedApplication(app);
                                                            setIsDetailModalOpen(true);
                                                        }}
                                                        className="text-zinc-600 hover:text-primary p-1 rounded hover:bg-zinc-100"
                                                        title="View Details"
                                                    >
                                                        <Eye size={18} />
                                                    </button>
                                                    {app.status === 'pending' && (
                                                        <button
                                                            onClick={() => {
                                                                setSelectedApplication(app);
                                                                setIsApproveModalOpen(true);
                                                            }}
                                                            className="text-green-600 hover:text-green-700 p-1 rounded hover:bg-green-50"
                                                            title="Approve"
                                                        >
                                                            <Check size={18} />
                                                        </button>
                                                    )}
                                                    <button
                                                        onClick={() => openEditModal(app)}
                                                        className="text-blue-600 hover:text-blue-700 p-1 rounded hover:bg-blue-50"
                                                        title="Edit"
                                                    >
                                                        <Pencil size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            setSelectedApplication(app);
                                                            setIsDeleteModalOpen(true);
                                                        }}
                                                        className="text-red-600 hover:text-red-700 p-1 rounded hover:bg-red-50"
                                                        title="Delete"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </>
            )}

            {/* Approve Modal */}
            {isApproveModalOpen && selectedApplication && (
                <Modal
                    title="Approve Application"
                    onClose={() => {
                        setIsApproveModalOpen(false);
                        setSelectedApplication(null);
                    }}
                >
                    <div className="space-y-4">
                        <p className="text-zinc-700">
                            Are you sure you want to approve the application for{' '}
                            <span className="font-semibold">{selectedApplication.hospital_name}</span>?
                        </p>
                        <p className="text-sm text-zinc-600">
                            This will add the Associate Center to the public institutions list.
                        </p>
                        <div className="flex justify-end gap-3 pt-4 border-t">
                            <button
                                onClick={() => {
                                    setIsApproveModalOpen(false);
                                    setSelectedApplication(null);
                                }}
                                className="px-4 py-2 rounded-lg border border-zinc-300 text-zinc-700 hover:bg-zinc-50 transition-colors"
                                disabled={isSubmitting}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleApprove}
                                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center gap-2"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Approving...
                                    </>
                                ) : (
                                    <>
                                        <Check size={18} />
                                        Approve
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </Modal>
            )}

            {/* Delete Modal */}
            {isDeleteModalOpen && selectedApplication && (
                <Modal
                    title="Delete Application"
                    onClose={() => {
                        setIsDeleteModalOpen(false);
                        setSelectedApplication(null);
                    }}
                >
                    <div className="space-y-4">
                        <p className="text-zinc-700">
                            Are you sure you want to delete the application for{' '}
                            <span className="font-semibold">{selectedApplication.hospital_name}</span>?
                        </p>
                        {selectedApplication.status === 'approved' && (
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm text-yellow-800">
                                <AlertCircle size={16} className="inline mr-2" />
                                This center is approved. Deleting will also remove it from the public institutions list.
                            </div>
                        )}
                        <p className="text-sm text-zinc-600">This action cannot be undone.</p>
                        <div className="flex justify-end gap-3 pt-4 border-t">
                            <button
                                onClick={() => {
                                    setIsDeleteModalOpen(false);
                                    setSelectedApplication(null);
                                }}
                                className="px-4 py-2 rounded-lg border border-zinc-300 text-zinc-700 hover:bg-zinc-50 transition-colors"
                                disabled={isSubmitting}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDelete}
                                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center gap-2"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Deleting...
                                    </>
                                ) : (
                                    <>
                                        <Trash2 size={18} />
                                        Delete
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </Modal>
            )}

            {/* Detail Modal */}
            {isDetailModalOpen && selectedApplication && (
                <Modal
                    title="Application Details"
                    onClose={() => {
                        setIsDetailModalOpen(false);
                        setSelectedApplication(null);
                    }}
                >
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 pb-4 border-b">
                            <div className="w-20 h-20 relative rounded-lg overflow-hidden bg-zinc-100">
                                <Image
                                    src={selectedApplication.logo_url}
                                    alt={selectedApplication.hospital_name}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-zinc-900">{selectedApplication.hospital_name}</h3>
                                <span
                                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ring-1 ring-inset mt-2 ${getStatusBadgeClass(
                                        selectedApplication.status
                                    )}`}
                                >
                                    {selectedApplication.status}
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <DetailItem label="District" value={selectedApplication.district} />
                            <DetailItem label="State" value={selectedApplication.state} />
                            <DetailItem label="Phone" value={selectedApplication.phone_number} />
                            <DetailItem label="Email" value={selectedApplication.email} />
                            {selectedApplication.website && (
                                <DetailItem label="Website" value={selectedApplication.website} />
                            )}
                            <DetailItem label="Administrator" value={selectedApplication.administrator_name} />
                            <DetailItem label="Doctor/CMO/RMO" value={selectedApplication.doctor_name} />
                            <DetailItem label="Doctor Phone" value={selectedApplication.phone_no} />
                            <DetailItem label="Opening Hours" value={selectedApplication.hospital_opening_hour} />
                            <DetailItem label="Weekly Holidays" value={Array.isArray(selectedApplication.weekly_holidays) ? selectedApplication.weekly_holidays.join(', ') : 'None'} />
                        </div>

                        <DetailItem label="Full Address" value={selectedApplication.full_address} fullWidth />

                        {selectedApplication.special_features && (
                            <DetailItem label="Special Features" value={selectedApplication.special_features} fullWidth />
                        )}

                        {selectedApplication.other_information && (
                            <DetailItem label="Other Information" value={selectedApplication.other_information} fullWidth />
                        )}

                        <div className="flex justify-end pt-4 border-t">
                            <button
                                onClick={() => {
                                    setIsDetailModalOpen(false);
                                    setSelectedApplication(null);
                                }}
                                className="px-4 py-2 rounded-lg bg-zinc-100 text-zinc-700 hover:bg-zinc-200 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </Modal>
            )}

            {/* Edit Modal */}
            {isEditModalOpen && selectedApplication && editForm && (
                <Modal
                    title="Edit Application"
                    onClose={() => {
                        setIsEditModalOpen(false);
                        setSelectedApplication(null);
                        setEditForm(null);
                    }}
                >
                    <form onSubmit={handleUpdate} className="space-y-4 max-h-[60vh] overflow-y-auto px-1">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-zinc-700 mb-1">
                                    Hospital/Centre Name *
                                </label>
                                <input
                                    type="text"
                                    value={editForm.hospitalName}
                                    onChange={(e) => setEditForm({ ...editForm, hospitalName: e.target.value })}
                                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    required
                                />
                            </div>

                            {/* Logo Edit Section */}
                            <div className="col-span-2 space-y-2">
                                <label className="block text-sm font-medium text-zinc-700">
                                    Hospital Logo
                                </label>
                                <div className="flex items-center gap-4 p-4 border rounded-xl bg-zinc-50 border-zinc-200">
                                    <div className="relative w-20 h-20 bg-white rounded-lg border border-zinc-200 overflow-hidden flex items-center justify-center shrink-0">
                                        {logoPreview || selectedApplication.logo_url ? (
                                            <Image
                                                src={logoPreview || selectedApplication.logo_url || ''}
                                                alt="Logo Preview"
                                                fill
                                                className="object-contain p-2"
                                            />
                                        ) : (
                                            <Building2 className="w-8 h-8 text-zinc-300" />
                                        )}
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <div className="flex flex-wrap gap-2">
                                            <input
                                                type="file"
                                                id="edit-logo-upload"
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
                                            <label
                                                htmlFor="edit-logo-upload"
                                                className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-zinc-200 hover:border-primary hover:text-primary rounded-lg text-xs font-medium transition-all shadow-sm"
                                            >
                                                <Upload size={14} />
                                                Change Logo
                                            </label>
                                            {(newLogoFile || logoPreview) && (
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setNewLogoFile(null);
                                                        setLogoPreview(null);
                                                    }}
                                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-600 border border-red-100 hover:bg-red-100 rounded-lg text-xs font-medium transition-all"
                                                >
                                                    <X size={14} />
                                                    Reset
                                                </button>
                                            )}
                                        </div>
                                        <p className="text-[10px] text-zinc-500 italic">
                                            Recommended: Square image, max 5MB.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-zinc-700 mb-1">Full Address *</label>
                                <textarea
                                    value={editForm.fullAddress}
                                    onChange={(e) => setEditForm({ ...editForm, fullAddress: e.target.value })}
                                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    rows={3}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-zinc-700 mb-1">District *</label>
                                <input
                                    type="text"
                                    value={editForm.district}
                                    onChange={(e) => setEditForm({ ...editForm, district: e.target.value })}
                                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-zinc-700 mb-1">State *</label>
                                <input
                                    type="text"
                                    value={editForm.state}
                                    onChange={(e) => setEditForm({ ...editForm, state: e.target.value })}
                                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-zinc-700 mb-1">Phone Number *</label>
                                <input
                                    type="tel"
                                    value={editForm.phoneNumber}
                                    onChange={(e) => setEditForm({ ...editForm, phoneNumber: e.target.value })}
                                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-zinc-700 mb-1">Email *</label>
                                <input
                                    type="email"
                                    value={editForm.email}
                                    onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-zinc-700 mb-1">Website</label>
                                <input
                                    type="url"
                                    value={editForm.website || ''}
                                    onChange={(e) => setEditForm({ ...editForm, website: e.target.value })}
                                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                />
                            </div>

                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-zinc-700 mb-1">Weekly Holidays</label>
                                <div className="grid grid-cols-3 gap-2 p-3 border border-zinc-300 rounded-lg">
                                    {(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const).map((day) => (
                                        <label key={day} className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                checked={editForm.weeklyHolidays.includes(day)}
                                                onChange={(e) => {
                                                    const updated = e.target.checked
                                                        ? [...editForm.weeklyHolidays, day]
                                                        : editForm.weeklyHolidays.filter((d) => d !== day);
                                                    setEditForm({ ...editForm, weeklyHolidays: updated });
                                                }}
                                                className="rounded"
                                            />
                                            <span className="text-sm">{day}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-zinc-700 mb-1">Special Features</label>
                                <textarea
                                    value={editForm.specialFeatures || ''}
                                    onChange={(e) => setEditForm({ ...editForm, specialFeatures: e.target.value })}
                                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    rows={2}
                                />
                            </div>

                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-zinc-700 mb-1">Other Information</label>
                                <textarea
                                    value={editForm.otherInformation || ''}
                                    onChange={(e) => setEditForm({ ...editForm, otherInformation: e.target.value })}
                                    className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                    rows={2}
                                />
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 pt-4 border-t sticky bottom-0 bg-white">
                            <button
                                type="button"
                                onClick={() => {
                                    setIsEditModalOpen(false);
                                    setSelectedApplication(null);
                                    setEditForm(null);
                                }}
                                className="px-4 py-2 rounded-lg border border-zinc-300 text-zinc-700 hover:bg-zinc-50 transition-colors"
                                disabled={isSubmitting}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center gap-2"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Saving...
                                    </>
                                ) : (
                                    'Save Changes'
                                )}
                            </button>
                        </div>
                    </form>
                </Modal>
            )}
        </div>
    );
}

// Modal Component
function Modal({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b">
                    <h2 className="text-xl font-bold text-zinc-900">{title}</h2>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-zinc-100 rounded-lg transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>
                <div className="p-6">{children}</div>
            </div>
        </div>
    );
}

// Detail Item Component
function DetailItem({ label, value, fullWidth }: { label: string; value: string; fullWidth?: boolean }) {
    return (
        <div className={fullWidth ? 'col-span-2' : ''}>
            <dt className="text-sm font-medium text-zinc-500 mb-1">{label}</dt>
            <dd className="text-sm text-zinc-900">{value}</dd>
        </div>
    );
}
