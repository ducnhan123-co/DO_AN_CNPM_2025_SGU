import React from "react";

export default function ParentHeader() {
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
        <div
          style={{
            background: "#fff",
            color: "#3575d3",
            borderRadius: 8,
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          <i className="fas fa-bus" />
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 20 }}>Smart School Bus</div>
          <div style={{ fontSize: 13, color: "#e0e7ff" }}>Phụ huynh học sinh</div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontWeight: 600 }}>Nguyễn Văn An</div>
          <div style={{ fontSize: 13, color: "#e0e7ff" }}>Phụ huynh</div>
        </div>
        <div
          style={{
            width: 40,
            height: 40,
            background: "#4faaff",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
          }}
        >
          <i className="fas fa-user" />
        </div>
      </div>
    </header>
  );
}
