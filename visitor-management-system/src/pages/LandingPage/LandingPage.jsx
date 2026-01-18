import { useState, useEffect } from 'react'
import './LandingPage.css'

function LandingPage({ onCheckIn }) {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [language, setLanguage] = useState('EN')

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: true 
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        {/* BPI Logo */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white text-4xl font-bold">BPI</span>
          </div>
        </div>

        {/* Welcome Text */}
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome to BPI</h1>
        <p className="text-xl text-gray-600 mb-4">Visitor Management System</p>

        {/* Date and Time */}
        <div className="mb-8 text-center">
          <p className="text-gray-600">{formatDate(currentTime)}</p>
          <p className="text-gray-600">{formatTime(currentTime)}</p>
        </div>

        {/* Language Toggle */}
        <div className="mb-8 flex gap-4">
          <button
            onClick={() => setLanguage('EN')}
            className={`px-6 py-2 border-2 rounded font-semibold transition-colors ${
              language === 'EN'
                ? 'border-yellow-400 text-yellow-600 bg-yellow-50'
                : 'border-gray-300 text-gray-600'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('FIL')}
            className={`px-6 py-2 border-2 rounded font-semibold transition-colors ${
              language === 'FIL'
                ? 'border-yellow-400 text-yellow-600 bg-yellow-50'
                : 'border-gray-300 text-gray-600'
            }`}
          >
            FIL
          </button>
        </div>

        {/* Action Buttons */}
        <div className="w-full max-w-md space-y-4 mb-8">
          {/* Check In Button */}
          <button
            onClick={() => onCheckIn('checkin')}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-6 rounded-lg shadow-lg transition-colors flex flex-col items-center justify-center"
          >
            <span className="text-2xl mb-2">✎</span>
            <span className="text-xl font-bold">Check In</span>
            <span className="text-sm mt-1">New or returning visitor</span>
          </button>

          {/* Check Out Button */}
          <button
            onClick={() => onCheckIn('checkout')}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-6 rounded-lg shadow-lg transition-colors flex flex-col items-center justify-center"
          >
            <span className="text-2xl mb-2">⊞</span>
            <span className="text-xl font-bold">Check Out</span>
            <span className="text-sm mt-1">Leaving the premises</span>
          </button>
        </div>

        {/* Need Assistance Button */}
        <button className="px-6 py-2 border-2 border-red-600 text-red-600 rounded-lg font-semibold hover:bg-red-50 transition-colors flex items-center gap-2 mb-8">
          <span>🔔</span>
          <span>Need Assistance? Call Front Desk</span>
        </button>

        {/* Dial 100 */}
        <p className="text-red-600 font-bold text-lg mb-8">Dial 100</p>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-4 px-4 text-center">
        <p className="text-gray-600 text-sm mb-1">© 2025 Bank of the Philippine Islands</p>
        <p className="text-gray-600 text-sm flex items-center justify-center gap-1">
          <span>🔒</span> Secured and monitored for your safety
        </p>
      </footer>
    </div>
  )
}

export default LandingPage
