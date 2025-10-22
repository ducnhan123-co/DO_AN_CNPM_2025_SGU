import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ROLE_KEY = "role"; // "admin" | "parent" | "driver"
const getRole = () => localStorage.getItem(ROLE_KEY);

export default function RoleGuard({ allow = [] }) {
  const role = getRole();
  if (!role) {
    // Có token nhưng chưa có role -> coi như chưa đăng nhập hợp lệ
    return <Navigate to="/login" replace />;
  }
  if (allow.length && !allow.includes(role)) {
    // Có role nhưng không hợp lệ cho vùng này -> chuyển về vùng đúng role
    return <Navigate to={`/${role}`} replace />;
  }
  return <Outlet />;
}
