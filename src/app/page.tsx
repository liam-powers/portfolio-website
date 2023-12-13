import NavLinks from './components/NavLinks';
import Projects from './components/Projects';
import LangsAndTechs from './components/LangsAndTechs';
import TypeWords from './components/TypeWords';
import ContactMe from './components/ContactMe';
import Image from 'next/image';

const bodyText = "I'm a full-time student at Northwestern University majoring in Computer Science and Jazz Studies, \
with a minor in Data Science. I created this site with Next.js, a React framework, \
to showcase some of my projects and interests.";

export default function Home() {
  return (
    <div className='text-black text-2xl snap-y snap-mandatory h-full max-h-screen overflow-y-scroll'>
      <link rel="icon" href="/favicon.ico" />
      <div className='first section snap-always snap-start pb-20'>
        <NavLinks />
        <div className='px-150 text-white text-3xl font-bold text-center pt-10'>
          <div className='bg-mocha/[.85] p-4 rounded-2xl whitespace-nowrap'>
            <TypeWords input={'> Hello! I\'m Liam Powers.'} />
          </div>
        </div>
        <div className="py-10 flex justify-center">
          <Image src="/me.jpg" alt="A picture of me!" className="w-80 h-auto" />
        </div>
        <div className="mx-auto max-w-screen-xl rounded-2xl text-center text-white">
          <div className="bg-mocha/[.85] p-4 rounded-2xl">
            {bodyText}
          </div>
        </div>
      </div>

      <div id="skills" className='second section snap-always snap-start text-white py-[2rem]'>
        <div className="flex justify-center">
          <LangsAndTechs />
        </div>
      </div>

      <div id="projects" className="third section snap-always snap-start text-white pt-10 px-80 ">
        <div className="pb-10 flex justify-center">
          <div className='bg-mocha/[.85] p-4 rounded-2xl text-center font-bold text-4xl'>
            Projects
          </div>
        </div>
        <div>
          <Projects />
        </div>
      </div>

      <div id="contact" className="fourth section snap-always snap-start text-white pt-40 px-80">
        <div className=''>
          <ContactMe />
        </div>
      </div>

      <div className='footer pt-20 pb-10 flex justify-center text-base'>
        <div>
          Website created by Liam Powers via React & Next.js © 2023
        </div>
      </div>
    </div>
  )
}
