import NavbarDetail from "@/components/Navbar/NavbarDetail";
import FeedbackDetail from "@/components/FeedbackCard/FeedbackDetail";
import { prisma } from "@/lib/prisma";

interface PageProps {
    params: Promise <{
        id:string;
    }>;
}

async function DetailPage({params}: PageProps) {
    // catch id from params and turn it into num
    const { id } = await params;
    const idNum = Number(id);

    // send to prisma -> db look at the id
    const feedback = await prisma.post.findUnique({
        where: {
            id: idNum
        },
        include: {
            comments: true // include the comment relationship
        }
    });


    return (
        <div className="min-h-screen">
            <NavbarDetail />
            <main className="w-full max-w-2xl mx-auto px-4 pb-12">
                <FeedbackDetail feedback={feedback} />
            </main>
        </div>
    );
}

export default DetailPage;