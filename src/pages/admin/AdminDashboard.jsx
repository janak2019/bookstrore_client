import React from "react";
import AdminLayout from "../../layouts/AdminLayout";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-2xl font-bold text-blue-600">120</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-lg font-semibold">Books Available</h2>
          <p className="text-2xl font-bold text-green-600">85</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="text-lg font-semibold">Pending Requests</h2>
          <p className="text-2xl font-bold text-red-600">14</p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
