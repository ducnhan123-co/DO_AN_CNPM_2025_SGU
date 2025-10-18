import React from "react";

export default function BusesPage() {
  return (
    <section className="space-y-4">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Quản lý xe buýt</h1>
          <p className="text-slate-500 text-sm">Thêm, sửa, đổi trạng thái xe.</p>
        </div>
        <div className="flex gap-2">
          <input className="border rounded-lg px-3 py-2" placeholder="Tìm theo biển số…" />
          <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">Thêm xe</button>
        </div>
      </header>
      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left p-3">Mã xe</th>
              <th className="text-left p-3">Biển số</th>
              <th className="text-left p-3">Sức chứa</th>
              <th className="text-left p-3">Trạng thái</th>
              <th className="text-right p-3">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {[1,2,3].map(i => (
              <tr key={i} className="border-t">
                <td className="p-3">BUS-{i}</td>
                <td className="p-3">51A-123.{i}{i}</td>
                <td className="p-3">30</td>
                <td className="p-3"><span className="px-2 py-1 rounded bg-emerald-100 text-emerald-700">Sẵn sàng</span></td>
                <td className="p-3 text-right">
                  <button className="px-2 py-1 border rounded mr-2">Sửa</button>
                  <button className="px-2 py-1 border rounded">Đổi trạng thái</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
