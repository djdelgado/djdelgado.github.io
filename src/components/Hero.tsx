import { Button } from "@/components/ui/button";
import oneShellImg from "@/assets/oneshell.jpg";

const Hero = () => {
  return (
    <section
      id="page-top"
      className="masthead relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
      style={{
        background: `linear-gradient(180deg, rgba(22, 22, 22, .3) 0, rgba(22, 22, 22, .7) 75%, #161616), url(${oneShellImg})`,
      }}
    >
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          DAVID DELGADO
        </h1>
        <h2 className="text-xl md:text-2xl font-light text-white mb-8">
          Full-Stack Software Developer
        </h2>
        <Button
          asChild
          className="bg-[#64A19D] hover:bg-[#558985] text-white rounded px-8 py-5 font-medium"
        >
          <a href="#about">ABOUT</a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;