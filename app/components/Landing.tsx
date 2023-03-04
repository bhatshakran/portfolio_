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
          webkitTextStrokeColor: 'black',
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
            scale: 0.8,
            x: '-100%',
            ease: 'power3.easeInOut',
          },
          { scale: 0.8, opacity: 1, rotateY: 0, x: 0 },
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
          scaleX: isDesktop ? 1 : 2,
          scaleY: isDesktop ? 1 : 1.8,
          y: isDesktop ? '90%' : '100%',
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
        <div className=' txt-container relative  mt-20  sm:mt-40  z-10 '>
          <div className='text-wrapper font-wavenhausbold w-full text-secondary  text-3xl sm:text-5xl md:text-6xl    text-center flex gap-4 sm:gap-y-16 flex-wrap justify-center '>
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
                  className='lineSvg absolute right-0 -top-2 sm:right-0 sm:-top-20  w-12 h-14 sm:w-20 sm:h-52 md:w-24 md:h-56'
                >
                  <path
                    d='M1 21.6773C101.987 25.3459 312.28 54.5847 345.555 142.191C387.149 251.699 135.579 201.476 79 155C37 120.5 4.93456 92.6649 31.3523 49.7422C57.7701 6.81948 167.376 -3.63605 222.46 9.02064'
                    stroke='black'
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
        <div className=' img-container absolute  top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2  w-1/3 h-96 ml-3 sm:ml-none text-primary text-4xl sm:text-7xl font-wavenhausbold flex items-center justify-center  gap-0 '>
          <div className='blocks b-1 text-center'>Hello,</div>
          <div className='blocks b-2 text-center '>
            <p>Welcome.</p>
          </div>
        </div>
        <div className=' main-image w-full h-32 sm:w-80 sm:h-80  absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 '></div>
      </Container>
    </section>
  );
};
