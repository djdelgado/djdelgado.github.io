import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import poaImg from "@/assets/Excursion-Layout.jpg";
import travelpackImg from "@/assets/travelpack.jpeg";

const projectsData = [
  {
    id: 1,
    title: "POA",
    image: poaImg,
    description: "A project management application"
  },
  {
    id: 2,
    title: "TRAVELPACK",
    image: travelpackImg,
    description: "A travel planning application"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#222] text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <Separator className="bg-[#64A19D] h-0.5 w-16 mx-auto mb-10" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projectsData.map((project) => (
            <div key={project.id} className="flex flex-col items-center">
              <Card className="bg-stone-100 text-black overflow-hidden w-full max-w-md">
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-xl font-bold text-center">
                    {project.title}
                  </CardTitle>
                  <Separator className="bg-[#64A19D] h-0.5 w-12 mx-auto my-2" />
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;