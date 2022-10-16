import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React from 'react';

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    /*  const projImgs = gsap.utils.toArray('.proj-img');
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
    }); */
  }, []);

  // project hover animation
  const hoverAnimation = (e: React.SyntheticEvent<HTMLDivElement>) => {
    const activeEl = (e.target as HTMLDivElement).children[0];
    const tl = gsap.timeline();
    tl.to(activeEl, {
      scale: 1.1,
      filter: 'blur(1px)',
      duration: 0.1,
    });
  };
  const leaveAnimation = (e: React.SyntheticEvent<HTMLDivElement>) => {
    const activeEl = (e.target as HTMLDivElement).children[0];
    gsap.to(activeEl, {
      filter: 'blur(0px)',
      scale: 1,
    });
  };

  return (
    <div
      id='el'
      className=' bg-background  leading-loose   font-qaligo text-primary flex flex-col items-end p-4 md:p-16 mt-28  lg:mt-60'
    >
      <div className='flex items-center gap-4 font-qaligo text-4xl text-secondary '>
        <div className='flex flex-col items-end gap-y-16'>
          <h2 className='text-4xl md:text-6xl no-color'>projects</h2>
          <h2 className='text-4xl md:text-6xl'>
            pr<span className='text-primary'>o</span>jects
          </h2>
          <h2 className='text-4xl md:text-6xl no-color'>projects</h2>
        </div>
      </div>
      <div
        className='w-full panels-container mt-40 flex flex-col items-start gap-y-24 md:grid md:grid-cols-2
         text-secondary'
      >
        <div className='panel panel-1 w-full   overflow-hidden md:row-span-4  '>
          <div className='inside-panel mt-6 gap-6  w-full flex flex-col items-center  justify-center  '>
            <div className=' flex  w-full h-auto items-start gap-x-3 justify-center '>
              <div className='info font-wavenhaussemibold text-sm opacity-60'>
                (01)
              </div>
              <div className='name text-lg md:text-3xl opacity-90'>Frukast</div>
              <div className='type font-wavenhaussemibold text-xs opacity-60'>
                Next.js Application
              </div>
            </div>
            <div
              className='proj-img  proj-a  overflow-hidden w-96 h-auto flex justify-center '
              onMouseEnter={(e) => hoverAnimation(e)}
              onMouseLeave={(e) => leaveAnimation(e)}
            >
              <img
                src='/projects/a.jpg'
                alt=''
                className='w-72 h-96 projthumb'
              />
            </div>
            <div className='bg-secondary flex items-start  text-sm font-wavenhaussemibold opacity-60 cursor-pointer text-white'>
              <a href='/'>view the---project</a>
            </div>
          </div>
        </div>

        <div className='panel panel-2  w-full overflow-hidden  md:row-span-4 md:row-start-4 md:col-start-2'>
          <div className='inside-panel mt-6 gap-6  w-full flex flex-col items-center  justify-center  '>
            <div className=' flex  w-full h-auto items-start gap-x-3 justify-center '>
              <div className='info font-wavenhaussemibold text-sm opacity-60'>
                (02)
              </div>
              <div className='name text-lg md:text-3xl opacity-90'>Frukast</div>
              <div className='type font-wavenhaussemibold text-xs opacity-60'>
                Next.js Application
              </div>
            </div>
            <div
              className='proj-img  proj-b overflow-hidden w-96 h-auto flex justify-center'
              onMouseOver={(e) => hoverAnimation(e)}
              onMouseLeave={(e) => leaveAnimation(e)}
            >
              <img
                src='/projects/b.jpg'
                alt=''
                className=' w-72 h-96 projthumb'
              />
            </div>
            <div className='bg-secondary flex items-start  text-sm font-wavenhaussemibold opacity-60 cursor-pointer text-white'>
              <a href='/'>view the---project</a>
            </div>
          </div>
        </div>

        <div className='panel panel-3  w-full overflow-hidden  md:row-span-4  md:col-start-1  md:row-start-7'>
          <div className='nside-panel mt-6 gap-6 w-full flex flex-col items-center  justify-center  '>
            <div className=' flex  w-full h-auto items-start gap-x-3 justify-center '>
              <div className='info font-wavenhaussemibold text-sm opacity-60'>
                (03)
              </div>
              <div className='name text-lg md:text-3xl opacity-90'>Frukast</div>
              <div className='type font-wavenhaussemibold text-xs opacity-60'>
                Next.js Application
              </div>
            </div>
            <div
              className='proj-img  proj-c  overflow-hidden w-96 h-auto flex justify-center'
              onMouseOver={(e) => hoverAnimation(e)}
              onMouseLeave={(e) => leaveAnimation(e)}
            >
              <img
                src='/projects/c.jpeg'
                alt=''
                className=' w-72 h-96 projthumb'
              />
            </div>
            <div className='bg-secondary flex items-start  text-sm font-wavenhaussemibold opacity-60 cursor-pointer text-white'>
              <a href='/'>view the---project</a>
            </div>
          </div>
        </div>
        <div className='panel panel-4 w-full overflow-hidden md:row-span-4 md:col-start-2'>
          <div className='nside-panel mt-6 gap-6 w-full flex flex-col items-center  justify-center  '>
            <div className=' flex  w-full h-auto items-start gap-x-3 justify-center '>
              <div className='info font-wavenhaussemibold text-sm opacity-60'>
                (04)
              </div>
              <div className='name text-lg md:text-3xl opacity-90'>Frukast</div>
              <div className='type font-wavenhaussemibold text-xs opacity-60'>
                Next.js Application
              </div>
            </div>
            <div
              className='proj-img  proj-d  overflow-hidden w-96 h-auto flex justify-center '
              onMouseOver={(e) => hoverAnimation(e)}
              onMouseLeave={(e) => leaveAnimation(e)}
            >
              <img
                src='/projects/d.jpg'
                alt=''
                className=' w-82 h-96 projthumb'
              />
            </div>
            <div className='bg-secondary flex items-start  text-sm font-wavenhaussemibold opacity-60 cursor-pointer text-white'>
              <a href='/'>view the---project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
