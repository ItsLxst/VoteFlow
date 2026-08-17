import NavbarDetail from "@/components/Navbar/NavbarDetail";
import FeedbackDetail from "@/components/FeedbackCard/FeedbackDetail";

function DetailPage() {
    return (
        <div className="min-h-screen">
            <NavbarDetail />
            <main className="w-full max-w-2xl mx-auto px-4 pb-12">
                <FeedbackDetail />
            </main>
        </div>
    );
}

export default DetailPage;