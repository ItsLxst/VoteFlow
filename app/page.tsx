import NavbarHome from "@/components/Navbar/NavbarHome";
import StatsOverview from "@/components/StatsOverview/StatsOverview";
import FeedbackCard from "@/components/FeedbackCard/FeedbackCard";
import { prisma } from "@/lib/prisma";

async function Home() {
    const posts = await prisma.post.findMany({
        include: {
            comments: true
        }
    });

    return (
        <div className="min-h-screen">
            <NavbarHome />
            <main className="w-full max-w-4xl mx-auto px-4 pb-12">
                <StatsOverview />
                {posts.map((post) => (
                    <FeedbackCard key={post.id} feedback={post} />
                ))}
            </main>
        </div>
    );
}

export default Home;