import React from "react";
import { Outlet } from "react-router-dom";
import ParentLayout from "../../components/parent/ParentLayout.jsx";
import "./Parent.css"; // Thêm dòng này

export default function ParentPage() {
  return (
    <ParentLayout>
      <Outlet />
    </ParentLayout>
  );
}
