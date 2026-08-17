import NavbarHome from "@/components/Navbar/NavbarHome";
import StatsOverview from "@/components/StatsOverview/StatsOverview";
import FeedbackCard from "@/components/FeedbackCard/FeedbackCard";

function Home() {
    return (
        <div className="min-h-screen bg-white">
            <NavbarHome />
            <main className="w-full max-w-4xl mx-auto px-4 pb-12">
                <StatsOverview />
                <FeedbackCard />
            </main>
        </div>
    );
}

export default Home;