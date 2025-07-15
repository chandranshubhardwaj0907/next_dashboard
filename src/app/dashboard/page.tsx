import Link from "next/link";

export default function DashboardHome() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 text-transparent bg-clip-text">
            Dashboard Overview
          </h1>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Quickly access features, manage tasks, and analyze data — all in one place.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/dashboard/tasks"
            className="relative group rounded-xl p-6 bg-gradient-to-tr from-pink-500 to-yellow-400 shadow-xl transition hover:scale-105"
          >
            <div className="absolute top-3 right-3 bg-black/40 rounded-full p-2">
              <span className="text-white text-lg">📌</span>
            </div>
            <h2 className="text-xl font-bold mb-2">Tasks</h2>
            <p className="text-white/90 text-sm">
              Plan, manage and track your workflow.
            </p>
          </Link>

          <Link
            href="/dashboard/analytics"
            className="relative group rounded-xl p-6 bg-gradient-to-tr from-sky-600 to-blue-800 shadow-xl transition hover:scale-105"
          >
            <div className="absolute top-3 right-3 bg-black/40 rounded-full p-2">
              <span className="text-white text-lg">📊</span>
            </div>
            <h2 className="text-xl font-bold mb-2">Analytics</h2>
            <p className="text-white/90 text-sm">
              Real-time data and performance insights.
            </p>
          </Link>

          <Link
            href="/dashboard/settings"
            className="relative group rounded-xl p-6 bg-gradient-to-tr from-fuchsia-600 to-purple-700 shadow-xl transition hover:scale-105"
          >
            <div className="absolute top-3 right-3 bg-black/40 rounded-full p-2">
              <span className="text-white text-lg">⚙️</span>
            </div>
            <h2 className="text-xl font-bold mb-2">Settings</h2>
            <p className="text-white/90 text-sm">
              Customize your dashboard experience.
            </p>
          </Link>

          <Link
            href="/dashboard/users"
            className="relative group rounded-xl p-6 bg-gradient-to-tr from-emerald-500 to-teal-400 shadow-xl transition hover:scale-105"
          >
            <div className="absolute top-3 right-3 bg-black/40 rounded-full p-2">
              <span className="text-white text-lg">👥</span>
            </div>
            <h2 className="text-xl font-bold mb-2">Users</h2>
            <p className="text-white/90 text-sm">
              Manage users and access controls.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
