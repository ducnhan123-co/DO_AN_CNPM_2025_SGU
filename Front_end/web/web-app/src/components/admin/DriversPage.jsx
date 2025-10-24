import React, { useState } from "react";
import { useEffect } from "react";
import { getDrivers } from "../../services/DriverService";
import dayjs from "dayjs";

export default function DriversPage() {
  const [q, setQ] = useState("");
  const [drivers, setDrivers] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        setLoading(true);
        const data = await getDrivers(); // Gọi API
        setDrivers(data.data);
      } catch (err) {
        console.error(err);
        setError("Không thể tải danh sách xe buýt!");
      } finally {
        setLoading(false);
      }
    };

    fetchDrivers();
  }, []);

  
  const filtered = drivers.filter(
    (driver) =>
      driver.user.firstName.toLowerCase().includes(q.toLowerCase()) ||
    driver.user.lastName.toLowerCase().includes(q.toLowerCase()) ||
    driver.user.phoneNumber.includes(q)
  );

  const rows = filtered.map(driver =>
    <tr key={driver.id} className="border-t hover:bg-gray-50">
      <td className="p-3 font-semibold">{driver.user.id}</td>
      <td className="p-3">{driver.user.lastName}</td>
      <td className="p-3">{driver.user.firstName}</td>
      <td className="p-3">{driver.user.phoneNumber}</td>
      <td className="p-3">{driver.driverLicense}</td>
      <td className="p-3">{driver.user.dob}</td>
      <td className="p-3">{driver.user.address}</td>
      <td className="p-3">{dayjs(driver.user.createdAt).format("DD/MM/YYYY HH:mm")}</td>
      <td className="p-3 text-right">
        <button className="px-2 py-1 text-blue-600 hover:bg-blue-50 rounded mr-1"><i className="fas fa-eye" /></button>
        <button className="px-2 py-1 text-amber-600 hover:bg-amber-50 rounded mr-1"><i className="fas fa-pen" /></button>
        <button className="px-2 py-1 text-red-600 hover:bg-red-50 rounded"><i className="fas fa-trash" /></button>
      </td>
    </tr>
  )

  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Quản lý tài xế</h2>
          <p className="text-gray-600 text-sm">Tổng số: <b>{drivers.length}</b> tài xế</p>
        </div>
        <div className="flex gap-2">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Tìm theo tên / mã / xe phụ trách..."
            className="bg-white border rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600"><i className="fas fa-user-plus mr-2" />Thêm tài xế</button>
        </div>
      </div>

      {loading && <p className="text-gray-500">Đang tải dữ liệu...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-left p-3">Mã</th>
                <th className="text-left p-3">Họ</th>
                <th className="text-left p-3">Tên</th>
                <th className="text-left p-3">SĐT</th>
                <th className="text-left p-3">Bằng lái</th>
                <th className="text-left p-3">Ngày Sinh</th>
                <th className="text-left p-3">Địa chỉ</th>
                <th className="text-right p-3">created_at</th>
              </tr>
            </thead>
            <tbody>
              {rows.length > 0 ? rows : (
                <tr>
                  <td colSpan="9" className="text-center text-gray-500 py-3">
                    Không tìm thấy tài xế phù hợp
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
