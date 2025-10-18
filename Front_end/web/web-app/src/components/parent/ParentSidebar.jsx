/*import React from "react";
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
}*/

import React from "react";
import { NavLink } from "react-router-dom";

const item = (isActive) =>
  [
    "flex items-center gap-3 px-6 py-3 rounded-lg transition",
    isActive ? "bg-[#3575d3] text-white" : "text-[#3575d3] hover:bg-[#edf2fe]",
  ].join(" ");

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
            <NavLink to="/parent/tracking" className={({isActive}) => item(isActive)} end>
              <i className="fas fa-bus" /> <span>Chuyến xe của con</span>
            </NavLink>
          </li>
          <li style={{ marginBottom: 8 }}>
            <NavLink to="/parent/history" className={({isActive}) => item(isActive)}>
              <i className="fas fa-history" /> <span>Lịch sử chuyến</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/parent/account" className={({isActive}) => item(isActive)}>
              <i className="fas fa-user" /> <span>Tài khoản</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
