import React from "react";
import ParentSidebar from "./ParentSidebar";
import ParentHeader from "./ParentHeader";

export default function ParentLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
      <ParentHeader />
      <div style={{ display: "flex", flex: 1 }}>
        <div className="parent-sidebar">
          <ParentSidebar />
        </div>
        <main className="parent-main">{children}</main>
      </div>
    </div>
  );
}
