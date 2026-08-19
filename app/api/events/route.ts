
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.json();

  console.log("Form Data:", formData);

  const {
    title,
    description,
    slug,
    location,
    price,
    spots,
    date,
    imageUrl,
    stripeLink
  } = formData;

  if (!title || !description || !date) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }


  const event = await prisma.event.create({
    data: {
      id: slug,
      title,
      description,
      slug,
      location,
      price,
      spots,
      stripeLink,
      date: new Date(date),
      imageUrl: imageUrl || null,
      createdBy: userId,
    },
    select: { slug: true }, // only return what you need
  });


  return NextResponse.json(event, { status: 201 });
}
