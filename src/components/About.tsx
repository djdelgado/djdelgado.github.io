import { Separator } from '@/components/ui/separator';
import profileImg from '@/assets/profilepic2.png';
import { Avatar } from 'radix-ui';

const skills = [
  'Agentic Programming',
  'MCPs',
  'Prompt Engineering',
  'TypeScript',
  'JavaScript',
  'Angular',
  'React.js',
  'Claude',
  'Cursor',
  'RxJS',
  'NGRX',
  'Node.js',
  'NestJS',
  'REST APIs',
  'BFF',
  'Java',
  'Bash',
  'SQL',
  'Material UI',
  'Tailwind',
  'Sass',
  'Figma',
  'Jest',
  'Playwright',
  'PACTflow',
  'Azure',
  'Azure DevOps',
  'C3.ai',
  'Docker',
  'Terraform',
  'Cloudflare',
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#161616] text-white text-center">
      <div className="container mx-auto px-4">
        <Avatar.Root className="AvatarRoot flex justify-center mb-10 rounded-full overflow-hidden">
          <Avatar.Image
            src={profileImg}
            alt="DD"
            className="AvatarImage shadow-xl"
          />
        </Avatar.Root>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-8">
            I'm a Full-Stack Software Developer in New Orleans, LA, with 8+
            years of experience leading cross-functional teams and delivering
            enterprise-level applications. My edge is integrating agentic AI
            workflows — using LLMs, MCPs, and autonomous tooling to accelerate
            delivery and reduce implementation time without sacrificing quality.
            Outside of work, I geek out over analog photography and running my
            homelab.
          </p>

          <Separator className="bg-[#64A19D] h-0.5 w-16 mx-auto mb-10" />

          <h3 className="text-2xl font-semibold mb-6">Skills</h3>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="text-sm md:text-base">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
