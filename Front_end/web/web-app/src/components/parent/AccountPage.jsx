import React, { useState } from "react";
import { updateAccount } from "../../services/parentApi";

export default function ParentAccount() {
  const [form, setForm] = useState({ fullName: "Phạm Thu H", phone: "090xxx123", email: "parent@example.com" });
  const [saving, setSaving] = useState(false);

  const onChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const res = await updateAccount(form);
    setSaving(false);
    if (res?.ok) alert("Đã lưu thông tin!");
  };

  // wrapper style để canh giữa
  const wrapper = {
    display: "flex",
    justifyContent: "center",         // canh ngang giữa
    alignItems: "flex-start",         // nếu muốn căn dọc giữa => "center"
    padding: "24px",
    minHeight: "calc(100vh - 96px)",  // điều chỉnh nếu header cao/ thấp khác
    boxSizing: "border-box",
  };

  const sectionStyle = {
    display: "grid",
    gap: 16,
    maxWidth: 640,
    width: "100%",
    margin: 0,
  };

  return (
    <div style={wrapper}>
      <section style={sectionStyle}>
        <header>
          <h1 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>Tài khoản</h1>
          <p style={{ margin: "4px 0 0", color: "#64748b" }}>Cập nhật thông tin liên hệ để nhận thông báo chính xác.</p>
        </header>

        <form onSubmit={onSubmit} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 16 }}>
          <div style={{ display: "grid", gap: 12 }}>
            <div>
              <label htmlFor="fullName" style={label}>Họ và tên</label>
              <input id="fullName" name="fullName" value={form.fullName} onChange={onChange} style={input} required />
            </div>
            <div>
              <label htmlFor="phone" style={label}>Số điện thoại</label>
              <input id="phone" name="phone" value={form.phone} onChange={onChange} style={input} required />
            </div>
            <div>
              <label htmlFor="email" style={label}>Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={onChange} style={input} required />
            </div>

            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
              <button type="submit" disabled={saving} style={btnPrimary}>{saving ? "Đang lưu..." : "Lưu thay đổi"}</button>
              <button type="button" style={btnGhost} onClick={()=>setForm({fullName:"", phone:"", email:""})}>Xoá</button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

const label = { display: "block", marginBottom: 6, fontWeight: 600, color: "#334155" };
const input = { width: "100%", padding: "10px 12px", borderRadius: 10, border: "1px solid #cbd5e1", outline: "none" };
const btnPrimary = { padding: "10px 14px", borderRadius: 10, border: "1px solid #2563eb", background: "#2563eb", color: "#fff", fontWeight: 600, cursor: "pointer" };
const btnGhost = { padding: "10px 14px", borderRadius: 10, border: "1px solid #cbd5e1", background: "#fff", color: "#334155", fontWeight: 600, cursor: "pointer" };