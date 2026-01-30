
// import prisma from "@/lib/prisma";
// import { notFound } from "next/navigation";

// export default async function EventPage({ params }: { params: { id: string } }) {
//   const event = await prisma.event.findUnique({
//     where: { id: params.id },
//   });

//   if (!event) return notFound();

//   return (
//     <div className="max-w-3xl mx-auto py-10 space-y-6">

//       <h1 className="text-4xl font-bold">{event.title}</h1>

//       {event.imageUrl && (
//         <img
//           src={event.imageUrl}
//           alt={event.title}
//           className="w-full rounded-lg"
//         />
//       )}

//       <p className="text-gray-500">
//         {new Date(event.date).toLocaleString()}
//       </p>

//       <p className="text-lg leading-relaxed">{event.description}</p>

//       {/* You can add registration buttons, maps, etc. here */}
//     </div>
//   );
// }
