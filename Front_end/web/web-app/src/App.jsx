// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// ===== Public pages =====
import HomePage from "./pages/HomePage.jsx";
import Login from "./pages/login/LoginPage.jsx";

// ===== Admin layout + pages =====
import AdminPage from "./pages/AdminPage.jsx"; // layout (bên trong phải có <Outlet/>)
import AdminDashboard from "./components/admin/AdminDashboard.jsx";
import BusesPage from "./components/admin/BusesPage.jsx";
import DriversPage from "./components/admin/DriversPage.jsx";
import StudentsPage from "./components/admin/StudentsPage.jsx";
import RoutesPage from "./components/admin/RoutesPage.jsx";
import SchedulePage from "./components/admin/SchedulePage.jsx";
import TrackingPage from "./components/admin/TrackingPage.jsx";
// Nếu có MessagesPage thì import thêm:
// import MessagesPage from "./components/admin/MessagesPage.jsx";

// ===== Parent layout + pages =====
import ParentPage from "./pages/parent/ParentPage.jsx";   // layout (bên trong phải có <Outlet/>)
import ParentTracking from "./components/parent/TrackingPage.jsx";
import ParentHistory from "./components/parent/HistoryPage.jsx";
import ParentAccount from "./components/parent/AccountPage.jsx";

// ===== Guards =====
import AuthGuard from "./components/guards/AuthGuard.jsx";
import RoleGuard from "./components/guards/RoleGuard.jsx"; // allow: ["admin"] | ["parent"]

export default function App() {
  return (
    <Router>
      <Routes>
        {/* ===== Public ===== */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />

        {/* ===== Protected zones ===== */}
        <Route element={<AuthGuard />}>
          {/* ---- Admin zone (role: admin) ---- */}
          <Route element={<RoleGuard allow={["admin"]} />}>
            <Route path="/admin" element={<AdminPage />}>
              <Route index element={<AdminDashboard />} />
              <Route path="buses" element={<BusesPage />} />
              <Route path="drivers" element={<DriversPage />} />
              <Route path="students" element={<StudentsPage />} />
              <Route path="routes" element={<RoutesPage />} />
              <Route path="schedule" element={<SchedulePage />} />
              <Route path="tracking" element={<TrackingPage />} />
              {/* Có trang messages thì mở dòng dưới */}
              {/* <Route path="messages" element={<MessagesPage />} /> */}
              <Route path="*" element={<Navigate to="/admin" replace />} />
            </Route>
          </Route>

          {/* ---- Parent zone (role: parent) ---- */}
          <Route element={<RoleGuard allow={["parent"]} />}>
            <Route path="/parent" element={<ParentPage />}>
              <Route index element={<Navigate to="tracking" replace />} />
              <Route path="tracking" element={<ParentTracking />} />
              <Route path="history" element={<ParentHistory />} />
              <Route path="account" element={<ParentAccount />} />
              <Route path="*" element={<Navigate to="/parent" replace />} />
            </Route>
          </Route>
        </Route>

        {/* ===== 404 ===== */}
        <Route
          path="*"
          element={<div className="p-6 text-sm">404 – Page Not Found</div>}
        />
      </Routes>
    </Router>
  );
}
