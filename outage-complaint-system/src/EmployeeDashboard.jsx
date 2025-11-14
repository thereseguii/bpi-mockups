import React from "react";

export default function EmployeeDashboard({ onLogout }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="w-full bg-white shadow-sm">
        <div className="w-full px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">BPI</span>
            </div>
            <div>
              <h1 className="text-base font-bold text-gray-900">BPI Service Portal - Employee</h1>
              <p className="text-xs text-gray-500">Centralized Issue Reporting</p>
            </div>
          </div>
          <button 
            onClick={onLogout}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="flex-grow flex justify-center items-start px-6 py-12">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Submit New Report</h2>
          <p className="text-sm text-gray-600 mb-6">Report a service issue or customer complaint</p>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Issue Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Brief summary of the issue"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category <span className="text-red-500">*</span>
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-red-500">
                  <option value="">Select category</option>
                  <option>Service Outage</option>
                  <option>Customer Complaint</option>
                  <option>Technical Issue</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Urgency <span className="text-red-500">*</span>
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-red-500">
                  <option value="">Select urgency</option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Customer Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Full name of affected customer"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={5}
                placeholder="Provide detailed description of the issue or complaint"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>

            <div className="flex justify-end space-x-3 pt-2">
              <button className="px-5 py-2.5 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                Cancel
              </button>
              <button className="px-6 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium shadow-sm transition-colors">
                Submit Report
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}