import React from 'react';
import Container from './Container';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';

const Tools = () => {
  gsap.registerPlugin(ScrollTrigger);
  React.useEffect(() => {
    const tl = gsap.timeline({
      defaults: { repeat: -1, repeatDelay: 1, duration: 1 },
    });
    tl.set('.redball', { x: -250, autoAlpha: 1 });
    /*  tl.from('.tool-letter', {
      scrollTrigger: {
        trigger: '.toolbelt',
        start: 'top center',
      },
      z: '-50%',
      opacity: 0.3,
      //   ease: 'power2.easeInOut',
      stagger: 0.2,
    }) */ tl.to('.redball', {
      y: 300,
    });
    // tl.to('.redball', { x: 5 }, '<=');
    tl.to('.redball', {
      y: '-10%',
    });

    /*  gsap.registerPlugin(MotionPathPlugin);

    // setup
    gsap.set(".boop", {drawSVG:"0% 1.5%", autoAlpha: 1, immediateRender: true})
    gsap.set(".boop2", {drawSVG:"98.2% 100%", autoAlpha: 1, immediateRender: true})
    gsap.set(".stroke", {drawSVG:"0%"})
    
    gsap.set(".ball", {
      xPercent: -50,
      yPercent: -50,
      transformOrigin: "50%, 50%"
    })
    
    function restart() {
       timeline.play(0);
    }
    
    const startBall = 0.023;
    const endBall = 0.978;
    
    var timeline = gsap.timeline()
    timeline.to(".boop", {
      duration: 0.5,
      ease: Power4.easeOut,
      drawSVG:"0% 0.2%"
    })
    .to(".boop", {
      duration: 0.3,
      ease: Back.easeOut.config(8),
      drawSVG:"0% 1.5%"
    },"+=0.1")
    .to(".ball", {
      duration: 10,
      ease: "power1.inOut",
      immediateRender: true,
      ease: Elastic.easeOut.config(1,1.2),
      motionPath:{
        path: ".loop",
        align: ".loop",
        start: startBall,
        end: endBall,
      }
    }, 0.65)
    .to(".boop2", {
      duration: 0.5,
      ease: Power4.easeOut,
      drawSVG:"99.5% 100%"
    }, 4.4)
    .to(".boop2", {
      duration: 0.3,
      ease: Back.easeOut.config(8),
      drawSVG:"98.2% 100%",
      delay: 0.1,
    }, 4.9)
    .to(".ball", {
      duration: 10,
      ease: Elastic.easeOut.config(1,1.2),
      motionPath:{
        path: ".loop",
        align: ".loop",
        start: endBall,
        end: startBall
      },
    }, 5.1)
    .add(restart, 8.2) */
  }, []);
  return (
    <div className='element  toolbelt bg-background font-qaligo  '>
      <Container>
        <div className='text-white flex  items-center justify-start flex-col w-full '>
          <div className='flex items-end gap-16 font-qaligo text-5xl '>
            {/* <h4>(03)</h4> */}
            <div className=' text-6xl mt-12 section-name flex'></div>
            {/* <h4>/^</h4>} */}
          </div>
          {/* <div className='redball w-12 h-12  absolute'></div> */}
          {
            <div className='tools-container text-3xl  w-full flex flex-wrap justify-center gap-3  '>
              <div className='react  h-60 w-1/3 flex items-center justify-center shadow-md cursor-pointer'>
                <h2 className='tool-item reacttext flex items-center tracking-widest'>
                  React
                </h2>
              </div>
              <div className='javascript  h-60 w-1/3 flex items-center justify-center  cursor-pointer'>
                <h2 className='tool-item jstext flex items-center '>
                  javascript
                </h2>
              </div>
              <div className='threejs  h-60 w-1/3 flex items-center justify-center  cursor-pointer'>
                <h2 className='tool-item threetext flex items-center '>
                  threejs
                </h2>
              </div>
              <div className='tailwind  h-60 w-1/3 flex items-center justify-center  cursor-pointer'>
                <h2 className='tool-item tailwindtext flex items-center '>
                  tailwind
                </h2>
              </div>
              <div className='gsap  h-60 w-1/3 flex items-center justify-center  cursor-pointer'>
                <h2 className='tool-item gsaptext flex items-center '>gsap</h2>
              </div>
            </div>
          }
        </div>
      </Container>
    </div>
  );
};

export default Tools;
