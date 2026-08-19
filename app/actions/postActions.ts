"use server";

import { prisma } from "@/lib/prisma";

export async function createPost(formData: any) {
    const title = formData.get("title") as string;
    const category = formData.get("category") as string;
    const description = formData.get("description") as string;
    const name = formData.get("authorName") as string;

    const getInitials = (fullName: string) => {
        let splitted_name = fullName.trim().split(" ");
        const firstLetter = splitted_name[0] ? splitted_name[0][0] : "";
        const lastLetter = splitted_name.length > 1 ? splitted_name[splitted_name.length - 1][0] : "";

        return (firstLetter + lastLetter).toUpperCase();
    };

    const initials = getInitials(name);

    const newPost = await prisma.post.create({
        data: {
            title: title,
            category: category,
            description: description,
            authorName: name,
            authorInitials: initials,
            status: "PENDING",
        }
    });
}