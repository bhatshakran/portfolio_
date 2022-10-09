import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React from 'react';

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    /*  let sections = gsap.utils.toArray('.panel');
    console.log(sections);

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.panels-container',
        pin: true,
        scrub: true,
        // snap: 1 / (sections.length - 1),
        // end: '+=3500',
        // invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    }); */
  }, []);

  return (
    <div className='element  horizontal  leading-loose  text-6xl font-qaligo text-black '>
      <div
        className='w-full panels-container h-full flex 
       justify-start items-center flex-shrink-0'
      >
        <div className='panel panel-1 bg-blue-300'>Panel 1 </div>
        <div className='panel panel-2 bg-pink-300'>Panel 2</div>
        <div className='panel panel-3 bg-orange-300'>Panel 3</div>
        <div className='panel panel-4 bg-gray-400'>Panel 4</div>
      </div>
    </div>
  );
};

export default Projects;
