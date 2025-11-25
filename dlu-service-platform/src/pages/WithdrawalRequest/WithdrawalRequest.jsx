import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

const WithdrawalRequest = () => {
  const navigate = useNavigate();
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
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Withdrawal Request Form</h2>
              <p className="text-gray-600 mb-8">Submit a new withdrawal request with denomination specifications</p>

              <form onSubmit={handleSubmit}>
                {/* Client Information */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
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
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Total Amount (PHP) <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="number"
                        required
                        placeholder="0.00"
                        value={formData.totalAmount}
                        onChange={(e) => setFormData({ ...formData, totalAmount: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Denomination Breakdown */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Denomination Breakdown</h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                    <p className="text-sm text-blue-800 flex items-center gap-2">
                      <span>ℹ️</span>
                      <span>The sum of all denominations must equal the total amount: ₱{formData.totalAmount || '0'}</span>
                    </p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">₱1,000 Bills</label>
                      <input
                        type="number"
                        min="0"
                        placeholder="0"
                        value={formData.bills1000}
                        onChange={(e) => setFormData({ ...formData, bills1000: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">₱500 Bills</label>
                      <input
                        type="number"
                        min="0"
                        placeholder="0"
                        value={formData.bills500}
                        onChange={(e) => setFormData({ ...formData, bills500: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">₱200 Bills</label>
                      <input
                        type="number"
                        min="0"
                        placeholder="0"
                        value={formData.bills200}
                        onChange={(e) => setFormData({ ...formData, bills200: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">₱100 Bills</label>
                      <input
                        type="number"
                        min="0"
                        placeholder="0"
                        value={formData.bills100}
                        onChange={(e) => setFormData({ ...formData, bills100: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">₱50 Bills</label>
                      <input
                        type="number"
                        min="0"
                        placeholder="0"
                        value={formData.bills50}
                        onChange={(e) => setFormData({ ...formData, bills50: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">₱20 Bills</label>
                      <input
                        type="number"
                        min="0"
                        placeholder="0"
                        value={formData.bills20}
                        onChange={(e) => setFormData({ ...formData, bills20: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                    <p className="text-sm font-semibold text-gray-700">
                      Calculated Total: <span className="text-xl text-gray-900">₱{calculateTotal().toLocaleString()}</span>
                    </p>
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
                    <span>📤</span>
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

export default WithdrawalRequest;
