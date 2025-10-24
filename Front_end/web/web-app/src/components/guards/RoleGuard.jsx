import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function RoleGuard({ allow }) {
  switch(allow) {
    case "admin":
      
  }

  return <Outlet />;
}
