import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BookOpen, ClipboardList, User, LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice"; // adjust path
import { useNavigate } from "react-router-dom";

const UserLayout = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const links = [
    { name: "My Dashboard", path: "/user/dashboard", icon: <User size={20} /> },
    { name: "Borrowed Books", path: "/user/borrowed", icon: <ClipboardList size={20} /> },
    { name: "Available Books", path: "/user/books", icon: <BookOpen size={20} /> },
  ];

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 flex flex-col">
        <h2 className="text-2xl font-bold text-blue-600 mb-8">Library</h2>

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
        <button
          onClick={handleLogout}
          className="mt-8 flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          <LogOut size={20} />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default UserLayout;
