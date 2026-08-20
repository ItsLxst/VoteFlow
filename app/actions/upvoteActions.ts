"use server";

import { prisma } from "@/lib/prisma";
import {revalidatePath } from "next/cache";

export async function upvotePost(id: number, isUpvoted: boolean) {
    await prisma.post.update({
        where: {
            id: id
        },
        data: {
            votes: {
                [isUpvoted ? "decrement" : "increment"]: 1
            }
        }
    });

    revalidatePath("/");
}