import { useState } from 'react'
import './CheckInForm.css'

function CheckInForm({ type, onBack }) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    mobile: '',
    email: '',
    idType: '',
    idNumber: '',
    visitPurpose: '',
    visitingEmployee: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handlePurposeSelect = (purpose) => {
    setFormData(prev => ({
      ...prev,
      visitPurpose: purpose
    }))
  }

  const nextStep = () => {
    if (step < 3) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const purposes = [
    { id: 'business', label: 'Business Meeting', icon: '💼' },
    { id: 'interview', label: 'Job Interview', icon: '📋' },
    { id: 'delivery', label: 'Delivery/Service', icon: '🚚' },
    { id: 'inspection', label: 'Site Inspection', icon: '📋' },
    { id: 'client', label: 'Client Visit', icon: '👥' },
    { id: 'training', label: 'Training/Seminar', icon: '🎓' },
    { id: 'contractor', label: 'Contractor/Maintenance', icon: '🔧' },
    { id: 'other', label: 'Other', icon: '⋯' },
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Left Sidebar */}
      <div className="w-1/2 bg-gray-50 p-8 border-r border-gray-200">
        {/* Progress Steps */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-gray-900 mb-6">Check-In Progress</h3>
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex items-start gap-3">
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${step >= 1 ? 'bg-red-600' : 'bg-gray-400'}`}>
                {step > 1 ? '✓' : '1'}
              </div>
              <div>
                <p className={`font-semibold ${step === 1 ? 'text-gray-900' : 'text-gray-600'}`}>
                  Personal Information
                </p>
                {step === 1 && <p className="text-xs text-gray-600">Current Step</p>}
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-3">
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${step >= 2 ? 'bg-red-600' : 'bg-gray-400'}`}>
                {step > 2 ? '✓' : '2'}
              </div>
              <div>
                <p className={`font-semibold ${step === 2 ? 'text-gray-900' : 'text-gray-600'}`}>
                  Visit Details
                </p>
                {step === 2 && <p className="text-xs text-gray-600">Current Step</p>}
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-3">
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${step >= 3 ? 'bg-red-600' : 'bg-gray-400'}`}>
                {step > 3 ? '✓' : '3'}
              </div>
              <div>
                <p className={`font-semibold ${step === 3 ? 'text-gray-900' : 'text-gray-600'}`}>
                  Badge & QR Code
                </p>
                {step === 3 && <p className="text-xs text-gray-600">Current Step</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-6">
          <div className="flex gap-2 mb-2">
            <span className="text-lg">💡</span>
            <h4 className="font-bold text-gray-900">Quick Tips</h4>
          </div>
          <ul className="text-sm text-gray-700 space-y-1">
            {step === 1 && (
              <>
                <li>• Please have ready:</li>
                <li className="ml-4">• Valid ID</li>
                <li className="ml-4">• Host employee name</li>
                <li className="ml-4">• Company name</li>
              </>
            )}
            {step === 2 && (
              <li>• Select the main purpose of your visit and the employee you're meeting with.</li>
            )}
            {step === 3 && (
              <li>• Your badge will be generated with your QR code for security purposes.</li>
            )}
          </ul>
        </div>

        {/* Need Help */}
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
          <div className="flex gap-2 mb-1">
            <span className="text-lg">🔔</span>
            <h4 className="font-bold text-gray-900">Need Help?</h4>
          </div>
          <p className="text-sm text-gray-700">
            Call Front Desk: <span className="font-bold text-red-600">100</span>
          </p>
        </div>
      </div>

      {/* Right Content Area */}
      <div className="w-1/2 bg-white p-8 overflow-y-auto">
        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Visitor Information</h2>
            <p className="text-gray-600 mb-8">Step 1 of 4</p>

            <form className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              {/* Company/Organization */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Company/Organization <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Enter your company name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              {/* Mobile Number */}
              <div className="flex gap-4">
                <div className="w-24">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Country</label>
                  <div className="px-4 py-2 border border-gray-300 rounded-lg bg-gray-100">
                    +63
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Mobile Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="9XX XXX XXXX"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              {/* ID Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  ID Type <span className="text-red-600">*</span>
                </label>
                <select
                  name="idType"
                  value={formData.idType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 bg-white"
                >
                  <option value="">Select ID type</option>
                  <option value="passport">Passport</option>
                  <option value="license">Driver's License</option>
                  <option value="id">National ID</option>
                </select>
              </div>

              {/* ID Number */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  ID Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="idNumber"
                  value={formData.idNumber}
                  onChange={handleInputChange}
                  placeholder="Enter your ID number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
            </form>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-12">
              <button
                onClick={onBack}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                ← Back
              </button>
              <button
                onClick={nextStep}
                className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
              >
                Next: Purpose & Host
                <span>→</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Visit Details */}
        {step === 2 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Visit Details</h2>
            <p className="text-gray-600 mb-8">Step 2 of 3</p>

            <form className="space-y-8">
              {/* What brings you here today */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-4">
                  What brings you here today? <span className="text-red-600">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {purposes.map(purpose => (
                    <button
                      key={purpose.id}
                      onClick={() => handlePurposeSelect(purpose.label)}
                      className={`p-4 border-2 rounded-lg text-center transition-all ${
                        formData.visitPurpose === purpose.label
                          ? 'border-red-600 bg-red-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-2xl mb-2">{purpose.icon}</div>
                      <p className="text-sm font-medium text-gray-900">{purpose.label}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Who are you visiting */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Who are you visiting? <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="visitingEmployee"
                  value={formData.visitingEmployee}
                  onChange={handleInputChange}
                  placeholder="Search employee by name or department..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
            </form>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-12">
              <button
                onClick={prevStep}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                ← Back
              </button>
              <button
                onClick={nextStep}
                className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
              >
                Generate Badge & QR
                <span>→</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Badge & QR Code */}
        {step === 3 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Visitor Badge</h2>
            <p className="text-gray-600 mb-8">Step 3 of 3</p>

            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center mb-8">
              <div className="text-6xl mb-4">🎟️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{formData.fullName}</h3>
              <p className="text-gray-600 mb-6">{formData.company}</p>
              
              <div className="bg-white p-4 rounded-lg inline-block mb-6">
                <div className="w-32 h-32 bg-gray-300 flex items-center justify-center">
                  <p className="text-center text-gray-600">QR Code</p>
                </div>
              </div>

              <p className="text-sm text-gray-600">
                <strong>Purpose:</strong> {formData.visitPurpose}<br/>
                <strong>Visiting:</strong> {formData.visitingEmployee}
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-12">
              <button
                onClick={prevStep}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                ← Back
              </button>
              <button
                onClick={onBack}
                className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
              >
                Complete Check-In
                <span>→</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CheckInForm
