'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
    Loader2,
    AlertCircle,
    User,
    Check,
    X,
    Eye,
    FileText,
    ExternalLink,
    Pencil,
    Trash2,
} from 'lucide-react';
import {
    getYPMApplications,
    approveYPMApplication,
    deleteYPMApplication,
    updateYPMApplication,
    type YPMApplication,
    type UpdateYPMData,
} from '@/app/actions/ypmApplications';

type StatusFilter = 'pending' | 'approved' | 'rejected' | 'all';

export default function AdminYPMApplicationsPage() {
    const [applications, setApplications] = useState<YPMApplication[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Filter state
    const [statusFilter, setStatusFilter] = useState<StatusFilter>('pending');

    // Modal states
    const [selectedApplication, setSelectedApplication] = useState<YPMApplication | null>(null);
    const [isApproveModalOpen, setIsApproveModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    // Form state for Edit
    const [editForm, setEditForm] = useState<UpdateYPMData | null>(null);

    const [memberId, setMemberId] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [actionMessage, setActionMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const fetchApplications = React.useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const data = await getYPMApplications(statusFilter);
            setApplications(data);
        } catch (err) {
            setError('Failed to load applications. Please refresh the page.');
            console.error('Error fetching applications:', err);
        } finally {
            setIsLoading(false);
        }
    }, [statusFilter]);

    // Fetch applications on mount and filter change
    useEffect(() => {
        fetchApplications();
    }, [fetchApplications]);

    const handleApprove = async () => {
        if (!selectedApplication || !memberId.trim()) return;

        setIsSubmitting(true);
        setActionMessage(null);

        try {
            const result = await approveYPMApplication(selectedApplication.id, memberId);

            if (result.success) {
                setActionMessage({ type: 'success', text: result.message });
                setIsApproveModalOpen(false);
                setMemberId('');
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
            const result = await deleteYPMApplication(selectedApplication.id);

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

        try {
            const result = await updateYPMApplication(
                selectedApplication.id,
                editForm,
                selectedApplication.status === 'approved' ? selectedApplication.member_id : null
            );

            if (result.success) {
                setActionMessage({ type: 'success', text: result.message });
                setIsEditModalOpen(false);
                setSelectedApplication(null);
                fetchApplications();
            } else {
                setActionMessage({ type: 'error', text: result.message });
            }
        } catch (err) {
            console.error('Error updating application:', err);
            setActionMessage({ type: 'error', text: 'Failed to update application' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const openApproveModal = (app: YPMApplication) => {
        setSelectedApplication(app);
        setMemberId('');
        setActionMessage(null);
        setIsApproveModalOpen(true);
    };

    const openDeleteModal = (app: YPMApplication) => {
        setSelectedApplication(app);
        setActionMessage(null);
        setIsDeleteModalOpen(true);
    };

    const openEditModal = (app: YPMApplication) => {
        setSelectedApplication(app);
        setEditForm({
            firstName: app.first_name,
            lastName: app.last_name,
            email: app.email,
            mobile: app.mobile,
            gender: app.gender,
            country: app.country,
            state: app.state,
            city: app.city,
            address: app.address,
            pincode: app.pincode,
            referredByName: app.referred_by_name || '',
            referredByMobile: app.referred_by_mobile || '',
            memberId: app.member_id || '',
        });
        setActionMessage(null);
        setIsEditModalOpen(true);
    };

    const openDetailModal = (app: YPMApplication) => {
        setSelectedApplication(app);
        setIsDetailModalOpen(true);
    };

    const closeAllModals = () => {
        setIsApproveModalOpen(false);
        setIsDeleteModalOpen(false);
        setIsDetailModalOpen(false);
        setIsEditModalOpen(false);
        setSelectedApplication(null);
        setMemberId('');
        setActionMessage(null);
        setEditForm(null);
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'pending':
                return <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Pending</span>;
            case 'approved':
                return <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Approved</span>;
            case 'rejected':
                return <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Rejected</span>;
            default:
                return null;
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">YPM Applications</h1>
                    <p className="text-gray-600 mt-1">Manage Yoga Professional Member applications</p>
                </div>

                {/* Status Filter Tabs */}
                <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
                    {(['pending', 'approved', 'rejected', 'all'] as StatusFilter[]).map((status) => (
                        <button
                            key={status}
                            onClick={() => setStatusFilter(status)}
                            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors capitalize ${statusFilter === status
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            {status}
                        </button>
                    ))}
                </div>
            </div>

            {/* Action Message */}
            {actionMessage && (
                <div className={`p-4 rounded-lg ${actionMessage.type === 'success'
                    ? 'bg-green-50 border border-green-200 text-green-900'
                    : 'bg-red-50 border border-red-200 text-red-900'
                    }`}>
                    <p className="text-sm font-medium">{actionMessage.text}</p>
                </div>
            )}

            {/* Error State */}
            {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div className="flex-1">
                        <p className="text-sm font-medium text-red-900">Error Loading Data</p>
                        <p className="text-sm text-red-700 mt-1">{error}</p>
                    </div>
                    <button
                        onClick={fetchApplications}
                        className="text-sm font-medium text-red-700 hover:text-red-900 underline"
                    >
                        Retry
                    </button>
                </div>
            )}

            {/* Loading State */}
            {isLoading && (
                <div className="flex items-center justify-center py-12">
                    <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
                    <span className="ml-3 text-gray-600">Loading applications...</span>
                </div>
            )}

            {/* Empty State */}
            {!isLoading && !error && applications.length === 0 ? (
                <div className="bg-white border border-gray-200 rounded-xl p-12 text-center">
                    <User className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No Applications Found</h3>
                    <p className="text-gray-600">
                        {statusFilter === 'all'
                            ? 'No applications have been submitted yet.'
                            : `No ${statusFilter} applications found.`}
                    </p>
                </div>
            ) : (
                /* Applications Table */
                !isLoading && !error && (
                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Photo</th>
                                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Name</th>
                                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Email</th>
                                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Mobile</th>
                                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Status</th>
                                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Date</th>
                                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {applications.map((app) => (
                                        <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                                            {/* Photo */}
                                            <td className="px-6 py-4">
                                                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                                                    {app.photo_url ? (
                                                        <Image
                                                            src={app.photo_url}
                                                            alt={app.first_name}
                                                            fill
                                                            className="object-cover"
                                                            sizes="48px"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center">
                                                            <User className="w-6 h-6 text-gray-400" />
                                                        </div>
                                                    )}
                                                </div>
                                            </td>

                                            {/* Name */}
                                            <td className="px-6 py-4">
                                                <p className="text-sm font-medium text-gray-900">
                                                    {app.first_name} {app.last_name}
                                                </p>
                                                {app.member_id && (
                                                    <p className="text-xs text-gray-500">ID: {app.member_id}</p>
                                                )}
                                            </td>

                                            {/* Email */}
                                            <td className="px-6 py-4">
                                                <p className="text-sm text-gray-600">{app.email}</p>
                                            </td>

                                            {/* Mobile */}
                                            <td className="px-6 py-4">
                                                <p className="text-sm text-gray-600">{app.mobile}</p>
                                            </td>

                                            {/* Status */}
                                            <td className="px-6 py-4">
                                                {getStatusBadge(app.status)}
                                            </td>

                                            {/* Date */}
                                            <td className="px-6 py-4">
                                                <p className="text-sm text-gray-600">
                                                    {new Date(app.created_at).toLocaleDateString()}
                                                </p>
                                            </td>

                                            {/* Actions */}
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    {/* View Details */}
                                                    <button
                                                        onClick={() => openDetailModal(app)}
                                                        className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                                                        title="View Details"
                                                    >
                                                        <Eye className="w-4 h-4" />
                                                    </button>

                                                    {/* Edit */}
                                                    <button
                                                        onClick={() => openEditModal(app)}
                                                        className="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                                                        title="Edit"
                                                    >
                                                        <Pencil className="w-4 h-4" />
                                                    </button>

                                                    {/* Qualification Link */}
                                                    <a
                                                        href={app.qualification_url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-2 text-zinc-600 hover:text-zinc-700 hover:bg-zinc-100 rounded-lg transition-colors"
                                                        title="View Qualification"
                                                    >
                                                        <FileText className="w-4 h-4" />
                                                    </a>

                                                    {/* Approve (only for pending) */}
                                                    {app.status === 'pending' && (
                                                        <button
                                                            onClick={() => openApproveModal(app)}
                                                            className="p-2 text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors"
                                                            title="Approve"
                                                        >
                                                            <Check className="w-4 h-4" />
                                                        </button>
                                                    )}

                                                    {/* Delete/Reject */}
                                                    <button
                                                        onClick={() => openDeleteModal(app)}
                                                        className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                                                        title={app.status === 'pending' ? "Reject" : "Delete"}
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            )}

            {/* Approve Modal */}
            {isApproveModalOpen && selectedApplication && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-900">Approve Application</h2>
                        </div>
                        <div className="px-6 py-6 space-y-4">
                            <p className="text-sm text-gray-600">
                                Approving application for <strong>{selectedApplication.first_name} {selectedApplication.last_name}</strong>
                            </p>
                            <div>
                                <label htmlFor="memberId" className="block text-sm font-medium text-gray-700 mb-2">
                                    Unique Member ID <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="memberId"
                                    value={memberId}
                                    onChange={(e) => setMemberId(e.target.value)}
                                    placeholder="e.g., NIH/YPM/001"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                                />
                                <p className="text-xs text-gray-500 mt-1">Enter unique member ID to approve</p>
                            </div>
                            <div className="flex gap-3 pt-4">
                                <button
                                    onClick={closeAllModals}
                                    className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleApprove}
                                    disabled={isSubmitting || !memberId.trim()}
                                    className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Approving...
                                        </>
                                    ) : (
                                        <>
                                            <Check className="w-5 h-5" />
                                            Approve
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete/Reject Modal */}
            {isDeleteModalOpen && selectedApplication && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-900">
                                {selectedApplication.status === 'pending' ? "Reject Application" : "Delete Application"}
                            </h2>
                        </div>
                        <div className="px-6 py-6 space-y-4">
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                <p className="text-sm text-red-900 leading-relaxed">
                                    <strong>Warning:</strong> This will permanently delete the application and all associated records/files for{' '}
                                    <strong>{selectedApplication.first_name} {selectedApplication.last_name}</strong>.
                                </p>
                            </div>
                            <div className="flex gap-3 pt-4">
                                <button
                                    onClick={closeAllModals}
                                    className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleDelete}
                                    disabled={isSubmitting}
                                    className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Deleting...
                                        </>
                                    ) : (
                                        <>
                                            <Trash2 className="w-5 h-5" />
                                            Confirm Delete
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Modal */}
            {isEditModalOpen && selectedApplication && editForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                        <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between z-10">
                            <h2 className="text-xl font-semibold text-gray-900">Edit Application</h2>
                            <button onClick={closeAllModals} className="text-gray-400 hover:text-gray-600">
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <form onSubmit={handleUpdate} className="px-6 py-6 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Basic Info */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input
                                        type="text"
                                        value={editForm.firstName}
                                        onChange={(e) => setEditForm({ ...editForm, firstName: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        value={editForm.lastName}
                                        onChange={(e) => setEditForm({ ...editForm, lastName: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        value={editForm.email}
                                        onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Mobile</label>
                                    <input
                                        type="text"
                                        value={editForm.mobile}
                                        onChange={(e) => setEditForm({ ...editForm, mobile: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>

                                {/* Location */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                    <input
                                        type="text"
                                        value={editForm.city}
                                        onChange={(e) => setEditForm({ ...editForm, city: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                                    <input
                                        type="text"
                                        value={editForm.state}
                                        onChange={(e) => setEditForm({ ...editForm, state: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                                    <input
                                        type="text"
                                        value={editForm.country}
                                        onChange={(e) => setEditForm({ ...editForm, country: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                                    <input
                                        type="text"
                                        value={editForm.pincode}
                                        onChange={(e) => setEditForm({ ...editForm, pincode: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>

                                {/* Referral Info */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Referred By Name</label>
                                    <input
                                        type="text"
                                        value={editForm.referredByName || ''}
                                        onChange={(e) => setEditForm({ ...editForm, referredByName: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Referred By Mobile</label>
                                    <input
                                        type="text"
                                        value={editForm.referredByMobile || ''}
                                        onChange={(e) => setEditForm({ ...editForm, referredByMobile: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Status Specific */}
                                {selectedApplication.status === 'approved' && (
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-green-700 mb-1">Member ID (Approved Only)</label>
                                        <input
                                            type="text"
                                            value={editForm.memberId || ''}
                                            onChange={(e) => setEditForm({ ...editForm, memberId: e.target.value })}
                                            className="w-full px-4 py-2 border border-green-300 bg-green-50 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
                                            required
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="flex gap-3 pt-6 border-t border-gray-100">
                                <button
                                    type="button"
                                    onClick={closeAllModals}
                                    className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Saving...
                                        </>
                                    ) : (
                                        <>
                                            <Check className="w-5 h-5" />
                                            Save Changes
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Detail Modal */}
            {isDetailModalOpen && selectedApplication && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-gray-900">Application Details</h2>
                            <button
                                onClick={closeAllModals}
                                className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="px-6 py-6 space-y-6">
                            {/* Photo and basic info */}
                            <div className="flex items-start gap-4">
                                <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                                    {selectedApplication.photo_url && (
                                        <Image
                                            src={selectedApplication.photo_url}
                                            alt={selectedApplication.first_name}
                                            fill
                                            className="object-cover"
                                            sizes="96px"
                                        />
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {selectedApplication.first_name} {selectedApplication.last_name}
                                    </h3>
                                    <p className="text-gray-600">{selectedApplication.email}</p>
                                    <p className="text-gray-600">{selectedApplication.mobile}</p>
                                    <div className="mt-2">{getStatusBadge(selectedApplication.status)}</div>
                                    {selectedApplication.member_id && (
                                        <p className="text-sm text-green-600 mt-1">
                                            Member ID: {selectedApplication.member_id}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Details Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Gender</p>
                                    <p className="text-gray-900">{selectedApplication.gender}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Country</p>
                                    <p className="text-gray-900">{selectedApplication.country}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">State</p>
                                    <p className="text-gray-900">{selectedApplication.state}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">City</p>
                                    <p className="text-gray-900">{selectedApplication.city}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Pincode</p>
                                    <p className="text-gray-900">{selectedApplication.pincode}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Referred By Name</p>
                                    <p className="text-gray-900">{selectedApplication.referred_by_name || 'N/A'}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Referred By Mobile</p>
                                    <p className="text-gray-900">{selectedApplication.referred_by_mobile || 'N/A'}</p>
                                </div>
                            </div>

                            {/* Address */}
                            <div>
                                <p className="text-sm font-medium text-gray-500">Address</p>
                                <p className="text-gray-900">{selectedApplication.address}</p>
                            </div>

                            {/* Files */}
                            <div className="flex gap-4">
                                <a
                                    href={selectedApplication.qualification_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
                                >
                                    <FileText className="w-4 h-4" />
                                    View Qualification
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                                <a
                                    href={selectedApplication.photo_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
                                >
                                    <User className="w-4 h-4" />
                                    View Photo
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>

                            {/* Dates */}
                            <div className="text-sm text-gray-500 text-right italic">
                                <p>Submitted: {new Date(selectedApplication.created_at).toLocaleString()}</p>
                                {selectedApplication.updated_at !== selectedApplication.created_at && (
                                    <p>Updated: {new Date(selectedApplication.updated_at).toLocaleString()}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
