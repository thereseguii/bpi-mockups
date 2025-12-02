import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

const WithdrawalRequest = () => {
  const navigate = useNavigate();
  const [sidebarWidth, setSidebarWidth] = useState(256);
  const [formData, setFormData] = useState({
    clientName: '',
    totalAmount: '',
    bills1000: '',
    bills500: '',
    bills200: '',
    bills100: '',
    bills50: '',
    bills20: '',
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

  const calculateTotal = () => {
    const total = 
      (parseInt(formData.bills1000) || 0) * 1000 +
      (parseInt(formData.bills500) || 0) * 500 +
      (parseInt(formData.bills200) || 0) * 200 +
      (parseInt(formData.bills100) || 0) * 100 +
      (parseInt(formData.bills50) || 0) * 50 +
      (parseInt(formData.bills20) || 0) * 20;
    return total;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = calculateTotal();
    if (total !== parseInt(formData.totalAmount)) {
      alert('Denomination breakdown must equal the total amount!');
      return;
    }
    alert('Withdrawal request submitted successfully!');
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
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.5rem' }}>Withdrawal Request Form</h2>
              <p style={{ color: '#6b7280', marginBottom: '2rem' }}>Submit a new withdrawal request with denomination specifications</p>

              <form onSubmit={handleSubmit}>
                {/* Client Information */}
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '1rem' }}>Client Information</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
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
                    <div style={{ marginBottom: '1rem' }}>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                        Total Amount (PHP) <span style={{ color: '#dc2626' }}>*</span>
                      </label>
                      <input
                        type="number"
                        required
                        placeholder="0.00"
                        value={formData.totalAmount}
                        onChange={(e) => setFormData({ ...formData, totalAmount: e.target.value })}
                        style={{ width: '100%', padding: '0.5rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', fontSize: '0.875rem', outline: 'none' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Denomination Breakdown */}
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '1rem' }}>Denomination Breakdown</h3>
                  <div style={{ backgroundColor: '#dbeafe', border: '1px solid #93c5fd', borderRadius: '0.5rem', padding: '1rem', marginBottom: '1rem' }}>
                    <p style={{ fontSize: '0.875rem', color: '#1e40af', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <span>The sum of all denominations must equal the total amount: ₱{formData.totalAmount || '0'}</span>
                    </p>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>₱1,000 Bills</label>
                      <input
                        type="number"
                        min="0"
                        placeholder="0"
                        value={formData.bills1000}
                        onChange={(e) => setFormData({ ...formData, bills1000: e.target.value })}
                        style={{ width: '100%', padding: '0.5rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', fontSize: '0.875rem', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>₱500 Bills</label>
                      <input
                        type="number"
                        min="0"
                        placeholder="0"
                        value={formData.bills500}
                        onChange={(e) => setFormData({ ...formData, bills500: e.target.value })}
                        style={{ width: '100%', padding: '0.5rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', fontSize: '0.875rem', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>₱200 Bills</label>
                      <input
                        type="number"
                        min="0"
                        placeholder="0"
                        value={formData.bills200}
                        onChange={(e) => setFormData({ ...formData, bills200: e.target.value })}
                        style={{ width: '100%', padding: '0.5rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', fontSize: '0.875rem', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>₱100 Bills</label>
                      <input
                        type="number"
                        min="0"
                        placeholder="0"
                        value={formData.bills100}
                        onChange={(e) => setFormData({ ...formData, bills100: e.target.value })}
                        style={{ width: '100%', padding: '0.5rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', fontSize: '0.875rem', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>₱50 Bills</label>
                      <input
                        type="number"
                        min="0"
                        placeholder="0"
                        value={formData.bills50}
                        onChange={(e) => setFormData({ ...formData, bills50: e.target.value })}
                        style={{ width: '100%', padding: '0.5rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', fontSize: '0.875rem', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>₱20 Bills</label>
                      <input
                        type="number"
                        min="0"
                        placeholder="0"
                        value={formData.bills20}
                        onChange={(e) => setFormData({ ...formData, bills20: e.target.value })}
                        style={{ width: '100%', padding: '0.5rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', fontSize: '0.875rem', outline: 'none' }}
                      />
                    </div>
                  </div>
                  <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f3f4f6', borderRadius: '0.5rem' }}>
                    <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>
                      Calculated Total: <span style={{ fontSize: '1.25rem', color: '#111827' }}>₱{calculateTotal().toLocaleString()}</span>
                    </p>
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

                {/* Additional Notes */}
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '1rem' }}>Additional Notes</h3>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                    Notes (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Add any additional information or special instructions"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    style={{ width: '100%', padding: '0.5rem 1rem', border: '1px solid #d1d5db', borderRadius: '0.5rem', fontSize: '0.875rem', outline: 'none', resize: 'vertical' }}
                  />
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button
                    type="submit"
                    style={{ flex: 1, backgroundColor: '#dc2626', color: '#ffffff', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.875rem' }}
                  >
                    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Submit Request</span>
                  </button>
                  <button
                    type="button"
                    style={{ backgroundColor: '#ffffff', color: '#374151', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', border: '2px solid #d1d5db', cursor: 'pointer', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}
                  >
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

export default WithdrawalRequest;