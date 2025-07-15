import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#334155] text-white
       flex flex-col items-center justify-center p-6"
    >
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Welcome to the Dashboard App
        </h1>
        <p className="text-xl text-gray-300 mb-10">
          Manage your tasks, track analytics, and stay organized with a sleek and powerful dashboard experience.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center bg-gradient-to-r
           from-blue-500 via-purple-500 to-pink-500 text-white px-8 py-3
           rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-transform
           hover:scale-105"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
