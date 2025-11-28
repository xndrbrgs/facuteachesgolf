import CircleButtonAnim from "@/components/anims/CircleButton";
import Loader from "@/components/anims/Loader/Loader";
import Delivery from "@/components/delivery/Delivery";
import Footer from "@/components/footer/Footer";
import VideoSection from "@/components/gallery/VideoSection";
import CorpHero from "@/components/hero/CorpHero";
import WhoAmI from "@/components/hero/WhoAmI";
import Reviews from "@/components/reviews/Reviews";
import SchoolSection from "@/components/school/SchoolSection";

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden bg-background text-white w-full">
      <div className="fixed bottom-[clamp(120px,160px)] right-[clamp(40px,80px)] z-80">
        <CircleButtonAnim text="Click Here To Book Now!" />
      </div>
      <CorpHero />
      <Delivery />
      <WhoAmI />
      <VideoSection />
      <Reviews />
      <SchoolSection />
      <Footer />
      <Loader />
    </main>
  );
}
