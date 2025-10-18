import React from "react";

export default function TrackingPage() {
  return (
    <section className="space-y-4">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Theo dõi thời gian thực</h1>
          <p className="text-slate-500 text-sm">Vị trí xe, tuyến, ETA (demo).</p>
        </div>
        <div className="flex gap-2">
          <select className="border rounded-lg px-3 py-2">
            <option>Chọn tuyến</option>
            <option>Tuyến A</option>
            <option>Tuyến B</option>
          </select>
          <select className="border rounded-lg px-3 py-2">
            <option>Chọn xe</option>
            <option>BUS-1</option>
            <option>BUS-2</option>
          </select>
        </div>
      </header>

      <div
        className="h-96 border rounded-xl bg-slate-100 grid place-items-center text-slate-600"
      >
        Bản đồ sẽ hiển thị ở đây (placeholder)
      </div>
    </section>
  );
}
