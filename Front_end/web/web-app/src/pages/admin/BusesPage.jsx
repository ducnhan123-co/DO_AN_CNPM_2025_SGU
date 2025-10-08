import React, { useState } from "react";
const seed = [
  { id: "BUS-001", plate: "51A-123.45", seats: 45, status: "Đang chạy", route: "Cầu Giấy - Đống Đa" },
  { id: "BUS-007", plate: "51B-678.90", seats: 35, status: "Sắp đến điểm đón", route: "Hai Bà Trưng - Hoàn Kiếm" },
  { id: "BUS-012", plate: "50F-111.22", seats: 30, status: "Hoàn thành tuyến sáng", route: "Thanh Xuân - Cầu Giấy" },
];
export default function BusesPage() {
  const [q, setQ] = useState("");
  const data = seed.filter((b) =>
    (b.id + b.plate + b.route).toLowerCase().includes(q.toLowerCase())
  );
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Quản lý xe buýt</h2>
          <p className="text-gray-600 text-sm">Tổng số: <b>{data.length}</b> xe</p>
        </div>
        <div className="flex gap-2">
          <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Tìm theo mã / biển số / tuyến..."
            className="bg-white border rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600"><i className="fas fa-plus mr-2" />Thêm xe</button>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left p-3">Mã xe</th><th className="text-left p-3">Biển số</th>
              <th className="text-left p-3">Số ghế</th><th className="text-left p-3">Trạng thái</th>
              <th className="text-left p-3">Tuyến</th><th className="text-right p-3">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {data.map((b)=>(
              <tr key={b.id} className="border-t hover:bg-gray-50">
                <td className="p-3 font-semibold">{b.id}</td>
                <td className="p-3">{b.plate}</td>
                <td className="p-3">{b.seats}</td>
                <td className="p-3">
                  <span className={["px-2 py-1 rounded text-xs font-medium",
                    b.status.includes("Đang") ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"].join(" ")}>
                    {b.status}
                  </span>
                </td>
                <td className="p-3">{b.route}</td>
                <td className="p-3 text-right">
                  <button className="px-2 py-1 text-blue-600 hover:bg-blue-50 rounded mr-1"><i className="fas fa-eye" /></button>
                  <button className="px-2 py-1 text-amber-600 hover:bg-amber-50 rounded mr-1"><i className="fas fa-pen" /></button>
                  <button className="px-2 py-1 text-red-600 hover:bg-red-50 rounded"><i className="fas fa-trash" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
