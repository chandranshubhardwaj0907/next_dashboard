'use client';

const Analytics = () => {
  const metrics = [
    {
      id: "1",
      title: "Monthly Revenue",
      value: "₹2,30,000",
      change: "+10.4%",
      isPositive: true,
    },
    {
      id: "2",
      title: "Active Customers",
      value: "3,456",
      change: "-2.1%",
      isPositive: false,
    },
    {
      id: "3",
      title: "Page Views",
      value: "27,980",
      change: "+6.3%",
      isPositive: true,
    },
    {
      id: "4",
      title: "New Subscriptions",
      value: "584",
      change: "+21.7%",
      isPositive: true,
    },
  ];

  const activities = [
    {
      title: "User Registration",
      detail: "New user joined on 2025-07-11",
      stat: "+1 User",
    },
    {
      title: "Revenue Growth",
      detail: "Increased sales on 2025-07-10",
      stat: "+₹50,000",
    },
    {
      title: "Traffic Spike",
      detail: "Page views rose on 2025-07-09",
      stat: "+1,200 views",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Analytics Overview
        </h1>

        {/* Metrics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className={`p-6 rounded-xl shadow-md transition-transform transform hover:scale-105 border-l-4 ${
                metric.isPositive ? "border-green-500" : "border-red-500"
              } bg-white`}
            >
              <h3 className="text-lg font-semibold text-gray-700">
                {metric.title}
              </h3>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                {metric.value}
              </p>
              <p
                className={`text-sm mt-1 font-medium ${
                  metric.isPositive ? "text-green-600" : "text-red-600"
                }`}
              >
                {metric.change}
              </p>
            </div>
          ))}
        </div>

        {/* Recent Activity Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Recent Activity
          </h2>
          <ul className="space-y-4">
            {activities.map((activity, i) => (
              <li
                key={i}
                className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-gray-600">{activity.detail}</p>
                </div>
                <p className="text-sm text-gray-500">{activity.stat}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
