import React from "react";
import { Link } from "react-router-dom";

export default function ParentSidebar() {
  return (
    <aside
      style={{
        background: "#fff",
        width: 220,
        minHeight: "100vh",
        boxShadow: "2px 0 8px rgba(53,117,211,0.07)",
        padding: "24px 0",
      }}
    >
      <nav>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li style={{ marginBottom: 8 }}>
            <Link
              to="/parent/bus"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 24px",
                borderRadius: 8,
                background: "#3575d3",
                color: "#fff",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <i className="fas fa-bus" /> Chuyến xe của con
            </Link>
          </li>
          <li>
            <Link
              to="/parent/notifications"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 24px",
                borderRadius: 8,
                color: "#3575d3",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              <i className="fas fa-bell" /> Thông báo
            </Link>
          </li>
          <li>
            <Link
              to="/parent/profile"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 24px",
                borderRadius: 8,
                color: "#3575d3",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              <i className="fas fa-user" /> Tài khoản
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
