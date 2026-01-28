
import React from 'react';
import { BarChart3 } from 'lucide-react';

export default function AnalyticsAdminPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="bg-primary/5 p-6 rounded-full mb-6">
                <BarChart3 className="w-16 h-16 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Analytics Dashboard</h1>
            <p className="text-gray-500 max-w-md text-lg">
                The analytics dashboard is currently under development. Comprehensive insights and statistics will be available here soon.
            </p>
        </div>
    );
}
