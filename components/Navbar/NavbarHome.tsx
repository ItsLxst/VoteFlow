import Image from "next/image";

function NavbarHome() {
    return (
        <nav className="w-full border-b border-gray-200 py-4">
            <div className="w-full max-w-4xl mx-auto flex items-center justify-between px-4">
                <div className="flex items-center gap-2.5">
                    <Image
                        src="/logo.svg"
                        alt="VoteFlow Logo"
                        width={28}
                        height={28}
                    />
                    <span className="text-lg font-bold text-gray-900">Voteflow</span>
                </div>

                <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-lg">
                    + Submit Idea
                </button>
            </div>
        </nav>
    );
}

export default NavbarHome;