import React from 'react';
import Container from './Container';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';

const Tools = () => {
  gsap.registerPlugin(ScrollTrigger);
  React.useEffect(() => {
    /*   const letters = gsap.utils.toArray('.tool-letter');
    letters.forEach((letter: any) => { */
    gsap.from('.tool-letter', {
      scrollTrigger: {
        trigger: '.toolbelt',
        start: 'top center',
      },
      opacity: 0.3,
      ease: 'power2.easeInOut',
      stagger: 0.2,
    });
    // });
  }, []);
  return (
    <div className='element toolbelt bg-background font-qaligo  pt-12'>
      <Container>
        <div className='text-white flex  items-center justify-start flex-col w-full '>
          <div className='flex items-end gap-16 font-qaligo text-5xl '>
            <h4>(03)</h4>
            <div className=' text-4xl mt-12 section-name flex'>
              <h2 className='tool-letter'>T</h2>
              <h2 className='tool-letter'>o</h2>
              <h2 className='tool-letter'>o</h2>
              <h2 className='tool-letter'>l</h2>
              <h2 className='tool-letter'>b</h2>
              <h2 className='tool-letter'>e</h2>
              <h2 className='tool-letter'>l</h2>
              <h2 className='tool-letter'>t</h2>
            </div>
            <h4>/^</h4>
          </div>

          <div className='tools-container mt-20 flex  w-full justify-center flex-wrap gap-6'>
            <div className='react'>
              <h2>React</h2>
            </div>
            <div className='javascript'>
              <h2>javascript</h2>
            </div>
            <div className='vscode'>
              <h2>vscode</h2>
            </div>
            <div className='tailwind'>
              <h2>tailwind</h2>
            </div>
            <div className='gsap'>
              <h2>gsap</h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tools;
