function FeedbackCard() {
    return (
        <div className="flex flex-col gap-4 w-full mt-6">
            {/* 1. card */}
            <div className="group flex items-start gap-5 p-6 bg-white border border-gray-200 hover:border-gray-300 rounded-2xl cursor-pointer transition-colors">
                <button className="flex flex-col items-center justify-center w-14 h-24 border border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-600 rounded-2xl bg-white text-gray-800 shrink-0 transition-colors">
                    <span className="text-xs">▲</span>
                    <span className="text-sm font-bold mt-2">284</span>
                </button>

                <div className="flex flex-col flex-1 gap-2">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 text-base transition-colors">
                            Dark mode support across all dashboards
                        </h3>
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              Planned
            </span>
                    </div>

                    <p className="text-sm text-gray-500">
                        We spend a lot of time in the app, especially at night. A proper dark mode would reduce eye strain and make the product feel more polished.
                    </p>

                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-lg">
                Feature
              </span>
                            <div className="flex items-center gap-1.5">
                                <span className="w-6 h-6 rounded-full bg-pink-100 text-pink-600 text-xs font-bold flex items-center justify-center">SC</span>
                                <span className="text-xs text-gray-500 font-medium">Sarah Chen</span>
                            </div>
                        </div>
                        <span className="text-xs text-gray-400 font-medium">💬 2</span>
                    </div>
                </div>
            </div>

            {/* 2. card */}
            <div className="group flex items-start gap-5 p-6 bg-white border border-gray-200 hover:border-gray-300 rounded-2xl cursor-pointer transition-colors">
                <button className="flex flex-col items-center justify-center w-14 h-24 border border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-600 rounded-2xl bg-white text-gray-800 shrink-0 transition-colors">
                    <span className="text-xs">▲</span>
                    <span className="text-sm font-bold mt-2">197</span>
                </button>

                <div className="flex flex-col flex-1 gap-2">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 text-base transition-colors">
                            Bulk export to CSV with custom field selection
                        </h3>
                        <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              Under Review
            </span>
                    </div>

                    <p className="text-sm text-gray-500">
                        Right now exports include every column, which makes it hard to work with in Excel. Let us pick which fields to include before downloading.
                    </p>

                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-cyan-700 bg-cyan-50 border border-cyan-100 px-2.5 py-1 rounded-lg">
                Improvement
              </span>
                            <div className="flex items-center gap-1.5">
                                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 text-xs font-bold flex items-center justify-center">TA</span>
                                <span className="text-xs text-gray-500 font-medium">Tom Archer</span>
                            </div>
                        </div>
                        <span className="text-xs text-gray-400 font-medium">💬 1</span>
                    </div>
                </div>
            </div>

            {/* 3. card */}
            <div className="group flex items-start gap-5 p-6 bg-white border border-gray-200 hover:border-gray-300 rounded-2xl cursor-pointer transition-colors">
                <button className="flex flex-col items-center justify-center w-14 h-24 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white shrink-0 transition-colors">
                    <span className="text-xs">▲</span>
                    <span className="text-sm font-bold mt-2">156</span>
                </button>

                <div className="flex flex-col flex-1 gap-2">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 text-base transition-colors">
                            Slack integration for real-time alerts
                        </h3>
                        <span className="text-xs font-semibold text-purple-700 bg-purple-50 px-3 py-1 rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
              In Progress
            </span>
                    </div>

                    <p className="text-sm text-gray-500">
                        Send notifications to a Slack channel when a status changes, a comment is posted, or a post reaches a vote threshold.
                    </p>

                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-purple-700 bg-purple-50 border border-purple-100 px-2.5 py-1 rounded-lg">
                Integration
              </span>
                            <div className="flex items-center gap-1.5">
                                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">DP</span>
                                <span className="text-xs text-gray-500 font-medium">Devon Park</span>
                            </div>
                        </div>
                        <span className="text-xs text-gray-400 font-medium">💬 2</span>
                    </div>
                </div>
            </div>

            {/* 4. card */}
            <div className="group flex items-start gap-5 p-6 bg-white border border-gray-200 hover:border-gray-300 rounded-2xl cursor-pointer transition-colors">
                <button className="flex flex-col items-center justify-center w-14 h-24 border border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-600 rounded-2xl bg-white text-gray-800 shrink-0 transition-colors">
                    <span className="text-xs">▲</span>
                    <span className="text-sm font-bold mt-2">112</span>
                </button>

                <div className="flex flex-col flex-1 gap-2">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 text-base transition-colors">
                            Keyboard shortcut cheat sheet overlay
                        </h3>
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              Planned
            </span>
                    </div>

                    <p className="text-sm text-gray-500">
                        A quick-access panel (press ? or Cmd+K) listing all available shortcuts. Discoverability is the problem — most users don't know they exist.
                    </p>

                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-lg">
                Feature
              </span>
                            <div className="flex items-center gap-1.5">
                                <span className="w-6 h-6 rounded-full bg-lime-100 text-lime-800 text-xs font-bold flex items-center justify-center">AO</span>
                                <span className="text-xs text-gray-500 font-medium">Amara Osei</span>
                            </div>
                        </div>
                        <span className="text-xs text-gray-400 font-medium">💬 0</span>
                    </div>
                </div>
            </div>

            {/* 5. card */}
            <div className="group flex items-start gap-5 p-6 bg-white border border-gray-200 hover:border-gray-300 rounded-2xl cursor-pointer transition-colors">
                <button className="flex flex-col items-center justify-center w-14 h-24 border border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-600 rounded-2xl bg-white text-gray-800 shrink-0 transition-colors">
                    <span className="text-xs">▲</span>
                    <span className="text-sm font-bold mt-2">89</span>
                </button>

                <div className="flex flex-col flex-1 gap-2">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 text-base transition-colors">
                            Fix date filter resetting on page refresh
                        </h3>
                        <span className="text-xs font-semibold text-purple-700 bg-purple-50 px-3 py-1 rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
              In Progress
            </span>
                    </div>

                    <p className="text-sm text-gray-500">
                        Every time I refresh the page my date filter goes back to the default. The URL should reflect the filter state so I can share links too.
                    </p>

                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-rose-600 bg-rose-50 border border-rose-100 px-2.5 py-1 rounded-lg">
                Bug
              </span>
                            <div className="flex items-center gap-1.5">
                                <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold flex items-center justify-center">FG</span>
                                <span className="text-xs text-gray-500 font-medium">Felix Gruber</span>
                            </div>
                        </div>
                        <span className="text-xs text-gray-400 font-medium">💬 1</span>
                    </div>
                </div>
            </div>

            {/* 6. card */}
            <div className="group flex items-start gap-5 p-6 bg-white border border-gray-200 hover:border-gray-300 rounded-2xl cursor-pointer transition-colors">
                <button className="flex flex-col items-center justify-center w-14 h-24 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white shrink-0 transition-colors">
                    <span className="text-xs">▲</span>
                    <span className="text-sm font-bold mt-2">341</span>
                </button>

                <div className="flex flex-col flex-1 gap-2">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 text-base transition-colors">
                            Two-factor authentication via authenticator apps
                        </h3>
                        <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              Completed
            </span>
                    </div>

                    <p className="text-sm text-gray-500">
                        Email-only 2FA feels weak for enterprise accounts. TOTP support (Google Authenticator, Authy) would satisfy most security teams.
                    </p>

                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-lg">
                Feature
              </span>
                            <div className="flex items-center gap-1.5">
                                <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-800 text-xs font-bold flex items-center justify-center">NB</span>
                                <span className="text-xs text-gray-500 font-medium">Nina Bauer</span>
                            </div>
                        </div>
                        <span className="text-xs text-gray-400 font-medium">💬 1</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedbackCard;