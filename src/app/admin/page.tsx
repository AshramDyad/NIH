import React from "react";
import { LayoutDashboard, Users, FileText, Calendar } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Members"
          value="1,234"
          icon={Users}
          trend="+12% from last month"
        />
        <StatCard
          title="Files Uploaded"
          value="567"
          icon={FileText}
          trend="+23% from last month"
        />
        <StatCard
          title="Upcoming Events"
          value="12"
          icon={Calendar}
          trend="3 this week"
        />
        <StatCard
          title="Active Users"
          value="89"
          icon={LayoutDashboard}
          trend="+5% from yesterday"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Recent Activity
          </h3>
          <p className="text-sm text-gray-600">
            Recent uploads, user registrations, and system events will appear
            here.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Quick Actions
          </h3>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 bg-orange-50 hover:bg-orange-100 text-primary rounded-lg transition-colors font-medium">
              Upload New File
            </button>
            <button className="w-full text-left px-4 py-3 bg-secondary/10 hover:bg-secondary/20 text-secondary rounded-lg transition-colors font-medium">
              Add New Member
            </button>
            <button className="w-full text-left px-4 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors font-medium">
              Create Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon: Icon,
  trend,
}: {
  title: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  trend: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
      <p className="text-sm text-secondary font-medium">{trend}</p>
    </div>
  );
}
