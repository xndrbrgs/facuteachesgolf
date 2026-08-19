"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Calendar } from "@/components/ui/calendar";

import { cn } from "@/lib/utils"; // shadcn utils (make sure you have this)
import { toast } from "sonner";
import { UploadButton } from "@/utils/uploadthing";

// --- Validation schema ---
const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  slug: z.string(),
  location: z.string().min(3, "Description must be at least 10 characters"),
  price: z.string().min(1, "Price must be at least 1 character"),
  spots: z.string().min(1, "Spots must be at least 1 character"),
  date: z.date({ error: "Please pick a date" }),
  stripeLink: z.string().min(1, "Please insert Stripe Link url!"),
  time: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Time must be HH:MM (24-hr)"),
  imageUrl: z.string().url("Must be a valid URL"),
});

type FormValues = z.infer<typeof formSchema>;

// --- Simple client-side slug preview (server still guarantees uniqueness) ---
function toSlug(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function CreateEventForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      location: "",
      price: "",
      spots: "",
      slug: "",
      date: undefined,
      time: "18:00",
      imageUrl: "",
      stripeLink: "",
    },
  });

  const watchTitle = form.watch("title");
  const previewSlug = useMemo(() => toSlug(watchTitle || ""), [watchTitle]);

  async function onSubmit(values: FormValues) {
    try {
      setSubmitting(true);

      // Combine date + time into a JS Date (local time)
      const [hh, mm] = values.time.split(":").map(Number);
      const combined = new Date(values.date);
      combined.setHours(hh, mm ?? 0, 0, 0);

      const res = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: values.title,
          slug: previewSlug,
          description: values.description,
          location: values.location,
          price: values.price,
          spots: values.spots,
          stripeLink: values.stripeLink,
          date: combined.toISOString(), // send ISO
          imageUrl: values.imageUrl,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to create event");
      }

      const data = await res.json();
      toast("Success", {
        description: "Your event has been published.",
      });

      // Redirect to the new event
      router.push(`/events/${data.slug}`);
      router.refresh();
    } catch (err: any) {
      toast("Error", {
        description: err.message ?? "Something went wrong",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="relative mx-auto border flex flex-col p-[clamp(16px,32px)] rounded-xl">
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          {/* Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Summer FTG Open 2026" {...field} />
                </FormControl>
                <FormMessage />
                {field.value ? (
                  <p className="text-xs text-muted-foreground">
                    Preview URL:{" "}
                    <span className="font-mono">
                      /events/{previewSlug || "your-title"}
                    </span>
                  </p>
                ) : null}
              </FormItem>
            )}
          />
          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    placeholder="Tell people what to expect, who it's for, and any important details…"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Location */}
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    placeholder="Where is this event happening?"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Price */}
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price Per Person</FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    placeholder="What is the price for this event? (Ex: 20)"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Price */}
          <FormField
            control={form.control}
            name="stripeLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Stripe Link</FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    placeholder="Insert the Stripe Link URL here."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Spots */}
          <FormField
            control={form.control}
            name="spots"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Spots</FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    placeholder="How many spots are available for this event?"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Date */}
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    value={
                      field.value ? field.value.toISOString().split("T")[0] : ""
                    }
                    onChange={(e) => {
                      const date = e.target.value
                        ? new Date(e.target.value)
                        : undefined;
                      field.onChange(date);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Time */}
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Time</FormLabel>
                <FormControl>
                  <Input type="time" {...field} />
                </FormControl>
                <FormMessage />
                <p className="text-xs text-muted-foreground">
                  24-hour format (e.g., 18:30 for 6:30 PM)
                </p>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload Image for Event</FormLabel>
                <FormControl>
                  <div className="flex flex-col space-y-3 items-center">
                    <UploadButton
                      endpoint="imageUploader" // make sure this matches your UploadThing router key
                      onClientUploadComplete={(res) => {
                        // res is an array; assuming maxFileCount: 1
                        const file = res?.[0];
                        if (file?.ufsUrl) {
                          // Update the form field with the returned URL
                          field.onChange(file.ufsUrl);

                          // OPTIONAL: if you also want to capture the file key,
                          // add another field to your schema (e.g., imageKey) and set it
                          // form.setValue("imageKey", file.key);
                        }

                        // Optional UI feedback
                        // toast({ title: "Image uploaded" });
                        console.log("Files:", res);
                      }}
                      onUploadError={(error: Error) => {
                        console.error(error);
                        // toast({ title: "Upload failed", description: error.message, variant: "destructive" });
                      }}
                    />

                    {/* Live preview if present */}
                    {field.value ? (
                      <div className="flex flex-col items-center space-y-2">
                        <img
                          src={field.value}
                          alt="Event image preview"
                          className="size-64 mw-auto rounded border object-cover"
                        />
                        <span className="text-xs mt-4">Image Preview</span>
                      </div>
                    ) : (
                      <p className="text-xs text-muted-foreground">
                        Upload an image to attach it to this event.
                      </p>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              className="bg-black text-white hover:bg-gray-800 hover:cursor-pointer transition transform duration-150"
              variant="outline"
              type="submit"
              disabled={submitting}
            >
              {submitting ? "Creating…" : "Create Event"}
            </Button>
            <Button
              className="bg-white hover:cursor-pointer transition transform duration-150"
              type="button"
              variant="outline"
              onClick={() => form.reset()}
              disabled={submitting}
            >
              Reset
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
