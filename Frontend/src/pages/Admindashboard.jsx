import Header from "../componenets/Header";

const AdminDashboard = () => {
  return (
    <>
      <Header />
      <div className="px-6 py-4">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Admin Dashboard
        </h1>

        {/* Employee Demographics */}
        <div className="h-2 bg-gradient-to-r from-blue-200 via-blue-500 to-purple-500 rounded-lg"></div>
        <div className="p-6 bg-white  mb-6 border-2 shadow-lg">

          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Employee Demographics & Distribution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Overall Employee Count",
              "Department-wise Distribution",
              "Age Distribution",
              "Gender Ratio",
              "Location-based Reports",
            ].map((title, index) => (
              <div
                key={index}
                className="bg-blue-100 p-4 rounded-md shadow-md text-center"
              >
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm">Details will be shown here</p>
              </div>
            ))}
          </div>
        </div>

        {/* Performance & Attendance */}
        <div className="h-2 bg-gradient-to-r from-green-200 via-green-500 to-yellow-500 rounded-lg"></div>
        <div className="p-6 bg-white mb-6 border-2 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Performance & Attendance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "Leave Reports",
              "Performance Metrics",
              "Attendance Trends",
            ].map((title, index) => (
              <div
                key={index}
                className="bg-green-100 p-4 rounded-md shadow-md text-center"
              >
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm">Insights coming soon...</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recruitment & Onboarding */}
        <div className="h-2 bg-gradient-to-r from-yellow-200 via-yellow-500 to-orange-500 rounded-lg"></div>
        <div className="p-6 bg-white border-2 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Recruitment & Onboarding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Recruitment Reports",
              "Onboarding Reports",
            ].map((title, index) => (
              <div
                key={index}
                className="bg-yellow-100 p-4 rounded-md shadow-md text-center"
              >
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm">Metrics will be displayed</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
