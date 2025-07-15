const UsersDetails = () => {
  const user = {
    name: "Chandranshu Bhardwaj",
    email: "chandranshubhardwaj68@gmail.com",
    role: "Marketing Head",
    status: "Active",
    bio: "Passionate frontend developer and marketing strategist. Currently leading Virsa Society, Thapar University. Believes in creative leadership and community growth.",
    profilePicture: "https://robohash.org/chandranshu.png?size=150x150",
    activities: [
      { id: 1, description: "Posted new event announcement", timestamp: "2025-07-10" },
      { id: 2, description: "Updated marketing strategy deck", timestamp: "2025-07-01" },
      { id: 3, description: "Connected with a sponsor", timestamp: "2025-06-25" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0faff] to-[#e5ecff] p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
        {/* Header Section */}
        <div className="flex items-center gap-8 mb-10">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-300 shadow-md object-cover"
          />
          <div>
            <h1 className="text-3xl font-extrabold text-gray-800">{user.name}</h1>
            <p className="text-md text-gray-600">{user.email}</p>
            <p className="text-sm text-blue-700 font-medium mt-1">{user.role}</p>
            <p
              className={`text-sm mt-2 font-semibold ${
                user.status === "Active" ? "text-green-600" : "text-red-500"
              }`}
            >
              ● {user.status}
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">About</h2>
          <p className="text-gray-600 leading-relaxed">{user.bio}</p>
        </div>

        {/* Activities Section */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
          <ul className="space-y-4">
            {user.activities.map((activity) => (
              <li
                key={activity.id}
                className="flex items-start space-x-4 p-4 bg-[#f9fafe] border border-blue-100 rounded-xl shadow-sm"
              >
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {activity.description.charAt(0)}
                </div>
                <div>
                  <p className="text-gray-700">{activity.description}</p>
                  <p className="text-sm text-gray-500">{activity.timestamp}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-4">
          <button className="px-6 py-2 text-blue-700 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors">
            Edit Profile
          </button>
          <button className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersDetails;
