// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// import HomePage from "./pages/HomePage.jsx";
// import AdminPage from "./pages/AdminPage.jsx";
// import Login from "./pages/login/LoginPage.jsx";
// import StudentsPage from "./pages/admin/StudentsPage.jsx";
// import RoutesPage from "./pages/admin/RoutesPage.jsx";
// import SchedulePage from "./pages/admin/SchedulePage.jsx";
// import TrackingPage from "./pages/admin/TrackingPage.jsx";
// import MessagesPage from "./pages/admin/MessagesPage.jsx";
// import AdminDashboard from "./components/admin/AdminDashboard.jsx"

import HomePage from "./pages/HomePage"
import AdminPage from "./pages/AdminPage"
import ParentPage from "./pages/parent/ParentPage.jsx";
import Login from "./pages/login/LoginPage.jsx";
import StudentsPage from "./components/admin/StudentsPage.jsx"
import RoutesPage from "./components/admin/RoutesPage.jsx"
import SchedulePage from "./components/admin/SchedulePage.jsx"
import TrackingPage from "./components/admin/TrackingPage.jsx"
import MessagesPage from "./components/admin/MessagesPage.jsx"
import AdminDashboard from "./components/admin/AdminDashboard.jsx"
import BusesPage from "./components/admin/BusesPage.jsx"
import DriversPage from "./components/admin/DriversPage.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/parent" element={<ParentPage />} />


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