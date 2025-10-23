/*import React from "react";
import { Outlet } from "react-router-dom";
import AdminLayout from "../components/admin/AdminLayout.jsx";

export default function AdminPage() {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
}*/

import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../components/admin/AdminHeader.jsx";
import AdminSidebar from "../components/admin/AdminSidebar.jsx";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <AdminHeader />
      <main className="flex">
        <AdminSidebar />
        <div className="p-6 w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

