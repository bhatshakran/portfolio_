import React from 'react';
import Container from './Container';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    const header = document.querySelector('.about-section-header');
    const experCntr = document.querySelector('.experience');
    // const headings = document.querySelector('.heading');
    const aboutCntr = document.querySelector('.about-container');
    const about = document.querySelectorAll('.about-reveal');
    const exper = document.querySelectorAll('.exper-reveal');
    const aboutMe = document.querySelector('.about-me');
    let aboutLine = document.querySelector('.about-line');
    let experLine = document.querySelector('.exper-line');

    const aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: header,
        start: 'top 80%',
      },
    });
    /* aboutTl.from(headings, {
      y: -200,
      opacity: 0,
      stagger: 0.2,
      duration: 0.5,
      ease: 'power2',
    }); */

    aboutTl.from(about, {
      y: -200,
      opacity: 0,
      stagger: 0.2,
      duration: 0.5,
      ease: 'power2',
    });

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: aboutLine,
        start: 'top bottom',
      },
    });

    tl2.from(aboutLine, {
      width: 0,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.easeIn',
    });
    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: experLine,
        start: 'top bottom',
      },
    });

    tl3.from(experLine, {
      width: 0,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.easeIn',
    });

    const aboutMeTl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutCntr,
        start: 'top 70%',
      },
    });

    aboutMeTl.from(aboutMe, {
      y: '-150%',
      opacity: 0,
      duration: 0.8,
    });
    const experTl = gsap.timeline({
      scrollTrigger: {
        trigger: experCntr,
        start: 'top 70%',
      },
    });

    experTl.from(exper, {
      y: -200,
      opacity: 0,
      stagger: 0.2,
      duration: 0.5,
      ease: 'power2',
    });

    const pastTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.past-container',
        start: 'top 70%',
      },
    });

    pastTl.from('.past-container', {
      opacity: 0.1,
      duration: 1,
      clipPath: 'inset(100% 0% 0% 0%)',
      ease: 'expo.easeInOut',
    });
  }, []);

  return (
    <div className='about  font-qaligo mt-28 mb-20 relative p-4 md:px-16'>
      <Container>
        <div className=' flex    flex-col w-full gap-10 relative '>
          <div className='back-items absolute top-0 left-0   w-full h-full flex items-center justify-center'>
            <div></div>

            <div className='absolute -top-12 right-0'></div>
          </div>
          <div className='flex flex-col items-center  font-wavenhausbold text-4xl  about-section-header gap-y-4'>
            <div className=' text-4xl md:text-6xl   about-section-name w-full no-color px-2 '>
              <span className='headings about-reveal'>about:</span>
            </div>
            <div className=' text-4xl md:text-6xl   about-section-name w-full text-secondary px-2 '>
              <span className='headings about-reveal'>
                ab<span className=' text-primary'>o</span>ut:
              </span>
            </div>
            <div className=' text-4xl md:text-6xl   about-section-name w-full no-color px-2 '>
              <span className='headings about-reveal'>about:</span>
            </div>
          </div>
          <div className=' about-line w-full h-1 bg-primary '></div>

          <div className='details flex flex-wrap gap-12 mt-20 z-10 text-secondary'>
            <div className='about-container text-xl font-helvetica font-light  w-full  md:w-2/3 overflow-hidden   '>
              <p className='about-me text-sm sm:text-lg inline-block opacity-50'>
                Hi, I am Shaqran Bhat from India. I am a fullstack developer but
                frontend is my primary concern. My tech stack used to be MERNG
                (MongoDB, Express, React, Nodejs, GraphQL) but with the advent
                of fullstack frameworks like Nextjs and Remix , I have switched
                over to these awesome frameworks because of the ease and
                efficiency they offer. My goal is to help people/brands develop
                clean, efficient and mobile first UI's. Also I love animations
                and WebGL because of the flavour they bring to the web! I use
                GSAP & locomotive scroll for animations.
              </p>
            </div>
            <div className='experience w-full mt-28'>
              <div className=' flex flex-col gap-0  items-end font-wavenhausbold gap-y-4'>
                <h1 className='text-4xl   experience-section-name   md:text-6xl no-color  '>
                  <span className='exper-reveal'>experience:</span>
                </h1>
                <h1 className='text-4xl   experience-section-name  md:text-6xl     '>
                  <span className='exper-reveal'>
                    e<span className=' text-primary'>x</span>perience:
                  </span>
                </h1>
                <h1 className='text-4xl    experience-section-name  md:text-6xl no-color  '>
                  <span className='exper-reveal'>experience:</span>
                </h1>
                <div className=' exper-line w-full h-1 bg-primary mt-8 sm:mt-16'></div>
              </div>

              <div className='past-container flex flex-col  md:grid md:grid-cols-2 md:grid-rows-2 gap-y-24 mt-32 md:mt-60'>
                <div className='homejam w-full col-span-1 col-start-1 col-end-1 row-start-1     '>
                  <h2 className='text-2xl font-wavenhausbold text-primary'>
                    Homejam
                  </h2>
                  <div className='mt-8'>
                    <h4 className='text-xl font-wavenhaussemibold '>
                      About the company :
                    </h4>
                    <p className='text-sm sm:text-xl font-helvetica font-light opacity-50 mt-4'>
                      They are a platform that allow people to enjoy music
                      concerts from their mobile phones without actually going
                      to the concert in person.You could also have a virtual
                      meeting with the celebrities and talk with them.
                    </p>
                    <h4 className=' mt-6 text-xl font-wavenhaussemibold '>
                      What i worked on :
                    </h4>
                    <p className='text-sm sm:text-xl font-helvetica font-light opacity-50 mt-4'>
                      I worked on the team responsible for developing the
                      frontend side of the platform. We used Nextjs, Strapi(CMS)
                      and Postgres to build the application.{' '}
                    </p>
                    <h4 className='text-xl font-wavenhaussemibold mt-6'>
                      Duration :
                    </h4>
                    <p className='text-sm sm:text-xl font-wavenhaussemibold opacity-50'>
                      3 months.
                    </p>
                  </div>
                </div>
                <div className='zivaka col-span-1 col-start-2 col-end-2 row-start-2 w-full flex flex-col items-end'>
                  <h2 className='text-2xl font-wavenhausbold text-primary'>
                    Zivaka
                  </h2>
                  <div className='mt-8 flex flex-col items-end text-right'>
                    <h4 className='text-xl font-wavenhaussemibold '>
                      About the company :
                    </h4>
                    <p className='text-sm sm:text-xl font-helvetica font-light opacity-50 mt-4'>
                      Zivaka LLP is an IT Delivery and Consultancy startup. They
                      offer solutions all the way from Concept to Product
                      Release.
                    </p>
                    <h4 className=' mt-6 text-xl font-wavenhaussemibold '>
                      What i worked on :
                    </h4>
                    <p className='text-sm sm:text-xl font-helvetica font-light opacity-50 mt-4'>
                      I worked solo to build a website for a construction
                      company. I used plain HTML, CSS and vanilla js to develop
                      the whole site.
                    </p>
                    <h4 className='text-xl font-wavenhaussemibold mt-6'>
                      Duration :
                    </h4>
                    <p className='text-sm sm:text-xl font-wavenhaussemibold opacity-50'>
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
