import Image from "next/image";

export default function NavbarDetail() {
    return (
        <nav className="w-full border-b border-gray-200 flex justify-center py-4">
            <div className="flex items-center w-full max-w-5xl gap-2.5">
               <button className="hover:text-black cursor-pointer text-stone-500">← Back</button>
                <span className="h-4 w-[1px] bg-stone-500"></span>
               <Image
                   src="/logo.svg"
                   alt="VoteFlow Logo"
                   width={28}
                   height={28}
               />
               <span className="text-lg font-bold text-gray-900">Voteflow</span>
            </div>
        </nav>
    );
}