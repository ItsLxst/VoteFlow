"use client";

import {createComment} from "@/app/actions/commentActions";
import { useState } from "react";

interface FeedbackDetailProps {
    feedback: any;
}

function FeedbackDetail({ feedback }: FeedbackDetailProps) {
    const [content, setContent] = useState("");
    return (
        <div className="flex flex-col gap-6 w-full mt-6">
            {/* main detail card */}
            <div className="flex items-start gap-5 p-6 bg-white border border-gray-200 rounded-2xl">
                <button className="flex flex-col items-center justify-center w-12 h-14 border border-gray-200 rounded-xl bg-white text-gray-800 shrink-0">
                    <span className="text-[10px]">▲</span>
                    <span className="text-xs font-bold mt-0.5">{feedback.votes}</span>
                </button>

                <div className="flex flex-col flex-1 gap-3">
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                            {feedback.status}
                        </span>
                        <span className="text-xs font-medium text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-lg">
                            {feedback.category}
                        </span>
                    </div>

                    <h1 className="text-lg font-bold text-gray-900">
                        {feedback.title}
                    </h1>

                    <p className="text-sm text-gray-500 leading-relaxed">
                        {feedback.description}
                    </p>

                    <div className="flex items-center gap-2 mt-1">
                        {feedback.tags.map((tag: string) => (
                            <span
                                key={tag}
                                className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-2.5 mt-2">
                        <span className="w-7 h-7 rounded-full bg-pink-100 text-pink-600 text-xs font-bold flex items-center justify-center">
                            SC
                        </span>
                        <div className="flex flex-col">
                            <span className="text-xs font-semibold text-gray-900">
                                {feedback.authorName}
                            </span>
                            <span className="text-[11px] text-gray-400">
                                {feedback.createdAt}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* comment section */}
            <div className="flex flex-col p-6 bg-white border border-gray-200 rounded-2xl gap-6">
                <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                    <span>💬</span> {feedback.comments.length}
                </h3>

                {feedback.comments.map((comment:any) => (
                    <div key={comment.id} className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 text-xs font-bold flex items-center justify-center shrink-0">
                            {comment.authorInitials}
                        </span>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-gray-900">
                                    {comment.authorName}
                                </span>
                                <span className="text-[11px] text-gray-400">
                                    {comment.createdAt}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600">
                                {comment.content}
                            </p>
                        </div>
                    </div>
                ))}

                {/* comment form*/}
                <div className="flex flex-col p-4 bg-white border border-gray-200 rounded-2xl gap-3">
                    <textarea
                        onChange={(e) => setContent(e.target.value)}
                        value={content}
                        placeholder="Share your thoughts or use case..."
                        rows={3}
                        className="w-full text-sm text-gray-700 outline-none resize-none placeholder-gray-400"
                    />
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                        <span className="text-xs text-gray-400">
                            Cmd+Enter to submit
                        </span>
                        <button
                            onClick={async () => {
                                await createComment(feedback.id, content);
                                setContent("");
                            }}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5"
                        >
                            <span>✈</span> Post Comment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedbackDetail;