'use client';

import React, { useState, useEffect, useTransition } from 'react';
import Image from 'next/image';
import { Plus, Image as ImageIcon, Trash2, Loader2, AlertCircle, Building2, Pencil, ExternalLink } from 'lucide-react';
import { FileUpload } from '@/components/shared/FileUpload';
import { getInstitutionMembers, deleteInstitutionMember, addInstitutionMember, updateInstitutionMember, type InstitutionMember } from '@/app/actions/institutionMembers';
import type { UploadResult } from '@/types/file-upload';

export default function AdminInstitutionMembersPage() {
    const [institutions, setInstitutions] = useState<InstitutionMember[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [, startTransition] = useTransition();

    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingInstitution, setEditingInstitution] = useState<InstitutionMember | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        url: '',
        imageUrl: '',
    });
    const [uploadResult, setUploadResult] = useState<UploadResult | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    // Fetch institutions on mount
    useEffect(() => {
        fetchInstitutions();
    }, []);

    // Populate form when editing institution changes
    useEffect(() => {
        if (editingInstitution) {
            setFormData({
                name: editingInstitution.name,
                address: editingInstitution.address,
                url: editingInstitution.url,
                imageUrl: editingInstitution.image_url,
            });
            // Set upload result to show existing image preview
            if (editingInstitution.image_url) {
                setUploadResult({
                    success: true,
                    fileUrl: editingInstitution.image_url,
                    fileKey: editingInstitution.image_url,
                    fileName: editingInstitution.name,
                    fileSize: 0,
                    fileType: 'image',
                    uploadedAt: editingInstitution.created_at,
                });
            }
            setIsModalOpen(true);
        }
    }, [editingInstitution]);

    const fetchInstitutions = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const data = await getInstitutionMembers();
            setInstitutions(data);
        } catch (err) {
            setError('Failed to load institutions. Please refresh the page.');
            console.error('Error fetching institutions:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id: number, name: string) => {
        if (!confirm(`Are you sure you want to delete ${name}?`)) {
            return;
        }

        try {
            const result = await deleteInstitutionMember(id.toString());

            if (result.success) {
                startTransition(() => {
                    setInstitutions((prev) => prev.filter((inst) => inst.id !== id));
                });
            } else {
                alert(result.message);
            }
        } catch (err) {
            console.error('Error deleting institution:', err);
            alert('Failed to delete institution. Please try again.');
        }
    };

    const handleEdit = (institution: InstitutionMember) => {
        setEditingInstitution(institution);
    };

    const handleUploadSuccess = (result: UploadResult) => {
        setUploadResult(result);
        setFormData((prev) => ({ ...prev, imageUrl: result.fileUrl }));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage(null);

        const formDataObj = new FormData();
        formDataObj.append('name', formData.name);
        formDataObj.append('address', formData.address);
        formDataObj.append('url', formData.url);
        formDataObj.append('imageUrl', formData.imageUrl);

        try {
            let result;
            if (editingInstitution) {
                result = await updateInstitutionMember(editingInstitution.id.toString(), formDataObj);
            } else {
                result = await addInstitutionMember(formDataObj);
            }

            if (result.success) {
                setSubmitMessage({ type: 'success', text: result.message });
                setIsModalOpen(false);
                setEditingInstitution(null);
                // Reset form
                setFormData({
                    name: '',
                    address: '',
                    url: '',
                    imageUrl: '',
                });
                setUploadResult(null);
                // Refresh list
                startTransition(() => {
                    fetchInstitutions();
                });
            } else {
                setSubmitMessage({ type: 'error', text: result.message });
            }
        } catch (err) {
            console.error('Error saving institution:', err);
            setSubmitMessage({ type: 'error', text: 'Failed to save institution. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingInstitution(null);
        setFormData({
            name: '',
            address: '',
            url: '',
            imageUrl: '',
        });
        setUploadResult(null);
        setSubmitMessage(null);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Institution Members</h1>
                    <p className="text-gray-600 mt-1">Manage institutions and centers registered with NIH</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 bg-primary hover:bg-orange-600 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
                >
                    <Plus className="w-5 h-5" />
                    Add Institution
                </button>
            </div>

            {/* Error State */}
            {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div className="flex-1">
                        <p className="text-sm font-medium text-red-900">Error Loading Data</p>
                        <p className="text-sm text-red-700 mt-1">{error}</p>
                    </div>
                    <button
                        onClick={fetchInstitutions}
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
                    <span className="ml-3 text-gray-600">Loading institutions...</span>
                </div>
            )}

            {/* Institutions Table */}
            {!isLoading && !error && institutions.length === 0 ? (
                <div className="bg-white border border-gray-200 rounded-xl p-12 text-center">
                    <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No Institutions Yet</h3>
                    <p className="text-gray-600 mb-4">Get started by adding your first institution member.</p>
                </div>
            ) : (institutions.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Logo</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Center Name</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Address</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">URL</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {institutions.map((inst) => (
                                    <tr key={inst.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="relative w-16 h-12 bg-gray-100 rounded overflow-hidden">
                                                {inst.image_url ? (
                                                    <Image
                                                        src={inst.image_url}
                                                        alt={inst.name}
                                                        fill
                                                        className="object-contain"
                                                        unoptimized
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center">
                                                        <ImageIcon className="w-6 h-6 text-gray-400" />
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm font-medium text-gray-900">{inst.name}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-sm text-gray-600 max-w-xs truncate">{inst.address}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <a
                                                href={inst.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-medium"
                                            >
                                                Visit <ExternalLink className="w-3 h-3" />
                                            </a>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => handleEdit(inst)}
                                                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors font-medium"
                                                >
                                                    <Pencil className="w-4 h-4" />
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(inst.id, inst.name)}
                                                    className="flex items-center gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors font-medium"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-gray-900">
                                {editingInstitution ? 'Edit Institution' : 'Add Institution'}
                            </h2>
                            <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="px-6 py-6 space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Institution Logo</label>
                                <FileUpload fileType="image" onUploadSuccess={handleUploadSuccess} />
                                {uploadResult && (
                                    <div className="mt-4 flex items-center gap-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                                        <Image src={uploadResult.fileUrl} alt="Preview" width={80} height={60} className="object-contain bg-white rounded border" unoptimized />
                                        <div className="flex-1 overflow-hidden">
                                            <p className="text-sm font-medium text-green-900">Logo Uploaded</p>
                                            <p className="text-xs text-green-700 truncate">{uploadResult.fileUrl}</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Center Name</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g. Bharatiya Vidya Bhavan" />
                                </div>

                                <div>
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                                    <textarea id="address" name="address" value={formData.address} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 h-24" placeholder="Full address of the center" />
                                </div>

                                <div>
                                    <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">URL</label>
                                    <input type="url" id="url" name="url" value={formData.url} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" placeholder="https://example.com" />
                                </div>

                                {submitMessage && (
                                    <div className={`p-4 rounded-lg ${submitMessage.type === 'success' ? 'bg-green-50 text-green-900 border border-green-200' : 'bg-red-50 text-red-900 border border-red-200'}`}>
                                        <p className="text-sm font-medium">{submitMessage.text}</p>
                                    </div>
                                )}

                                <div className="flex gap-3 pt-4">
                                    <button type="button" onClick={handleCloseModal} className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">Cancel</button>
                                    <button type="submit" disabled={isSubmitting || (!formData.imageUrl && !editingInstitution)} className="flex-1 bg-primary hover:bg-orange-600 disabled:bg-gray-400 text-white font-medium py-2.5 px-4 rounded-lg flex items-center justify-center gap-2">
                                        {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> {editingInstitution ? 'Updating...' : 'Adding...'}</> : (editingInstitution ? 'Update' : 'Add Institution')}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
