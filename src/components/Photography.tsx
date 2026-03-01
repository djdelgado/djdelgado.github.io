import { Separator } from "@/components/ui/separator";
import perotImg from "@/assets/perot-d3671aa3d15305d7876b9c29209b0bff.jpg";
import brothersImg from "@/assets/brothers-e51b70563fe5dac19a5553f58a99aa3f.jpg";

const Photography = () => {
  return (
    <section id="photography" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center">Photography</h2>
        <Separator className="bg-[#64A19D] h-0.5 w-16 mx-auto mb-10" />
        
        {/* Analog Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="order-2 md:order-1">
            <img 
              src={perotImg} 
              alt="Analog Photography" 
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col justify-center order-1 md:order-2">
            <h3 className="text-2xl font-bold mb-4">Analog</h3>
            <Separator className="bg-[#64A19D] h-0.5 w-12 mb-4" />
            <p className="text-gray-700 mb-4">
              It started when I found an old Yashica Electro 35 in a drawer of my 
              grandparents house. I didn't know much about cameras at all, but I 
              figured this would be a good place to start.
            </p>
          </div>
        </div>
        
        {/* Street Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-end">
            <h3 className="text-2xl font-bold mb-4">Street</h3>
            <Separator className="bg-[#64A19D] h-0.5 w-12 mb-4" />
          </div>
          <div>
            <img 
              src={brothersImg}
              alt="Street Photography" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photography;