"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function upvotePost(postId: number) {
    const cookieStore = await cookies();
    const visitorId = cookieStore.get("visitorId")?.value;

    if (!visitorId) return;

    const existingVote = await prisma.vote.findUnique({
        where: {
            visitorId_postId: {
                visitorId,
                postId,
            },
        },
    });

    if (existingVote) {
        await prisma.vote.delete({
            where: { id: existingVote.id },
        });
        await prisma.post.update({
            where: { id: postId },
            data: { votes: { decrement: 1 } },
        });
    } else {
        await prisma.vote.create({
            data: { visitorId, postId },
        });
        await prisma.post.update({
            where: { id: postId },
            data: { votes: { increment: 1 } },
        });
    }

    revalidatePath("/");
}