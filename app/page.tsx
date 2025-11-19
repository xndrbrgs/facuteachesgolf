import CircleButton from "@/components/anims/Circle";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="absolute top-30 right-40">
        <CircleButton text="BOOK NOW!" size="w-32 h-32" />
      </div>
    </main>
  );
}
