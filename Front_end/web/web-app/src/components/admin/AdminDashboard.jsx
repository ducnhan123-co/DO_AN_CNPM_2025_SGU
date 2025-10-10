// src/pages/admin/AdminDashboard.jsx
import React from "react";

export default function AdminDashboard() {
  const now = new Date().toLocaleString("vi-VN");

  return (
    <section>
      {/* Tiêu đề */}
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
          Tổng quan hệ thống
        </h2>
        <p className="text-gray-600">
          Cập nhật lúc: <span className="font-semibold">{now}</span>
        </p>
      </div>

      {/* 4 ô thống kê */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow border-l-4 border-blue-500">
          <p className="text-sm text-gray-600 mb-1">Tổng số xe buýt</p>
          <p className="text-3xl font-bold text-gray-800">24</p>
          <p className="text-sm text-green-600 mt-1">18 đang hoạt động</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border-l-4 border-green-500">
          <p className="text-sm text-gray-600 mb-1">Tổng số tài xế</p>
          <p className="text-3xl font-bold text-gray-800">32</p>
          <p className="text-sm text-green-600 mt-1">20 đang làm việc</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border-l-4 border-purple-500">
          <p className="text-sm text-gray-600 mb-1">Tổng số học sinh</p>
          <p className="text-3xl font-bold text-gray-800">1,247</p>
          <p className="text-sm text-blue-600 mt-1">856 đang di chuyển</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border-l-4 border-orange-500">
          <p className="text-sm text-gray-600 mb-1">Tuyến đường</p>
          <p className="text-3xl font-bold text-gray-800">15</p>
          <p className="text-sm text-orange-600 mt-1">2 có cảnh báo</p>
        </div>
      </div>

      {/* Bản đồ (mock) + Cảnh báo */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <section className="lg:col-span-2 bg-white rounded-xl shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800">Theo dõi thời gian thực</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              Cập nhật mỗi 3 giây
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg h-72 grid place-items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-green-200" />
            <div className="relative z-10 text-center">
              <div className="text-6xl text-gray-400 mb-3">🗺️</div>
              <p className="text-gray-600 font-semibold">Bản đồ theo dõi thời gian thực</p>
              <p className="text-sm text-gray-500">18 xe đang hoạt động</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Cảnh báo &amp; Thông báo</h3>
          <div className="space-y-3">
            <div className="p-3 rounded-lg border-l-4 border-red-500 bg-red-50">
              <p className="text-sm font-semibold text-red-800">Xe BUS-001 trễ 15 phút</p>
              <p className="text-xs text-red-600">Tuyến Cầu Giấy - Đống Đa • 5 phút trước</p>
            </div>
            <div className="p-3 rounded-lg border-l-4 border-yellow-500 bg-yellow-50">
              <p className="text-sm font-semibold text-yellow-800">BUS-007 sắp đến điểm đón</p>
              <p className="text-xs text-yellow-700">THCS Nguyễn Du • 2 phút trước</p>
            </div>
            <div className="p-3 rounded-lg border-l-4 border-green-500 bg-green-50">
              <p className="text-sm font-semibold text-green-800">Hoàn thành tuyến sáng</p>
              <p className="text-xs text-green-700">BUS-012 • 10 phút trước</p>
            </div>
          </div>
          <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Xem tất cả thông báo
          </button>
        </section>
      </div>

      {/* Hành động nhanh */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {[
          ["Thêm xe buýt mới", "Đăng ký và phân công xe buýt"],
          ["Tạo lịch trình", "Lập lịch tuần/tháng cho xe"],
          ["Thêm tài xế", "Đăng ký tài xế mới"],
          ["Gửi thông báo", "Nhắn tin tới tài xế/phụ huynh"],
        ].map(([title, desc]) => (
          <button
            key={title}
            onClick={() => alert(`"${title}" (demo)`)}
            className="bg-white p-6 rounded-xl shadow text-center border-2 border-transparent hover:border-blue-500"
          >
            <div className="bg-blue-50 w-16 h-16 mx-auto mb-3 rounded-full grid place-items-center text-2xl">
              🚀
            </div>
            <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
            <p className="text-sm text-gray-600">{desc}</p>
          </button>
        ))}
      </div>

      {/* Hoạt động gần đây */}
      <section className="bg-white rounded-xl shadow p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Hoạt động gần đây</h3>
        <div className="space-y-2">
          {[
            ["BUS-015 đã hoàn thành tuyến chiều", "Tài xế: Nguyễn Văn A • 15:30", "5 phút trước"],
            ["Tài xế Trần Thị B đã check-in", "BUS-008 • Tuyến Hai Bà Trưng", "12 phút trước"],
            ["45 học sinh đã được đón thành công", "Tuyến Cầu Giấy - Đống Đa", "18 phút trước"],
          ].map(([title, sub, time], i) => (
            <div key={i} className="flex items-center gap-4 p-3 rounded hover:bg-gray-50">
              <div className="bg-gray-100 w-9 h-9 rounded-full grid place-items-center">🔔</div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800">{title}</p>
                <p className="text-xs text-gray-600">{sub}</p>
              </div>
              <span className="text-xs text-gray-500">{time}</span>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
