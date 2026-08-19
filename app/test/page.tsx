import LandingFooter from "@/components/landing/LandingFooter";
import WhoAmI from "@/components/hero/WhoAmI";
import ChooseCoaching from "@/components/landing/ChooseCoaching";
import LandingHero from "@/components/landing/LandingHero";
import LandingQuestions from "@/components/landing/LandingQuestions";
import TheProblem from "@/components/landing/TheProblem";
import TheSystem from "@/components/landing/TheSystem";
import PlainCircle from "@/components/anims/PlainCircle";

const LandingPage = () => {
  return (
    <main className="relative overflow-x-hidden bg-background text-white w-full">
      <div className="fixed bottom-[clamp(60px,160px)] right-[clamp(40px,80px)] z-80">
         <PlainCircle text="BOOK CLASS" />
      </div>
      <LandingHero />
      <TheProblem />
      <TheSystem />
      <WhoAmI />
      <ChooseCoaching />
      <LandingQuestions />
      <LandingFooter />
    </main>
  );
};

export default LandingPage;
