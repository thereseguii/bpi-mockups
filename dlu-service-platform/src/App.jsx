import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Dashboard from './pages/Dashboard/Dashboard';
import DepositRequest from './pages/DepositRequest/DepositRequest';
import WithdrawalRequest from './pages/WithdrawalRequest/WithdrawalRequest';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/deposit-request" element={<DepositRequest />} />
        <Route path="/withdrawal-request" element={<WithdrawalRequest />} />
      </Routes>
    </Router>
  );
}

export default App;
