function StatsOverview() {
    return (
        <section className="max-w-4xl flex flex-col items-start justify-center max-w-5xl mx-auto gap-6 pt-8">
          <h1 className="font-bold text-2xl">Product Feedback</h1>
          <p className="text-stone-500">Suggest features, report bugs, and vote on what matters most to you.</p>

          <div className="grid grid-cols-4 gap-4">
                {/* 1st card Total posts */}
            <div className="flex flex-col items-start justify-center w-full border border-gray-300 rounded-lg p-4">
               <h2 className="font-bold text-xl">6</h2>
                <span>Total Posts</span>
            </div>
               {/* 2nd card Under Review */}
            <div className="flex flex-col items-start justify-center w-full border border-gray-300 rounded-lg p-4">
               <h2 className="font-bold text-xl">1</h2>
               <span>Under Review</span>
            </div>
               {/* 3rd card In Progress */}
            <div className="flex flex-col items-start justify-center w-full border border-gray-300 rounded-lg p-4">
               <h2 className="font-bold text-xl">2</h2>
               <span>In Progress</span>
            </div>
               {/* 4th card Completed */}
            <div className="flex flex-col items-start justify-center w-full border border-gray-300 rounded-lg p-4">
               <h2 className="font-bold text-xl">1</h2>
               <span>Completed</span>
            </div>
          </div>
            <input type="text" placeholder="🔍︎ Search posts..." className="w-full border border-gray-200 rounded-lg px-4 py-2.5 outline-none text-sm"/>

          <div className="flex items-center gap-2">
            {/* Filter buttons*/}
            {/* first*/}
            <div>
               <span className="bg-indigo-600 text-white px-4 py-1.5 rounded-lg text-sm">All</span>
            </div>
            {/* second*/}
            <div>
               <span className="bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded-lg text-sm">Feature</span>
            </div>
            {/* third*/}
            <div>
              <span className="bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded-lg text-sm">Bug</span>
            </div>
              {/* fourth*/}
            <div>
              <span className="bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded-lg text-sm">Improvement</span>
            </div>
              {/* fifth*/}
            <div>
              <span className="bg-white border border-gray-200 text-gray-700 px-4 py-1.5 rounded-lg text-sm">Integration</span>
            </div>
          </div>
         <p className="text-sm text-gray-500">6 posts</p>
        </section>
    );
}
export default StatsOverview;