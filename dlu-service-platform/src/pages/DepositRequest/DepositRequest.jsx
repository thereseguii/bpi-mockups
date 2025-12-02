import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

const DepositRequest = () => {
  const navigate = useNavigate();
  const [sidebarWidth, setSidebarWidth] = useState(256);
  const [formData, setFormData] = useState({
    clientName: '',
    amount: '',
    depositType: '',
    branch: '',
    preferredDate: '',
    preferredTime: '',
    notes: '',
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Deposit request submitted successfully!');
    navigate('/dashboard');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f9fafb' }}>
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
        <main style={{ padding: '2rem', flex: 1 }}>
          <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
            <div style={{ backgroundColor: '#ffffff', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.5rem' }}>Deposit Request Form</h2>
              <p style={{ color: '#6b7280', marginBottom: '2rem' }}>Submit a new deposit request for processing</p>

              <form onSubmit={handleSubmit}>
                {/* Client Information */}
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '1rem' }}>Client Information</h3>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                      Client Name <span style={{ color: '#dc2626' }}>*</span>
                    </label>
                    <select
                      required
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      style={{ width: '100%', padding: '0.5rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', fontSize: '0.875rem', outline: 'none', backgroundColor: '#ffffff' }}
                    >
                      <option value="">Select client</option>
                      <option value="SM Investments">SM Investments Corporation</option>
                      <option value="Ayala Corporation">Ayala Corporation</option>
                      <option value="Jollibee Foods">Jollibee Foods Corporation</option>
                    </select>
                  </div>
                </div>

                {/* Deposit Details */}
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '1rem' }}>Deposit Details</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                        Amount (PHP) <span style={{ color: '#dc2626' }}>*</span>
                      </label>
                      <input
                        type="number"
                        required
                        placeholder="0.00"
                        value={formData.amount}
                        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                        style={{ width: '100%', padding: '0.5rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', fontSize: '0.875rem', outline: 'none' }}
                      />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                        Deposit Type <span style={{ color: '#dc2626' }}>*</span>
                      </label>
                      <select
                        required
                        value={formData.depositType}
                        onChange={(e) => setFormData({ ...formData, depositType: e.target.value })}
                        style={{ width: '100%', padding: '0.5rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', fontSize: '0.875rem', outline: 'none', backgroundColor: '#ffffff' }}
                      >
                        <option value="">Select type</option>
                        <option value="Cash">Cash Deposit</option>
                        <option value="Check">Check Deposit</option>
                        <option value="Mixed">Mixed (Cash + Check)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Pickup Schedule */}
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '1rem' }}>Pickup Schedule</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                        Pickup Branch <span style={{ color: '#dc2626' }}>*</span>
                      </label>
                      <select
                        required
                        value={formData.branch}
                        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                        style={{ width: '100%', padding: '0.5rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', fontSize: '0.875rem', outline: 'none', backgroundColor: '#ffffff' }}
                      >
                        <option value="">Select branch</option>
                        <option value="Makati">Makati Main Branch</option>
                        <option value="BGC">BGC Branch</option>
                        <option value="Ortigas">Ortigas Center Branch</option>
                      </select>
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                        Preferred Date <span style={{ color: '#dc2626' }}>*</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        style={{ width: '100%', padding: '0.5rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', fontSize: '0.875rem', outline: 'none' }}
                      />
                    </div>
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                      Preferred Time <span style={{ color: '#dc2626' }}>*</span>
                    </label>
                    <input
                      type="time"
                      required
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      style={{ width: '100%', padding: '0.5rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', fontSize: '0.875rem', outline: 'none' }}
                    />
                  </div>
                </div>

                {/* Supporting Documents */}
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '1rem' }}>Supporting Documents</h3>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Upload Documents</label>
                    <div style={{ border: '2px dashed #d1d5db', borderRadius: '0.5rem', padding: '2rem', textAlign: 'center', backgroundColor: '#fafafa' }}>
                      <svg style={{ width: '3rem', height: '3rem', color: '#9ca3af', margin: '0 auto 1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p style={{ color: '#6b7280', marginBottom: '1rem', fontSize: '0.875rem' }}>Drag and drop files here, or click to browse</p>
                      <button
                        type="button"
                        style={{ backgroundColor: '#ffffff', color: '#374151', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', border: '2px solid #d1d5db', cursor: 'pointer', fontWeight: '500', fontSize: '0.875rem' }}
                      >
                        Select Files
                      </button>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '1rem' }}>Additional Notes</h3>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Notes (Optional)</label>
                    <textarea
                      rows={4}
                      placeholder="Add any additional information or special instructions"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      style={{ width: '100%', padding: '0.5rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', fontSize: '0.875rem', outline: 'none', resize: 'vertical' }}
                    />
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button type="submit" style={{ flex: 1, backgroundColor: '#dc2626', color: '#ffffff', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Submit Request</span>
                  </button>
                  <button type="button" style={{ backgroundColor: '#ffffff', color: '#374151', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', border: '2px solid #d1d5db', cursor: 'pointer', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                    </svg>
                    <span>Save as Draft</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DepositRequest;