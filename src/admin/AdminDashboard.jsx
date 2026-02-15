import {
  FileText,
  AlertCircle,
  CheckCircle,
  Calendar,
  LayoutDashboard,
  Package,
  Users,
  Bell,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 hidden md:block">
        <h2 className="text-2xl font-bold text-green-600 mb-8">
          Campus Panel
        </h2>

        <nav className="space-y-4 text-gray-600">
          <SidebarItem icon={<LayoutDashboard size={18} />} text="Dashboard" active />
          <SidebarItem icon={<Package size={18} />} text="Lost & Found" />
          <SidebarItem icon={<AlertCircle size={18} />} text="Complaints" />
          <SidebarItem icon={<Users size={18} />} text="Volunteers" />
          <SidebarItem icon={<Bell size={18} />} text="Notifications" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">

        {/* Top Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<FileText size={22} />}
            title="Total Reports"
            value="128"
            color="from-blue-500 to-blue-400"
          />
          <StatCard
            icon={<AlertCircle size={22} />}
            title="Active Complaints"
            value="5"
            color="from-red-500 to-red-400"
          />
          <StatCard
            icon={<CheckCircle size={22} />}
            title="Items Matched"
            value="12"
            color="from-green-500 to-green-400"
          />
          <StatCard
            icon={<Calendar size={22} />}
            title="Events Registered"
            value="8"
            color="from-yellow-500 to-yellow-400"
          />
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>

          <div className="space-y-4">
            <ActivityItem title="Phone" status="Pending" color="yellow" />
            <ActivityItem title="Backpack" status="Resolved" color="green" />
            <ActivityItem title="Wallet" status="Matching" color="purple" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-3 gap-4">
          <ActionButton text="Report Lost Item" color="bg-green-600" />
          <ActionButton text="Submit Complaint" color="bg-blue-600" />
          <ActionButton text="Register for Event" color="bg-orange-500" />
        </div>
      </main>
    </div>
  );
};

/* ================= Components ================= */

const SidebarItem = ({ icon, text, active }) => (
  <div
    className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition ${
      active
        ? "bg-green-100 text-green-600 font-medium"
        : "hover:bg-gray-100"
    }`}
  >
    {icon}
    {text}
  </div>
);

const StatCard = ({ icon, title, value, color }) => (
  <div className={`bg-linear-to-r ${color} text-white p-6 rounded-xl shadow-md`}>
    <div className="flex justify-between items-center mb-3">
      <span className="text-sm opacity-80">{title}</span>
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

export default Dashboard;
