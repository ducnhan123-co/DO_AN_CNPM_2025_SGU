import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Login.css";

const TOKEN_KEY = "token"; // phải khớp với AuthGuard
const ROLE_KEY  = "role";  // phải khớp với RoleGuard: "admin" | "parent"

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  // nếu người dùng bị chặn ở /admin rồi quay về login, login xong sẽ đưa về lại
  const from = location.state?.from?.pathname || "/admin";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    setLoading(true);
    try {
      // TODO: gọi API thật. Tạm demo validate local:
      const ok =
        (username === "admin" && password === "123456") ||
        (username === "driver" && password === "123456") ||
        (username === "parent" && password === "123456");

      if (!ok) {
        alert(
          "Thông tin đăng nhập không chính xác!\n\nThử:\n- admin/123456 (Admin)\n- parent/123456 (Phụ huynh)\n- driver/123456 (Tài xế – tạm chưa có khu vực riêng)"
        );
        return;
      }

      // map role: chỉ có vùng admin & parent, chưa có driver zone thì điều hướng về parent
      const role =
        username === "admin" ? "admin" :
        username === "parent" ? "parent" :
        // username === "driver"
        "parent"; // tạm cho tài xế vào khu parent, sau này đổi thành "driver" khi có routes

      // LƯU token/role để Guards đọc được
      localStorage.setItem(TOKEN_KEY, "dev-token");
      localStorage.setItem(ROLE_KEY, role);
      // lưu username để header hiển thị
      localStorage.setItem("username", username);
      
      alert(`Đăng nhập thành công với tài khoản ${role === "admin" ? "Admin" : "Phụ huynh"}!`);

      // Điều hướng sau đăng nhập
      const fallback = role === "admin" ? "/admin" : "/parent";
      const target =
        from.startsWith("/admin") || from.startsWith("/parent") ? from : fallback;

      navigate(target, { replace: true });
    } finally {
      setLoading(false); // tắt overlay
    }
  };

  return (
    <div className="gradient-bg min-h-screen flex items-center justify-center p-4 relative overflow-hidden ">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full floating-animation"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white bg-opacity-10 rounded-full floating-animation" style={{ animationDelay: "-2s" }}></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-white bg-opacity-10 rounded-full floating-animation" style={{ animationDelay: "-4s" }}></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-white bg-opacity-10 rounded-full floating-animation" style={{ animationDelay: "-1s" }}></div>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8 slide-in">
          <div className="bg-white bg-opacity-20 p-4 rounded-full w-20 h-20 mx-auto mb-4 glass-effect">
            <i className="fas fa-bus text-white text-3xl mt-2"></i>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Smart School Bus</h1>
          <p className="text-white text-opacity-80">
            Hệ thống quản lý xe đưa đón học sinh
          </p>
        </div>

        <div className="glass-effect rounded-2xl p-5 slide-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold text-white text-center mb-6">
              Đăng nhập
            </h2>

            {/* Username */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                <i className="fas fa-user mr-2"></i>Tên đăng nhập
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-focus w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                placeholder="admin / parent / driver"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                <i className="fas fa-lock mr-2"></i>Mật khẩu
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-focus w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 pr-12"
                  placeholder="123456"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-white text-opacity-70 hover:text-opacity-100"
                  aria-label="Hiện/ẩn mật khẩu"
                >
                  <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-white text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              disabled={loading}
            >
              <i className="fas fa-sign-in-alt mr-2"></i>
              {loading ? "Đang đăng nhập..." : "Đăng nhập"}
            </button>

            {/* Back to Home */}
            <button
              type="button"
              onClick={() => navigate('/')}
              className="w-full mt-3 bg-white bg-opacity-10 border border-white border-opacity-30 text-white py-3 px-4 rounded-lg font-semibold hover:bg-opacity-20 transition-all"
            >
              Quay lại trang chủ
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 slide-in">
          <p className="text-white text-opacity-70 text-sm">
            © 2024 Smart School Bus. Phát triển bởi SGU
          </p>
        </div>
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-700">Đang đăng nhập...</p>
          </div>
        </div>
      )}
    </div>
  );
}
