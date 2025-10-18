import React from "react";

export default function DriversPage() {
  return (
    <section className="space-y-4">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Quản lý tài xế</h1>
          <p className="text-slate-500 text-sm">Thông tin, trạng thái, phân công.</p>
        </div>
        <div className="flex gap-2">
          <input className="border rounded-lg px-3 py-2" placeholder="Tìm theo tên/SDT…" />
          <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">Thêm tài xế</button>
        </div>
      </header>
      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left p-3">Họ tên</th>
              <th className="text-left p-3">SĐT</th>
              <th className="text-left p-3">Bằng lái</th>
              <th className="text-left p-3">Trạng thái</th>
              <th className="text-right p-3">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {[1,2,3].map(i => (
              <tr key={i} className="border-t">
                <td className="p-3">Nguyễn Văn {i}</td>
                <td className="p-3">09xx xxx {i}{i}</td>
                <td className="p-3">D</td>
                <td className="p-3"><span className="px-2 py-1 rounded bg-emerald-100 text-emerald-700">Rảnh</span></td>
                <td className="p-3 text-right">
                  <button className="px-2 py-1 border rounded mr-2">Sửa</button>
                  <button className="px-2 py-1 border rounded">Khóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
