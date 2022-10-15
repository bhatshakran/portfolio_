import React from 'react';
import Container from './Container';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';

const About = () => {
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
    <div className='  toolbelt bg-background font-qaligo mt-40 mb-20 '>
      <Container>
        <div className='text-white flex  items-center justify-start flex-col w-full gap-10 '>
          <div className='flex items-end gap-16 font-qaligo text-4xl '>
            <h4>(03)</h4>
            <div className=' text-3xl mt-12 section-name flex'>
              About & Experience
            </div>
            <h4>/^</h4>
          </div>
          <div className='details flex flex-col gap-12 mt-20'>
            <div className='about-container text-xl font-wavenhaussemibold  w-full   '>
              <p>
                Hi, I am Shaqran Bhat from Kashmir, India. I am a fullstack
                developer but frontend is my primary concern. My tech stack used
                to be MERNG (MongoDB, Express, React, Nodejs, GraphQL) but with
                the advent of fullstack frameworks like Nextjs and Remix , I
                have switched over to these awesome frameworks because of the
                ease and efficiency they offer. My goal is to help people/brands
                develop clean, efficient and mobile first UI's. Also I love
                animations and WebGL because of the flavour they bring to the
                web, its super cool! I use GSAP for animations and Threejs for
                WebGl.
              </p>
            </div>
            <div className='experience w-full mt-28'>
              <h1 className='text-2xl'>Past experience:</h1>
              <div className='past-container flex gap-x-8'>
                <div className='homejam w-1/2  mt-12 '>
                  <h2 className='text-2xl font-wavenhausbold text-red-300'>
                    Homejam
                  </h2>
                  <div className='mt-8'>
                    <h4 className='text-xl font-wavenhaussemibold '>
                      About the company:
                    </h4>
                    <p className='text-xl font-wavenhaussemibold opacity-70'>
                      They are a platform that allow people to enjoy music
                      concerts from their mobile phones without actually going
                      to the concert in person.You could also have a virtual
                      meeting with the celebrities and talk with them.
                    </p>
                    <h4 className=' mt-6 text-xl font-wavenhaussemibold '>
                      What i worked on:
                    </h4>
                    <p className='text-xl font-wavenhaussemibold opacity-70'>
                      I worked on the team responsible for developing the
                      frontend side of the platform. We used Nextjs, Strapi(CMS)
                      and Postgres to build the application.{' '}
                    </p>
                    <h4 className='text-xl font-wavenhaussemibold mt-6'>
                      Duration:
                    </h4>
                    <p className='text-xl font-wavenhaussemibold opacity-70'>
                      3 months.
                    </p>
                  </div>
                </div>
                <div className='zivaka w-1/2  mt-12'>
                  <h2 className='text-2xl font-wavenhausbold text-red-300'>
                    Zivaka
                  </h2>
                  <div className='mt-8'>
                    <h4 className='text-xl font-wavenhaussemibold '>
                      About the company:
                    </h4>
                    <p className='text-xl font-wavenhaussemibold opacity-70'>
                      Zivaka LLP is an IT Delivery and Consultancy startup. They
                      offer solutions all the way from Concept to Product
                      Release.
                    </p>
                    <h4 className=' mt-6 text-xl font-wavenhaussemibold '>
                      What i worked on:
                    </h4>
                    <p className='text-xl font-wavenhaussemibold opacity-70'>
                      I worked solo to build a website for a construction
                      company. I used plain HTML, CSS and vanilla js to develop
                      the whole site.
                    </p>
                    <h4 className='text-xl font-wavenhaussemibold mt-6'>
                      Duration:
                    </h4>
                    <p className='text-xl font-wavenhaussemibold opacity-70'>
                      1.5 months.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
