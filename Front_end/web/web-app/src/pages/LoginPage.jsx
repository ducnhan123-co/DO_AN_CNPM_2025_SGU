// import React, { useState } from "react";

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError("");
//         // Replace with your actual login API call
//         try {
//             // Example: await api.login({ email, password });
//             if (email === "" || password === "") {
//                 setError("Please enter both email and password.");
//                 return;
//             }
//             // Simulate successful login
//             alert("Login successful!");
//             // Redirect or update app state here
//         } catch (err) {
//             setError("Invalid credentials. Please try again.");
//         }
//     };

//     return (
//         <div style={styles.container}>
//             <div style={styles.box}>
//                 <h2 style={styles.title}>Smart School Bus Tracking System</h2>
//                 <form onSubmit={handleSubmit} style={styles.form}>
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         style={styles.input}
//                         required
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         style={styles.input}
//                         required
//                     />
//                     {error && <div style={styles.error}>{error}</div>}
//                     <button type="submit" style={styles.button}>Login</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// const styles = {
//     container: {
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         background: "#f5f7fa",
//     },
//     box: {
//         padding: "32px",
//         borderRadius: "8px",
//         background: "#fff",
//         boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//         minWidth: "320px",
//     },
//     title: {
//         marginBottom: "24px",
//         textAlign: "center",
//         color: "#2d3e50",
//     },
//     form: {
//         display: "flex",
//         flexDirection: "column",
//         gap: "16px",
//     },
//     input: {
//         padding: "10px",
//         borderRadius: "4px",
//         border: "1px solid #ccc",
//         fontSize: "16px",
//     },
//     button: {
//         padding: "10px",
//         borderRadius: "4px",
//         border: "none",
//         background: "#1976d2",
//         color: "#fff",
//         fontWeight: "bold",
//         fontSize: "16px",
//         cursor: "pointer",
//     },
//     error: {
//         color: "#d32f2f",
//         fontSize: "14px",
//         textAlign: "center",
//     },
// };

// export default Login;

import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { username, password });
    // Xử lý logic đăng nhập ở đây
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              User name
            </label>
            <input
              type="text"
              id="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="#" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Forgot Password?
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
            {/* Nếu có nút "Đăng nhập" riêng như trong mẫu */}
            <button
              type="button" // Change to button type to prevent form submission if it's just a secondary action
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Đăng nhập
            <h1>Login Page</h1>;
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;