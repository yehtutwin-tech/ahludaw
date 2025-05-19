export default function Home() {
  return (
    <>
      <div className="max-w-6xl mx-auto mt-8 px-4 mb-8">
        {/* Summary Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-green-700 mb-2">
              Total Cash In
            </h3>
            <p className="text-2xl font-bold text-green-600">$2,500.00</p>
            <p className="text-sm text-green-500 mt-1">Last updated: Today</p>
          </div>
          <div className="bg-red-50 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-red-700 mb-2">
              Total Cash Out
            </h3>
            <p className="text-2xl font-bold text-red-600">$500.00</p>
            <p className="text-sm text-red-500 mt-1">Last updated: Today</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              Current Balance
            </h3>
            <p className="text-2xl font-bold text-blue-600">$2,000.00</p>
            <p className="text-sm text-blue-500 mt-1">Last updated: Today</p>
          </div>
        </div>
      </div>
    </>
  );
}
