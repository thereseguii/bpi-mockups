import React, { useState } from "react";
import { 
  User, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  CheckCircle, 
  AlertTriangle, 
  Bell, 
  Plus, 
  MessageSquare, 
  BarChart3 
} from "lucide-react";

// ============ LOGIN PAGE ============
function LoginPage({ onLogin }) {
  const [role, setRole] = useState("employee");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(role);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-2xl">BPI</span>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">Service Portal Login</h1>
        <p className="text-sm text-center text-gray-600 mb-6">Centralized Issue & Complaint Reporting</p>

        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 mb-2">Select Your Role</p>
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={() => setRole("employee")}
              className={`flex-1 flex items-center justify-center border rounded-lg py-2.5 text-sm font-medium transition-colors ${
                role === "employee"
                  ? "border-red-600 text-red-600 bg-red-50"
                  : "border-gray-300 text-gray-600 hover:border-gray-400"
              }`}
            >
              <User className="w-4 h-4 mr-2" />
              Employee
            </button>
            <button
              type="button"
              onClick={() => setRole("admin")}
              className={`flex-1 flex items-center justify-center border rounded-lg py-2.5 text-sm font-medium transition-colors ${
                role === "admin"
                  ? "border-red-600 text-red-600 bg-red-50"
                  : "border-gray-300 text-gray-600 hover:border-gray-400"
              }`}
            >
              <ShieldCheck className="w-4 h-4 mr-2" />
              Admin
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@bpi.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg py-2.5 transition-colors mt-6"
        >
          {role === "employee" ? "Login" : "Login"}
        </button>
      </div>
    </div>
  );
}

// ============ ADMIN DASHBOARD ============
function AdminDashboard({ onLogout }) {
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
          <div className="bg-white rounded-xl p-5 border border-gray-200">
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

          <div className="bg-white rounded-xl p-5 border border-gray-200">
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

          <div className="bg-white rounded-xl p-5 border border-gray-200">
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

          <div className="bg-white rounded-xl p-5 border border-gray-200">
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

        <div className="bg-white rounded-xl border border-gray-200 mb-8">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
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
                      <span className="px-2 py-0.5 bg-red-600 text-white text-xs font-semibold rounded">
                        High
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">Service Outage - Juan dela Cruz</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full whitespace-nowrap ml-4">
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
                      <span className="px-2 py-0.5 bg-yellow-500 text-white text-xs font-semibold rounded">
                        Medium
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">Customer Complaint - Maria Santos</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full whitespace-nowrap ml-4">
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
                      <span className="px-2 py-0.5 bg-red-600 text-white text-xs font-semibold rounded">
                        High
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">Service Outage - Jose Rizal</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full whitespace-nowrap ml-4">
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
                      <span className="px-2 py-0.5 bg-gray-400 text-white text-xs font-semibold rounded">
                        Low
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">Customer Complaint - Ana Garcia</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full whitespace-nowrap ml-4">
                  In Progress
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button className="bg-white rounded-xl p-8 border border-gray-200 hover:border-red-300 hover:shadow-md transition-all group">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                <Plus className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">Submit New Report</h3>
              <p className="text-sm text-gray-500">Report a service issue or complaint</p>
            </div>
          </button>

          <button className="bg-white rounded-xl p-8 border border-gray-200 hover:border-yellow-300 hover:shadow-md transition-all group">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-yellow-100 transition-colors">
                <MessageSquare className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">View All Reports</h3>
              <p className="text-sm text-gray-500">Browse and filter all reports</p>
            </div>
          </button>

          <button className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
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

// ============ EMPLOYEE DASHBOARD ============
function EmployeeDashboard({ onLogout }) {
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

// ============ MAIN APP ============
export default function App() {
  const [currentPage, setCurrentPage] = useState("login");

  const handleLogin = (role) => {
    if (role === "employee") {
      setCurrentPage("employee");
    } else {
      setCurrentPage("admin");
    }
  };

  const handleLogout = () => {
    setCurrentPage("login");
  };

  if (currentPage === "login") {
    return <LoginPage onLogin={handleLogin} />;
  }

  if (currentPage === "admin") {
    return <AdminDashboard onLogout={handleLogout} />;
  }

  if (currentPage === "employee") {
    return <EmployeeDashboard onLogout={handleLogout} />;
  }

  return null;
}