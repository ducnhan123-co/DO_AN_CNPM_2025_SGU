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
    <div className="min-h-screen flex bg-slate-50">
      <AdminSidebar />
      <main className="flex-1 flex flex-col">
        <AdminHeader />
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

