import { Link } from '@remix-run/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React from 'react';

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    // console.clear();
    let headings = document.querySelectorAll('.heading');
    let line = document.querySelector('.project-line');
    let panelImg = document.querySelectorAll('.projthumb');
    // let panelsContainer = document.querySelector('.panels-container');
    let titleSection = document.querySelectorAll('.title-section');
    let tl1 = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        trigger: '.projects',
        start: 'top bottom',
      },
    });
    tl1.from(headings, {
      y: -200,
      opacity: 0,
      stagger: 0.2,
      duration: 0.5,
      ease: 'power2',
    });

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: line,
        start: 'top bottom',
      },
    });

    tl2.from(line, {
      width: 0,
      opacity: 0,
      duration: 1,
      ease: 'power2.easeIn',
    });

    titleSection.forEach((section: any) => {
      let tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
        },
      });

      tl4.from(section, {
        y: 100,
        opacity: 0,
        duration: 0.5,
      });
    });

    panelImg.forEach((img: any) => {
      let tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: img,
          start: 'top bottom',
        },
      });

      // tl3.from()

      tl3.from(img, {
        clipPath: 'inset(100% 0% 0% 0%)',
        duration: 1,
      });
    });
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
    <section
      id='el'
      // data-scroll-section
      className='projects bg-background  leading-loose   font-qaligo text-primary flex flex-col items-end p-4 md:p-16 mt-28  lg:mt-60'
    >
      <div className='proj-section-a flex items-center gap-4 font-qaligo text-4xl text-secondary '>
        <div className=' projects-heading flex flex-col items-end gap-y-16'>
          <h2 className='text-4xl md:text-6xl no-color heading'>projects:</h2>
          <h2 className='text-4xl md:text-6xl heading'>
            pr<span className='text-primary'>o</span>jects:
          </h2>
          <h2 className='text-4xl md:text-6xl no-color heading'>projects:</h2>
        </div>
      </div>
      <div className=' project-line w-full h-1 bg-primary mt-16'></div>
      <div
        className='w-full proj-section panels-container mt-40 flex flex-col items-start gap-y-24 md:grid md:grid-cols-2
         text-secondary '
      >
        <div className='panel panel-1 w-full   overflow-hidden md:row-span-3  '>
          <div className='inside-panel mt-6 gap-6  w-full flex flex-col items-center    '>
            <div className='title-section  flex  w-full  items-start gap-x-3 justify-center '>
              <div className='info font-wavenhaussemibold text-sm opacity-60'>
                (01)
              </div>
              <div className='name text-lg md:text-3xl  text-primary'>
                Ottelo
              </div>
              <div className='type font-wavenhaussemibold text-xs opacity-60'>
                hotel booking website
              </div>
            </div>
            <div
              className='proj-img  proj-a  overflow-hidden w-96  flex justify-center rounded-3xl h-52'
              onMouseEnter={(e) => hoverAnimation(e)}
              onMouseLeave={(e) => leaveAnimation(e)}
            >
              <img
                /* data-scroll */
                src='/projects/a/a.png'
                alt=''
                className='w-auto object-contain h-full projthumb rounded-3xl'
              />
            </div>
            <div className='bg-secondary flex items-start  text-sm font-wavenhaussemibold opacity-60 cursor-pointer text-white'>
              <Link to='/projects/a'>view the---project</Link>
            </div>
          </div>
        </div>

        <div className='panel panel-2  w-full overflow-hidden  md:row-span-3 md:row-start-3 md:col-start-2'>
          <div className='inside-panel mt-6 gap-6  w-full flex flex-col items-center  justify-center  '>
            <div className='title-section flex  w-full h-auto items-start gap-x-3 justify-center '>
              <div className='info font-wavenhaussemibold text-sm opacity-60'>
                (02)
              </div>
              <div className='name text-lg md:text-3xl  text-primary'>
                Chatter
              </div>
              <div className='type font-wavenhaussemibold text-xs opacity-60'>
                chat application
              </div>
            </div>
            <div
              className='proj-img  proj-b overflow-hidden w-96 h-52 flex justify-center rounded-3xl'
              onMouseOver={(e) => hoverAnimation(e)}
              onMouseLeave={(e) => leaveAnimation(e)}
            >
              <img
                /* data-scroll */
                src='/projects/b/b.png'
                alt=''
                className=' w-auto h-full object-contain projthumb rounded-3xl'
              />
            </div>
            <div className='bg-secondary flex items-start  text-sm font-wavenhaussemibold opacity-60 cursor-pointer text-white'>
              <Link to='/projects/b'>view the---project</Link>
            </div>
          </div>
        </div>

        <div className='panel panel-3  w-full overflow-hidden  md:row-span-3  md:col-start-1  md:row-start-5'>
          <div className='inside-panel mt-6 gap-6 w-full flex flex-col items-center  justify-center  '>
            <div className='title-section flex  w-full h-auto items-start gap-x-3 justify-center '>
              <div className='info font-wavenhaussemibold text-sm opacity-60'>
                (03)
              </div>
              <div className='name text-lg md:text-3xl opacity-90  text-primary'>
                JD
              </div>
              <div className='type font-wavenhaussemibold text-xs opacity-60'>
                design agency site
              </div>
            </div>
            <div
              className='proj-img  proj-c  overflow-hidden w-96 h-52 flex justify-center rounded-3xl'
              onMouseOver={(e) => hoverAnimation(e)}
              onMouseLeave={(e) => leaveAnimation(e)}
            >
              <img
                /* data-scroll */
                src='/projects/c/c.png'
                alt=''
                className=' w-auto object-contain h-full projthumb rounded-3xl'
              />
            </div>
            <div className='bg-secondary flex items-start  text-sm font-wavenhaussemibold opacity-60 cursor-pointer text-white'>
              <Link to='/projects/c'>view the---project</Link>
            </div>
          </div>
        </div>
        <div className='panel panel-4 w-full overflow-hidden md:row-span-3 md:col-start-2'>
          <div className='inside-panel mt-6 gap-6 w-full flex flex-col items-center  justify-center  '>
            <div className='title-section flex  w-full h-auto items-start gap-x-3 justify-center '>
              <div className='info font-wavenhaussemibold text-sm opacity-60'>
                (04)
              </div>
              <div className='name text-lg md:text-3xl text-primary leading-loose'>
                Ski Store
              </div>
              <div className='type font-wavenhaussemibold text-xs opacity-60'>
                ecommerce app
              </div>
            </div>
            <div
              className='proj-img  proj-d  overflow-hidden w-96 h-52 flex justify-center rounded-3xl '
              onMouseOver={(e) => hoverAnimation(e)}
              onMouseLeave={(e) => leaveAnimation(e)}
            >
              <img
                /* data-scroll */
                src='/projects/d/d.png'
                alt=''
                className=' w-auto object-contain h-full projthumb rounded-3xl'
              />
            </div>
            <div className='bg-secondary flex items-start  text-sm font-wavenhaussemibold opacity-60 cursor-pointer text-white'>
              <Link to='/projects/d'>view the---project</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
