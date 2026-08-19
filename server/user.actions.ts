
'use server'

import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export async function isAdmin(): Promise<boolean> {
    const user = await currentUser();
    if (!user) throw new Error("Not authenticated");

    const userRecord = await prisma.user.findUnique({
        where: { clerkUserId: user.id },
        select: { isAdmin: true },
    });

    return userRecord?.isAdmin ?? false;
}

export async function deleteEvent(eventId: string): Promise<void> {
    const user = await currentUser();
    if (!user) throw new Error("Not authenticated");

    const userRecord = await prisma.user.findUnique({
        where: { clerkUserId: user.id },
        select: { isAdmin: true },
    });

    if (!userRecord?.isAdmin) {
        throw new Error("Not authorized to delete events");
    }

    await prisma.event.delete({
        where: { id: eventId },
    });
}