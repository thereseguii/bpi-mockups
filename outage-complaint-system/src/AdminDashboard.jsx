import React from "react";
import { 
  Clock, 
  TrendingUp, 
  CheckCircle, 
  AlertTriangle, 
  Bell, 
  Plus, 
  MessageSquare, 
  BarChart3 
} from "lucide-react";

export default function AdminDashboard({ onLogout }) {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <header className="w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">BPI Service Portal</h1>
                <p className="text-xs text-gray-500">Centralized Issue & Complaint Reporting</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                  1
                </span>
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                New Report
              </button>
              <button 
                onClick={onLogout}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-xs text-gray-500 mb-1">Open Issues</p>
                <p className="text-3xl font-bold text-gray-900">24</p>
              </div>
              <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-xs text-gray-500 mb-1">In Progress</p>
                <p className="text-3xl font-bold text-gray-900">12</p>
              </div>
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-xs text-gray-500 mb-1">Resolved Today</p>
                <p className="text-3xl font-bold text-gray-900">8</p>
              </div>
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-xs text-gray-500 mb-1">Escalated</p>
                <p className="text-3xl font-bold text-gray-900">3</p>
              </div>
              <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-900">Recent Reports</h2>
            <button className="text-sm text-gray-600 hover:text-gray-900 font-medium">
              View All
            </button>
          </div>

          <div className="divide-y divide-gray-100">
            <div className="px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-bold text-gray-900 text-sm">R-001</span>
                      <span className="px-2.5 py-0.5 bg-red-600 text-white text-xs font-semibold rounded-md">
                        High
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">Service Outage - Juan dela Cruz</p>
                  </div>
                </div>
                <span className="px-4 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full whitespace-nowrap ml-4">
                  In Progress
                </span>
              </div>
            </div>

            <div className="px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-bold text-gray-900 text-sm">R-002</span>
                      <span className="px-2.5 py-0.5 bg-yellow-500 text-white text-xs font-semibold rounded-md">
                        Medium
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">Customer Complaint - Maria Santos</p>
                  </div>
                </div>
                <span className="px-4 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full whitespace-nowrap ml-4">
                  Pending
                </span>
              </div>
            </div>

            <div className="px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-bold text-gray-900 text-sm">R-003</span>
                      <span className="px-2.5 py-0.5 bg-red-600 text-white text-xs font-semibold rounded-md">
                        High
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">Service Outage - Jose Rizal</p>
                  </div>
                </div>
                <span className="px-4 py-1 bg-green-600 text-white text-xs font-semibold rounded-full whitespace-nowrap ml-4">
                  Resolved
                </span>
              </div>
            </div>

            <div className="px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-bold text-gray-900 text-sm">R-004</span>
                      <span className="px-2.5 py-0.5 bg-gray-400 text-white text-xs font-semibold rounded-md">
                        Low
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">Customer Complaint - Ana Garcia</p>
                  </div>
                </div>
                <span className="px-4 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full whitespace-nowrap ml-4">
                  In Progress
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all group">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                <Plus className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">Submit New Report</h3>
              <p className="text-sm text-gray-500">Report a service issue or complaint</p>
            </div>
          </button>

          <button className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all group">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-yellow-100 transition-colors">
                <MessageSquare className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">View All Reports</h3>
              <p className="text-sm text-gray-500">Browse and filter all reports</p>
            </div>
          </button>

          <button className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all group">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">Track Progress</h3>
              <p className="text-sm text-gray-500">Monitor report resolution status</p>
            </div>
          </button>
        </div>
      </main>
    </div>
  );
}