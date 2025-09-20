import React from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/SideBar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
     

      {/* Sidebar + Content */}
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-100">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
