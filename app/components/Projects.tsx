import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React from 'react';

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    console.clear();
    let headings = document.querySelectorAll('.heading');
    let line = document.querySelector('.project-line');
    // let panelsContainer = document.querySelector('.panels-container');
    // let panels = document.querySelectorAll('.panel');
    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: headings,
        start: 'top 70%',
        // markers: true,
      },
    });

    tl1.from(headings, {
      y: -200,
      opacity: 0,
      stagger: 0.2,
      duration: 0.5,
    });

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: line,
        start: 'top 85%',
      },
    });

    tl2.set('.projthumb', { autoAlpha: 1, opacity: 0 });
    tl2.from(line, {
      width: 0,
      opacity: 0,
      // x: 200,
      duration: 0.5,
      ease: 'power2.inOut',
    });

    /* tl2.from('.proj-a > .projthumb', {
      // scale: 0.5,
      width: 0,
      x: 100,
      duration: 0.5,
    }); */

    /*  const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.proj-a',
        start: 'top 90%',
        markers: true,
      },
    });
    tl.from('.proj-a > .projthumb', {
      scale: 0.5,
      width: 0,
      x: 100,
      duration: 1,
    }); */
  }, []);

  // project hover animation
  const hoverAnimation = (e: React.SyntheticEvent<HTMLDivElement>) => {
    /* const activeEl = (e.target as HTMLDivElement).children[0];
    const tl = gsap.timeline();
    tl.to(activeEl, {
      scale: 1.1,
      filter: 'blur(1px)',
      duration: 0.1,
    }); */
  };
  const leaveAnimation = (e: React.SyntheticEvent<HTMLDivElement>) => {
    /*  const activeEl = (e.target as HTMLDivElement).children[0];
    gsap.to(activeEl, {
      filter: 'blur(0px)',
      scale: 1,
    }); */
  };

  return (
    <div
      id='el'
      className='projects bg-background  leading-loose   font-qaligo text-primary flex flex-col items-end p-4 md:p-16 mt-28  lg:mt-60'
    >
      <div className='proj-section-a flex items-center gap-4 font-qaligo text-4xl text-secondary '>
        <div className='projects-heading flex flex-col items-end gap-y-16'>
          <h2 className='text-4xl md:text-6xl no-color heading'>projects:</h2>
          <h2 className='text-4xl md:text-6xl heading'>
            pr<span className='text-primary'>o</span>jects:
          </h2>
          <h2 className='text-4xl md:text-6xl no-color heading'>projects:</h2>
        </div>
      </div>
      <div className='proj-section project-line w-full h-1 bg-primary mt-16'></div>
      <div
        className='w-full proj-section panels-container mt-40 flex flex-col items-start gap-y-24 md:grid md:grid-cols-2
         text-secondary '
      >
        <div className='panel panel-1 w-full   overflow-hidden md:row-span-4  '>
          <div className='inside-panel mt-6 gap-6  w-full flex flex-col items-center  justify-center  '>
            <div className='title-section flex  w-full h-auto items-start gap-x-3 justify-center '>
              <div className='info font-wavenhaussemibold text-sm opacity-60'>
                (01)
              </div>
              <div className='name text-lg md:text-3xl  text-primary'>
                aesthetic
              </div>
              <div className='type font-wavenhaussemibold text-xs opacity-60'>
                Next.js Application
              </div>
            </div>
            <div
              className='proj-img  proj-a  overflow-hidden w-96 h-auto flex justify-center rounded-3xl'
              onMouseEnter={(e) => hoverAnimation(e)}
              onMouseLeave={(e) => leaveAnimation(e)}
            >
              <img
                src='/assets/a.png'
                alt=''
                className='w-72 h-96 projthumb rounded-3xl'
              />
            </div>
            <div className='bg-secondary flex items-start  text-sm font-wavenhaussemibold opacity-60 cursor-pointer text-white'>
              <a href='/'>view the---project</a>
            </div>
          </div>
        </div>

        <div className='panel panel-2  w-full overflow-hidden  md:row-span-4 md:row-start-4 md:col-start-2'>
          <div className='inside-panel mt-6 gap-6  w-full flex flex-col items-center  justify-center  '>
            <div className='title-section flex  w-full h-auto items-start gap-x-3 justify-center '>
              <div className='info font-wavenhaussemibold text-sm opacity-60'>
                (02)
              </div>
              <div className='name text-lg md:text-3xl  text-primary'>
                runtastic
              </div>
              <div className='type font-wavenhaussemibold text-xs opacity-60'>
                Next.js Application
              </div>
            </div>
            <div
              className='proj-img  proj-b overflow-hidden w-96 h-auto flex justify-center rounded-3xl'
              onMouseOver={(e) => hoverAnimation(e)}
              onMouseLeave={(e) => leaveAnimation(e)}
            >
              <img
                src='/projects/b.jpeg'
                alt=''
                className=' w-72 h-96 projthumb rounded-3xl'
              />
            </div>
            <div className='bg-secondary flex items-start  text-sm font-wavenhaussemibold opacity-60 cursor-pointer text-white'>
              <a href='/'>view the---project</a>
            </div>
          </div>
        </div>

        <div className='panel panel-3  w-full overflow-hidden  md:row-span-4  md:col-start-1  md:row-start-7'>
          <div className='inside-panel mt-6 gap-6 w-full flex flex-col items-center  justify-center  '>
            <div className='title-section flex  w-full h-auto items-start gap-x-3 justify-center '>
              <div className='info font-wavenhaussemibold text-sm opacity-60'>
                (03)
              </div>
              <div className='name text-lg md:text-3xl opacity-90  text-primary'>
                extracts
              </div>
              <div className='type font-wavenhaussemibold text-xs opacity-60'>
                Next.js Application
              </div>
            </div>
            <div
              className='proj-img  proj-c  overflow-hidden w-96 h-auto flex justify-center rounded-3xl'
              onMouseOver={(e) => hoverAnimation(e)}
              onMouseLeave={(e) => leaveAnimation(e)}
            >
              <img
                src='/projects/c.jpeg'
                alt=''
                className=' w-72 h-96 projthumb rounded-3xl'
              />
            </div>
            <div className='bg-secondary flex items-start  text-sm font-wavenhaussemibold opacity-60 cursor-pointer text-white'>
              <a href='/'>view the---project</a>
            </div>
          </div>
        </div>
        <div className='panel panel-4 w-full overflow-hidden md:row-span-4 md:col-start-2'>
          <div className='inside-panel mt-6 gap-6 w-full flex flex-col items-center  justify-center  '>
            <div className='title-section flex  w-full h-auto items-start gap-x-3 justify-center '>
              <div className='info font-wavenhaussemibold text-sm opacity-60'>
                (04)
              </div>
              <div className='name text-lg md:text-3xl text-primary'>
                snowwer
              </div>
              <div className='type font-wavenhaussemibold text-xs opacity-60'>
                Next.js Application
              </div>
            </div>
            <div
              className='proj-img  proj-d  overflow-hidden w-96 h-auto flex justify-center rounded-3xl '
              onMouseOver={(e) => hoverAnimation(e)}
              onMouseLeave={(e) => leaveAnimation(e)}
            >
              <img
                src='/projects/d.jpeg'
                alt=''
                className=' w-82 h-96 projthumb rounded-3xl'
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
