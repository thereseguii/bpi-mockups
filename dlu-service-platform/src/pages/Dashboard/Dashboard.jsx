import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    {
      label: 'Active Requests',
      value: '12',
      status: 'In progress',
      icon: '📋',
    },
    {
      label: 'Total Deposits (MTD)',
      value: '₱125M',
      status: '+12% from last month',
      statusColor: 'text-green-600',
      icon: '📈',
    },
    {
      label: 'Total Withdrawals (MTD)',
      value: '₱85M',
      status: 'Normal activity',
      icon: '📊',
    },
    {
      label: 'Open Complaints',
      value: '2',
      status: 'Being resolved',
      icon: '⚠️',
    },
  ];

  const recentActivity = [
    {
      id: 'REQ-2025-004',
      type: 'Withdrawal Request',
      status: 'Approved',
      statusColor: 'bg-green-500',
    },
    {
      id: 'REQ-2025-003',
      type: 'Deposit Request',
      status: 'In Transit',
      statusColor: 'bg-blue-500',
    },
    {
      id: 'CMP-2025-002',
      type: 'Service Complaint',
      status: 'In Progress',
      statusColor: 'bg-orange-500',
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-red-600 text-white sticky top-0 z-10">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white text-red-600 px-3 py-1 rounded font-bold">
                BPI
              </div>
              <div>
                <h1 className="font-semibold text-lg">Bank of the Philippine Islands</h1>
                <p className="text-sm text-red-100">Corporate Service Portal</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <button className="text-white hover:text-red-100">Service Portal</button>
              <button className="text-white hover:text-red-100">Track Requests</button>
              <button className="text-white hover:text-red-100">Complaints</button>
              <button className="text-white hover:text-red-100">Admin</button>
              <button className="flex items-center gap-2 text-white hover:text-red-100">
                <span>👤</span>
                <span>Profile</span>
              </button>
              <button className="flex items-center gap-2 text-white hover:text-red-100">
                <span>🚪</span>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Service Portal Dashboard</h2>
            <p className="text-gray-600 mt-1">Welcome back! Manage your corporate banking operations.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{stat.icon}</span>
                </div>
                <h3 className="text-sm font-medium text-gray-600 mb-1">{stat.label}</h3>
                <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <p className={`text-sm flex items-center gap-1 ${stat.statusColor || 'text-gray-500'}`}>
                  <span>⏱️</span>
                  {stat.status}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold text-gray-900">Quick Actions</h3>
              </div>
              <div className="p-6 space-y-3">
                <button
                  onClick={() => navigate('/deposit-request')}
                  className="w-full bg-red-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                >
                  <span>📥</span>
                  <span>Submit Deposit Request</span>
                </button>
                <button
                  onClick={() => navigate('/withdrawal-request')}
                  className="w-full bg-white text-gray-700 px-4 py-3 rounded-lg font-medium border-2 border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                >
                  <span>📤</span>
                  <span>Submit Withdrawal Request</span>
                </button>
                <button className="w-full bg-white text-gray-700 px-4 py-3 rounded-lg font-medium border-2 border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <span>🔍</span>
                  <span>Track My Requests</span>
                </button>
                <button className="w-full bg-white text-gray-700 px-4 py-3 rounded-lg font-medium border-2 border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <span>⚠️</span>
                  <span>File a Complaint</span>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold text-gray-900">Recent Activity</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-semibold text-gray-900">{activity.id}</p>
                        <p className="text-sm text-gray-600">{activity.type}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${activity.statusColor}`}>
                        {activity.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
