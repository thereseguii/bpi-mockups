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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Deposit request submitted successfully!');
    navigate('/dashboard');
  };

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
              <button 
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-white hover:text-red-100"
              >
                <span>🚪</span>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Deposit Request Form</h2>
              <p className="text-gray-600 mb-8">Submit a new deposit request for processing</p>

              <form onSubmit={handleSubmit}>
                {/* Client Information */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Information</h3>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Client Name <span className="text-red-600">*</span>
                    </label>
                    <select
                      required
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    >
                      <option value="">Select client</option>
                      <option value="SM Investments">SM Investments Corporation</option>
                      <option value="Ayala Corporation">Ayala Corporation</option>
                      <option value="Jollibee Foods">Jollibee Foods Corporation</option>
                    </select>
                  </div>
                </div>

                {/* Deposit Details */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Deposit Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Amount (PHP) <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="number"
                        required
                        placeholder="0.00"
                        value={formData.amount}
                        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Deposit Type <span className="text-red-600">*</span>
                      </label>
                      <select
                        required
                        value={formData.depositType}
                        onChange={(e) => setFormData({ ...formData, depositType: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
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
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Pickup Schedule</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Pickup Branch <span className="text-red-600">*</span>
                      </label>
                      <select
                        required
                        value={formData.branch}
                        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      >
                        <option value="">Select branch</option>
                        <option value="Makati">Makati Main Branch</option>
                        <option value="BGC">BGC Branch</option>
                        <option value="Ortigas">Ortigas Center Branch</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Date <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Time <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="time"
                      required
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Supporting Documents */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Supporting Documents</h3>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <div className="mb-4">
                      <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="text-gray-600">Drag and drop files here, or click to browse</p>
                    </div>
                    <button
                      type="button"
                      className="bg-white text-gray-700 px-6 py-2 rounded-lg border-2 border-gray-300 hover:bg-gray-50 font-medium"
                    >
                      Select Files
                    </button>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Notes</h3>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Notes (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Add any additional information or special instructions"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>📥</span>
                    <span>Submit Request</span>
                  </button>
                  <button
                    type="button"
                    className="bg-white text-gray-700 px-6 py-3 rounded-lg border-2 border-gray-300 hover:bg-gray-50 font-semibold flex items-center gap-2"
                  >
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
