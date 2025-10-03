import React, { useState } from "react";
const seed = [
  { id: "DRV-001", name: "Nguyễn Văn A", phone: "0901 234 567", license: "B2", bus: "BUS-001", status: "Đang làm việc" },
  { id: "DRV-007", name: "Trần Thị B", phone: "0902 345 678", license: "D",  bus: "BUS-007", status: "Nghỉ ca" },
  { id: "DRV-015", name: "Lê Văn C",   phone: "0903 456 789", license: "C",  bus: "BUS-012", status: "Đang làm việc" },
];
export default function DriversPage() {
  const [q, setQ] = useState("");
  const data = seed.filter((d)=> (d.name + d.id + d.bus).toLowerCase().includes(q.toLowerCase()));
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Quản lý tài xế</h2>
          <p className="text-gray-600 text-sm">Tổng số: <b>{data.length}</b> tài xế</p>
        </div>
        <div className="flex gap-2">
          <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Tìm theo tên / mã / xe phụ trách..."
            className="bg-white border rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600"><i className="fas fa-user-plus mr-2" />Thêm tài xế</button>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left p-3">Mã</th><th className="text-left p-3">Họ tên</th><th className="text-left p-3">SĐT</th>
              <th className="text-left p-3">Hạng bằng</th><th className="text-left p-3">Xe phụ trách</th>
              <th className="text-left p-3">Trạng thái</th><th className="text-right p-3">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d)=>(
              <tr key={d.id} className="border-t hover:bg-gray-50">
                <td className="p-3 font-semibold">{d.id}</td>
                <td className="p-3">{d.name}</td>
                <td className="p-3">{d.phone}</td>
                <td className="p-3">{d.license}</td>
                <td className="p-3">{d.bus}</td>
                <td className="p-3">
                  <span className={["px-2 py-1 rounded text-xs font-medium",
                    d.status.includes("Đang") ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"].join(" ")}>
                    {d.status}
                  </span>
                </td>
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
