// src/components/admin/AdminHeader.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminHeader() {
  const navigate = useNavigate();

  const [now, setNow] = useState(new Date());
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    const u = setInterval(() => setLastUpdate(new Date()), 30000);
    return () => {
      clearInterval(t);
      clearInterval(u);
    };
  }, []);

  const fmt = (d) =>
    d.toLocaleString("vi-VN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

  return (
    <header className="bg-white shadow-lg border-b-4 border-blue-500">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left: logo + brand + quick stats */}
        <div className="flex items-center gap-4">
          <div className="bg-blue-500 p-2 rounded-lg">
            <i className="fas fa-bus text-white text-xl" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Smart School Bus</h1>
            <p className="text-sm text-gray-600">Hệ thống quản lý xe đưa đón học sinh</p>
          </div>

          <div className="hidden md:flex items-center gap-6 ml-4">
            <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-lg">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-green-700">Hệ thống hoạt động</span>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-500">Xe đang hoạt động</p>
              <p className="text-lg font-bold text-blue-600">18/24</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-500">Học sinh đang di chuyển</p>
              <p className="text-lg font-bold text-purple-600">856</p>
            </div>
          </div>
        </div>

        {/* Right: actions */}
        <div className="flex items-center gap-3">
          {/* Weather chip */}
          <div className="hidden lg:flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg">
            <i className="fas fa-sun text-yellow-500" />
            <div className="text-center">
              <p className="text-xs text-gray-600">Hà Nội</p>
              <p className="text-sm font-semibold text-gray-800">28°C</p>
            </div>
          </div>

          {/* Emergency */}
          <button
            className="!bg-red-100 p-2 rounded-full hover:!bg-red-200 transition"
            title="Khẩn cấp"
            onClick={() => {
              if (confirm("Kích hoạt chế độ khẩn cấp?")) alert("Đã kích hoạt chế độ khẩn cấp!");
            }}
          >
            <i className="fas fa-exclamation-triangle text-red-600" />
          </button>

          {/* Search */}
          <div className="relative hidden md:block">
            <input
              className="bg-gray-100 pl-8 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-48"
              placeholder="Tìm xe, tài xế..."
              onKeyDown={(e) =>
                e.key === "Enter" && alert(`Đang tìm: "${e.currentTarget.value}"`)
              }
            />
            <i className="fas fa-search absolute left-2 top-2.5 text-gray-400 text-sm" />
          </div>

          {/* Language */}
          <button className="flex items-center gap-1 bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200 transition">
            <span className="text-sm font-medium text-gray-700">VI</span>
            <i className="fas fa-chevron-down text-xs text-gray-500" />
          </button>

          {/* Notifications */}
          <button
            className="relative !bg-blue-100 p-2 rounded-full hover:!bg-blue-200 transition"
            onClick={() =>
              alert(
                "Bạn có 3 thông báo mới:\n1. BUS-001 trễ 15 phút\n2. BUS-007 sắp đến điểm đón\n3. Hoàn thành tuyến sáng"
              )
            }
          >
            <i className="fas fa-bell text-blue-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 grid place-items-center">
              3
            </span>
          </button>

          {/* Settings */}
          <button className="!bg-gray-100 p-2 rounded-full hover:!bg-gray-200 transition">
            <i className="fas fa-cog text-gray-600" />
          </button>

          {/* User + Logout */}
          <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2">
            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold grid place-items-center">
              Q
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-semibold text-gray-800">Quản trị viên</p>
              <p className="text-xs text-gray-600">Trường DEF</p>
            </div>
            <button
              onClick={() => navigate("/")}
              className="ml-2 px-3 py-1 text-sm font-medium rounded-lg bg-gray-100 hover:bg-gray-200"
              title="Đăng xuất về trang chủ"
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </div>

      {/* Secondary bar */}
      <div className="bg-gray-50 px-6 py-2 border-t">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <i className="fas fa-clock text-gray-500 text-sm" />
              <span className="text-sm text-gray-600">
                Cập nhật cuối:{" "}
                <span className="font-medium">
                  {lastUpdate.toLocaleTimeString("vi-VN")}
                </span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-wifi text-green-500 text-sm" />
              <span className="text-sm text-gray-600">
                Kết nối: <span className="font-medium text-green-600">Tốt</span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-transparent text-sm text-blue-600 font-medium px-3 py-1 rounded-lg hover:bg-blue-50 hover:text-blue-800 transition">
              Xuất báo cáo
            </button>
            <button className="bg-transparent text-sm text-green-600 font-medium px-3 py-1 rounded-lg hover:bg-green-50 hover:text-green-800 transition">
              Sao lưu dữ liệu
            </button>
            <button className="bg-blue-500 text-white px-4 py-1 rounded-lg text-sm hover:bg-blue-600">
              <i className="fas fa-plus mr-1" /> Thêm mới
            </button>
          </div>
        </div>
        <div className="text-xs text-gray-500 mt-1">
          Thời gian hiện tại: <b>{fmt(now)}</b>
        </div>
      </div>
    </header>
  );
}
