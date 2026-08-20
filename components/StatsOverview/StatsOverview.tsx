import Link from "next/link";

interface StatsOverviewProps {
    total: number;
    underReview: number;
    inProgress: number;
    completed: number;
    count: number;
    activeCategory: string;
}

const CATEGORIES = ["All", "Feature", "Bug", "Improvement", "Integration"];

function StatsOverview({ total, underReview, inProgress, completed, count, activeCategory }: StatsOverviewProps) {
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
                    <h2 className="font-bold text-2xl text-gray-900">{total}</h2>
                    <span className="text-sm text-gray-500 mt-1">Total Posts</span>
                </div>

                {/* 2. under Review */}
                <div className="flex flex-col border border-gray-200 rounded-2xl p-5 bg-white">
                    <h2 className="font-bold text-2xl text-gray-900">{underReview}</h2>
                    <span className="text-sm text-gray-500 mt-1">Under Review</span>
                </div>

                {/* 3. in Progress */}
                <div className="flex flex-col border border-gray-200 rounded-2xl p-5 bg-white">
                    <h2 className="font-bold text-2xl text-gray-900">{inProgress}</h2>
                    <span className="text-sm text-gray-500 mt-1">In Progress</span>
                </div>

                {/* 4. completed */}
                <div className="flex flex-col border border-gray-200 rounded-2xl p-5 bg-white">
                    <h2 className="font-bold text-2xl text-gray-900">{completed}</h2>
                    <span className="text-sm text-gray-500 mt-1">Completed</span>
                </div>
            </div>

            <form className="w-full">
                <input
                    name="query"
                    type="text"
                    placeholder="🔍︎ Search posts..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none text-sm text-gray-700 bg-white"
                />
            </form>

            {/* filter buttons */}
            <div className="flex items-center gap-2">
                {CATEGORIES.map((cat) => (
                    <Link
                        key={cat}
                        href={cat === "All" ? "/" : `/?category=${cat}`}
                        className={`font-medium px-4 py-1.5 rounded-lg text-sm transition-colors ${
                            activeCategory === cat
                                ? "bg-indigo-600 text-white"
                                : "bg-white border border-gray-200 text-gray-700"
                        }`}
                    >
                        {cat}
                    </Link>
                ))}
            </div>

            <p className="text-sm text-gray-400 font-medium -mt-2">{count} posts</p>
        </section>
    );
}

export default StatsOverview;