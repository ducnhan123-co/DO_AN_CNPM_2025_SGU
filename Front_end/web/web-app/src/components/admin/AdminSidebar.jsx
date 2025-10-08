import React from "react";
import { NavLink } from "react-router-dom";

const items = [
  ["fas fa-tachometer-alt", "Tổng quan", ""],
  ["fas fa-bus", "Quản lý xe buýt", "buses"],
  ["fas fa-user-tie", "Quản lý tài xế", "drivers"],
  ["fas fa-graduation-cap", "Quản lý học sinh", "students"],
  ["fas fa-route", "Tuyến đường", "routes"],
  ["fas fa-calendar-alt", "Lịch trình", "schedule"],
  ["fas fa-map-marker-alt", "Theo dõi thời gian thực", "tracking"],
  ["fas fa-comments", "Tin nhắn", "messages"],
];

export default function AdminSidebar() {
  return (
    <aside className="bg-white w-64 min-h-[calc(100vh-160px)] shadow-lg rounded-xl">
      <nav className="p-4">
        <ul className="space-y-2">
          {items.map(([icon, label, to]) => (
            <li key={label}>
              <NavLink
                end
                to={to}
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
