import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

const Dashboard = () => {
  const navigate = useNavigate();
  const [sidebarWidth, setSidebarWidth] = useState(256);

  useEffect(() => {
    const checkSidebarWidth = () => {
      const sidebar = document.querySelector('[data-sidebar]');
      if (sidebar) {
        setSidebarWidth(sidebar.offsetWidth);
      }
    };

    checkSidebarWidth();
    const interval = setInterval(checkSidebarWidth, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      <Sidebar />
      
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column',
        marginLeft: `${sidebarWidth}px`,
        minWidth: 0,
        transition: 'margin-left 0.3s ease'
      }}>
        {/* RED HEADER - FULL WIDTH */}
        <header style={{ 
          backgroundColor: '#dc2626', 
          color: '#ffffff',
          width: '100vw',
          position: 'relative',
          left: `-${sidebarWidth}px`,
          paddingLeft: `${sidebarWidth}px`,
          boxSizing: 'border-box',
          transition: 'left 0.3s ease, padding-left 0.3s ease'
        }}>
          <div style={{ 
            padding: '1rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ 
                backgroundColor: '#ffffff', 
                color: '#dc2626', 
                padding: '0.5rem 0.875rem', 
                borderRadius: '0.25rem', 
                fontWeight: 'bold',
                fontSize: '1rem'
              }}>
                BPI
              </div>
              <div>
                <div style={{ fontWeight: '600', fontSize: '1.125rem', lineHeight: '1.2' }}>Bank of the Philippine Islands</div>
                <div style={{ fontSize: '0.875rem', color: '#fecaca', lineHeight: '1.2' }}>Corporate Service Portal</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <button style={{ color: '#ffffff', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9375rem', padding: '0.5rem' }}>Service Portal</button>
              <button style={{ color: '#ffffff', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9375rem', padding: '0.5rem' }}>Track Requests</button>
              <button style={{ color: '#ffffff', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9375rem', padding: '0.5rem' }}>Complaints</button>
              <button style={{ color: '#ffffff', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9375rem', padding: '0.5rem' }}>Admin</button>
              <button style={{ color: '#ffffff', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9375rem', padding: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Profile
              </button>
              <button onClick={() => navigate('/')} style={{ color: '#ffffff', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9375rem', padding: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main style={{ padding: '2.5rem 2rem', flex: 1, width: '100%', boxSizing: 'border-box', overflowX: 'hidden' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.5rem', lineHeight: '1.2' }}>Service Portal Dashboard</h2>
            <p style={{ color: '#6b7280', fontSize: '1rem', lineHeight: '1.5' }}>Welcome back! Manage your corporate banking operations.</p>
          </div>

          {/* STATS GRID - 4 COLUMNS */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {/* Stat Card 1 */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '1.75rem' }}>
              <h3 style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6b7280', marginBottom: '0.875rem', lineHeight: '1.2' }}>Active Requests</h3>
              <p style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.75rem', lineHeight: '1' }}>12</p>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                In progress
              </p>
            </div>

            {/* Stat Card 2 */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '1.75rem' }}>
              <h3 style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6b7280', marginBottom: '0.875rem', lineHeight: '1.2' }}>Total Deposits (MTD)</h3>
              <p style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.75rem', lineHeight: '1' }}>₱125M</p>
              <p style={{ fontSize: '0.875rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                +12% from last month
              </p>
            </div>

            {/* Stat Card 3 */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '1.75rem' }}>
              <h3 style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6b7280', marginBottom: '0.875rem', lineHeight: '1.2' }}>Total Withdrawals (MTD)</h3>
              <p style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.75rem', lineHeight: '1' }}>₱85M</p>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Normal activity
              </p>
            </div>

            {/* Stat Card 4 */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '1.75rem' }}>
              <h3 style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6b7280', marginBottom: '0.875rem', lineHeight: '1.2' }}>Open Complaints</h3>
              <p style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.75rem', lineHeight: '1' }}>2</p>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Being resolved
              </p>
            </div>
          </div>

          {/* BOTTOM GRID - 2 COLUMNS WITH ADJUSTED PROPORTIONS */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '1.5rem' }}>
            {/* QUICK ACTIONS CARD */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <div style={{ padding: '1.75rem', borderBottom: '1px solid #e5e7eb' }}>
                <h3 style={{ fontSize: '1.375rem', fontWeight: 'bold', color: '#111827', lineHeight: '1.2' }}>Quick Actions</h3>
              </div>
              <div style={{ padding: '1.75rem' }}>
                <button 
                  onClick={() => navigate('/deposit-request')} 
                  style={{ 
                    width: '100%', 
                    padding: '1rem', 
                    borderRadius: '0.5rem', 
                    border: 'none', 
                    cursor: 'pointer', 
                    fontWeight: '500', 
                    fontSize: '0.9375rem',
                    backgroundColor: '#dc2626', 
                    color: '#ffffff', 
                    marginBottom: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Submit Deposit Request
                </button>
                <button 
                  onClick={() => navigate('/withdrawal-request')} 
                  style={{ 
                    width: '100%', 
                    padding: '1rem', 
                    borderRadius: '0.5rem', 
                    cursor: 'pointer', 
                    fontWeight: '500',
                    fontSize: '0.9375rem', 
                    backgroundColor: '#ffffff', 
                    color: '#374151', 
                    border: '1px solid #d1d5db', 
                    marginBottom: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                  Submit Withdrawal Request
                </button>
                <button 
                  style={{ 
                    width: '100%', 
                    padding: '1rem', 
                    borderRadius: '0.5rem', 
                    cursor: 'pointer', 
                    fontWeight: '500',
                    fontSize: '0.9375rem', 
                    backgroundColor: '#ffffff', 
                    color: '#374151', 
                    border: '1px solid #d1d5db', 
                    marginBottom: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Track My Requests
                </button>
                <button 
                  style={{ 
                    width: '100%', 
                    padding: '1rem', 
                    borderRadius: '0.5rem', 
                    cursor: 'pointer', 
                    fontWeight: '500',
                    fontSize: '0.9375rem', 
                    backgroundColor: '#ffffff', 
                    color: '#374151', 
                    border: '1px solid #d1d5db',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  File a Complaint
                </button>
              </div>
            </div>

            {/* RECENT ACTIVITY CARD */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <div style={{ padding: '1.75rem', borderBottom: '1px solid #e5e7eb' }}>
                <h3 style={{ fontSize: '1.375rem', fontWeight: 'bold', color: '#111827', lineHeight: '1.2' }}>Recent Activity</h3>
              </div>
              <div style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1.25rem', marginBottom: '1.25rem', borderBottom: '1px solid #f3f4f6' }}>
                  <div>
                    <p style={{ fontWeight: '600', color: '#111827', fontSize: '0.9375rem', marginBottom: '0.25rem' }}>REQ-2025-004</p>
                    <p style={{ fontSize: '0.8125rem', color: '#6b7280' }}>Withdrawal Request</p>
                  </div>
                  <span style={{ padding: '0.375rem 0.875rem', borderRadius: '9999px', fontSize: '0.8125rem', fontWeight: '500', color: '#ffffff', backgroundColor: '#10b981' }}>Approved</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1.25rem', marginBottom: '1.25rem', borderBottom: '1px solid #f3f4f6' }}>
                  <div>
                    <p style={{ fontWeight: '600', color: '#111827', fontSize: '0.9375rem', marginBottom: '0.25rem' }}>REQ-2025-003</p>
                    <p style={{ fontSize: '0.8125rem', color: '#6b7280' }}>Deposit Request</p>
                  </div>
                  <span style={{ padding: '0.375rem 0.875rem', borderRadius: '9999px', fontSize: '0.8125rem', fontWeight: '500', color: '#ffffff', backgroundColor: '#3b82f6' }}>In Transit</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ fontWeight: '600', color: '#111827', fontSize: '0.9375rem', marginBottom: '0.25rem' }}>CMP-2025-002</p>
                    <p style={{ fontSize: '0.8125rem', color: '#6b7280' }}>Service Complaint</p>
                  </div>
                  <span style={{ padding: '0.375rem 0.875rem', borderRadius: '9999px', fontSize: '0.8125rem', fontWeight: '500', color: '#ffffff', backgroundColor: '#f59e0b' }}>In Progress</span>
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