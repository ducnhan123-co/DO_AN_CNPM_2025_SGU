import { useState } from "react";
import "./Login.css"

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (
        (username === "admin" && password === "123456") ||
        (username === "driver" && password === "123456")
      ) {
        const userType = username === "admin" ? "Admin" : "Tài xế";
        alert(`Đăng nhập thành công với tài khoản ${userType}!`);
      } else {
        alert(
          "Thông tin đăng nhập không chính xác!\n\nVui lòng thử:\n- admin/123456 (Admin)\n- driver/123456 (Tài xế)"
        );
      }
    }, 2000);
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
                  <i className="fas fa-user mr-2"></i>Tên đăng nhập hoặc Email
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="input-focus w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  placeholder="Nhập tên đăng nhập hoặc email"
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
                    placeholder="Nhập mật khẩu"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-white text-opacity-70 hover:text-opacity-100"
                  >
                    <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center text-white text-sm">
                  <input type="checkbox" className="mr-2 rounded bg-white bg-opacity-20 border-white border-opacity-30" />
                  Ghi nhớ đăng nhập
                </label>
                <button
                  type="button"
                  onClick={() =>
                    alert("Chức năng khôi phục mật khẩu sẽ được cập nhật sau!")
                  }
                  className="text-white text-sm hover:text-opacity-80"
                >
                  Quên mật khẩu?
                </button>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-white text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              >
                <i className="fas fa-sign-in-alt mr-2"></i>Đăng nhập
              </button>
            </form>
          </div>

          {/* Footer */}
          <div className="text-center mt-6 slide-in">
            <p className="text-white text-opacity-70 text-sm">
              © 2024 Smart School Bus. Phát triển bởi{" "}
              <a href="#" className="text-white hover:text-opacity-80">
                SGU
              </a>
            </p>
            <div className="flex justify-center space-x-4 mt-3">
              <i className="fab fa-facebook text-white text-opacity-70 hover:text-opacity-100"></i>
              <i className="fab fa-twitter text-white text-opacity-70 hover:text-opacity-100"></i>
              <i className="fas fa-envelope text-white text-opacity-70 hover:text-opacity-100"></i>
              <i className="fas fa-phone text-white text-opacity-70 hover:text-opacity-100"></i>
            </div>
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

export default Login;