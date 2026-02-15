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
   <BrowserRouter basename="/hackthon"> 
  <Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/login" element={<Signin />} />
    <Route path="/userdashboard" element={<UserDashboard />} />
    <Route path="/myreports" element={<MyReport />} />
    <Route path="/admindashboard" element={<AdminDashboard />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;
