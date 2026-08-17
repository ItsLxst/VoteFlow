function FeedbackDetail() {
    return (
        <div className="flex flex-col gap-6 w-full mt-6">
            {/* main detail card */}
            <div className="flex items-start gap-5 p-6 bg-white border border-gray-200 rounded-2xl">
                <button className="flex flex-col items-center justify-center w-12 h-14 border border-gray-200 rounded-xl bg-white text-gray-800 shrink-0">
                    <span className="text-[10px]">▲</span>
                    <span className="text-xs font-bold mt-0.5">284</span>
                </button>

                <div className="flex flex-col flex-1 gap-3">
                    <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              Planned
            </span>
                        <span className="text-xs font-medium text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-lg">
              Feature
            </span>
                    </div>

                    <h1 className="text-lg font-bold text-gray-900">
                        Dark mode support across all dashboards
                    </h1>

                    <p className="text-sm text-gray-500 leading-relaxed">
                        We spend a lot of time in the app, especially at night. A proper dark mode would reduce eye strain and make the product feel more polished.
                    </p>

                    <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">
              #UI
            </span>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">
              #Accessibility
            </span>
                    </div>

                    <div className="flex items-center gap-2.5 mt-2">
            <span className="w-7 h-7 rounded-full bg-pink-100 text-pink-600 text-xs font-bold flex items-center justify-center">
              SC
            </span>
                        <div className="flex flex-col">
                            <span className="text-xs font-semibold text-gray-900">Sarah Chen</span>
                            <span className="text-[11px] text-gray-400">Aug 12, 2026</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* comment section */}
            <div className="flex flex-col p-6 bg-white border border-gray-200 rounded-2xl gap-6">
                <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                    <span>💬</span> 2 Comments
                </h3>

                <div className="flex items-start gap-3">
          <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-xs font-bold flex items-center justify-center shrink-0">
            MR
          </span>
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-gray-900">Marcus Reid</span>
                            <span className="text-[11px] text-gray-400">Aug 13, 2026</span>
                        </div>
                        <p className="text-sm text-gray-600">
                            This is a must-have. Our design team works late constantly and the bright white is brutal.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-3">
          <span className="w-7 h-7 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center shrink-0">
            PN
          </span>
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-gray-900">Priya Nair</span>
                            <span className="text-[11px] text-gray-400">Aug 14, 2026</span>
                        </div>
                        <p className="text-sm text-gray-600">
                            Would love a system-preference auto-switch too, not just a manual toggle.
                        </p>
                    </div>
                </div>
            </div>

            {/* comment form*/}
            <div className="flex flex-col p-4 bg-white border border-gray-200 rounded-2xl gap-3">
        <textarea
            placeholder="Share your thoughts or use case..."
            rows={3}
            className="w-full text-sm text-gray-700 outline-none resize-none placeholder-gray-400"
        />
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <span className="text-xs text-gray-400">Cmd+Enter to submit</span>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5">
                        <span>✈</span> Post Comment
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FeedbackDetail;