'use client';

const Notifications = () => {
   return (
    <div className="min-h-screen bg-gradient-to-br from-[#fef9f6] to-[#fde2e4] p-10">
      <div className="max-w-3xl mx-auto bg-[#fff9f4] rounded-2xl shadow-2xl p-10 border border-[#fcd5ce]">
        <h1 className="text-4xl font-extrabold text-[#5e3023] mb-10 text-center">
          Notification Center
        </h1>

        <div className="space-y-8">
          <div>
            <label className="block text-sm font-bold text-[#6b4226] mb-2">
              Email Alerts
            </label>
            <select
              className="w-full p-3 border border-[#deb6ab] rounded-lg bg-[#fff5f0] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ffb5a7]"
            >
              <option>Enabled</option>
              <option>Disabled</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#6b4226] mb-2">
              SMS Alerts
            </label>
            <select
              className="w-full p-3 border border-[#deb6ab] rounded-lg bg-[#fff5f0] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ffb5a7]"
            >
              <option>Enabled</option>
              <option>Disabled</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#6b4226] mb-2">
              App Notifications
            </label>
            <select
              className="w-full p-3 border border-[#deb6ab] rounded-lg bg-[#fff5f0] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ffb5a7]"
            >
              <option>Enabled</option>
              <option>Disabled</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end mt-10 space-x-4">
          <button className="px-6 py-2 rounded-lg bg-[#fcd5ce] text-[#5e3023] font-medium hover:bg-[#fbb1a9] transition">
            Cancel
          </button>
          <button className="px-6 py-2 rounded-lg bg-[#e29578] text-white font-semibold hover:bg-[#d76c5b] transition">
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;