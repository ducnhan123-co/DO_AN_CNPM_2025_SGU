import React, { useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // ...existing code...
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        position: "relative",
        background: "linear-gradient(135deg, #3575d3 0%, #4faaff 100%)",
        overflow: "hidden",
      }}
    >
      {/* Vòng tròn mờ */}
      <div
        style={{
          position: "absolute",
          top: 40,
          left: 40,
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 120,
          right: 120,
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: 400,
          width: 50,
          height: 50,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
        }}
      />

      {/* Form đăng nhập */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.13)",
            borderRadius: 20,
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            padding: 40,
            width: 400,
            backdropFilter: "blur(2px)",
            border: "1px solid rgba(255,255,255,0.18)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 12px auto",
              }}
            >
              <span style={{ fontSize: 36 }}>🚌</span>
            </div>
            <h2
              style={{
                fontWeight: "bold",
                fontSize: 28,
                color: "#fff",
                marginBottom: 4,
              }}
            >
              Smart School Bus
            </h2>
            <div style={{ color: "#e0e7ff", fontSize: 16 }}>
              Hệ thống quản lý xe đưa đón học sinh
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <h3
              style={{
                textAlign: "center",
                color: "#fff",
                fontWeight: "bold",
                fontSize: 22,
                marginBottom: 18,
              }}
            >
              Đăng nhập
            </h3>
            <div style={{ marginBottom: 16 }}>
              <label
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Tên đăng nhập hoặc Email
              </label>
              <div style={{ position: "relative" }}>
                <input
                  type="text"
                  placeholder="Nhập tên đăng nhập hoặc email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 8,
                    border: "none",
                    marginTop: 6,
                    fontSize: 16,
                    background: "rgba(255,255,255,0.25)",
                    color: "#222",
                    outline: "none",
                  }}
                  required
                />
                <span
                  style={{
                    position: "absolute",
                    left: 10,
                    top: 16,
                    color: "#3575d3",
                    fontSize: 18,
                  }}
                >
                  <i className="fa fa-user" />
                </span>
              </div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <label
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Mật khẩu
              </label>
              <div style={{ position: "relative" }}>
                <input
                  type="password"
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 8,
                    border: "none",
                    marginTop: 6,
                    fontSize: 16,
                    background: "rgba(255,255,255,0.25)",
                    color: "#222",
                    outline: "none",
                  }}
                  required
                />
                <span
                  style={{
                    position: "absolute",
                    right: 10,
                    top: 16,
                    color: "#3575d3",
                    fontSize: 18,
                  }}
                >
                  <i className="fa fa-eye" />
                </span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 18,
              }}
            >
              <label
                style={{
                  color: "#fff",
                  fontSize: 15,
                }}
              >
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  style={{ marginRight: 6 }}
                />
                Ghi nhớ đăng nhập
              </label>
              <a
                href="#"
                style={{
                  color: "#fff",
                  textDecoration: "underline",
                  fontSize: 15,
                }}
              >
                Quên mật khẩu?
              </a>
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: 8,
                border: "none",
                background: "#fff",
                color: "#3575d3",
                fontWeight: "bold",
                fontSize: 18,
                cursor: "pointer",
                marginBottom: 8,
              }}
            >
              <span style={{ marginRight: 8 }}>
                <i className="fa fa-sign-in" />
              </span>
              Đăng nhập
            </button>
          </form>
        </div>
      </div>

      {/* Xe bus, cây phía dưới */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 80,
          zIndex: 1,
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <svg
          width="100%"
          height="80"
          style={{ position: "absolute", left: 0, bottom: 0 }}
        >
          {/* Đường */}
          <rect x="0" y="60" width="100%" height="20" fill="#222" />
          {/* Cây và xe bus */}
          {/* Cây */}
          <circle cx="50" cy="55" r="10" fill="#2ecc40" />
          <rect x="47" y="65" width="6" height="15" fill="#3e3e3e" />
          <circle cx="120" cy="55" r="10" fill="#2ecc40" />
          <rect x="117" y="65" width="6" height="15" fill="#3e3e3e" />
          <circle cx="200" cy="55" r="10" fill="#2ecc40" />
          <rect x="197" y="65" width="6" height="15" fill="#3e3e3e" />
          {/* Xe bus xanh */}
          <rect x="70" y="70" width="40" height="18" rx="6" fill="#2eccfa" />
          <rect x="75" y="74" width="30" height="8" rx="2" fill="#fff" />
          <circle cx="80" cy="88" r="4" fill="#222" />
          <circle cx="105" cy="88" r="4" fill="#222" />
          {/* Xe bus vàng */}
          <rect x="300" y="70" width="40" height="18" rx="6" fill="#ffcb05" />
          <rect x="305" y="74" width="30" height="8" rx="2" fill="#fff" />
          <circle cx="310" cy="88" r="4" fill="#222" />
          <circle cx="335" cy="88" r="4" fill="#222" />
          {/* Xe bus đỏ */}
          <rect x="400" y="70" width="40" height="18" rx="6" fill="#e74c3c" />
          <rect x="405" y="74" width="30" height="8" rx="2" fill="#fff" />
          <circle cx="410" cy="88" r="4" fill="#222" />
          <circle cx="435" cy="88" r="4" fill="#222" />
          {/* Xe bus tím */}
          <rect x="600" y="70" width="40" height="18" rx="6" fill="#a259e6" />
          <rect x="605" y="74" width="30" height="8" rx="2" fill="#fff" />
          <circle cx="610" cy="88" r="4" fill="#222" />
          <circle cx="635" cy="88" r="4" fill="#222" />
          {/* Thêm cây nữa */}
          <circle cx="700" cy="55" r="10" fill="#2ecc40" />
          <rect x="697" y="65" width="6" height="15" fill="#3e3e3e" />
        </svg>
      </div>

      {/* Bản quyền và icon liên hệ */}
      <div
        style={{
          position: "absolute",
          bottom: 10,
          width: "100%",
          textAlign: "center",
          color: "#fff",
          fontSize: 15,
        }}
      >
        © 2024 Smart School Bus. Phát triển bởi SGU
        <div style={{ marginTop: 6 }}>
          <span
            style={{ margin: "0 8px", fontSize: 18 }}
          >
            <i className="fa fa-twitter" />
          </span>
          <span
            style={{ margin: "0 8px", fontSize: 18 }}
          >
            <i className="fa fa-facebook" />
          </span>
          <span
            style={{ margin: "0 8px", fontSize: 18 }}
          >
            <i className="fa fa-envelope" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;