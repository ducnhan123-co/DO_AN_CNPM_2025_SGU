import React from "react";

export default function SchedulePage() {
  return (
    <section className="space-y-4">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Lịch trình</h1>
          <p className="text-slate-500 text-sm">Tạo và quản lý chuyến theo ngày/tuần.</p>
        </div>
        <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">Tạo lịch trình</button>
      </header>

      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left p-3">Ngày</th>
              <th className="text-left p-3">Giờ</th>
              <th className="text-left p-3">Tuyến</th>
              <th className="text-left p-3">Tài xế</th>
              <th className="text-left p-3">Xe</th>
              <th className="text-right p-3">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {[1,2,3].map(i => (
              <tr key={i} className="border-t">
                <td className="p-3">2025-10-{10+i}</td>
                <td className="p-3">07:30</td>
                <td className="p-3">Tuyến A</td>
                <td className="p-3">Nguyễn Văn {i}</td>
                <td className="p-3">BUS-{i}</td>
                <td className="p-3 text-right">
                  <button className="px-2 py-1 border rounded mr-2">Sửa</button>
                  <button className="px-2 py-1 border rounded">Huỷ</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
