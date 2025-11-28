import CircleButtonAnim from "@/components/anims/CircleButton";
import Footer from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden bg-background text-white w-full">
      <div className="fixed bottom-[clamp(120px,160px)] right-[clamp(40px,80px)] z-80">
        <CircleButtonAnim text="Click Here To Book Now!" />
      </div>
      <Footer />
    </main>
  );
}
