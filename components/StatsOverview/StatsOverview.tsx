function StatsOverview() {
    return (
        <section className="w-full flex flex-col items-start gap-6 pt-8">
            <div>
                <h1 className="font-bold text-3xl text-gray-900">Product Feedback</h1>
                <p className="text-gray-500 mt-1">
                    Suggest features, report bugs, and vote on what matters most to you.
                </p>
            </div>

            {/* 4 statistics cards */}
            <div className="grid grid-cols-4 gap-4 w-full">
                {/* 1. total Posts */}
                <div className="flex flex-col border border-gray-200 rounded-2xl p-5 bg-white">
                    <h2 className="font-bold text-2xl text-gray-900">6</h2>
                    <span className="text-sm text-gray-500 mt-1">Total Posts</span>
                </div>

                {/* 2. under Review */}
                <div className="flex flex-col border border-gray-200 rounded-2xl p-5 bg-white">
                    <h2 className="font-bold text-2xl text-gray-900">1</h2>
                    <span className="text-sm text-gray-500 mt-1">Under Review</span>
                </div>

                {/* 3. in Progress */}
                <div className="flex flex-col border border-gray-200 rounded-2xl p-5 bg-white">
                    <h2 className="font-bold text-2xl text-gray-900">2</h2>
                    <span className="text-sm text-gray-500 mt-1">In Progress</span>
                </div>

                {/* 4. completed */}
                <div className="flex flex-col border border-gray-200 rounded-2xl p-5 bg-white">
                    <h2 className="font-bold text-2xl text-gray-900">1</h2>
                    <span className="text-sm text-gray-500 mt-1">Completed</span>
                </div>
            </div>

            <input
                type="text"
                placeholder="🔍︎ Search posts..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none text-sm text-gray-700 bg-white"
            />

            {/* filter buttons */}
            <div className="flex items-center gap-2">
                <button className="bg-indigo-600 text-white font-medium px-4 py-1.5 rounded-lg text-sm">
                    All
                </button>
                <button className="bg-white border border-gray-200 text-gray-700 font-medium px-4 py-1.5 rounded-lg text-sm">
                    Feature
                </button>
                <button className="bg-white border border-gray-200 text-gray-700 font-medium px-4 py-1.5 rounded-lg text-sm">
                    Bug
                </button>
                <button className="bg-white border border-gray-200 text-gray-700 font-medium px-4 py-1.5 rounded-lg text-sm">
                    Improvement
                </button>
                <button className="bg-white border border-gray-200 text-gray-700 font-medium px-4 py-1.5 rounded-lg text-sm">
                    Integration
                </button>
            </div>

            <p className="text-sm text-gray-400 font-medium -mt-2">6 posts</p>
        </section>
    );
}

export default StatsOverview;