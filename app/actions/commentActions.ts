"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createComment(postId:number, content:string) {
    await prisma.comment.create(
        { data: {
            postId,
            content,
            authorName: "John Doe",
            authorInitials: "JD" }
        })

    revalidatePath(`/posts/${postId}`);
}