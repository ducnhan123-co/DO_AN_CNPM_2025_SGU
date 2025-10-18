import React from "react";
import { useNavigate } from "react-router-dom";

export default function ParentHeader() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login", { replace: true });
  };

  return (
    <header
      style={{
        background: "#3575d3",
        color: "#fff",
        padding: "16px 32px",
        boxShadow: "0 2px 8px rgba(53,117,211,0.07)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ background: "#fff", color: "#3575d3", borderRadius: 8, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: "bold" }}>
          <i className="fas fa-bus" />
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 20 }}>Smart School Bus</div>
          <div style={{ fontSize: 13, color: "#e0e7ff" }}>Phụ huynh học sinh</div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <button onClick={logout} style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid #e0e7ff", color: "#fff", background: "transparent" }}>
          Đăng xuất
        </button>
      </div>
    </header>
  );
}
