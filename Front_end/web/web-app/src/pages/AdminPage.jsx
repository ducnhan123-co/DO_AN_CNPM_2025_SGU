import React from "react";
import { Outlet } from "react-router-dom";
import AdminLayout from "../components/admin/AdminLayout.jsx";

export default function AdminPage() {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
}
