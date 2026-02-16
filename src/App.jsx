import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Signin from './auth/login';
import AdminDashboard from './admin/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import Hero from './components/HeroSection';
import MyReport from './components/MyReport';
// import MyComplaint  from './components/MyComplaints';
import './App.css';

function App() {
  // Get base path from vite config or use default
  const basename = import.meta.env.BASE_URL || '/hackthon/';
  
  return (
    <ErrorBoundary>
      <BrowserRouter basename={basename.replace(/\/$/, '')}> 
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/myreports" element={<MyReport />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
