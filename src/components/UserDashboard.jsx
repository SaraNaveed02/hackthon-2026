import {
  Package,
  AlertCircle,
  CheckCircle,
  Calendar,
  User,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import { supabase } from "../auth/config";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
const SidebarItem = ({ icon, text, path, active }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) {
      navigate(path); // Navigate dynamically
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition ${
        active ? "bg-green-100 text-green-600 font-medium" : "hover:bg-gray-100"
      }`}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
};


  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);

      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error("Error logging out:", error.message);
      } else {
        window.location.href = "../index.html";
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 hidden md:flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-green-600 mb-8">User Panel</h2>

          <nav className="space-y-4 text-gray-600">
            <SidebarItem
              icon={<User size={18} />}
              text="Profile"
              path="/profile"
            />
            <SidebarItem
              icon={<Package size={18} />}
              text="My Reports"
              path="/myreports"
            />
            <SidebarItem
              icon={<AlertCircle size={18} />}
              text="My Complaints"
              path="/mycomplaints"
            />
            <SidebarItem
              icon={<Calendar size={18} />}
              text="My Events"
              path="/myevents"
            />
          </nav>
        </div>

        <button onClick={handleLogout} disabled={loading}>
          {loading ? "Logging out..." : "Logout"}
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 md:p-10">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back 👋</h1>
          <p className="text-gray-600">
            Here’s a quick overview of your activity.
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<Package size={20} />}
            title="My Reports"
            value="6"
            color="from-blue-500 to-blue-400"
          />
          <StatCard
            icon={<AlertCircle size={20} />}
            title="Active Complaints"
            value="2"
            color="from-red-500 to-red-400"
          />
          <StatCard
            icon={<CheckCircle size={20} />}
            title="Items Matched"
            value="3"
            color="from-green-500 to-green-400"
          />
          <StatCard
            icon={<Calendar size={20} />}
            title="Events Joined"
            value="4"
            color="from-purple-500 to-purple-400"
          />
        </div>

        {/* My Recent Reports */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4">My Recent Reports</h3>

          <div className="space-y-4">
            <ActivityItem title="Lost Phone" status="Pending" color="yellow" />
            <ActivityItem
              title="Blue Backpack"
              status="Resolved"
              color="green"
            />
            <ActivityItem title="Wallet" status="Matching" color="purple" />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-4">
          <ActionButton text="Report Lost Item" color="bg-green-600" />
          <ActionButton text="Submit Complaint" color="bg-blue-600" />
          <ActionButton text="Register Event" color="bg-orange-500" />
        </div>
      </main>
    </div>
  );
};

/* ================= Components ================= */

const SidebarItem = ({ icon, text, active }) => (
  <div
    className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition ${
      active ? "bg-green-100 text-green-600 font-medium" : "hover:bg-gray-100"
    }`}
  >
    {icon}
    {text}
  </div>
);

const StatCard = ({ icon, title, value, color }) => (
  <div
    className={`bg-linear-to-r ${color} text-white p-6 rounded-xl shadow-md`}
  >
    <div className="flex justify-between items-center mb-3">
      <span className="text-sm opacity-90">{title}</span>
      {icon}
    </div>
    <h2 className="text-3xl font-bold">{value}</h2>
  </div>
);

const ActivityItem = ({ title, status, color }) => {
  const colorMap = {
    yellow: "bg-yellow-100 text-yellow-700",
    green: "bg-green-100 text-green-700",
    purple: "bg-purple-100 text-purple-700",
  };

  return (
    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
      <span className="font-medium">{title}</span>
      <span className={`px-3 py-1 text-sm rounded-full ${colorMap[color]}`}>
        {status}
      </span>
    </div>
  );
};

const ActionButton = ({ text, color }) => (
  <button
    className={`${color} text-white py-3 rounded-xl font-medium shadow hover:opacity-90 transition`}
  >
    {text}
  </button>
);

export default UserDashboard;
