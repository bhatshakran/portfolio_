import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React from 'react';

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    const projImgs = gsap.utils.toArray('.proj-img');
    gsap.set('.horizontal', { autoAlpha: 1, opacity: 0 });
    projImgs.forEach((img: any) => {
      gsap.from(img, {
        scrollTrigger: {
          trigger: '#el',
          start: 'top bottom',
          scrub: 2,
        },
        opacity: 0.7,
        scale: 0.7,
        ease: 'expo.easeInOut',
      });
    });
  }, []);

  return (
    <div
      id='el'
      className='element bg-background  horizontal  leading-loose   font-qaligo text-white flex items-center justify-center flex-col pt-32'
    >
      <div className='flex items-end gap-16 font-qaligo text-5xl '>
        <h4>(02)</h4>
        <h2 className=' text-4xl'>Projects</h2>
        <h4>/^</h4>
      </div>
      <div
        className='w-full panels-container h-full flex 
       justify-start items-center flex-shrink-0'
      >
        <div className='panel panel-1 '>
          <div className='inside-panel w-full flex items-center justify-center relative'>
            <div className='proj-img proj-a  relative '>
              <div className='absolute  -left-32 top-0 flex flex-col  h-full justify-around z-10'>
                <div className='info font-wavenhaussemibold text-sm opacity-60'>
                  Fullstack webapp lorem
                </div>
                <div className='name text-3xl opacity-90'>Frukast</div>
                <div className='type font-wavenhaussemibold text-sm opacity-60'>
                  Next.js Application
                </div>
              </div>
            </div>
            <div className='absolute right-16 bottom-16 text-sm font-wavenhaussemibold opacity-60 cursor-pointer'>
              view the---project
            </div>
          </div>
        </div>
        <div className='panel panel-2 '>
          <div className='inside-panel w-full flex items-center justify-center relative'>
            <div className='proj-img proj-b  relative'>
              <div className='absolute  -left-32 top-0 flex flex-col  h-full justify-around z-10'>
                <div className='info font-wavenhaussemibold text-sm opacity-60'>
                  Running and health application
                </div>
                <div className='name text-3xl opacity-90'>Fitastic</div>
                <div className='type font-wavenhaussemibold text-sm opacity-60'>
                  Remix.run Application
                </div>
              </div>
            </div>
            <div className='absolute right-16 bottom-16 text-sm font-wavenhaussemibold opacity-60 cursor-pointer'>
              view the---project
            </div>
          </div>
        </div>
        <div className='panel panel-3 '>
          <div className='inside-panel w-full flex items-center justify-center relative'>
            <div className='proj-img proj-c  relative'>
              <div className='absolute  -left-32 top-0 flex flex-col  h-full justify-around z-10'>
                <div className='info font-wavenhaussemibold text-sm opacity-60'>
                  Fruits information application
                </div>
                <div className='name text-3xl opacity-90'>Extracts</div>
                <div className='type font-wavenhaussemibold text-sm opacity-60'>
                  Gatsby.js application
                </div>
              </div>
            </div>
            <div className='absolute right-16 bottom-16 text-sm font-wavenhaussemibold opacity-60 cursor-pointer'>
              view the---project
            </div>
          </div>
        </div>
        <div className='panel panel-4'>
          <div className='inside-panel w-full flex items-center justify-center relative'>
            <div className='proj-img proj-d  relative'>
              <div className='absolute  -left-32 top-0 flex flex-col  h-full justify-around z-10'>
                <div className='info font-wavenhaussemibold text-sm opacity-60'>
                  Mood improvement app
                </div>
                <div className='name text-3xl opacity-90'>Mood-e</div>
                <div className='type font-wavenhaussemibold text-sm opacity-60'>
                  Next.js Application
                </div>
              </div>
            </div>
            <div className='absolute right-16 bottom-16 text-sm font-wavenhaussemibold opacity-60 cursor-pointer'>
              view the---project
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
