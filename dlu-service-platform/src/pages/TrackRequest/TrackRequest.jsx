import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

const TrackRequest = () => {
  const navigate = useNavigate();
  const [sidebarWidth, setSidebarWidth] = useState(256);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('All Types');
  const [filterStatus, setFilterStatus] = useState('All Status');
  const [filterDate, setFilterDate] = useState('');

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

  // Sample data
  const requests = [
    {
      id: 'REQ-2025-001',
      type: 'Deposit',
      amount: '₱5,000,000',
      branch: 'Makati',
      submittedDate: '2025-01-15',
      status: 'Completed'
    },
    {
      id: 'REQ-2025-002',
      type: 'Withdrawal',
      amount: '₱2,500,000',
      branch: 'BGC',
      submittedDate: '2025-01-18',
      status: 'In Transit'
    },
    {
      id: 'REQ-2025-003',
      type: 'Deposit',
      amount: '₱10,000,000',
      branch: 'Ortigas',
      submittedDate: '2025-01-20',
      status: 'In Review'
    },
    {
      id: 'REQ-2025-004',
      type: 'Withdrawal',
      amount: '₱1,000,000',
      branch: 'Makati',
      submittedDate: '2025-01-22',
      status: 'Approved'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return '#10b981';
      case 'In Transit':
        return '#3b82f6';
      case 'In Review':
        return '#f59e0b';
      case 'Approved':
        return '#10b981';
      default:
        return '#6b7280';
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      <Sidebar />
      
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column',
        marginLeft: sidebarWidth + 'px',
        minWidth: 0,
        transition: 'margin-left 0.3s ease'
      }}>
        {/* RED HEADER */}
        <header style={{ 
          backgroundColor: '#dc2626',
          color: '#ffffff',
          width: '100vw',
          position: 'relative',
          left: '-' + sidebarWidth + 'px',
          paddingLeft: sidebarWidth + 'px',
          boxSizing: 'border-box',
          transition: 'left 0.3s ease, padding-left 0.3s ease',
          zIndex: 10,
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <div style={{ padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ backgroundColor: '#ffffff', color: '#dc2626', padding: '0.5rem 0.875rem', borderRadius: '0.25rem', fontWeight: 'bold', fontSize: '1rem' }}>
                BPI
              </div>
              <div>
                <div style={{ fontWeight: '600', fontSize: '1.125rem', lineHeight: '1.2' }}>Bank of the Philippine Islands</div>
                <div style={{ fontSize: '0.875rem', color: '#fecaca', lineHeight: '1.2' }}>Corporate Service Portal</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <button onClick={() => navigate('/dashboard')} style={{ color: '#ffffff', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9375rem', padding: '0.5rem' }}>Service Portal</button>
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
        <main style={{ padding: '2.5rem 2rem', flex: 1 }}>
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.5rem' }}>Request Tracking</h2>
            <p style={{ color: '#6b7280', fontSize: '1rem' }}>Monitor the status of your deposit and withdrawal requests</p>
          </div>

          {/* FILTERS */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
              <div style={{ position: 'relative' }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search requests..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ width: '100%', padding: '0.625rem 1rem 0.625rem 2.75rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '0.875rem', outline: 'none' }}
                />
              </div>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                style={{ width: '100%', padding: '0.625rem 1rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '0.875rem', outline: 'none', backgroundColor: '#ffffff' }}
              >
                <option>All Types</option>
                <option>Deposit</option>
                <option>Withdrawal</option>
              </select>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                style={{ width: '100%', padding: '0.625rem 1rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '0.875rem', outline: 'none', backgroundColor: '#ffffff' }}
              >
                <option>All Status</option>
                <option>Completed</option>
                <option>In Transit</option>
                <option>In Review</option>
                <option>Approved</option>
              </select>
              <input
                type="date"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                style={{ width: '100%', padding: '0.625rem 1rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '0.875rem', outline: 'none' }}
              />
            </div>
          </div>

          {/* RECENT REQUESTS TABLE */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827' }}>Recent Requests</h3>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                    <th style={{ padding: '0.875rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Request ID</th>
                    <th style={{ padding: '0.875rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Type</th>
                    <th style={{ padding: '0.875rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Amount</th>
                    <th style={{ padding: '0.875rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Branch</th>
                    <th style={{ padding: '0.875rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Submitted Date</th>
                    <th style={{ padding: '0.875rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Status</th>
                    <th style={{ padding: '0.875rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((request, index) => (
                    <tr key={request.id} style={{ borderBottom: index !== requests.length - 1 ? '1px solid #e5e7eb' : 'none' }}>
                      <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', color: '#111827', fontWeight: '500' }}>{request.id}</td>
                      <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        {request.type === 'Deposit' ? (
                          <svg width="16" height="16" fill="none" stroke="#10b981" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        ) : (
                          <svg width="16" height="16" fill="none" stroke="#dc2626" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                          </svg>
                        )}
                        {request.type}
                      </td>
                      <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', color: '#111827', fontWeight: '600' }}>{request.amount}</td>
                      <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', color: '#6b7280' }}>{request.branch}</td>
                      <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', color: '#6b7280' }}>{request.submittedDate}</td>
                      <td style={{ padding: '1rem 1.5rem' }}>
                        <span style={{ 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '0.375rem',
                          padding: '0.25rem 0.75rem', 
                          borderRadius: '9999px', 
                          fontSize: '0.75rem', 
                          fontWeight: '500', 
                          color: '#ffffff', 
                          backgroundColor: getStatusColor(request.status) 
                        }}>
                          <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {request.status}
                        </span>
                      </td>
                      <td style={{ padding: '1rem 1.5rem' }}>
                        <button style={{ color: '#dc2626', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.875rem', fontWeight: '500' }}>
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* REQUEST TIMELINE */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827' }}>Request Timeline</h3>
            </div>
            <div style={{ padding: '1.5rem' }}>
              {/* Timeline Item 1 */}
              <div style={{ position: 'relative', paddingLeft: '2.5rem', paddingBottom: '2rem' }}>
                <div style={{ position: 'absolute', left: '0', top: '0.25rem', width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" fill="white" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div style={{ position: 'absolute', left: '0.9375rem', top: '2.5rem', bottom: '-0.5rem', width: '2px', backgroundColor: '#e5e7eb' }}></div>
                <div>
                  <h4 style={{ fontSize: '0.9375rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>Request Submitted</h4>
                  <p style={{ fontSize: '0.8125rem', color: '#6b7280' }}>January 20, 2025 at 9:30 AM</p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div style={{ position: 'relative', paddingLeft: '2.5rem', paddingBottom: '2rem' }}>
                <div style={{ position: 'absolute', left: '0', top: '0.25rem', width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" fill="white" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div style={{ position: 'absolute', left: '0.9375rem', top: '2.5rem', bottom: '-0.5rem', width: '2px', backgroundColor: '#e5e7eb' }}></div>
                <div>
                  <h4 style={{ fontSize: '0.9375rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>Under Review</h4>
                  <p style={{ fontSize: '0.8125rem', color: '#6b7280' }}>January 20, 2025 at 10:15 AM</p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div style={{ position: 'relative', paddingLeft: '2.5rem', paddingBottom: '2rem' }}>
                <div style={{ position: 'absolute', left: '0', top: '0.25rem', width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" fill="white" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div style={{ position: 'absolute', left: '0.9375rem', top: '2.5rem', bottom: '-0.5rem', width: '2px', backgroundColor: '#e5e7eb' }}></div>
                <div>
                  <h4 style={{ fontSize: '0.9375rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>Approved</h4>
                  <p style={{ fontSize: '0.8125rem', color: '#6b7280' }}>Pending</p>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
                <div style={{ position: 'absolute', left: '0', top: '0.25rem', width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" fill="#9ca3af" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9375rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>In Transit</h4>
                  <p style={{ fontSize: '0.8125rem', color: '#6b7280' }}>Pending</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TrackRequest;