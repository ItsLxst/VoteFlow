import NavbarHome from "@/components/Navbar/NavbarHome";
import StatsOverview from "@/components/StatsOverview/StatsOverview";
import FeedbackCard from "@/components/FeedbackCard/FeedbackCard";
import { prisma } from "@/lib/prisma";

interface PageProps {
    searchParams: Promise<{
        category?: string;
        query?: string;
    }>;
}

async function Home({ searchParams }: PageProps) {
    const { category, query } = await searchParams;

    const allPosts = await prisma.post.findMany({
        orderBy: { id: "asc" },
        include: {
            comments: true,
        },
    });

    const total = allPosts.length;
    const underReview = allPosts.filter((p) => p.status === "Under Review").length;
    const inProgress = allPosts.filter((p) => p.status === "In Progress").length;
    const completed = allPosts.filter((p) => p.status === "Completed").length;

    const filteredPosts = allPosts.filter((post) => {
        const matchesCategory = !category || category === "All" || post.category === category;
        const matchesQuery = !query || post.title.toLowerCase().includes(query.toLowerCase());
        return matchesCategory && matchesQuery;
    });

    return (
        <div className="min-h-screen">
            <NavbarHome />
            <main className="w-full max-w-4xl mx-auto px-4 pb-12">
                <StatsOverview
                    total={total}
                    underReview={underReview}
                    inProgress={inProgress}
                    completed={completed}
                    count={filteredPosts.length}
                    activeCategory={category || "All"}
                />
                {filteredPosts.map((post) => (
                    <FeedbackCard key={post.id} feedback={post} />
                ))}
            </main>
        </div>
    );
}

export default Home;