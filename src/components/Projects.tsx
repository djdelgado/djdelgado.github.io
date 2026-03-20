import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import poaImg from '@/assets/Excursion-Layout.jpg';
import travelpackImg from '@/assets/travelpack.jpeg';
import avidImg from '@/assets/avid.webp';

const projectsData = [
  {
    id: 1,
    title: 'POA',
    image: poaImg,
    description:
      'Plant Operations Advisor, a digital twin solution for offshore platforms',
    link: 'https://www.bp.com/en/global/corporate/news-and-insights/press-releases/bp-deploys-plant-operations-advisor-on-gulf-of-mexico-platforms.html',
  },
  {
    id: 2,
    title: 'Travelpack',
    image: travelpackImg,
    description: 'A travel planning application',
    link: 'https://github.com/three-stacks/travelpack',
  },
  {
    id: 3,
    title: 'Avid Suite',
    image: avidImg,
    description: 'A suite of applications for accounts payable automation',
    link: 'https://www.avidxchange.com/',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#222] text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <Separator className="bg-[#64A19D] h-0.5 w-16 mx-auto mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projectsData.map((project) => (
            <div key={project.id} className="flex flex-col items-center">
              <a href={project.link} className="w-full">
                <Card className="bg-stone-100 text-black overflow-hidden w-full max-w-md cursor-pointer">
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
                    <p className="mt-4 text-sm text-gray-700">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
