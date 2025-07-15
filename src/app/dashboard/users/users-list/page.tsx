'use client';

const UsersList = () => {
  const users = [
    {
      id: 1,
      name: "Aarav Sharma",
      email: "aarav.sharma@india.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Mehta",
      email: "priya.mehta@india.com",
      role: "Editor",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Rohan Verma",
      email: "rohan.verma@india.com",
      role: "User",
      status: "Suspended",
    },
    {
      id: 4,
      name: "Ishita Kapoor",
      email: "ishita.kapoor@india.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 5,
      name: "Manav Desai",
      email: "manav.desai@india.com",
      role: "Editor",
      status: "Inactive",
    },
    {
      id: 6,
      name: "Sneha Nair",
      email: "sneha.nair@india.com",
      role: "User",
      status: "Suspended",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eaf6ff] to-[#f5f9ff] p-10">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
          Users Directory
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto rounded-lg overflow-hidden shadow-md">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Email</th>
                <th className="px-6 py-4 text-left">Role</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-800">
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-t hover:bg-blue-50 transition-all"
                >
                  <td className="px-6 py-4 font-medium">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.role}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : user.status === "Inactive"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="px-4 py-2 mr-2 text-sm font-medium text-blue-700 border border-blue-200 rounded-lg hover:bg-blue-50">
                      Edit
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
