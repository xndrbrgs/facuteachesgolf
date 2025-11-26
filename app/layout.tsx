import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { ReactLenis } from "@/lib/lenis/lenis";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={`${messinaSansRegular.variable} ${messinaSansBook.variable} ${messinaSansMonoRegular.variable} ${banditCondensed.variable} antialiased relative max-w-[96rem] mx-auto`}
        >
          <Navbar />
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
