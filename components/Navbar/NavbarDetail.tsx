import Image from "next/image";

function NavbarDetail() {
    return (
        <nav className="w-full border-b border-gray-200 py-4">
            <div className="w-full max-w-4xl mx-auto flex items-center gap-3 px-4">
                <button className="hover:text-black cursor-pointer text-stone-500 text-sm font-medium">
                    ← Back
                </button>
                <span className="h-4 w-[1px] bg-stone-300"></span>
                <div className="flex items-center gap-2.5">
                    <Image
                        src="/logo.svg"
                        alt="VoteFlow Logo"
                        width={28}
                        height={28}
                    />
                    <span className="text-lg font-bold text-gray-900">Voteflow</span>
                </div>
            </div>
        </nav>
    );
}

export default NavbarDetail;