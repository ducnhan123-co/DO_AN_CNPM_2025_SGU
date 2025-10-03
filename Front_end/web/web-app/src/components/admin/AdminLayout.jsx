import React from "react";
import AdminHeader from "./AdminHeader.jsx";
import AdminSidebar from "./AdminSidebar.jsx";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <AdminHeader />
      <div className="flex gap-6 p-6">
        <AdminSidebar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
