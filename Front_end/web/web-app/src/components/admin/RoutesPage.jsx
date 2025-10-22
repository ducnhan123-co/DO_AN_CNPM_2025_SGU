import React from "react";

export default function RoutesPage() {
  return (
    <section className="space-y-4">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Tuyến đường</h1>
          <p className="text-slate-500 text-sm">Quản lý tuyến & trạm dừng.</p>
        </div>
        <div className="flex gap-2">
          <input className="border rounded-lg px-3 py-2" placeholder="Tìm tuyến…" />
          <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">Thêm tuyến</button>
        </div>
      </header>

      <div className="bg-white border rounded-xl p-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Danh sách tuyến</h3>
            <ul className="divide-y">
              {["Tuyến A","Tuyến B","Tuyến C"].map((r,i)=>(
                <li key={i} className="py-2 flex items-center justify-between">
                  <span>{r}</span>
                  <div className="space-x-2">
                    <button className="px-2 py-1 border rounded">Sửa</button>
                    <button className="px-2 py-1 border rounded">Xoá</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Trạm dừng của tuyến</h3>
            <div className="rounded border p-3 text-sm text-slate-600">
              Kéo-thả để sắp xếp (placeholder). Sau này gắn map & reorder API.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
