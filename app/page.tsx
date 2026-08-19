// import CircleButtonAnim from "@/components/anims/CircleButton";
import PlainCircle from "@/components/anims/PlainCircle";
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
      <div className="fixed bottom-[clamp(20px,40px)] left-1/2 transform -translate-x-1/2 z-80">
        <PlainCircle text="Click To Book!" />
      </div>
      <CorpHero />
      <Delivery />
      <WhoAmI />
      <VideoSection />
      <SchoolSection />
      <Footer />
    </main>
  );
}
