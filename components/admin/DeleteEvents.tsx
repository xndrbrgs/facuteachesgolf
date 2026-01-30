"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { EllipsisVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { useFormStatus } from "react-dom";
import { deleteEvent } from "@/server/user.actions";

type EventLite = { id: string; name: string; slug: string };

function SubmitDeleteButton({ onDone }: { onDone?: () => void }) {
  const { pending } = useFormStatus(); // disables while the action is running
  return (
    <AlertDialogAction
      type="submit"
      disabled={pending}
      className="bg-red-600 hover:bg-red-700"
      onClick={onDone}
    >
      {pending ? "Deleting…" : "Delete"}
    </AlertDialogAction>
  );
}

export default function DeleteEvents({
  events: initialEvents,
}: {
  events: EventLite[];
}) {
  const router = useRouter();
  const [events, setEvents] = React.useState(initialEvents);
  const [selectedId, setSelectedId] = React.useState<string | null>(null);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Events</h1>
      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <ul className="space-y-4">
          {events.map((event) => (
            <li key={event.id} className="flex items-center justify-between">
              <span>{event.name}</span>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Event actions"
                  >
                    <EllipsisVertical className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Event</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <DropdownMenuItem
                        className="text-red-600 focus:text-red-600"
                        onClick={() => setSelectedId(event.id)}
                      >
                        Delete
                      </DropdownMenuItem>
                    </AlertDialogTrigger>

                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete this event?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          remove the event and its associated data.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>

                        {/* Form that posts to the server action */}
                        <form
                          action={async (formData) => {
                            try {
                              const eventId = formData.get("eventId") as string;
                              if (eventId) {
                                await deleteEvent(eventId);
                              } else {
                                throw new Error("Event ID is missing");
                              }
                              // Optimistically update UI
                              setEvents((prev) =>
                                prev.filter((e) => e.id !== selectedId)
                              );
                              toast.success("Event deleted");
                              router.refresh();
                            } catch (e: any) {
                              toast.error("Delete failed", {
                                description:
                                  e?.message ?? "Something went wrong",
                              });
                            } finally {
                              setSelectedId(null);
                            }
                          }}
                        >
                          <input
                            type="hidden"
                            name="eventId"
                            value={selectedId ?? ""}
                          />
                          <SubmitDeleteButton />
                        </form>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
