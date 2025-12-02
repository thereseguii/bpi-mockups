import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

const DepositRequest = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    clientName: '',
    amount: '',
    depositType: '',
    branch: '',
    preferredDate: '',
    preferredTime: '',
    notes: '',
  });

  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
    },
    mainContent: {
      flex: 1,
      marginLeft: '256px',
    },
    header: {
      backgroundColor: '#dc2626',
      color: '#ffffff',
      position: 'sticky',
      top: 0,
      zIndex: 10,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    headerContent: {
      padding: '1rem 1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    headerLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
    },
    bpiBadge: {
      backgroundColor: '#ffffff',
      color: '#dc2626',
      padding: '0.25rem 0.75rem',
      borderRadius: '0.25rem',
      fontWeight: 'bold',
    },
    bpiText: {
      fontWeight: '600',
      fontSize: '1.125rem',
    },
    bpiSubtext: {
      fontSize: '0.875rem',
      color: '#fecaca',
    },
    headerRight: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
    },
    headerButton: {
      color: '#ffffff',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '0.875rem',
    },
    main: {
      padding: '1.5rem',
    },
    formContainer: {
      maxWidth: '1024px',
      margin: '0 auto',
    },
    formCard: {
      backgroundColor: '#ffffff',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      padding: '2rem',
    },
    formTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '0.5rem',
    },
    formSubtitle: {
      color: '#6b7280',
      marginBottom: '2rem',
    },
    section: {
      marginBottom: '2rem',
    },
    sectionTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#111827',
      marginBottom: '1rem',
    },
    inputGroup: {
      marginBottom: '1rem',
    },
    label: {
      display: 'block',
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#374151',
      marginBottom: '0.5rem',
    },
    required: {
      color: '#dc2626',
    },
    input: {
      width: '100%',
      padding: '0.5rem 1rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      outline: 'none',
    },
    select: {
      width: '100%',
      padding: '0.5rem 1rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      outline: 'none',
      backgroundColor: '#ffffff',
    },
    textarea: {
      width: '100%',
      padding: '0.5rem 1rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      outline: 'none',
      resize: 'vertical',
    },
    gridTwo: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
    },
    uploadArea: {
      border: '2px dashed #d1d5db',
      borderRadius: '0.5rem',
      padding: '2rem',
      textAlign: 'center',
      backgroundColor: '#fafafa',
    },
    uploadIcon: {
      width: '3rem',
      height: '3rem',
      color: '#9ca3af',
      margin: '0 auto 1rem',
    },
    uploadText: {
      color: '#6b7280',
      marginBottom: '1rem',
      fontSize: '0.875rem',
    },
    uploadButton: {
      backgroundColor: '#ffffff',
      color: '#374151',
      padding: '0.5rem 1.5rem',
      borderRadius: '0.5rem',
      border: '2px solid #d1d5db',
      cursor: 'pointer',
      fontWeight: '500',
      fontSize: '0.875rem',
    },
    buttonGroup: {
      display: 'flex',
      gap: '1rem',
    },
    submitButton: {
      flex: 1,
      backgroundColor: '#dc2626',
      color: '#ffffff',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      border: 'none',
      cursor: 'pointer',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      fontSize: '0.875rem',
    },
    draftButton: {
      backgroundColor: '#ffffff',
      color: '#374151',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      border: '2px solid #d1d5db',
      cursor: 'pointer',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.875rem',
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Deposit request submitted successfully!');
    navigate('/dashboard');
  };

  return (
    <div style={styles.container}>
      <Sidebar />
      
      <div style={styles.mainContent}>
        {/* Header */}
        <header style={styles.header}>
          <div style={styles.headerContent}>
            <div style={styles.headerLeft}>
              <div style={styles.bpiBadge}>BPI</div>
              <div>
                <div style={styles.bpiText}>Bank of the Philippine Islands</div>
                <div style={styles.bpiSubtext}>Corporate Service Portal</div>
              </div>
            </div>
            <div style={styles.headerRight}>
              <button style={styles.headerButton}>Service Portal</button>
              <button style={styles.headerButton}>Track Requests</button>
              <button style={styles.headerButton}>Complaints</button>
              <button style={styles.headerButton}>Admin</button>
              <button style={styles.headerButton}>
                👤 Profile
              </button>
              <button 
                onClick={() => navigate('/')}
                style={styles.headerButton}
              >
                🚪 Logout
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main style={styles.main}>
          <div style={styles.formContainer}>
            <div style={styles.formCard}>
              <h2 style={styles.formTitle}>Deposit Request Form</h2>
              <p style={styles.formSubtitle}>Submit a new deposit request for processing</p>

              <form onSubmit={handleSubmit}>
                {/* Client Information */}
                <div style={styles.section}>
                  <h3 style={styles.sectionTitle}>Client Information</h3>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>
                      Client Name <span style={styles.required}>*</span>
                    </label>
                    <select
                      required
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      style={styles.select}
                    >
                      <option value="">Select client</option>
                      <option value="SM Investments">SM Investments Corporation</option>
                      <option value="Ayala Corporation">Ayala Corporation</option>
                      <option value="Jollibee Foods">Jollibee Foods Corporation</option>
                    </select>
                  </div>
                </div>

                {/* Deposit Details */}
                <div style={styles.section}>
                  <h3 style={styles.sectionTitle}>Deposit Details</h3>
                  <div style={styles.gridTwo}>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>
                        Amount (PHP) <span style={styles.required}>*</span>
                      </label>
                      <input
                        type="number"
                        required
                        placeholder="0.00"
                        value={formData.amount}
                        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                        style={styles.input}
                      />
                    </div>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>
                        Deposit Type <span style={styles.required}>*</span>
                      </label>
                      <select
                        required
                        value={formData.depositType}
                        onChange={(e) => setFormData({ ...formData, depositType: e.target.value })}
                        style={styles.select}
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
                <div style={styles.section}>
                  <h3 style={styles.sectionTitle}>Pickup Schedule</h3>
                  <div style={styles.gridTwo}>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>
                        Pickup Branch <span style={styles.required}>*</span>
                      </label>
                      <select
                        required
                        value={formData.branch}
                        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                        style={styles.select}
                      >
                        <option value="">Select branch</option>
                        <option value="Makati">Makati Main Branch</option>
                        <option value="BGC">BGC Branch</option>
                        <option value="Ortigas">Ortigas Center Branch</option>
                      </select>
                    </div>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>
                        Preferred Date <span style={styles.required}>*</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        style={styles.input}
                      />
                    </div>
                  </div>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>
                      Preferred Time <span style={styles.required}>*</span>
                    </label>
                    <input
                      type="time"
                      required
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      style={styles.input}
                    />
                  </div>
                </div>

                {/* Supporting Documents */}
                <div style={styles.section}>
                  <h3 style={styles.sectionTitle}>Supporting Documents</h3>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Upload Documents</label>
                    <div style={styles.uploadArea}>
                      <svg style={styles.uploadIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p style={styles.uploadText}>Drag and drop files here, or click to browse</p>
                      <button
                        type="button"
                        style={styles.uploadButton}
                      >
                        Select Files
                      </button>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div style={styles.section}>
                  <h3 style={styles.sectionTitle}>Additional Notes</h3>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Notes (Optional)</label>
                    <textarea
                      rows={4}
                      placeholder="Add any additional information or special instructions"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      style={styles.textarea}
                    />
                  </div>
                </div>

                {/* Actions */}
                <div style={styles.buttonGroup}>
                  <button type="submit" style={styles.submitButton}>
                    <span>📥</span>
                    <span>Submit Request</span>
                  </button>
                  <button type="button" style={styles.draftButton}>
                    <span>💾</span>
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