import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { icon: '📊', label: 'Dashboard', path: '/dashboard' },
    { icon: '📥', label: 'Deposit Request', path: '/deposit-request' },
    { icon: '📤', label: 'Withdrawal Request', path: '/withdrawal-request' },
    { icon: '🔍', label: 'Track Requests', path: '/track-requests' },
  ];

  const complaintItems = [
    { icon: '⚠️', label: 'File Complaint', path: '/file-complaint' },
    { icon: '📋', label: 'My Complaints', path: '/my-complaints' },
  ];

  const adminItems = [
    { icon: '📊', label: 'Dashboard', path: '/admin/dashboard' },
    { icon: '📝', label: 'Manage Requests', path: '/admin/requests' },
    { icon: '⚙️', label: 'Manage Complaints', path: '/admin/complaints' },
    { icon: '📈', label: 'Analytics', path: '/admin/analytics' },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-sm font-semibold text-gray-400 mb-2">Service Portal</h2>
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`w-full text-left px-3 py-2 rounded mb-1 flex items-center gap-2 ${
              isActive(item.path)
                ? 'bg-red-600 text-white'
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <span>{item.icon}</span>
            <span className="text-sm">{item.label}</span>
          </button>
        ))}

        <h2 className="text-sm font-semibold text-gray-400 mt-6 mb-2">Complaints</h2>
        {complaintItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`w-full text-left px-3 py-2 rounded mb-1 flex items-center gap-2 ${
              isActive(item.path)
                ? 'bg-red-600 text-white'
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <span>{item.icon}</span>
            <span className="text-sm">{item.label}</span>
          </button>
        ))}

        <h2 className="text-sm font-semibold text-gray-400 mt-6 mb-2">Administration</h2>
        {adminItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`w-full text-left px-3 py-2 rounded mb-1 flex items-center gap-2 ${
              isActive(item.path)
                ? 'bg-red-600 text-white'
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <span>{item.icon}</span>
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
