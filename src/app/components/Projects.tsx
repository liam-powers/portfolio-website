import TypeWords from './TypeWords';
import Image from 'next/image';

const projects = [
  {
    name: "Talkbass Classifieds Reloaded",
    description: "Upgrading TalkBass.com's online bass gear listings via modern UI design and advanced filter functionality. \
    Built with React, Puppeteer, and Firebase. Direct links provided to sales! Currently in development.",
    image: "/talkbass.png",
    repo: "https://github.com/liam-powers/Talkbass-Classifieds-Reloaded",
  },

  {
    name: "Pumping Iron Made Easy",
    description: "Automates common weightlifting calculations i.e. one-rep max estimates, BMI, \
    and calorie counting to encourage spending time in the gym, not crunching numbers. \
    Links provided to strong science-based hypertrophy resources. Built with Python and Tkinter. Web version in development.",
    image: "/gym.jpeg",
    repo: "https://github.com/liam-powers/Pumping-Iron-Made-Easy",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-[3rem]">
      {projects.map((project) => (
        <div key={project.name}>
          <div className="flex flex-row gap-20 min-w-full">

            <div className="flex flex-col gap-4 w-10/12 h-auto bg-mocha/[.85] rounded-2xl p-4 md:p-8 min-w-[300px] md:min-w-0">
              <div className="text-4xl font-bold text-center">
                {project.name}
              </div>
              <div className="text-2xl text-center">{project.description}</div>
            </div>

            <div className="flex flex-col">
              <Image src={project.image} alt="Project image" className="w-80 h-auto rounded-full pb-2" /> 
              
              <div className="flex items-center justify-center space-x-2">
                <Image src="/github.png" alt="Github icon" className="w-10 h-auto"/>
                <a href={project.repo} target="_blank" className="text-center text-black underline underline-offset-auto whitespace-nowrap">
                  <TypeWords input = {"View on Github"} />
                </a>
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
