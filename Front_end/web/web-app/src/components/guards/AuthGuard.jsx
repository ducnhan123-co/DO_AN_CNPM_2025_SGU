import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getToken } from "../../services/LocalStorageService";

export default function AuthGuard() {
  const location = useLocation();
  if (!getToken()) {
    // Chưa có token -> đá về login, lưu `from` để quay lại
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return <Outlet />;
}
