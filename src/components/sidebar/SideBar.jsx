import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Book, Users, Settings, LogOut } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <Home size={20} /> },
    { name: "Books", path: "/admin/books", icon: <Book size={20} /> },
    { name: "Users", path: "/admin/users", icon: <Users size={20} /> },
    { name: "Settings", path: "/admin/settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="w-64 bg-white shadow-lg p-6 flex flex-col">
      <h2 className="text-2xl font-bold text-blue-600 mb-8">Admin Panel</h2>

      <nav className="flex-1 space-y-4">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
              location.pathname === link.path
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {link.icon}
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <button className="mt-8 flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
        <LogOut size={20} />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
