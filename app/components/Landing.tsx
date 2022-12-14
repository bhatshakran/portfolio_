import React from 'react';
import Container from './Container';
import Header from './Header';
import gsap from 'gsap';

export const Landing = () => {
  const didAnimate = React.useRef(false);

  // landing animation
  React.useEffect(() => {
    if (didAnimate.current) {
      return;
    }
    didAnimate.current = true;

    let mm = gsap.matchMedia(),
      breakPoint = 450;
    mm.add(
      {
        isDesktop: `(min-width: ${breakPoint}px) and (prefers-reduced-motion: no-preference)`,
        isMobile: `(max-width: ${
          breakPoint - 1
        }px) and (prefers-reduced-motion: no-preference)`,
      },
      (context) => {
        let { isDesktop, isMobile } = context.conditions,
          tl1 = gsap.timeline({
            defaults: { duration: 1, ease: 'elastic.easeIn' },
          });

        tl1.set('.b-2', { opacity: 0 });
        tl1.set('.text-wrapper', { autoAlpha: 1, opacity: 1 });
        tl1.set('.img-container', { autoAlpha: 1, opacity: 1, scale: 0.7 });
        tl1.set('.header', { autoAlpha: 1, opacity: 1 });
        tl1.set('.lineSvg', { autoAlpha: 1, opacity: 1 });
        tl1.set('.b-1', {
          color: 'transparent',
          webkitTextStrokeWidth: '1px',
          webkitTextStrokeColor: '#A74036',
        });

        tl1.fromTo(
          '.b-1',
          {
            opacity: 0,
            x: 30,
          },
          {
            y: 0,
            x: isDesktop ? 10 : -20,
            opacity: 1,
          }
        );
        tl1.fromTo(
          '.b-2',
          { x: isDesktop ? -80 : -50, opacity: 0 },
          { x: isDesktop ? 30 : -10, opacity: 1, ease: 'power2.easeInOut' },
          '<='
        );

        tl1.to('.b-1', {
          delay: 0.5,
          x: '300%',
          duration: 1,
          opacity: 0,
          ease: 'expo.easeInOut',
        });
        tl1.to(
          '.b-2',
          {
            x: '100%',
            duration: 0.7,
            opacity: 0,
            ease: 'expo.easeInOut',
          },
          '<='
        );
        tl1.fromTo(
          '.main-image',
          {
            autoAlpha: 1,
            opacity: 0,
            rotateY: 90,
            scale: 0.6,
            x: '-100%',
            ease: 'power3.easeInOut',
          },
          { scale: 0.6, opacity: 1, rotateY: 0, x: 0 },
          '<='
        );

        tl1.to('.overlay', {
          duration: 0.6,
          y: '100%',
          ease: 'expo.easeInOut',
          delay: 0,
        });
        tl1.to('.main-image', {
          duration: 0.6,
          scaleX: isDesktop ? 1.4 : 0.6,
          scaleY: isDesktop ? 1 : 1,
          y: isDesktop ? '100%' : '100%',
          ease: 'elastic.easeIn',
          delay: -0.6,
        });

        // header

        tl1.from(
          '.header > div',
          {
            duration: 0.8,
            y: '-100',
            opacity: 0,
            ease: 'power3',
            stagger: 0.3,
          },
          '<='
        );

        // text animation

        tl1.from('.letter', {
          delay: -0.5,
          y: '-50%',
          opacity: 0,
          ease: 'power2.easeInOut',
          stagger: 0.05,
        });

        /* tl1.from(
          '.scroll',
          {
            autoAlpha: 0,
            opacity: 0,
            ease: 'expo.easeInOut',
            duration: 1.5,
            delay: 1,
            yoyo: true,
            repeat: -1,
          },
          '<='
        ); */

        return () => {};
      }
    );

    // svg custom animation

    if (document) {
      const path = document.querySelector('path');
      const pathLength = path?.getTotalLength();
      if (path) {
        path.style.strokeDasharray = pathLength + ' ' + pathLength;
        path.style.strokeDashoffset = `${pathLength}`;
        let remVal = Number(pathLength);
        window.setTimeout(() => {
          window.setInterval(() => {
            if (remVal > 0) {
              path.style.strokeDashoffset = `${remVal}`;
              remVal -= 15;
            }
          }, 10);
        }, 4000);
      }
    }
  }, []);

  return (
    <section
      id='home'
      className='element home bg-background  overflow-hidden relative '
    >
      <Container>
        {/* header here */}
        <Header />
        {/* image and text here */}
        <div className='overlay bg-background'></div>
        <div className=' txt-container  absolute  left-1/2 top-32 sm:top-16 -translate-x-1/2  sm:mt-32  z-10'>
          <div className='text-wrapper font-qaligo w-full text-secondary  mx-auto text-xl sm:text-4xl md:text-5xl leading-loose  pt-4 sm:py-8  text-center flex gap-4 sm:gap-y-16 flex-wrap justify-center '>
            <div className='flex '>
              <div className='letter'>T</div>
              <div className='letter'>h</div>
              <div className='letter'>i</div>
              <div className='letter'>s</div>
            </div>
            <div className='flex '>
              <div className='letter'>i</div>
              <div className='letter'>s</div>
            </div>
            <div className='flex '>
              <div className='letter'>m</div>
              <div className='letter'>
                y
                <svg
                  viewBox='0 0 354 212'
                  fill='none'
                  className='lineSvg absolute right-0 -top-8 sm:right-0 sm:-top-16 md:-top-20 w-20 h-24 sm:w-32 sm:h-44 md:w-44 md:h-52'
                >
                  <path
                    d='M1 21.6773C101.987 25.3459 312.28 54.5847 345.555 142.191C387.149 251.699 135.579 201.476 79 155C37 120.5 4.93456 92.6649 31.3523 49.7422C57.7701 6.81948 167.376 -3.63605 222.46 9.02064'
                    stroke='#A74036'
                    strokeWidth='7'
                  />
                </svg>
              </div>
            </div>
            <div className='flex '>
              <div className='letter'> p</div>
              <div className='letter'>o</div>
              <div className='letter'>r</div>
              <div className='letter'>t</div>
              <div className='letter'>f</div>
              <div className='letter'>o</div>
              <div className='letter'>l</div>
              <div className='letter'>i</div>
              <div className='letter'>o.</div>
            </div>
          </div>
        </div>
        <div className=' img-container absolute  top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2  w-2/3 h-80 ml-3 sm:ml-none text-primary text-4xl sm:text-7xl font-wavenhausbold flex items-center justify-center  gap-0 '>
          <div className='blocks b-1 text-center'>Hello,</div>
          <div className='blocks b-2 text-center '>
            <p>Welcome.</p>
          </div>
        </div>
        <div className=' main-image w-full h-40 sm:w-80 sm:h-80 absolute  top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
          {/* <div className='scroll-cntr w-full h-full relative'>
            <div className='scroll  p-4   text-md absolute  bottom-5 left-1/2 -translate-x-1/2 font-wavenhaussemibold  tracking-widest'>
              ???scroll
            </div>
          </div> */}
        </div>
      </Container>
    </section>
  );
};
