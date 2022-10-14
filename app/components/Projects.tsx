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

  // project hover animation
  const hoverAnimation = (e: React.SyntheticEvent<HTMLDivElement>) => {
    // const activeEl = e.currentTarget;
    /*  gsap.to(activeEl, {
      // filter: 'drop-shadow(8px 8px 10px gray)',
      scale: 0.95,
      opacity: 0.8,
    }) */
  };
  const leaveAnimation = (e: React.SyntheticEvent<HTMLDivElement>) => {
    /*  const activeEl = e.currentTarget;
    gsap.to(activeEl, {
      // filter: 'drop-shadow(0 0 0 black)',
      scale: 1,
      opacity: 1,
    }); */
  };

  return (
    <div
      id='el'
      className='element bg-background  horizontal  leading-loose   font-qaligo text-white flex items-center justify-center flex-col pt-16'
    >
      <div className='flex items-end gap-16 font-qaligo text-4xl '>
        <h4>(02)</h4>
        <h2 className=' text-3xl'>projects</h2>
        <h4>/^</h4>
      </div>
      <div
        className='w-full panels-container mt-8 h-full flex 
       justify-start items-center flex-shrink-0'
      >
        <div className='panel panel-1 '>
          <div className='inside-panel  w-full flex  justify-center  '>
            <div className=' flex flex-col ml-20  gap-40 h-full items-start justify-evenly '>
              <div className='info font-wavenhaussemibold text-sm opacity-60'>
                Fullstack webapp lorem
              </div>
              <div className='name text-3xl opacity-90'>Frukast</div>
              <div className='type font-wavenhaussemibold text-sm opacity-60'>
                Next.js Application
              </div>
            </div>
            <div
              className='proj-img proj-a  relative '
              onMouseOver={(e) => hoverAnimation(e)}
              onMouseLeave={(e) => leaveAnimation(e)}
            ></div>
            <div className='flex items-center flex-shrink-0 text-sm font-wavenhaussemibold opacity-60  mr-10'>
              <a href='/'>view the---project</a>
            </div>
          </div>
        </div>
        <div className='panel panel-2 '>
          <div className='inside-panel  w-full flex  justify-center  '>
            <div className=' flex flex-col ml-20  gap-40 h-full items-start justify-evenly '>
              <div className='info font-wavenhaussemibold text-sm opacity-60'>
                Fullstack webapp lorem
              </div>
              <div className='name text-3xl opacity-90'>Frukast</div>
              <div className='type font-wavenhaussemibold text-sm opacity-60'>
                Next.js Application
              </div>
            </div>
            <div
              className='proj-img proj-b  relative '
              onMouseOver={(e) => hoverAnimation(e)}
              onMouseLeave={(e) => leaveAnimation(e)}
            ></div>
            <div className='flex items-center flex-shrink-0 text-sm font-wavenhaussemibold opacity-60 cursor-pointer mr-10'>
              view the---project
            </div>
          </div>
        </div>
        <div className='panel panel-3 '>
          <div className='inside-panel  w-full flex  justify-center  '>
            <div className=' flex flex-col ml-20  gap-40 h-full items-start justify-evenly '>
              <div className='info font-wavenhaussemibold text-sm opacity-60'>
                Fullstack webapp lorem
              </div>
              <div className='name text-3xl opacity-90'>Frukast</div>
              <div className='type font-wavenhaussemibold text-sm opacity-60'>
                Next.js Application
              </div>
            </div>
            <div
              className='proj-img proj-c  relative '
              onMouseOver={(e) => hoverAnimation(e)}
              onMouseLeave={(e) => leaveAnimation(e)}
            ></div>
            <div className='flex items-center flex-shrink-0 text-sm font-wavenhaussemibold opacity-60 cursor-pointer mr-10'>
              view the---project
            </div>
          </div>
        </div>
        <div className='panel panel-4'>
          <div className='inside-panel  w-full flex  justify-center  '>
            <div className=' flex flex-col ml-20  gap-40 h-full items-start justify-evenly '>
              <div className='info font-wavenhaussemibold text-sm opacity-60'>
                Fullstack webapp lorem
              </div>
              <div className='name text-3xl opacity-90'>Frukast</div>
              <div className='type font-wavenhaussemibold text-sm opacity-60'>
                Next.js Application
              </div>
            </div>
            <div
              className='proj-img proj-d  relative '
              onMouseOver={(e) => hoverAnimation(e)}
              onMouseLeave={(e) => leaveAnimation(e)}
            ></div>
            <div className='flex items-center flex-shrink-0 text-sm font-wavenhaussemibold opacity-60 cursor-pointer mr-10'>
              view the---project
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
