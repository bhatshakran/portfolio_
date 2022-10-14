import React from 'react';
import Container from '~/components/Container';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Projects from '~/components/Projects';
// import Tools from '~/components/Tools';
import Cursor from '~/components/cursor';
import About from '~/components/About';

export default function Index() {
  gsap.registerPlugin(ScrollTrigger);

  const didAnimate = React.useRef(false);
  const [showMenu, setShowMenu] = React.useState(false);

  // cursor effect
  React.useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const follow = document.querySelector('.cursor-follow');

    function moveCursor(e: MouseEvent) {
      gsap.to(cursor, {
        duration: 0.2,
        x: e.clientX,
        y: e.clientY,
      });

      gsap.to(follow, {
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
      });
    }

    function hoverFunc(e: MouseEvent) {
      gsap.to(cursor, {
        duration: 0.3,
        opacity: 1,
        scale: 0,
      });
      gsap.to(follow, {
        duration: 0.3,
        scale: 3,
      });
    }

    function unhoverFunc(e: MouseEvent) {
      gsap.to(cursor, {
        duration: 0.3,
        opacity: 1,
        scale: 1,
      });
      gsap.to(follow, {
        duration: 0.3,
        scale: 1,
      });
    }

    window.addEventListener('mousemove', moveCursor);

    const link = document.querySelectorAll('a');
    link.forEach((el) => el.addEventListener('mouseover', hoverFunc));
    link.forEach((el) => el.addEventListener('mouseleave', unhoverFunc));

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      link.forEach((el) => el.removeEventListener('mouseenter', hoverFunc));
      link.forEach((el) => el.removeEventListener('mouseleave', unhoverFunc));
    };
  }, []);

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
          webkitTextStrokeColor: 'white',
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
          scaleY: isDesktop ? 1 : 0.6,
          y: isDesktop ? '100%' : '45%',
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

        tl1.from(
          '.scroll',
          {
            autoAlpha: 0,
            opacity: 0,
            ease: 'expo.easeInOut',
            duration: 0.3,
            delay: 1,
          },
          '<='
        );

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

  // menu animation
  React.useEffect(() => {
    const tl = gsap.timeline();
    if (showMenu) {
      tl.set('.fullscreen-menu', { autoAlpha: 1, opacity: 1 });

      tl.from('.left-pane', {
        opacity: 0,
        y: '100%',
        duration: 1,
        ease: 'expo.easeInOut',
      });
      tl.from(
        '.right-pane',
        {
          opacity: 0,
          y: '-100%',
          duration: 1,
          ease: 'expo.easeInOut',
        },
        '<='
      );

      tl.from(
        '.left-pane > ul',
        {
          scale: 0.5,
          duration: 1,
          y: '100%',
          opacity: 0,
          ease: 'expo.easeInOut',
        },
        '+<=0.5'
      );
      tl.from(
        '.right-pane > ul',
        {
          scale: 0.5,
          duration: 1.1,
          y: '-100%',
          ease: 'expo.easeInOut',
        },
        '<=0.3'
      );
    }
  }, [showMenu]);

  const displayMenu = () => {
    setShowMenu(true);
  };

  // close menu animation and logic
  const closeMenu = () => {
    const tl = gsap.timeline();
    tl.to('.left-pane', {
      opacity: 0,
      y: '200%',
      duration: 1,
      ease: 'expo.easeInOut',
    });
    tl.to(
      '.right-pane',
      {
        opacity: 0,
        y: '-200%',
        duration: 1,
        ease: 'expo.easeInOut',
      },
      '<='
    );

    setTimeout(() => {
      setShowMenu(false);
    }, 500);

    tl.from(
      [
        '.home > div > .header',
        '.home > div > .img-container',
        '.home > div > .txt-container',
        '.main-image',
      ],
      {
        scale: 1.1,
        opacity: 0.1,
        webkitFilter: 'blur(' + 10 + 'px)',
        delay: -0.5,
      }
    );
  };

  // scroll animation
  React.useEffect(() => {
    gsap.utils.toArray('.element').forEach((container: any) => {
      if (container.classList.contains('horizontal')) {
        const panelsContainer = container.querySelector('.panels-container');
        const eachPanel = container.querySelector('.panel');

        gsap.to(panelsContainer, {
          x: () => {
            return -(
              panelsContainer.scrollWidth -
              window.innerWidth +
              window.innerWidth * 0.05 +
              (window.innerWidth / 2 - eachPanel.offsetWidth / 2)
            );
          },
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: () => 'left 0',
            end: () => '+=' + panelsContainer.scrollWidth,
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            // snap: 1 / (panelsContainer.length - 1),
          },
        });
      } else {
        ScrollTrigger.create({
          trigger: container,
          start: 'top top',
          pin: true,
          pinSpacing: false,
          snap: 1,
        });
        /* gsap.from(container.children, {
          opacity: 0,
          scrollTrigger: {
            trigger: container,
            start: 'top center',
            end: 'top top',
            toggleActions: 'play none reverse reset',
          },
        }); */
      }
    });

    window.addEventListener('resize', () => {
      window.setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    });
  }, []);

  return (
    // <div className='animation-wrapper flex h-fit  flex-col items-center justify-center'>
    <div className='bg-background overflow-x-hidden cursor-none'>
      <Cursor />
      <div className='element home bg-background  overflow-hidden relative '>
        <Container>
          {/* header here */}
          <div className='header  overflow-hidden text-primary ml-8 mt-8 flex justify-between '>
            <div className='details font-wavenhausbold'>
              <div>
                <h4>shaqran</h4>
              </div>
              <div className='hidden md:flex md:flex-col ml-10 mt-3 font-wavenhaussemibold'>
                <h4>web developer</h4>
                <h4>kashmir, india</h4>
              </div>
            </div>
            <div className='site-menu mr-10 font-wavenhausbold'>
              <button
                onClick={displayMenu}
                className='hover:text-white hover:line-through '
              >
                menu
              </button>
            </div>
          </div>
          {/* image and text here */}
          <div className='overlay bg-background'></div>
          <div className=' txt-container  absolute  left-1/2 top-32 sm:top-16 -translate-x-1/2  sm:mt-32  z-10'>
            <div className='text-wrapper font-qaligo w-full  mx-auto text-xl sm:text-4xl md:text-5xl leading-loose text-secondary   z-10 pt-4 sm:py-8  text-center flex gap-4 sm:gap-y-16 flex-wrap justify-center '>
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
                      stroke='#FE857A'
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
          <div className=' img-container absolute  top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2  w-2/3 h-80 ml-3 sm:ml-none text-white text-4xl sm:text-7xl font-wavenhausbold flex items-center justify-center  gap-0 '>
            <div className='blocks b-1 text-center'>Hello,</div>
            <div className='blocks b-2 text-center '>
              <p>Welcome.</p>
              <svg
                className=' hidden sm:block sm:w-60 sm:h-36'
                id='f56f4e6a-2eb6-442c-8a66-115b7fea9368'
                data-name='Layer 1'
                viewBox='0 0 500.22 297.09'
              >
                <defs>
                  <clipPath id='bdfa34a8-8df5-4bb8-862f-b2cbe909c6e0'>
                    <path
                      d='M142.36,43.13s-25.39-5.28-44.58-2-61,9.43-61,9.43L2.44,54.66S-8.79,63.72,17,75.42c0,0,14.5,6.55,17.31,11.7s12.64,27,66.45,36l-5.3,9.47A119.14,119.14,0,0,0,95.1,150a93.84,93.84,0,0,0,9.24,36.8l-16.57,47S77.54,281,116.5,287h18.79s41.8,6,69.87-41.69l10.52-17.55L221,216.57s8.42,9.13,46,8.07,39.3-6.31,39.3-6.31-2.8,5.61,3.51,7l8.66-4.19S317.31,236.9,328.89,245s6.8,8.45,6.8,8.45-5.1,7.06,2.62,13.72-.74,18.81,35.41,24.78a192.78,192.78,0,0,0,31.92,1.68c15.79-.7,15.22.1,26.47,0,7.91,0,18.82-13.17,18.82-13.17s1.69-10,.63-15.93a23.79,23.79,0,0,0-3.68-9.46L439,240.32l-5-22-6.67-10.88a12.53,12.53,0,0,0,1.41-11.58c-2.46-6.67-9.48-6-9.48-6s2.11-5.27-1.75-8.43l-3.86-3.15a29,29,0,0,0,9.47-14.39c2.46-9.12,10.69-10.84,10.69-20s-8.58-4.95-10-7.41,1.06-8.77,1.06-8.77,2.8-9.83-1.41-13.34c0,0,25.27-8.07,44.57-44.91,0,0,23.16-12.28,28.07-22.46s5.61-25.61,0-26.31-7.72-4.92-23.16-2.81S355,32.71,355,32.71l-9.48-2.46s-21.75-15.79-60-22.46S251.83.42,239.19,1.13,195,7.09,176.38,18A222.06,222.06,0,0,0,142.36,43.13Z'
                      fill='none'
                    />
                  </clipPath>
                </defs>
                <path
                  d='M149.61,280.66s141,18.15,236.08,2.58l-55.92-81.08L200.86,206Z'
                  fill='#aa7557'
                />
                <path
                  d='M245,223.79c1.16-9.7-10.44,19.12-7.48,50.44l1.68,13.93,7.36.34Z'
                  fill='#91644d'
                />
                <path
                  d='M298.37,228.08s-1.76,57.9-2.47,51.5c-.6-5.44-7.7-21.35-7.89-51.5S298.37,228.08,298.37,228.08Z'
                  fill='#91644d'
                />
                <path
                  d='M273.86,228.08c.51,7.06.86,14.13,1.09,21.2.18,5.57.29,11.15.16,16.72-.1,4.21-.13,8.63-1.23,12.72a.56.56,0,0,0,1.08.3c1-3.85,1.12-8,1.24-12,.17-5.73.07-11.47-.11-17.2Q275.75,239,275,228.08c-.05-.71-1.17-.72-1.12,0Z'
                  fill='#91644d'
                />
                <path
                  d='M212.72,251.73c-1.37,4.31-2.53,8.69-3.57,13.09-1.58,6.72-3.3,14-2.63,21,.07.71,1.19.72,1.12,0-.68-7,1.08-14.32,2.69-21.08,1-4.26,2.14-8.51,3.47-12.69.22-.69-.86-1-1.08-.3Z'
                  fill='#91644d'
                />
                <path
                  d='M326.78,288.88a108.2,108.2,0,0,0-1.39-13.55c-1.32-8.32-3.42-16.81-7.66-24.16a.56.56,0,0,0-1,.57c4.2,7.26,6.24,15.67,7.55,23.89a105.09,105.09,0,0,1,1.35,13.25.56.56,0,0,0,1.12,0Z'
                  fill='#91644d'
                />
                <path
                  d='M142.36,43.13s-25.39-5.28-44.58-2-61,9.43-61,9.43L2.44,54.66S-8.79,63.72,17,75.42c0,0,14.5,6.55,17.31,11.7s12.64,27,66.45,36l-5.3,9.47A119.14,119.14,0,0,0,95.1,150a93.84,93.84,0,0,0,9.24,36.8l-16.57,47S77.54,281,116.5,287h18.79s41.8,6,69.87-41.69l10.52-17.55L221,216.57s8.42,9.13,46,8.07,39.3-6.31,39.3-6.31-2.8,5.61,3.51,7l7.52-3.34a32.53,32.53,0,0,0,13.12,21c11.58,8.07,5.33,10.44,5.33,10.44s8.07,10.46,15.79,17.13-10,11.13,26.18,17.1a58.69,58.69,0,0,0,28,6c15.79-.7,32.35,1.87,33.05-9.36s9.39-7.75,9.39-7.75-1.23,0-2.28-6-6-11.93-6-11.93l-6-19,.07-21.32-6.67-10.88a12.53,12.53,0,0,0,1.41-11.58c-2.46-6.67-9.48-6-9.48-6s2.11-5.27-1.75-8.43l-3.86-3.15a29,29,0,0,0,9.47-14.39c2.46-9.12,4.56-9.12,4.56-18.25s-2.45-6.66-3.86-9.12,1.06-8.77,1.06-8.77,2.8-9.83-1.41-13.34c0,0,25.27-8.07,44.57-44.91,0,0,23.16-12.28,28.07-22.46s5.61-25.61,0-26.31-7.72-4.92-23.16-2.81S355,32.71,355,32.71l-9.48-2.46s-8.9-19.17-47.14-25.84-46.54-4-59.18-3.28S195,7.09,176.38,18A222.06,222.06,0,0,0,142.36,43.13Z'
                  fill='#afd0a7'
                />
                <g clip-path='url(#bdfa34a8-8df5-4bb8-862f-b2cbe909c6e0)'>
                  <path
                    d='M6.92,67.15s6.59-2.38,20.85-1.75,23.05,1.23,33.48,1.75,32.74,1.54,34.93,1S104.94,72,118.52,70c14-2.15,32.51,10.3,32.51,10.3s7.3,22.83,6.28,29.1c-1.25,7.7-12.11,21.43-58.2,18.14S-12.83,86.93,6.92,67.15Z'
                    fill='#c68f6a'
                  />
                  <path
                    d='M500.22,35.56s-30.17,5.35-43.89,7.76-23.6,4.27-35.67,9.1S391,55.76,385.54,57.33s-4.39-1.06-12.62,3.54-15.58,4.78-10.69,17.94c3.33,9,1.62,32,1.62,32l-5.37,5.57s28.16,25.42,81.39-.37S500.22,35.56,500.22,35.56Z'
                    fill='#c68f6a'
                  />
                  <path
                    d='M168,112.76a82.32,82.32,0,0,1-4.22-18.11,89,89,0,0,1,3.87-41.49c.24-.68-.84-1-1.08-.3a89.83,89.83,0,0,0-4,41.48,83.31,83.31,0,0,0,4.3,18.71c.25.67,1.34.38,1.08-.29Z'
                    fill='#81af74'
                  />
                  <path
                    d='M363.63,120.76A127.23,127.23,0,0,0,364.91,98c-.33-13.25-2.37-27.37-9.74-38.68-.4-.6-1.37,0-1,.57,7.39,11.33,9.34,25.51,9.61,38.78a126,126,0,0,1-1.26,21.78c-.11.7,1,1,1.08.29Z'
                    fill='#81af74'
                  />
                  <path
                    d='M308.17,136.63a123.76,123.76,0,0,1,25.36-9.54c14.07-3.5,17.86-8.71,17.86-8.71s4.25-9.11,14-10.75,53.71-10.13,57.39,2.49,10.75,21.5,13.09,22.17c0,0-3.35,8.16,0,9.69,0,0,7.72,4.82-17.07,34.3l9.68,18.23,43.87,78.62-24.89,12.65-10,7.87-28.14,3-74.36-9.83-27.37-52.89H219s-22.36,54.31-51.5,59.67-68.67,3-68.67,3-34.16-27.47-23.11-59.29a568.59,568.59,0,0,1,21.72-54L90.8,130.87s4.37-7.14,21.92-12.39a154.9,154.9,0,0,0,21.45-8.36s9.91-8.39,22.62-5.89c13.71,2.7,55.1,27.79,78.88,29.24S308.17,136.63,308.17,136.63Z'
                    fill='#e2a97f'
                  />
                  <path
                    d='M104.34,186.75s13.79-7.94,27.5-11.29,18.68-3.44,21.29-7.73,13.31-4.15,21.14-3.69,8.5,4.86,14.7,5.16,137.09,32.46,145.08,30.09,21.06-18,21.06-18,13.71-5.7,20.89-5.79,14.62-1.8,26.76,1.25c5.8,1.45,8.21.24,22.85,4.54,9.78,2.86,36.07,90.2,31.63,107.25-4.26,16.33-347,0-347,0S28.78,260.31,104.34,186.75Z'
                    fill='#c48d69'
                  />
                  <path
                    d='M135.45,72.59c-8.76,1.68-13.26,11.36-13.94,19.34a54.93,54.93,0,0,0,2,18c.17.69,1.25.4,1.08-.3-2.93-11.57-4.38-29.34,9-35.2a11,11,0,0,1,2.23-.75c.71-.13.41-1.21-.3-1.07Z'
                    fill='#ad7753'
                  />
                  <path
                    d='M362.77,68.05a75,75,0,0,1,9.48,9.55,81,81,0,0,1,15.37,26.33c.23.67,1.31.38,1.07-.3a81.78,81.78,0,0,0-15.1-26.17,75,75,0,0,0-10-10.2c-.55-.45-1.35.34-.79.79Z'
                    fill='#ad7753'
                  />
                  <path
                    d='M381.8,234.24s20.15,17.58,25.58,19.58,9.15,4.72,8.29,7.86-4.57,4.58-7.57,4-23.87-5-27.45-11.86S381.8,234.24,381.8,234.24Z'
                    fill='#aa7557'
                  />
                  <path
                    d='M165.09,199.29s-17.73,5-25.57,22.07-9.44,26,6.7,24.5,33.16-8.57,33.16-8.57Z'
                    fill='#aa7557'
                  />
                  <path
                    d='M409.62,141.35c-4.85,3-9.63,6.13-14.28,9.42a76.61,76.61,0,0,0-8.3,6.5,10,10,0,0,1-3.39,2.57,18.16,18.16,0,0,1-5.72.86c-3.94.12-7.88-.28-11.83-.26-2.32,0-5.39,0-7.27,1.59s-3.35,3.28-5.33,4.73c-2.93,2.14-6,4.12-9.05,6.07q-7.26,4.62-14.72,8.93a.56.56,0,0,0,.57,1q6.15-3.55,12.17-7.33c5.34-3.33,11.43-6.62,15.88-11.15a8.59,8.59,0,0,1,2-1.89c1.52-.78,3.51-.76,5.18-.79,3.93-.08,7.85.33,11.78.26,2.84-.05,6.31-.16,8.67-2,2.52-1.94,4.72-4.31,7.31-6.23,5.44-4,11.13-7.75,16.88-11.3.61-.38.05-1.35-.56-1Z'
                    fill='#c48d69'
                  />
                  <path
                    d='M157.22,126.84c3.45,2.07,6.79,4.34,10.06,6.69,6,4.33,12.11,9,16.84,14.82,2,2.47,4.15,5.5,4.29,8.81,0,.72,1.15.72,1.12,0a14.71,14.71,0,0,0-3.17-7.71,51.35,51.35,0,0,0-7.41-8,137.35,137.35,0,0,0-17.17-13c-1.31-.86-2.64-1.72-4-2.53a.56.56,0,0,0-.57,1Z'
                    fill='#c48d69'
                  />
                  <path
                    d='M190.3,163.64a52.15,52.15,0,0,0-10.81-8c-4.67-2.51-9.42-2.3-14.58-2.2A132,132,0,0,0,145.35,155c-5,.86-9.54,2.16-13.06,5.94-1.74,1.88-3.23,4-5.26,5.59-3.31,2.58-7.45,3.21-11.55,3.28a.56.56,0,0,0,0,1.12c5.44-.09,10.4-1.34,14.24-5.36,3.38-3.54,5.76-6.87,10.72-8.32,6.3-1.86,13.08-2.28,19.61-2.59,4.87-.24,11.07-1.14,15.78.48,5.12,1.77,9.79,5.59,13.68,9.27.53.5,1.32-.29.79-.79Z'
                    fill='#c48d69'
                  />
                  <path
                    d='M385.85,129.43a35.36,35.36,0,0,1-7.76,5.4,40.05,40.05,0,0,1-20.82,4.94c-.72,0-.72,1.08,0,1.12a41.16,41.16,0,0,0,21.1-4.94,36.81,36.81,0,0,0,8.27-5.73c.52-.5-.27-1.29-.79-.79Z'
                    fill='#c48d69'
                  />
                  <path
                    d='M187.67,174.92a289.92,289.92,0,0,0-38.32,8.5c-6.66,2-14.39,4.2-19.82,8.77-2.35,2-3.62,4.83-4.79,7.62A110.51,110.51,0,0,0,120,214.09c-2,7.54-3.74,15.21-5.08,22.91-.12.7,1,1,1.08.3,1.07-6.15,2.39-12.25,3.89-18.3,1.19-4.81,2.5-9.61,4.14-14.29,1.23-3.53,2.54-7.78,5.1-10.62,4.54-5.05,12.87-7.23,19.09-9.16a257.26,257.26,0,0,1,25.08-6.23c4.86-1,9.75-1.93,14.65-2.7.71-.11.41-1.19-.3-1.08Z'
                    fill='#aa7557'
                  />
                  <path
                    d='M335.35,202.72c12.13.09,24.61.85,36.47,3.46,18.82,4.13,31.48,18.32,43.69,32.15,4.28,4.85,8.65,9.67,12.56,14.84,2.42,3.21,5.66,7.23,5.79,11.45,0,.72,1.15.73,1.12,0-.1-3.19-1.89-6.14-3.6-8.73A119.59,119.59,0,0,0,422,244c-7.58-8.76-15-18.08-23.93-25.56-6.14-5.16-13.49-9.81-21.21-12.14-7.9-2.39-16.3-3.26-24.5-3.91-5.65-.45-11.32-.75-17-.8a.56.56,0,0,0,0,1.12Z'
                    fill='#aa7557'
                  />
                  <path
                    d='M310.48,135.56,292.28,146l-2.57,1.47a.56.56,0,0,0,.56,1L308.48,138l2.57-1.46a.56.56,0,0,0-.57-1Z'
                    fill='#c48d69'
                  />
                </g>
                <path
                  d='M189.91,164s10.48-14,24.47-2-8.26,49.42-8.26,49.42-30.91,48.08-54.25,22.43,33.2-43.32,33.2-43.32Z'
                  fill='#7eaa6d'
                />
                <path
                  d='M339.51,212.21l23,8s23.66,15.62,26.78,22.09,3.13,12.28-6.25,12.5-42.94,1-48.3-1.93-9.94-9.67-9.94-9.67-7.26-10.1-8.11-18.59-1.74-37.27,4.5-37.27S329.69,187.44,339.51,212.21Z'
                  fill='#7eaa6d'
                />
                <path
                  d='M207.4,153l-1.28,58.45s10.63,23.32,58.17,22.4,56.9-15.48,56.9-15.48V153Z'
                  fill='#372b29'
                />
                <path
                  d='M207.4,153l-1.28,42.78s10.63,23.32,58.17,22.4,56.9-15.48,56.9-15.48V153Z'
                  fill='#493a38'
                />
                <path
                  d='M190.7,83.38a30.69,30.69,0,0,1,19.42-13.5c13.56-3,15.33-1.32,39.72,21.4,0,0,1.58,3.72-5.2,3.34,0,0-6.66,8.19-24.29,9.18S194.71,93.92,190.7,83.38Z'
                  fill='#c68f6a'
                />
                <path
                  d='M194.13,83.89a27.88,27.88,0,0,1,17.67-12.1c12.34-2.65,14-1.18,36.15,19.19,0,0,1.44,3.33-4.73,3,0,0-6.06,7.34-22.11,8.22S197.78,93.34,194.13,83.89Z'
                  fill='#151b25'
                />
                <path
                  d='M217.59,83.94c-3.18.9-3.18,2.37,0,3.29a24.82,24.82,0,0,0,11.53,0c3.18-.9,3.19-2.38,0-3.29A24.82,24.82,0,0,0,217.59,83.94Z'
                  fill='#fff'
                />
                <path
                  d='M225.85,78.6a2.43,2.43,0,0,0,0,3.29,2.09,2.09,0,0,0,3.09,0,2.43,2.43,0,0,0,0-3.29A2.1,2.1,0,0,0,225.85,78.6Z'
                  fill='#fff'
                />
                <path
                  d='M290.67,85.85s-6.9,3.71-6.56,6.49,6.56,2.16,6.56,2.16,13.79,5.87,23.11,5.57,20.69-5.94,24.83-11.47,3.1-9,3.1-9S328,59.88,313,67.3,290.67,85.85,290.67,85.85Z'
                  fill='#c68f6a'
                />
                <path
                  d='M293.93,85.12S287.71,88.47,288,91s5.91,2,5.91,2,12.45,5.31,20.85,5,18.67-5.36,22.41-10.36,2.8-8.13,2.8-8.13-12.36-17.81-25.94-11.11A54,54,0,0,0,293.93,85.12Z'
                  fill='#151b25'
                />
                <path
                  d='M306.07,81.87c-3.53,1.11-3.54,2.91,0,4a24.83,24.83,0,0,0,12.78,0c3.54-1.1,3.54-2.9,0-4A25,25,0,0,0,306.07,81.87Z'
                  fill='#fff'
                />
                <path
                  d='M316.81,74a3,3,0,0,0,0,4.49,3.6,3.6,0,0,0,4.82,0,3,3,0,0,0,0-4.48A3.59,3.59,0,0,0,316.81,74Z'
                  fill='#fff'
                />
                <path
                  d='M224.08,145.14c-22.24,4.26-22.26,11.24-.05,15.59s58.23,4.42,80.46.15,22.26-11.24.06-15.59S246.31,140.87,224.08,145.14Z'
                  fill='#dbd1dd'
                />
                <path
                  d='M229,146.56c-19.45,3.48-19.47,9.2,0,12.76s50.94,3.63,70.39.14,19.46-9.2,0-12.76S248.43,143.07,229,146.56Z'
                  fill='#151b25'
                />
                <path
                  d='M185.07,159.1s4.41-13.27,10.13-15.12,11.91-2.55,12.19,3.73-.45,10.27-1.57,11.39-7.36.53-7.14,2.94a23.64,23.64,0,0,1,0,4.42l8.71-2.42s8.7,5.1,1.78,16.26c0,0-.89,2.45-8.26,1.56,0,0-2.23,3.57-1.56,6.92,0,0,7.37-2.45,8.93-2.45s6.7,1.11,7.36,4,2.91,8.26-2.67,12.5-13,6.7-17.77,4.69-11.47-11.16-10.13-17c0,0-7.81-10.94-5.13-18.75A112.42,112.42,0,0,1,185.07,159.1Z'
                  fill='#afd0a7'
                />
                <path
                  d='M344,251.27c-11.9-1.83-14.06-31.24-15.85-32.81s-8,7.59-15.85,3.8l-.8-.42c-6.73-3.75-3.16-8.62-1.85-11.41s14.93-9.82,14.93-9.82,6.25-1.56-3.37-10.27,0-14.88,0-14.88a36.68,36.68,0,0,1,9.89,4.91c4.06,3.12,5.75,12.87,5.9,15.78s11.26,12.57,11.26,12.57,5.38,4.3,16.05,11.31c12.3,8.07,25,22.31,25,22.31s3.73,6.2,0,10.79S353.21,252.7,344,251.27Z'
                  fill='#afd0a7'
                />
                <path
                  d='M189.6,74.73c2.92-7.53,10-14,18-15.29s17,1.78,24.14,5.14a53.79,53.79,0,0,1,15.34,11c2.41,2.44,4.47,4.75,5.56,8.1A27.11,27.11,0,0,1,254,91.5c0,.76,1.33.58,1.32-.12-.08-5.79-1.84-11.1-5.86-15.28a57.84,57.84,0,0,0-14.68-11.4c-7.34-3.87-16.73-7.2-25.14-6.59a23.6,23.6,0,0,0-15.52,7.64,28.32,28.32,0,0,0-5.74,8.82c-.29.74,1,.8,1.27.16Z'
                  fill='#81af74'
                />
                <path
                  d='M345.5,70.53c-4.64-7.72-13.1-14.44-22.24-15.27-7.68-.71-15.71,2.78-22.1,6.76a51.86,51.86,0,0,0-13.6,11.88c-1.29,1.67-2.21,3.6-3.34,5.38-2,3.16-4.34,6.55-4.8,10.36-.08.67,1.14,1.16,1.23.36.43-3.59,2.69-6.87,4.58-9.84.94-1.48,1.74-3.06,2.7-4.52,2.65-4,6.78-7.46,10.62-10.26C304.71,60.9,312.3,57,320,56.43c6.63-.49,12.81,2.36,17.7,6.67a34.34,34.34,0,0,1,6.84,8c.41.68,1.39.2.95-.54Z'
                  fill='#81af74'
                />
                <path
                  d='M261,109.27s-2.73-2.15.55-6.41c0,0,1.59-3.93,5.14-4.48s7.09.13,9.28,3.12a12.3,12.3,0,0,1,2.07,6.88c-2.32,1.85-2.68-.48-3.16-1s-1.47.46-1.47.46c-1.05,2.15-4.33,2-4.33,2s-3.34.14-4.13-1.48a1.44,1.44,0,0,0-2.26-.54,1.37,1.37,0,0,1-1.69,1.43'
                  fill='#e2a97f'
                />
                <path
                  d='M262.7,100.25a15,15,0,0,0-1.61,2,8.44,8.44,0,0,0-1.64,4.31,3.89,3.89,0,0,0,.79,2.48.58.58,0,0,0,.76.2.56.56,0,0,0,.2-.77c-1.13-1.47-.5-3.33.32-4.79a13.26,13.26,0,0,1,2-2.67c.5-.52-.29-1.31-.79-.79Z'
                  fill='#c68f6a'
                />
                <path
                  d='M274.58,101a12.72,12.72,0,0,1,2,2.67c.83,1.46,1.46,3.32.32,4.79a.57.57,0,0,0,.2.77.59.59,0,0,0,.77-.2c2-2.57-.14-6-1.85-8.12-.2-.24-.4-.48-.62-.71-.5-.51-1.29.28-.79.8Z'
                  fill='#c68f6a'
                />
                <path
                  d='M207.88,109.37c-7-2-14.68-5.67-19.31-11.49h0c-.44-.56.34-1.36.79-.79,6.41,8,11.22,9,19.65,11.41C209,108.5,209.23,109.75,207.88,109.37Z'
                  fill='#81af74'
                />
                <path
                  d='M268.46,51.39v22a.56.56,0,0,0,1.12,0v-22a.56.56,0,0,0-1.12,0Z'
                  fill='#81af74'
                />
                <path
                  d='M283.56,52.32l-7.1,19.39-1,2.79c-.24.68.84,1,1.08.3l7.11-19.39,1-2.79c.25-.68-.83-1-1.08-.3Z'
                  fill='#81af74'
                />
                <path
                  d='M249.52,51.67l9,20.35,1.29,2.91c.29.66,1.25.09,1-.56l-9-20.36-1.29-2.91c-.29-.65-1.25-.09-1,.57Z'
                  fill='#81af74'
                />
                <path
                  d='M260.12,104.07l-3.5,6.13-.49.86a.56.56,0,0,0,1,.56l3.51-6.13.49-.86a.56.56,0,0,0-1-.56Z'
                  fill='#c68f6a'
                />
                <path
                  d='M277.55,105.57l3.51,6.13.49.86a.56.56,0,0,0,1-.56L279,105.87l-.49-.86a.56.56,0,0,0-1,.56Z'
                  fill='#c68f6a'
                />
                <path
                  d='M265.75,109.83a7.53,7.53,0,0,0,7.2-.56.59.59,0,0,0,.2-.77.58.58,0,0,0-.77-.2,6,6,0,0,1-4.16,1,7.74,7.74,0,0,1-1.43-.3l-.42-.14-.13,0,.08,0a.59.59,0,0,0-.77.2.58.58,0,0,0,.2.77Z'
                  fill='#c68f6a'
                />
                <path
                  d='M196.68,148.5s4-7.07,11.49-5.3l3.53,2.51s-3.53,1-3.53,2.79.44,4.86-1.77,4.86S194,157.78,196.68,148.5Z'
                  fill='#f9d1b7'
                />
                <path
                  d='M210.38,191.52s3.49-4.3,5.9-4.47,1.42-.33,2.91,0a1.67,1.67,0,0,0-1.66,2.14c.33,2.16-3.63,5.63-3.63,5.63S207.36,194.53,210.38,191.52Z'
                  fill='#f9d1b7'
                />
                <path
                  d='M204,171.51s6.62-5.45,9.1-5.45a5.31,5.31,0,0,1,3.64,1.15s2.48,2,0,2.65-3.15,4.79-3.15,4.79-2.64,2.65-4.79,2S201.32,176.64,204,171.51Z'
                  fill='#f9d1b7'
                />
                <path
                  d='M328.74,176.39s-4.29-3.84-7-4.29a12.16,12.16,0,0,0-4.51,0s3.83,3.84,4.06,5.41.68,4.28,3.61,4.06A4,4,0,0,0,328.74,176.39Z'
                  fill='#f9d1b7'
                />
                <path
                  d='M315.87,208.72s-9.46,4.51-9.92,7.22-1.35,5.63,1.58,5.4c0,0,2.93-3.38,5.19-4.5a26.9,26.9,0,0,1,5.63-1.8S318.8,209.85,315.87,208.72Z'
                  fill='#f9d1b7'
                />
                <path
                  d='M168.67,257.74c-5.28,1-10.61,1.8-15.94,2.48-8.91,1.13-18.11,2.15-27.09,1.32-3-.27-7.86-.66-9.67-3.54-.39-.61-1.35-.05-1,.56,1.45,2.29,4.41,3.11,6.92,3.6a59,59,0,0,0,12.67.71,216.74,216.74,0,0,0,28-2.95c2.14-.34,4.29-.7,6.42-1.1.71-.14.41-1.22-.3-1.08Z'
                  fill='#aa7557'
                />
                <path
                  d='M430.67,276.17c-.48,2.55-2.53,4.85-4.6,6.26-7.08,4.85-17.22,3-24.89,1C391,280.7,381.34,276.18,372,271.28c-.64-.33-1.2.63-.57,1,8.71,4.58,17.7,8.8,27.15,11.61,5.63,1.67,11.58,2.93,17.48,2.64,5.49-.27,11.37-2.15,14.39-7.08a9.13,9.13,0,0,0,1.26-3c.13-.7-.95-1-1.08-.29Z'
                  fill='#aa7557'
                />
                <path
                  d='M217.54,39.5a71.26,71.26,0,0,1,13-3.32,30.29,30.29,0,0,1,11.11-.11c3.22.73,5.83,2.06,9.23,1.93s6.71-1.08,10-1.71a38.31,38.31,0,0,1,14.67-.12c5.06,1,10.74,2.82,14.77,6a.46.46,0,0,0,.54.07c3.17-1.89,6.88-4.4,10.62-4.68a35.47,35.47,0,0,1,16.63,3.09c.52.24,1-.53.45-.77a37.44,37.44,0,0,0-11.64-3c-3-.34-6-.57-8.86.58a45.05,45.05,0,0,0-4.42,2.15c-.86.46-2.21,1.63-3.19,1.79.7-.11.19-.15-.46-.59A29.23,29.23,0,0,0,286.77,39a40.89,40.89,0,0,0-26.08-3.53c-4.4.84-8.91,2.29-13.42,1.44-1.85-.35-3.52-1.23-5.36-1.65a22.62,22.62,0,0,0-5.25-.48,60.41,60.41,0,0,0-19.36,3.91c-.54.19-.31,1.06.24.86Z'
                  fill='#81af74'
                />
                <path
                  d='M221,27.75c6.52-1.32,13.55-2.32,20.19-1.55,4.75.55,9.34,2,14,1,7.72-1.65,15.85-3.63,23.55-1a51.08,51.08,0,0,1,5.69,2.33,29.83,29.83,0,0,0,3.38,1.72,7.65,7.65,0,0,0,3.22-.11c6.82-.76,14.23-2,21.08-1.16.57.08.56-.82,0-.89-6.33-.81-13.15.31-19.46,1a30.58,30.58,0,0,1-4.32.45A21.26,21.26,0,0,1,285.42,28c-1.65-.8-3.32-1.54-5-2.17-7.5-2.81-14.7-1.59-22.36-.09a44.47,44.47,0,0,1-5.54,1.14c-3.09.07-6.45-.85-9.48-1.29-7.36-1.08-15-.15-22.29,1.32-.56.11-.32,1,.24.86Z'
                  fill='#81af74'
                />
                <path
                  d='M252.61,118.86c-.58,1.51-1.2,3-1.84,4.49-.53,1.2-1.07,2.4-1.66,3.58a14.8,14.8,0,0,1-1.49,2.57c-.53.67.41,1.63.95.95a22.31,22.31,0,0,0,2.61-4.74c.8-1.76,1.55-3.54,2.27-5.34.15-.38.31-.77.45-1.15.32-.81-1-1.16-1.29-.36Z'
                  fill='#81af74'
                />
                <path
                  d='M283.52,118.85a80.77,80.77,0,0,0,4.81,8.75,14.29,14.29,0,0,0,1.78,2.32c.62.61,1.57-.34.95-.95a21.08,21.08,0,0,1-3.11-4.59c-.95-1.68-1.85-3.38-2.72-5.1-.19-.37-.37-.74-.55-1.11-.38-.78-1.54-.1-1.16.68Z'
                  fill='#81af74'
                />
                <path
                  d='M251.75,125.18c4.79-.42,9.6-.72,14.41-1,3.87-.18,7.76-.31,11.64-.28a42.89,42.89,0,0,1,9,.67c.84.19,1.2-1.1.35-1.29a43.27,43.27,0,0,0-8.95-.72c-3.88,0-7.75.08-11.62.26-4.94.23-9.88.54-14.81,1-.85.07-.86,1.42,0,1.34Z'
                  fill='#81af74'
                />
                <path
                  d='M329.72,104.56c6.57-3.11,13.5-8.09,17.07-14.61h0c.35-.62-.56-1.27-.91-.64-4.94,9-9.53,10.73-17.42,14.59C328.46,103.9,328.46,105.16,329.72,104.56Z'
                  fill='#81af74'
                />
              </svg>
            </div>
          </div>
          <div className=' main-image w-80 h-80 absolute  top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 '></div>
          <div className='scroll  text-3xl absolute bottom-20 sm:bottom-0 left-1/2 -translate-x-1/2 font-wavenhaussemibold  '>
            {' '}
            ↓scroll
          </div>
        </Container>

        {showMenu && (
          <div className='fullscreen-menu bg-black h-screen w-screen absolute top-0 left-0 z-20 flex flex-wrap '>
            <div className='left-pane  bg-secondary w-full md:w-1/2 h-1/2 md:h-full flex items-center'>
              <ul className='flex flex-col items-center w-full text-lg md:text-3xl gap-y-4 md:gap-y-24 font-qaligo'>
                <li>home</li>
                <li>projects</li>
                <li>about</li>
                <li>blog</li>
              </ul>
            </div>
            <div className='right-pane bg-pink-100 w-full md:w-1/2 h-1/2 md:h-full flex items-center'>
              <ul className='flex flex-col items-center w-full text-lg md:text-3xl gap-y-4 md:gap-y-24 font-qaligo'>
                <li>github</li>
                <li>twitter</li>
                <li>instagram</li>
              </ul>
            </div>

            <div
              className='close absolute top-4 right-8 z-30 text-3xl cursor-pointer'
              onClick={closeMenu}
            >
              x
            </div>
          </div>
        )}
      </div>

      <Projects />
      {/* <Tools /> */}
      <About />
    </div>
    // </div>
  );
}
// }
// {
//   /*

// flex flex-wrap gap-x-6 justify-center*/
// }
