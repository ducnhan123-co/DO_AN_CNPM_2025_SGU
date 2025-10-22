import React from "react";
import { NavLink } from "react-router-dom";

const items = [
  { icon: "fas fa-tachometer-alt", label: "Tổng quan", to: "/admin", end: true },
  { icon: "fas fa-bus",             label: "Quản lý xe buýt",           to: "/admin/buses" },
  { icon: "fas fa-user-tie",        label: "Quản lý tài xế",            to: "/admin/drivers" },
  { icon: "fas fa-graduation-cap",  label: "Quản lý học sinh",          to: "/admin/students" },
  { icon: "fas fa-route",           label: "Tuyến đường",               to: "/admin/routes" },
  { icon: "fas fa-calendar-alt",    label: "Lịch trình",                to: "/admin/schedule" },
  { icon: "fas fa-map-marker-alt",  label: "Theo dõi thời gian thực",   to: "/admin/tracking" },
  { icon: "fas fa-comments",        label: "Tin nhắn",                  to: "/admin/messages" },
];

export default function AdminSidebar() {
  // dễ thay đổi kích thước chữ label
  const LABEL_SIZE = "14px";

  const asideStyle = {
    background: "#fff",
    width: 220,
    minHeight: "100vh",
    boxShadow: "2px 0 8px rgba(53,117,211,0.07)",
    paddingTop: 24,
    paddingBottom: 24,
    borderRadius: 8,
  };
  const navStyle = { padding: 12 };
  const ulStyle = {
    listStyle: "none",
    padding: "0 12px",
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  };

  const linkBase = {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "10px 12px",
    borderRadius: 8,
    textDecoration: "none",
    fontWeight: 600,
  };
  const activeLink = { background: "#3575d3", color: "#fff" };
  const inactiveLink = { color: "#374151", background: "transparent" };

  return (
    <aside style={asideStyle}>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          {items.map(({ icon, label, to, end }) => (
            <li key={label}>
              <NavLink
                to={to}
                end={!!end}
                style={({ isActive }) => ({
                  ...linkBase,
                  ...(isActive ? activeLink : inactiveLink),
                })}
              >
                <i className={icon} />
                <span style={{
                  fontSize: LABEL_SIZE,
                  display: "inline-block",
                  maxWidth: 140,           // giới hạn chiều rộng để xuống dòng khi cần
                  whiteSpace: "normal",    // cho phép wrap
                  wordBreak: "break-word", // xuống dòng an toàn với từ dài
                }}>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
