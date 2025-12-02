import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const isActive = (path) => location.pathname === path;

  const styles = {
    sidebar: {
      width: isCollapsed ? '64px' : '256px',
      backgroundColor: '#1f2937',
      color: '#ffffff',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      overflowY: 'auto',
      overflowX: 'hidden',
      transition: 'width 0.3s ease',
      zIndex: 40,
    },
    content: {
      padding: '1rem',
    },
    toggleButton: {
      width: '100%',
      padding: '0.75rem',
      backgroundColor: 'transparent',
      border: 'none',
      color: '#9ca3af',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: isCollapsed ? 'center' : 'flex-end',
      marginBottom: '0.5rem',
    },
    sectionTitle: {
      fontSize: '0.75rem',
      fontWeight: '600',
      color: '#9ca3af',
      marginTop: '1.5rem',
      marginBottom: '0.5rem',
      paddingLeft: '0.75rem',
      display: isCollapsed ? 'none' : 'block',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    menuButton: {
      width: '100%',
      textAlign: 'left',
      padding: '0.625rem 0.75rem',
      borderRadius: '0.375rem',
      marginBottom: '0.25rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      border: 'none',
      cursor: 'pointer',
      fontSize: '0.875rem',
      transition: 'background-color 0.2s',
      justifyContent: isCollapsed ? 'center' : 'flex-start',
    },
    activeButton: {
      backgroundColor: '#dc2626',
      color: '#ffffff',
    },
    inactiveButton: {
      backgroundColor: 'transparent',
      color: '#d1d5db',
    },
    icon: {
      width: '1.25rem',
      height: '1.25rem',
      flexShrink: 0,
    },
    label: {
      display: isCollapsed ? 'none' : 'block',
      whiteSpace: 'nowrap',
    },
  };

  const menuItems = [
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={styles.icon}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      label: 'Dashboard',
      path: '/dashboard',
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={styles.icon}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      ),
      label: 'Deposit Request',
      path: '/deposit-request',
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={styles.icon}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      ),
      label: 'Withdrawal Request',
      path: '/withdrawal-request',
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={styles.icon}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      label: 'Track Requests',
      path: '/track-requests',
    },
  ];

  const complaintItems = [
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={styles.icon}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      label: 'File Complaint',
      path: '/file-complaint',
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={styles.icon}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      label: 'My Complaints',
      path: '/my-complaints',
    },
  ];

  const adminItems = [
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={styles.icon}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      label: 'Dashboard',
      path: '/admin/dashboard',
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={styles.icon}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      label: 'Manage Requests',
      path: '/admin/requests',
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={styles.icon}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Manage Complaints',
      path: '/admin/complaints',
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style={styles.icon}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      label: 'Analytics',
      path: '/admin/analytics',
    },
  ];

  return (
    <div style={styles.sidebar}>
      <div style={styles.content}>
        {/* Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          style={styles.toggleButton}
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ width: '1.25rem', height: '1.25rem' }}
          >
            {isCollapsed ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            )}
          </svg>
        </button>

        {/* Service Portal Section */}
        <h2 style={styles.sectionTitle}>Service Portal</h2>
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            style={{
              ...styles.menuButton,
              ...(isActive(item.path) ? styles.activeButton : styles.inactiveButton),
            }}
            onMouseEnter={(e) => {
              if (!isActive(item.path)) {
                e.currentTarget.style.backgroundColor = '#374151';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive(item.path)) {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
            title={isCollapsed ? item.label : ''}
          >
            {item.icon}
            <span style={styles.label}>{item.label}</span>
          </button>
        ))}

        {/* Complaints Section */}
        <h2 style={styles.sectionTitle}>Complaints</h2>
        {complaintItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            style={{
              ...styles.menuButton,
              ...(isActive(item.path) ? styles.activeButton : styles.inactiveButton),
            }}
            onMouseEnter={(e) => {
              if (!isActive(item.path)) {
                e.currentTarget.style.backgroundColor = '#374151';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive(item.path)) {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
            title={isCollapsed ? item.label : ''}
          >
            {item.icon}
            <span style={styles.label}>{item.label}</span>
          </button>
        ))}

        {/* Administration Section */}
        <h2 style={styles.sectionTitle}>Administration</h2>
        {adminItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            style={{
              ...styles.menuButton,
              ...(isActive(item.path) ? styles.activeButton : styles.inactiveButton),
            }}
            onMouseEnter={(e) => {
              if (!isActive(item.path)) {
                e.currentTarget.style.backgroundColor = '#374151';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive(item.path)) {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
            title={isCollapsed ? item.label : ''}
          >
            {item.icon}
            <span style={styles.label}>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;