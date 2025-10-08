// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";

import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import BusesPage from "./pages/admin/BusesPage.jsx";
import DriversPage from "./pages/admin/DriversPage.jsx";
import StudentsPage from "./pages/admin/StudentsPage.jsx";
import RoutesPage from "./pages/admin/RoutesPage.jsx";
import SchedulePage from "./pages/admin/SchedulePage.jsx";
import TrackingPage from "./pages/admin/TrackingPage.jsx";
import MessagesPage from "./pages/admin/MessagesPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Admin layout + children */}
        <Route path="/admin" element={<AdminPage />}>
          <Route index element={<AdminDashboard />} />
          <Route path="buses" element={<BusesPage />} />
          <Route path="drivers" element={<DriversPage />} />
          <Route path="students" element={<StudentsPage />} />
          <Route path="routes" element={<RoutesPage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="tracking" element={<TrackingPage />} />
          <Route path="messages" element={<MessagesPage />} />
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;