'use client';

import React, { useState, useEffect, useTransition } from 'react';
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
} from 'lucide-react';
import {
    getYPMApplications,
    approveYPMApplication,
    rejectYPMApplication,
    type YPMApplication,
} from '@/app/actions/ypmApplications';

type StatusFilter = 'pending' | 'approved' | 'rejected' | 'all';

export default function AdminYPMApplicationsPage() {
    const [applications, setApplications] = useState<YPMApplication[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [, startTransition] = useTransition();

    // Filter state
    const [statusFilter, setStatusFilter] = useState<StatusFilter>('pending');

    // Modal states
    const [selectedApplication, setSelectedApplication] = useState<YPMApplication | null>(null);
    const [isApproveModalOpen, setIsApproveModalOpen] = useState(false);
    const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [memberId, setMemberId] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [actionMessage, setActionMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    // Fetch applications on mount and filter change
    useEffect(() => {
        fetchApplications();
    }, [statusFilter]);

    const fetchApplications = async () => {
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
    };

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
                // Refresh list
                startTransition(() => {
                    fetchApplications();
                });
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

    const handleReject = async () => {
        if (!selectedApplication) return;

        setIsSubmitting(true);
        setActionMessage(null);

        try {
            const result = await rejectYPMApplication(selectedApplication.id);

            if (result.success) {
                setActionMessage({ type: 'success', text: result.message });
                setIsRejectModalOpen(false);
                setSelectedApplication(null);
                // Refresh list
                startTransition(() => {
                    fetchApplications();
                });
            } else {
                setActionMessage({ type: 'error', text: result.message });
            }
        } catch (err) {
            console.error('Error rejecting application:', err);
            setActionMessage({ type: 'error', text: 'Failed to reject application' });
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

    const openRejectModal = (app: YPMApplication) => {
        setSelectedApplication(app);
        setActionMessage(null);
        setIsRejectModalOpen(true);
    };

    const openDetailModal = (app: YPMApplication) => {
        setSelectedApplication(app);
        setIsDetailModalOpen(true);
    };

    const closeAllModals = () => {
        setIsApproveModalOpen(false);
        setIsRejectModalOpen(false);
        setIsDetailModalOpen(false);
        setSelectedApplication(null);
        setMemberId('');
        setActionMessage(null);
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
                                                            alt={app.full_name}
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
                                                    {app.full_name} {app.last_name}
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

                                                    {/* Qualification Link */}
                                                    <a
                                                        href={app.qualification_url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                                                        title="View Qualification"
                                                    >
                                                        <FileText className="w-4 h-4" />
                                                    </a>

                                                    {/* Approve/Reject only for pending */}
                                                    {app.status === 'pending' && (
                                                        <>
                                                            <button
                                                                onClick={() => openApproveModal(app)}
                                                                className="p-2 text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors"
                                                                title="Approve"
                                                            >
                                                                <Check className="w-4 h-4" />
                                                            </button>
                                                            <button
                                                                onClick={() => openRejectModal(app)}
                                                                className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                                                                title="Reject"
                                                            >
                                                                <X className="w-4 h-4" />
                                                            </button>
                                                        </>
                                                    )}
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
                                Approving application for <strong>{selectedApplication.full_name} {selectedApplication.last_name}</strong>
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
                            {actionMessage && (
                                <div className={`p-3 rounded-lg text-sm ${actionMessage.type === 'success'
                                        ? 'bg-green-50 text-green-900'
                                        : 'bg-red-50 text-red-900'
                                    }`}>
                                    {actionMessage.text}
                                </div>
                            )}
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

            {/* Reject Modal */}
            {isRejectModalOpen && selectedApplication && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-900">Reject Application</h2>
                        </div>
                        <div className="px-6 py-6 space-y-4">
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                <p className="text-sm text-red-900">
                                    <strong>Warning:</strong> This will permanently delete the application and all associated files for{' '}
                                    <strong>{selectedApplication.full_name} {selectedApplication.last_name}</strong>.
                                </p>
                            </div>
                            {actionMessage && (
                                <div className={`p-3 rounded-lg text-sm ${actionMessage.type === 'success'
                                        ? 'bg-green-50 text-green-900'
                                        : 'bg-red-50 text-red-900'
                                    }`}>
                                    {actionMessage.text}
                                </div>
                            )}
                            <div className="flex gap-3 pt-4">
                                <button
                                    onClick={closeAllModals}
                                    className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleReject}
                                    disabled={isSubmitting}
                                    className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Rejecting...
                                        </>
                                    ) : (
                                        <>
                                            <X className="w-5 h-5" />
                                            Reject & Delete
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
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
                                            alt={selectedApplication.full_name}
                                            fill
                                            className="object-cover"
                                            sizes="96px"
                                        />
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {selectedApplication.full_name} {selectedApplication.last_name}
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
                                    <p className="text-sm font-medium text-gray-500">Referred By</p>
                                    <p className="text-gray-900">{selectedApplication.referred_by || 'N/A'}</p>
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
                            <div className="text-sm text-gray-500">
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
