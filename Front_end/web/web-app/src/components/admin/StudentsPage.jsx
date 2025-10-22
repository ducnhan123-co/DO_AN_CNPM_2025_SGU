import React from "react";

export default function StudentsPage() {
  return (
    <section className="space-y-4">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Quản lý học sinh</h1>
          <p className="text-slate-500 text-sm">Hồ sơ, phụ huynh, gán tuyến.</p>
        </div>
        <div className="flex gap-2">
          <input className="border rounded-lg px-3 py-2" placeholder="Tìm học sinh…" />
          <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">Thêm học sinh</button>
        </div>
      </header>
      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left p-3">Mã HS</th>
              <th className="text-left p-3">Họ tên</th>
              <th className="text-left p-3">Phụ huynh</th>
              <th className="text-left p-3">Tuyến</th>
              <th className="text-right p-3">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {[1,2,3].map(i => (
              <tr key={i} className="border-t">
                <td className="p-3">STU-{i}</td>
                <td className="p-3">Trần Minh {i}</td>
                <td className="p-3">Phạm Thu H</td>
                <td className="p-3">Tuyến A</td>
                <td className="p-3 text-right">
                  <button className="px-2 py-1 border rounded mr-2">Sửa</button>
                  <button className="px-2 py-1 border rounded">Liên kết PH</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
