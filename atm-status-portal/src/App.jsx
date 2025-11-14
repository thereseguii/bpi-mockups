import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import CustomerPage from './pages/CustomerPage/CustomerPage';
import EmployeeReportPage from './pages/EmployeeReportPage/EmployeeReportPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/status" element={<CustomerPage />} />
        <Route path="/employee-report" element={<EmployeeReportPage />} />
        {/* ...rest of routes... */}
      </Routes>
    </Router>
  );
}

export default App;