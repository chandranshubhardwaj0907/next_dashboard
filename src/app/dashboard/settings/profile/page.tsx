const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdf2f8] via-[#e0f2fe] to-[#f3e8ff] p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
        <h1 className="text-3xl font-extrabold text-pink-800 mb-8">
          Profile Settings
        </h1>

        {/* Profile Picture Section */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-pink-700 mb-4">
            Profile Picture
          </h2>
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-pink-200 overflow-hidden shadow">
              <img
                src="https://imgs.search.brave.com/G7tXUfFFVlulJTUiQymyHwVF3jBAG9wt_79W7cWWXKQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9naXRo/dWIuY29tL0VjaG9T/aW5naC9HaXRIdWJf/UHJvZmlsZV9QaWN0/dXJlL3Jhdy9tYWlu/L291dHB1dHNfZ2Vu/ZXJhdGVkL2FkaS5w/bmc"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <button className="px-6 py-2 text-white bg-pink-600 rounded-lg hover:bg-pink-700 transition">
              Change Picture
            </button>
          </div>
        </div>

        {/* Profile Information Form */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-pink-700 mb-4">
            Profile Information
          </h2>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Chandranshu Bhardwaj"
                className="mt-1 w-full px-4 py-2 border border-pink-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Username
              </label>
              <input
                type="text"
                defaultValue="Chandrnshuu"
                className="mt-1 w-full px-4 py-2 border border-pink-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="chandranshubhardwaj68@gmail.com"
                className="mt-1 w-full px-4 py-2 border border-pink-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <button className="px-6 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
            Cancel
          </button>
          <button className="px-6 py-2 text-white bg-pink-600 rounded-lg hover:bg-pink-700 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
