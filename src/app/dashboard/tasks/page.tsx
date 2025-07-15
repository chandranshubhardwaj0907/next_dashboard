const Tasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Finish project report",
      description: "Complete the final report for the project and submit it.",
      status: "In Progress",
      dueDate: "2025-02-18",
    },
    {
      id: 2,
      title: "Update website content",
      description: "Revise the homepage text to reflect recent changes.",
      status: "Pending",
      dueDate: "2025-02-20",
    },
    {
      id: 3,
      title: "Team meeting",
      description: "Discuss the project milestones and progress with the team.",
      status: "Completed",
      dueDate: "2025-02-15",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#1a2a6c] → [#b21f1f] → [#fdbb2d] p-10">
      <div className="max-w-7xl mx-auto bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-10 border border-white/20">
        <h1 className="text-3xl font-bold text-white mb-8">📝 Your Tasks</h1>

        <div className="space-y-6">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`flex flex-col md:flex-row items-start md:items-center justify-between bg-white/5 backdrop-blur-md rounded-2xl 
              shadow-lg p-6 border-l-4 hover:scale-[1.01] transition-transform ${
                task.status === "Completed"
                  ? "border-green-500"
                  : task.status === "In Progress"
                  ? "border-yellow-500"
                  : "border-red-500"
              }`}
            >
              <div className="flex flex-col text-white">
                <h2 className="text-xl font-semibold">{task.title}</h2>
                <p className="text-sm mt-2 text-gray-300">{task.description}</p>
                <p className="text-sm mt-2 text-gray-400">
                  📅 Due Date: {task.dueDate}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
                <span
                  className={`px-4 py-2 text-xs font-semibold rounded-full shadow ${
                    task.status === "Completed"
                      ? "bg-green-200 text-green-800"
                      : task.status === "In Progress"
                      ? "bg-yellow-200 text-yellow-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {task.status}
                </span>

                <button className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition transform hover:scale-105">
                  Edit
                </button>

                {task.status !== "Completed" && (
                  <button className="px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-lg transition transform hover:scale-105">
                    Mark as Complete
                  </button>
                )}

                <button className="px-4 py-2 text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-lg transition transform hover:scale-105">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
