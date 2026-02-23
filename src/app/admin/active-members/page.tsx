"use client";

import React, { useState, useEffect, useTransition } from "react";
import Image from "next/image";
import {
    Plus,
    Image as ImageIcon,
    Trash2,
    Loader2,
    AlertCircle,
    Pencil,
} from "lucide-react";
import { FileUpload } from "@/components/shared/FileUpload";
import { DataTable } from "@/components/ui/DataTable";
import { useToast } from "@/components/ui/Toast";
import {
    getActiveMembers,
    deleteActiveMember,
    addActiveMember,
    updateActiveMember,
    type ActiveMember,
} from "@/app/actions/activeMembers";
import type { UploadResult } from "@/types/file-upload";

export default function AdminActiveMembersPage() {
    const [members, setMembers] = useState<ActiveMember[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [, startTransition] = useTransition();
    const { showToast } = useToast();

    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingMember, setEditingMember] = useState<ActiveMember | null>(
        null
    );
    const [formData, setFormData] = useState({
        name: "",
        memberNumber: "",
        imageUrl: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Fetch members on mount
    useEffect(() => {
        fetchMembers();
    }, []);

    // Populate form when editing member changes
    useEffect(() => {
        if (editingMember) {
            setFormData({
                name: editingMember.name,
                memberNumber: editingMember.member_number,
                imageUrl: editingMember.image_url,
            });
            setIsModalOpen(true);
        }
    }, [editingMember]);

    const fetchMembers = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const data = await getActiveMembers();
            setMembers(data);
        } catch (err) {
            setError("Failed to load active members. Please refresh the page.");
            console.error("Error fetching members:", err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDeleteMember = async (id: number, name: string) => {
        if (!confirm(`Are you sure you want to delete ${name}?`)) {
            return;
        }

        try {
            const result = await deleteActiveMember(id.toString());

            if (result.success) {
                startTransition(() => {
                    setMembers((prev) => prev.filter((member) => member.id !== id));
                });
                showToast({
                    type: "success",
                    title: "Member Deleted",
                    message: `${name} has been removed successfully.`,
                });
            } else {
                showToast({
                    type: "error",
                    title: "Delete Failed",
                    message: result.message,
                });
            }
        } catch (err) {
            console.error("Error deleting member:", err);
            showToast({
                type: "error",
                title: "Delete Failed",
                message: "Failed to delete member. Please try again.",
            });
        }
    };

    const handleEditMember = (member: ActiveMember) => {
        setEditingMember(member);
    };

    const handleUploadSuccess = (result: UploadResult) => {
        setFormData((prev) => ({ ...prev, imageUrl: result.fileUrl }));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formDataObj = new FormData();
        formDataObj.append("name", formData.name);
        formDataObj.append("memberNumber", formData.memberNumber);
        formDataObj.append("imageUrl", formData.imageUrl);

        try {
            let result;
            if (editingMember) {
                result = await updateActiveMember(
                    editingMember.id.toString(),
                    formDataObj
                );
            } else {
                result = await addActiveMember(formDataObj);
            }

            if (result.success) {
                setIsModalOpen(false);
                setEditingMember(null);
                setFormData({
                    name: "",
                    memberNumber: "",
                    imageUrl: "",
                });
                startTransition(() => {
                    fetchMembers();
                });
                showToast({
                    type: "success",
                    title: editingMember ? "Member Updated" : "Member Added",
                    message: result.message,
                });
            } else {
                showToast({
                    type: "error",
                    title: "Save Failed",
                    message: result.message,
                });
            }
        } catch (err) {
            console.error("Error saving member:", err);
            showToast({
                type: "error",
                title: "Save Failed",
                message: "Failed to save member. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingMember(null);
        setFormData({
            name: "",
            memberNumber: "",
            imageUrl: "",
        });
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Active Members</h1>
                    <p className="text-gray-600 mt-1">
                        Manage active members and their information
                    </p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 bg-primary hover:bg-primary/90 cursor-pointer text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
                >
                    <Plus className="w-5 h-5" />
                    Add Member
                </button>
            </div>

            {/* Error State */}
            {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div className="flex-1">
                        <p className="text-sm font-medium text-red-900">
                            Error Loading Data
                        </p>
                        <p className="text-sm text-red-700 mt-1">{error}</p>
                    </div>
                    <button
                        onClick={fetchMembers}
                        className="text-sm font-medium text-red-700 hover:text-red-900 underline"
                    >
                        Retry
                    </button>
                </div>
            )}

            {/* Members Table */}
            {!error && (
                <DataTable<ActiveMember>
                    columns={[
                        {
                            id: "image",
                            header: "Image",
                            cell: (member) => (
                                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                                    {member.image_url ? (
                                        <Image
                                            src={member.image_url}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <ImageIcon className="w-8 h-8 text-gray-400" />
                                        </div>
                                    )}
                                </div>
                            ),
                        },
                        {
                            id: "name",
                            header: "Name",
                            cell: (member) => (
                                <p className="text-sm font-medium text-gray-900">
                                    {member.name}
                                </p>
                            ),
                        },
                        {
                            id: "member_number",
                            header: "Member Number",
                            cell: (member) => (
                                <p className="text-sm text-gray-600">{member.member_number}</p>
                            ),
                        },
                        {
                            id: "actions",
                            header: "Actions",
                            cell: (member) => (
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => handleEditMember(member)}
                                        className="flex items-center gap-2 text-primary bg-primary/10 hover:bg-primary/20 cursor-pointer px-3 py-2 rounded-lg transition-colors font-medium"
                                    >
                                        <Pencil className="w-4 h-4" />
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteMember(member.id, member.name)}
                                        className="flex items-center gap-2 text-red-600 bg-red-600/10 hover:bg-red-600/20 cursor-pointer px-3 py-2 rounded-lg transition-colors font-medium"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                        Delete
                                    </button>
                                </div>
                            ),
                        },
                    ]}
                    data={members}
                    keyAccessor="id"
                    isLoading={isLoading}
                    loadingMessage="Loading members..."
                    emptyIcon={<Plus className="w-16 h-16 text-gray-400" />}
                    emptyTitle="No Members Yet"
                    emptyDescription="Get started by adding your first active member."
                />
            )}

            {/* Add/Edit Member Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-gray-900">
                                {editingMember ? "Edit Active Member" : "Add Active Member"}
                            </h2>
                            <button
                                onClick={handleCloseModal}
                                className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="px-6 py-6 space-y-6">
                            {/* Image Upload */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Member Image
                                </label>
                                <FileUpload
                                    fileType="image"
                                    onUploadSuccess={handleUploadSuccess}
                                />
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="John Doe"
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                                    />
                                </div>

                                {/* Member Number */}
                                <div>
                                    <label
                                        htmlFor="memberNumber"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Member Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="memberNumber"
                                        name="memberNumber"
                                        value={formData.memberNumber}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="NIH/DL/1234"
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">
                                        Format: NIH/XX/#### (e.g., NIH/DL/1234)
                                    </p>
                                </div>

                                {/* Submit Button */}
                                <div className="flex gap-3 pt-4">
                                    <button
                                        type="button"
                                        onClick={handleCloseModal}
                                        className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting || !formData.imageUrl}
                                        className="flex-1 bg-primary hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                {editingMember ? "Updating..." : "Adding..."}
                                            </>
                                        ) : editingMember ? (
                                            "Update Member"
                                        ) : (
                                            "Add Member"
                                        )}
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
