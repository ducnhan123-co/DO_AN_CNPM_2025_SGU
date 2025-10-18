import React, { useEffect, useState } from "react";
import { fetchCurrentTrip } from "../../services/parentApi";

export default function ParentTracking() {
  const [childId, setChildId] = useState("child-1");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function load() {
    setLoading(true);
    const res = await fetchCurrentTrip(childId);
    setData(res);
    setLoading(false);
  }

  useEffect(() => { load(); /* auto load on mount & child change */ }, [childId]);

  return (
    <section style={{ display: "grid", gap: 16 }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>
            Theo dõi chuyến xe của con
          </h1>
          <p style={{ margin: "4px 0 0", color: "#64748b" }}>
            Vị trí xe buýt, các điểm dừng và thời gian dự kiến (ETA).
          </p>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <select
            value={childId}
            onChange={(e) => setChildId(e.target.value)}
            style={{ padding: 8, borderRadius: 8, border: "1px solid #cbd5e1" }}
          >
            <option value="child-1">Trần Minh K</option>
            <option value="child-2">Nguyễn Gia H</option>
          </select>
          <button onClick={load} style={btn}>Làm mới</button>
        </div>
      </header>

      {/* Map placeholder */}
      <div
        className="map-box"
        style={{
          height: 360,
          borderRadius: 12,
          border: "1px solid #e2e8f0",
          background:
            "repeating-linear-gradient(45deg, #f8fafc, #f8fafc 10px, #f1f5f9 10px, #f1f5f9 20px)",
          display: "grid",
          placeItems: "center",
          color: "#475569",
          fontSize: 14,
        }}
        aria-label="Bản đồ theo dõi (placeholder)"
      >
        Bản đồ sẽ hiển thị tại đây (Map placeholder)
      </div>

      {/* Info cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 12,
        }}
      >
        <div style={cardStyle}>
          <div style={cardTitle}>Xe buýt</div>
          <div>Mã xe: <b>{data?.busCode ?? "—"}</b></div>
          <div>Tài xế: <b>{data?.driverName ?? "—"}</b></div>
          <div>Trạng thái:{" "}
            <b style={{ color: data?.state === "moving" ? "#059669" : "#334155" }}>
              {loading ? "Đang tải..." : data?.state === "moving" ? "Đang di chuyển" : "Tạm dừng"}
            </b>
          </div>
        </div>
        <div style={cardStyle}>
          <div style={cardTitle}>Điểm đón kế tiếp</div>
          <div>Tên trạm: <b>{data?.nextStop ?? "—"}</b></div>
          <div>ETA: <b>{data?.eta ?? "—"}</b></div>
          <div>Cập nhật: <b>{data?.updatedAt ?? "—"}</b></div>
        </div>
        <div style={cardStyle}>
          <div style={cardTitle}>Con của bạn</div>
          <div>Họ tên: <b>{childId === "child-1" ? "Trần Minh K" : "Nguyễn Gia H"}</b></div>
          <div>Trạng thái: <b>{data?.childStatus ?? "—"}</b></div>
          <div>Cập nhật: <b>{data?.updatedAt ?? "—"}</b></div>
        </div>
      </div>
    </section>
  );
}

const cardStyle = {
  background: "#fff",
  border: "1px solid #e2e8f0",
  borderRadius: 12,
  padding: 12,
  fontSize: 14,
};
const cardTitle = { fontWeight: 700, marginBottom: 6 };
const btn = {
  padding: "8px 12px",
  borderRadius: 8,
  border: "1px solid #2563eb",
  background: "#2563eb",
  color: "#fff",
  fontWeight: 600,
  cursor: "pointer",
};
