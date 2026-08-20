"use client";
import { upvotePost } from "@/app/actions/upvoteActions";
import { useState } from "react";

interface FeedbackCardProps {
    feedback: any;
}

function FeedbackCard({ feedback }: FeedbackCardProps) {
    const [isUpvoted, setIsUpvoted] = useState(false);

    return (
        <div className="flex flex-col gap-4 w-full mt-6">
            <div className="group flex items-start gap-5 p-6 bg-white border border-gray-200 hover:border-gray-300 rounded-2xl cursor-pointer transition-colors">
                <button
                    onClick={() => {
                        upvotePost(feedback.id, isUpvoted);
                        setIsUpvoted(!isUpvoted);
                    }}
                    className={`flex flex-col items-center justify-center w-14 h-24 rounded-2xl shrink-0 transition-colors ${
                        isUpvoted
                            ? "bg-indigo-600 text-white"
                            : "bg-white text-gray-800 border border-gray-200 hover:bg-indigo-50 hover:text-indigo-600"
                    }`}>
                    <span className="text-xs">▲</span>
                    <span className="text-sm font-bold mt-2">{feedback.votes}</span>
                </button>

                <div className="flex flex-col flex-1 gap-2">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 text-base transition-colors">
                            {feedback.title}
                        </h3>
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                            {feedback.status}
                        </span>
                    </div>

                    <p className="text-sm text-gray-500">
                        {feedback.description}
                    </p>

                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-medium text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-lg">
                                {feedback.category}
                            </span>
                            <div className="flex items-center gap-1.5">
                                <span className="w-6 h-6 rounded-full bg-pink-100 text-pink-600 text-xs font-bold flex items-center justify-center">
                                    {feedback.authorInitials}
                                </span>
                                <span className="text-xs text-gray-500 font-medium">
                                    {feedback.authorName}
                                </span>
                            </div>
                        </div>
                        <span className="text-xs text-gray-400 font-medium">
                            💬 {feedback.comments?.length ?? 0}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedbackCard;