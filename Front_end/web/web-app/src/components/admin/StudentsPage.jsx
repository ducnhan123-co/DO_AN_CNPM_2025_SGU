import React, { useState, useEffect } from "react";
import { getStudents } from "../../services/StudentService";
import dayjs from "dayjs";

export default function StudentsPage() {
  const [q, setQ] = useState("");
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        const res = await getStudents(); // Gọi API
        setStudents(res.data || []);
      } catch (err) {
        console.error(err);
        setError("Không thể tải danh sách học sinh!");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // lọc theo từ khóa q
  const filtered = students.filter(
    (student) =>
      student.id.toString().includes(q) ||
      student.firstName.toLowerCase().includes(q.toLowerCase()) ||
      student.lastName.toLowerCase().includes(q.toLowerCase()) 
  );

  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Quản lý học sinh</h2>
          <p className="text-gray-600 text-sm">
            Tổng số: <b>{filtered.length}</b> học sinh
          </p>
        </div>
        <div className="flex gap-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Tìm theo tên / mã / SĐT..."
            className="bg-white border rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600">
            <i className="fas fa-user-plus mr-2" />
            Thêm học sinh
          </button>
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
                <th className="text-left p-3">Ngày sinh</th>
                <th className="text-left p-3">Địa chỉ</th>
                <th className="text-right p-3">Ngày tạo</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length > 0 ? (
                filtered.map((st) => (
                  <tr key={st.id} className="border-t hover:bg-gray-50">
                    <td className="p-3 font-semibold">{st.id}</td>
                    <td className="p-3">{st.lastName}</td>
                    <td className="p-3">{st.firstName}</td>
                    <td className="p-3">{st.dob}</td>
                    <td className="p-3">{st.address}</td>
                    <td className="p-3">{dayjs(st.createdAt).format("DD/MM/YYYY HH:mm")}</td>
                    <td className="p-3 text-right">
                      <button className="px-2 py-1 text-blue-600 hover:bg-blue-50 rounded mr-1">
                        <i className="fas fa-eye" />
                      </button>
                      <button className="px-2 py-1 text-amber-600 hover:bg-amber-50 rounded mr-1">
                        <i className="fas fa-pen" />
                      </button>
                      <button className="px-2 py-1 text-red-600 hover:bg-red-50 rounded">
                        <i className="fas fa-trash" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center py-4 text-gray-500">
                    Không có học sinh nào phù hợp
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
