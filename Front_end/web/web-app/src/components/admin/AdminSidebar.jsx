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
  return (
    <aside className="bg-white w-64 min-h-[calc(100vh-160px)] shadow-lg rounded-xl">
      <nav className="p-4">
        <ul className="space-y-2">
          {items.map(({ icon, label, to, end }) => (
            <li key={label}>
              <NavLink
                to={to}
                end={!!end}
                className={({ isActive }) =>
                  [
                    "flex items-center gap-3 p-3 rounded-lg transition",
                    isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-100",
                  ].join(" ")
                }
              >
                <i className={icon} />
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
