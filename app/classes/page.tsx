import CircleButtonAnim from "@/components/anims/CircleButton";
import Footer from "@/components/footer/Footer";

const ServicesPage = () => {
  return (
    <main className="relative overflow-x-hidden w-full text-white">
      <div className="fixed bottom-[clamp(120px,160px)] right-[clamp(40px,80px)] z-80">
        <CircleButtonAnim text="Click Here To Book Now!" />
      </div>
      <section className="h-screen w-full text-black bg-[#ecece9]">
        HELLO
      </section>
      <Footer />
    </main>
  );
};

export default ServicesPage;
