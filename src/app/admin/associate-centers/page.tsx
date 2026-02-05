'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
    AlertCircle,
    Check,
    X,
    Eye,
    Pencil,
    Trash2,
    Building2,
    MapPin,
    Users,
    CheckCircle2,
    Clock,
} from 'lucide-react';
import { DataTable } from '@/components/ui/DataTable';
import { ApproveModal } from '@/components/admin/associate-centers/ApproveModal';
import { DeleteModal } from '@/components/admin/associate-centers/DeleteModal';
import { DetailModal } from '@/components/admin/associate-centers/DetailModal';
import { EditModal } from '@/components/admin/associate-centers/EditModal';
import {
    getAssociateCenterApplications,
    approveAssociateCenterApplication,
    deleteAssociateCenterApplication,
    updateAssociateCenterApplication,
    type AssociateCenterApplication,
    type UpdateAssociateCenterData,
} from '@/app/actions/associateCenterApplications';

type StatusFilter = 'pending' | 'approved' | 'all';

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

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [actionMessage, setActionMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const [stats, setStats] = useState({ total: 0, pending: 0, approved: 0 });

    const fetchApplications = React.useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            // Always fetch 'all' to compute stats accurately
            const data = await getAssociateCenterApplications('all');

            // Compute stats
            setStats({
                total: data.length,
                pending: data.filter(a => a.status === 'pending').length,
                approved: data.filter(a => a.status === 'approved').length,
            });

            // Set filtered applications for the table
            if (statusFilter === 'all') {
                setApplications(data);
            } else {
                setApplications(data.filter(a => a.status === statusFilter));
            }

            // Conditional tab logic for initial load
            if (!hasCheckedDefaultTab) {
                setHasCheckedDefaultTab(true);
                const pendingCount = data.filter(a => a.status === 'pending').length;
                if (pendingCount > 0) {
                    setStatusFilter('pending');
                    setApplications(data.filter(a => a.status === 'pending'));
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

    const handleUpdate = async (data: UpdateAssociateCenterData, logoFile: File | null) => {
        if (!selectedApplication) return;

        setIsSubmitting(true);
        setActionMessage(null);

        try {
            let finalLogoUrl = selectedApplication.logo_url;

            // 1. If a new logo is selected, upload it
            if (logoFile) {
                const formData = new FormData();
                formData.append('file', logoFile);
                formData.append('fileType', 'image');

                const response = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData,
                });

                const result = await response.json();
                if (!response.ok || !result.success) {
                    throw new Error(result.error || 'Failed to upload new logo');
                }
                finalLogoUrl = result.url;
            }

            // 2. Update the application data
            const result = await updateAssociateCenterApplication(
                selectedApplication.id,
                {
                    ...data,
                    logoUrl: finalLogoUrl
                },
                selectedApplication.institution_id
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
            const message = err instanceof Error ? err.message : 'Failed to update application';
            setActionMessage({ type: 'error', text: message });
        } finally {
            setIsSubmitting(false);
        }
    };

    const openEditModal = (app: AssociateCenterApplication) => {
        setSelectedApplication(app);
        setIsEditModalOpen(true);
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'pending':
                return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-yellow-50 text-yellow-700 border border-yellow-100 rounded-full">
                    <Clock size={12} />
                    Pending
                </span>;
            case 'approved':
                return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-green-50 text-green-700 border border-green-100 rounded-full">
                    <CheckCircle2 size={12} />
                    Approved
                </span>;
            case 'rejected':
                return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-red-50 text-red-700 border border-red-100 rounded-full">
                    <X size={12} />
                    Rejected
                </span>;
            default:
                return null;
        }
    };

    return (
        <div className="space-y-8 pb-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Associate Centers</h1>
                    <p className="text-zinc-500 mt-1 text-lg">Manage hospital and clinic applications</p>
                </div>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: 'Total Applications', value: stats.total, icon: Building2, color: 'zinc' },
                    { label: 'Pending Review', value: stats.pending, icon: Clock, color: 'amber' },
                    { label: 'Approved Centers', value: stats.approved, icon: CheckCircle2, color: 'emerald' },
                ].map((item) => {
                    const bgColorClass = item.color === 'zinc' ? 'bg-zinc-50' : item.color === 'amber' ? 'bg-amber-50' : 'bg-emerald-50';
                    const textColorClass = item.color === 'zinc' ? 'text-zinc-600' : item.color === 'amber' ? 'text-amber-600' : 'text-emerald-600';

                    return (
                        <div key={item.label} className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 flex items-center gap-5 hover:shadow-md transition-shadow">
                            <div className={`p-4 rounded-xl ${bgColorClass} ${textColorClass}`}>
                                <item.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-zinc-500">{item.label}</p>
                                <p className="text-2xl font-bold text-zinc-900">{item.value}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Filters and Tabs */}
            <div className="flex items-center justify-between flex-wrap gap-4 border-b border-zinc-200 pb-1">
                <div className="flex gap-1">
                    {(['all', 'pending', 'approved'] as StatusFilter[]).map((status) => (
                        <button
                            key={status}
                            onClick={() => setStatusFilter(status)}
                            className={`px-5 py-2.5 text-sm font-medium rounded-t-xl transition-all capitalize border-b-2 ${statusFilter === status
                                ? 'text-primary border-primary bg-primary/5'
                                : 'text-zinc-500 border-transparent hover:text-zinc-700 hover:bg-zinc-50'
                                }`}
                        >
                            {status}
                        </button>
                    ))}
                </div>
            </div>

            {/* Action Message */}
            {actionMessage && (
                <div className={`p-4 rounded-xl shadow-sm border flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300 ${actionMessage.type === 'success'
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-rose-50 border-rose-200 text-rose-900'
                    }`}>
                    {actionMessage.type === 'success' ? <CheckCircle2 className="w-5 h-5 text-emerald-600" /> : <AlertCircle className="w-5 h-5 text-rose-600" />}
                    <p className="text-sm font-semibold">{actionMessage.text}</p>
                </div>
            )}

            {/* Error State */}
            {error && (
                <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6 flex items-start gap-4 shadow-sm animate-in zoom-in-95 duration-200">
                    <AlertCircle className="w-6 h-6 text-rose-600 shrink-0" />
                    <div className="flex-1">
                        <p className="text-sm font-bold text-rose-900">Error Loading Data</p>
                        <p className="text-sm text-rose-700 mt-1">{error}</p>
                    </div>
                    <button
                        onClick={fetchApplications}
                        className="text-sm font-bold text-rose-700 hover:text-rose-900 underline underline-offset-4"
                    >
                        Retry
                    </button>
                </div>
            )}

            {/* Applications Table */}
            {!error && (
                <DataTable<AssociateCenterApplication>
                    columns={[
                        {
                            id: 'logo',
                            header: 'Logo',
                            cell: (app) => (
                                <div className="w-12 h-12 relative rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200 shadow-sm">
                                    <Image
                                        src={app.logo_url}
                                        alt={app.hospital_name}
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                </div>
                            ),
                        },
                        {
                            id: 'hospital',
                            header: 'Hospital / Centre',
                            cell: (app) => (
                                <div className="flex flex-col">
                                    <span className="font-bold text-zinc-900 leading-tight">{app.hospital_name}</span>
                                    <span className="text-sm text-zinc-500 mt-0.5 flex items-center gap-1">
                                        <Users size={12} className="text-zinc-400" />
                                        Admin: {app.administrator_name}
                                    </span>
                                </div>
                            ),
                        },
                        {
                            id: 'location',
                            header: 'Location',
                            cell: (app) => (
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-zinc-700 flex items-center gap-1">
                                        <MapPin size={12} className="text-zinc-400" />
                                        {app.district}
                                    </span>
                                    <span className="text-xs text-zinc-500 ml-4">{app.state}</span>
                                </div>
                            ),
                        },
                        {
                            id: 'contact',
                            header: 'Contact',
                            cell: (app) => (
                                <div className="flex flex-col">
                                    <span className="text-sm text-zinc-900 font-medium">{app.phone_number}</span>
                                    <span className="text-xs text-zinc-500 truncate max-w-[180px]">{app.email}</span>
                                </div>
                            ),
                        },
                        {
                            id: 'status',
                            header: 'Status',
                            cell: (app) => getStatusBadge(app.status),
                        },
                        {
                            id: 'actions',
                            header: 'Actions',
                            cell: (app) => (
                                <div className="flex items-center gap-1.5">
                                    <button
                                        onClick={() => {
                                            setSelectedApplication(app);
                                            setIsDetailModalOpen(true);
                                        }}
                                        className="p-2 text-zinc-600 hover:text-primary hover:bg-primary/10 rounded-lg transition-all cursor-pointer"
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
                                            className="p-2 text-emerald-600 hover:text-white hover:bg-emerald-600 rounded-lg transition-all cursor-pointer"
                                            title="Approve"
                                        >
                                            <Check size={18} />
                                        </button>
                                    )}
                                    <button
                                        onClick={() => openEditModal(app)}
                                        className="p-2 text-blue-600 hover:text-white hover:bg-blue-600 rounded-lg transition-all cursor-pointer"
                                        title="Edit"
                                    >
                                        <Pencil size={18} />
                                    </button>
                                    <button
                                        onClick={() => {
                                            setSelectedApplication(app);
                                            setIsDeleteModalOpen(true);
                                        }}
                                        className="p-2 text-rose-600 hover:text-white hover:bg-rose-600 rounded-lg transition-all cursor-pointer"
                                        title="Delete"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            ),
                        },
                    ]}
                    data={applications}
                    keyAccessor="id"
                    isLoading={isLoading}
                    loadingMessage="Loading applications..."
                    emptyIcon={<Building2 className="w-16 h-16 text-zinc-300" />}
                    emptyTitle="No Applications Found"
                    emptyDescription={
                        statusFilter === 'all'
                            ? 'No applications have been submitted yet.'
                            : `There are currently no ${statusFilter} applications to display.`
                    }
                />
            )}

            {/* Approve Modal */}
            {isApproveModalOpen && selectedApplication && (
                <ApproveModal
                    application={selectedApplication}
                    isSubmitting={isSubmitting}
                    onClose={() => {
                        setIsApproveModalOpen(false);
                        setSelectedApplication(null);
                    }}
                    onApprove={handleApprove}
                />
            )}

            {/* Delete Modal */}
            {isDeleteModalOpen && selectedApplication && (
                <DeleteModal
                    application={selectedApplication}
                    isSubmitting={isSubmitting}
                    onClose={() => {
                        setIsDeleteModalOpen(false);
                        setSelectedApplication(null);
                    }}
                    onDelete={handleDelete}
                />
            )}

            {/* Detail Modal */}
            {isDetailModalOpen && selectedApplication && (
                <DetailModal
                    application={selectedApplication}
                    onClose={() => {
                        setIsDetailModalOpen(false);
                        setSelectedApplication(null);
                    }}
                    getStatusBadge={getStatusBadge}
                />
            )}

            {/* Edit Modal */}
            {isEditModalOpen && selectedApplication && (
                <EditModal
                    application={selectedApplication}
                    isSubmitting={isSubmitting}
                    onClose={() => {
                        setIsEditModalOpen(false);
                        setSelectedApplication(null);
                    }}
                    onUpdate={handleUpdate}
                />
            )}
        </div>
    );
}
