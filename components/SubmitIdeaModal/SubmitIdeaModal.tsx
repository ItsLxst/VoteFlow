import {createPost} from "@/app/actions/postActions";

export default function SubmitIdeaModal() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <div className="w-full max-w-lg rounded-xl bg-white p-6">

                <div className="flex justify-between">
                    <h2 className="text-xl font-bold">Submit a New Idea</h2>

                    <button type="button">✕</button>
                </div>

                <form className="mt-4" action= { createPost }>
                    <div className="mb-4">
                        <label className="text-sm">Title</label>
                        <input
                            name="title"
                            type="text"
                            placeholder="e.g. Add Dark Mode"
                            className="w-full rounded-lg border p-2"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-sm">Category</label>
                        <select className="w-full rounded-lg border p-2"
                        name="category">
                            <option>Feature</option>
                            <option>Bug</option>
                            <option>Improvement</option>
                            <option>Integration</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="text-sm">Description</label>
                        <textarea
                            name="description"
                            rows={4}
                            placeholder="Explain the idea or problem..."
                            className="w-full rounded-lg border p-2"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-sm">Your Name</label>
                        <input
                            name="authorName"
                            type="text"
                            placeholder="e.g. Alex Morgan"
                            className="w-full rounded-lg border p-2"
                        />
                    </div>

                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            className="rounded-lg border px-4 py-2"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
                        >
                            Submit Idea
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
}