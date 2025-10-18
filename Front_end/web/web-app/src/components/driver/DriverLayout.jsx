import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function DriverLayout() {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className="w-60 bg-white border-r">
        <div className="p-4 font-semibold">Driver</div>
        <nav className="px-2 space-y-1 text-sm">
          <NavLink to="/driver/my-trips" className={({isActive})=>`block px-3 py-2 rounded ${isActive?"bg-amber-100 text-amber-700":"hover:bg-gray-100"}`} end>My Trips</NavLink>
          <NavLink to="/driver/my-bus"   className={({isActive})=>`block px-3 py-2 rounded ${isActive?"bg-amber-100 text-amber-700":"hover:bg-gray-100"}`}>My Bus</NavLink>
          <NavLink to="/driver/report"   className={({isActive})=>`block px-3 py-2 rounded ${isActive?"bg-amber-100 text-amber-700":"hover:bg-gray-100"}`}>Report</NavLink>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
