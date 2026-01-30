import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { ReactLenis } from "@/lib/lenis/lenis";
import { ViewTransitions } from "next-view-transitions";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner"

const messinaSansRegular = localFont({
  src: "../public/fonts/MessinaSans-Regular.otf",
  display: "swap",
  weight: "500",
  variable: "--font-regular",
});

const messinaSansBook = localFont({
  src: "../public/fonts/MessinaSans-Book.otf",
  display: "swap",
  weight: "500",
  variable: "--font-book",
});

const messinaSansMonoRegular = localFont({
  src: "../public/fonts/MessinaSansMono-Regular.ttf",
  display: "swap",
  weight: "500",
  variable: "--font-sansMono",
});

const banditCondensed = localFont({
  src: "../public/fonts/Bandit-Condensed.otf",
  display: "swap",
  weight: "500",
  variable: "--font-bandit",
});

export const metadata: Metadata = {
  title: "Facu Teaches Golf - Golf Lessons in Orlando, FL",
  description:
    "Facu Teaches Golf offers expert golf lessons in Orlando, helping players of all skill levels improve their swing, accuracy, and overall performance. Whether you're a beginner seeking fundamentals or an experienced golfer looking to fine-tune your game, my personalized coaching focuses on course management, swing mechanics, and mental strategy. With a passion for teaching and a friendly, results-driven approach, I provide tailored lessons that make learning enjoyable and effective. Book a session today and take your golf game to the next level!",
  keywords: [
    "golf school",
    "golf schools",
    "golf schools Orlando",
    "golf schools junior Orlando",
    "golf schools Florida",
    "golf schools for kids Orlando",
    "golf schools Orlando FL",
    "golf lessons Orlando",
    "golf instructor Orlando FL",
    "golf coaching",
    "PGA golf lessons",
    "private golf lessons",
    "golf swing instruction",
    "beginner golf lessons",
    "advanced golf training",
    "golf course management",
    "Orlando golf pro",
    "golf lessons near me",
    "golf school Orlando",
    "golf academy Orlando",
    "golf training school",
    "professional golf instruction",
    "golf school Florida",
    "Orlando golf academy",
    "golf improvement school",
    "junior golf school Orlando",
    "adult golf school",
    "Facu Teaches Golf",
    "golf lessons Orlando",
    "golf instructor Orlando FL",
    "golf coaching",
    "PGA golf lessons",
    "private golf lessons",
    "golf swing instruction",
    "beginner golf lessons",
    "advanced golf training",
    "golf course management",
    "Orlando golf pro",
    "golf lessons near me",
    "Facu Teaches Golf",
  ],
  authors: [{ name: "Facu Teaches Golf" }],
  creator: "Facu Teaches Golf",
  publisher: "Facu Teaches Golf",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://facuteachesgolf.com",
    title: "Facu Teaches Golf - Golf Lessons in Orlando, FL",
    description:
      "Expert golf instruction in Orlando, FL. Personalized lessons for all skill levels focused on swing mechanics, course management, and mental strategy.",
    siteName: "Facu Teaches Golf",
  },
  twitter: {
    card: "summary_large_image",
    title: "Facu Teaches Golf - Golf Lessons in Orlando, FL",
    description:
      "Expert golf instruction in Orlando, FL. Personalized lessons for all skill levels.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://facuteachesgolf.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ViewTransitions>
        <html lang="en">
          <ReactLenis root>
            <body
              className={`${messinaSansRegular.variable} ${messinaSansBook.variable} ${messinaSansMonoRegular.variable} ${banditCondensed.variable} antialiased relative max-w-[96rem] mx-auto`}
            >
              <Navbar />
              {children}
               <Toaster />
            </body>
          </ReactLenis>
        </html>
      </ViewTransitions>
    </ClerkProvider>
  );
}
