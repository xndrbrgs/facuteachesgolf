
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();

  const title = formData.get("title") as string;
  const slug = formData.get("title") as string;
  const description = formData.get("description") as string;
  const location = formData.get("location") as string;
  const price = formData.get("price") as string;
  const spots = formData.get("spots") as string;
  const date = formData.get("date") as string;
  const imageUrl = formData.get("imageUrl") as string | null;

  if (!title || !description || !date) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const event = await prisma.event.create({
    data: {
      title,
      description,
      slug,
      location,
      price,
      spots,
      date: new Date(date),
      imageUrl: imageUrl || null,
      createdBy: userId,
    },
  });

  return NextResponse.redirect("/events");
}
