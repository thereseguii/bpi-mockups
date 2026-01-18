import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import CheckInForm from './pages/CheckInForm/CheckInForm'

function App() {
  const [currentPage, setCurrentPage] = useState('landing')
  const [checkInType, setCheckInType] = useState(null)

  const handleCheckIn = (type) => {
    setCheckInType(type)
    setCurrentPage('checkin')
  }

  const handleBack = () => {
    setCurrentPage('landing')
    setCheckInType(null)
  }

  return (
    <div>
      {currentPage === 'landing' && <LandingPage onCheckIn={handleCheckIn} />}
      {currentPage === 'checkin' && <CheckInForm type={checkInType} onBack={handleBack} />}
    </div>
  )
}

export default App
