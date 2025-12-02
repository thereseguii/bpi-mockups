import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#ffffff',
    },
    header: {
      backgroundColor: '#dc2626',
      color: '#ffffff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    headerContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '1rem 1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    bpiLogo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
    },
    bpiBadge: {
      backgroundColor: '#ffffff',
      color: '#dc2626',
      fontWeight: 'bold',
      padding: '0.375rem 0.75rem',
      borderRadius: '0.25rem',
      fontSize: '1.125rem',
    },
    bpiText: {
      fontWeight: '600',
      fontSize: '1rem',
    },
    bpiSubtext: {
      fontSize: '0.75rem',
      color: '#fecaca',
    },
    headerButtons: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
    },
    homeButton: {
      color: '#ffffff',
      fontWeight: '500',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
    },
    loginButton: {
      backgroundColor: '#facc15',
      color: '#111827',
      padding: '0.5rem 1.5rem',
      borderRadius: '0.25rem',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
    },
    heroSection: {
      backgroundColor: '#f9fafb',
      padding: '5rem 0',
    },
    heroContent: {
      maxWidth: '100%',
      margin: '0',
      padding: '0 3rem',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      alignItems: 'center',
    },
    heroLeft: {
      paddingRight: '0',
    },
    heroTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '1.5rem',
      lineHeight: '1.2',
    },
    heroDescription: {
      color: '#374151',
      fontSize: '1.125rem',
      marginBottom: '2.5rem',
      lineHeight: '1.75',
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    primaryButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.75rem',
      backgroundColor: '#dc2626',
      color: '#ffffff',
      padding: '1rem 2rem',
      borderRadius: '0.5rem',
      fontWeight: '600',
      fontSize: '1.125rem',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
    secondaryButton: {
      backgroundColor: '#ffffff',
      color: '#1f2937',
      padding: '1rem 2rem',
      borderRadius: '0.5rem',
      fontWeight: '600',
      fontSize: '1.125rem',
      border: '2px solid #d1d5db',
      cursor: 'pointer',
    },
    heroImage: {
      width: '100%',
      borderRadius: '0.75rem',
      boxShadow: '0 20px 25px rgba(0,0,0,0.15)',
    },
    featuresSection: {
      padding: '5rem 3rem',
      backgroundColor: '#ffffff',
    },
    featuresContent: {
      maxWidth: '100%',
      margin: '0',
    },
    featuresHeader: {
      textAlign: 'center',
      marginBottom: '4rem',
    },
    featuresTitle: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '1rem',
    },
    featuresSubtitle: {
      color: '#6b7280',
      fontSize: '1.25rem',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '2rem',
    },
    featureCard: {
      backgroundColor: '#ffffff',
      padding: '2rem',
      borderRadius: '0.75rem',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      border: '1px solid #f3f4f6',
    },
    featureIcon: {
      width: '4rem',
      height: '4rem',
      backgroundColor: '#fee2e2',
      borderRadius: '0.75rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1.5rem',
    },
    featureTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '0.75rem',
    },
    featureDescription: {
      color: '#6b7280',
      lineHeight: '1.625',
    },
    ctaSection: {
      backgroundColor: '#dc2626',
      padding: '5rem 3rem',
    },
    ctaContent: {
      maxWidth: '100%',
      margin: '0 auto',
      textAlign: 'center',
    },
    ctaTitle: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '1.5rem',
    },
    ctaDescription: {
      color: '#fecaca',
      fontSize: '1.25rem',
      marginBottom: '2.5rem',
      lineHeight: '1.75',
    },
    ctaButton: {
      backgroundColor: '#facc15',
      color: '#111827',
      padding: '1rem 2.5rem',
      borderRadius: '0.5rem',
      fontWeight: 'bold',
      fontSize: '1.25rem',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
    },
    footer: {
      backgroundColor: '#111827',
      color: '#9ca3af',
      padding: '4rem 3rem',
    },
    footerContent: {
      maxWidth: '100%',
      margin: '0',
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '2.5rem',
      marginBottom: '2.5rem',
    },
    footerColumn: {
      fontSize: '0.875rem',
    },
    footerTitle: {
      color: '#ffffff',
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
    footerList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    footerListItem: {
      marginBottom: '0.625rem',
    },
    footerLink: {
      color: '#9ca3af',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    footerBottom: {
      borderTop: '1px solid #374151',
      paddingTop: '2rem',
      textAlign: 'center',
      fontSize: '0.875rem',
    },
  };

  return (
    <div style={styles.container}>
      {/* Red Header with BPI Branding */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.bpiLogo}>
            <div style={styles.bpiBadge}>BPI</div>
            <div>
              <div style={styles.bpiText}>Bank of the Philippine Islands</div>
              <div style={styles.bpiSubtext}>Corporate Service Portal</div>
            </div>
          </div>
          <div style={styles.headerButtons}>
            <button style={styles.homeButton}>Home</button>
            <button style={styles.loginButton}>Client Login</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.heroContent}>
          {/* Left Content */}
          <div style={styles.heroLeft}>
            <h1 style={styles.heroTitle}>BPI Corporate Service Portal</h1>
            <p style={styles.heroDescription}>
              Seamless banking operations for high-value corporate clients. Manage deposits, 
              withdrawals, and service requests with enterprise-grade security and compliance.
            </p>
            
            {/* Action Buttons */}
            <div style={styles.buttonContainer}>
              <button
                onClick={() => navigate('/dashboard')}
                style={styles.primaryButton}
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Access Dashboard
              </button>
              <button
                onClick={() => navigate('/deposit-request')}
                style={styles.secondaryButton}
              >
                Submit Deposit Request
              </button>
              <button
                onClick={() => navigate('/withdrawal-request')}
                style={styles.secondaryButton}
              >
                Submit Withdrawal Request
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&h=700&fit=crop"
              alt="Corporate team collaboration"
              style={styles.heroImage}
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div style={styles.featuresSection}>
        <div style={styles.featuresContent}>
          <div style={styles.featuresHeader}>
            <h2 style={styles.featuresTitle}>Corporate Banking Solutions</h2>
            <p style={styles.featuresSubtitle}>Trusted by the Philippines' leading corporations</p>
          </div>

          <div style={styles.featuresGrid}>
            {/* Feature 1 */}
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>
                <svg width="32" height="32" fill="none" stroke="#dc2626" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 style={styles.featureTitle}>Deposit Management</h3>
              <p style={styles.featureDescription}>
                Schedule and track large-scale deposit requests with full documentation and branch coordination.
              </p>
            </div>

            {/* Feature 2 */}
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>
                <svg width="32" height="32" fill="none" stroke="#dc2626" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
              </div>
              <h3 style={styles.featureTitle}>Withdrawal Processing</h3>
              <p style={styles.featureDescription}>
                Request withdrawals with specific denominations, schedule pickups, and track processing status.
              </p>
            </div>

            {/* Feature 3 */}
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>
                <svg width="32" height="32" fill="none" stroke="#dc2626" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 style={styles.featureTitle}>Real-Time Tracking</h3>
              <p style={styles.featureDescription}>
                Monitor request status from submission to completion with detailed timelines and notifications.
              </p>
            </div>

            {/* Feature 4 */}
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>
                <svg width="32" height="32" fill="none" stroke="#dc2626" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 style={styles.featureTitle}>Maker-Checker Validation</h3>
              <p style={styles.featureDescription}>
                Enterprise-grade dual authorization process ensures accuracy and regulatory compliance.
              </p>
            </div>

            {/* Feature 5 */}
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>
                <svg width="32" height="32" fill="none" stroke="#dc2626" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 style={styles.featureTitle}>Complaint Management</h3>
              <p style={styles.featureDescription}>
                Log and track service issues with SLA monitoring and dedicated resolution teams.
              </p>
            </div>

            {/* Feature 6 */}
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>
                <svg width="32" height="32" fill="none" stroke="#dc2626" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 style={styles.featureTitle}>Compliance Reports</h3>
              <p style={styles.featureDescription}>
                Generate comprehensive transaction reports and analytics for audit purposes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div style={styles.ctaSection}>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>Ready to Get Started?</h2>
          <p style={styles.ctaDescription}>
            Access the Corporate Service Portal to manage your banking operations
          </p>
          <button style={styles.ctaButton}>Client Login</button>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerGrid}>
            {/* Column 1 */}
            <div style={styles.footerColumn}>
              <h4 style={styles.footerTitle}>BPI Corporate</h4>
              <p>Bank of the Philippine Islands<br />Corporate Banking Division</p>
            </div>

            {/* Column 2 */}
            <div style={styles.footerColumn}>
              <h4 style={styles.footerTitle}>Services</h4>
              <ul style={styles.footerList}>
                <li style={styles.footerListItem}><a href="#" style={styles.footerLink}>Deposit Management</a></li>
                <li style={styles.footerListItem}><a href="#" style={styles.footerLink}>Withdrawal Processing</a></li>
                <li style={styles.footerListItem}><a href="#" style={styles.footerLink}>Transaction Tracking</a></li>
                <li style={styles.footerListItem}><a href="#" style={styles.footerLink}>Compliance Reporting</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div style={styles.footerColumn}>
              <h4 style={styles.footerTitle}>Support</h4>
              <ul style={styles.footerList}>
                <li style={styles.footerListItem}><a href="#" style={styles.footerLink}>Contact Us</a></li>
                <li style={styles.footerListItem}><a href="#" style={styles.footerLink}>File a Complaint</a></li>
                <li style={styles.footerListItem}><a href="#" style={styles.footerLink}>FAQs</a></li>
                <li style={styles.footerListItem}><a href="#" style={styles.footerLink}>Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div style={styles.footerColumn}>
              <h4 style={styles.footerTitle}>Compliance</h4>
              <ul style={styles.footerList}>
                <li style={styles.footerListItem}><a href="#" style={styles.footerLink}>Privacy Policy</a></li>
                <li style={styles.footerListItem}><a href="#" style={styles.footerLink}>Data Security</a></li>
                <li style={styles.footerListItem}><a href="#" style={styles.footerLink}>Regulatory Information</a></li>
                <li style={styles.footerListItem}><a href="#" style={styles.footerLink}>BSP Guidelines</a></li>
              </ul>
            </div>
          </div>

          <div style={styles.footerBottom}>
            <p>© 2025 Bank of the Philippine Islands. All rights reserved. PDIC Member.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;