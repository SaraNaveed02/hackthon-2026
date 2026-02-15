import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './auth/login';
import AdminDashboard from './admin/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import Hero from './components/HeroSection';
import MyReport from './components/MyReport';
// import MyComplaint  from './components/MyComplaints';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing / Hero page */}
        <Route path="/" element={<Hero />} />

        {/* Admin dashb oard */}
        <Route path="/login" element={<Signin />} />

        {/* Login page */}
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/myreports" element={<MyReport />} />
          {/* <Route path="/mycomplaints" element={<MyComplaint />} /> */}

        {/* User dashboard */}
      <Route path="/admindashboard" element={<AdminDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
