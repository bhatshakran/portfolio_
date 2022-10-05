import React from 'react';
import Container from '~/components/Container';
import { gsap } from 'gsap';

export default function Index() {
  const didAnimate = React.useRef(false);
  const [showMenu, setShowMenu] = React.useState(false);

  React.useEffect(() => {
    if (didAnimate.current) {
      return;
    }
    didAnimate.current = true;
    const tl1 = gsap.timeline({ defaults: {} });
    tl1.set('.text-wrapper', { autoAlpha: 1, opacity: 1 });
    tl1.set('.img-container', { autoAlpha: 1, opacity: 1, scale: 0.7 });
    tl1.set('.header', { autoAlpha: 1, opacity: 1 });
    tl1.set('.lineSvg', { autoAlpha: 1, opacity: 1 });
    tl1.from(
      '.block',
      {
        duration: 0.7,
        y: '110%',
        ease: 'expo.easeInOut',
        stagger: 0.3,
      },
      0.4
    );

    tl1.to('.overlay', {
      duration: 0.6,
      y: '100%',
      ease: 'expo.easeInOut',
      delay: 0,
    });
    tl1.to('.img-container', {
      duration: 0.6,
      scale: 1,
      y: '90%',
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

    // text animatio

    tl1.from('.letter', {
      delay: -0.5,
      y: '-50%',
      opacity: 0,
      ease: 'power2.easeInOut',
      stagger: 0.05,
    });

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
      ],
      {
        scale: 1.1,
        opacity: 0.1,
        delay: -0.5,
        // ease: 'expo.easeIn',
      }
    );
  };

  return (
    <main className='home min-h-screen bg-background  overflow-hidden relative'>
      <Container>
        {/* header here */}
        <div className='header overflow-hidden text-primary ml-8 mt-8 flex justify-between '>
          <div className='details font-wavenhausbold'>
            <div>
              <h4>shaqran</h4>
            </div>
            <div className='ml-10 mt-3 font-wavenhaussemibold'>
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

        <div className='txt-container absolute   mx-auto mt-32  z-10'>
          <div className='text-wrapper font-qaligo w-2/3  mx-auto text-3xl sm:text-5xl leading-loose text-secondary z-10 pt-4 sm:py-8  text-center  flex gap-4 sm:gap-y-16 flex-wrap justify-center overflow-hidden'>
            <div className='flex'>
              <div className='letter'>T</div>
              <div className='letter'>h</div>
              <div className='letter'>i</div>
              <div className='letter'>s</div>
            </div>
            <div className='flex'>
              <div className='letter'>i</div>
              <div className='letter'>s</div>
            </div>
            <div className='flex'>
              <div className='letter'>m</div>
              <div className='letter'>
                y
                <svg
                  viewBox='0 0 354 212'
                  fill='none'
                  className='lineSvg absolute right-0 -top-8 sm:right-0 sm:-top-20 w-28 h-28 sm:w-44 sm:h-52'
                >
                  <path
                    d='M1 21.6773C101.987 25.3459 312.28 54.5847 345.555 142.191C387.149 251.699 135.579 201.476 79 155C37 120.5 4.93456 92.6649 31.3523 49.7422C57.7701 6.81948 167.376 -3.63605 222.46 9.02064'
                    stroke='#E94560'
                    strokeWidth='7'
                  />
                </svg>
              </div>
            </div>
            <div className='flex'>
              <div className='letter'>p</div>
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
        <div className='img-container absolute  top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 overflow-hidden '>
          <div className='block b-1'></div>
          <div className='block b-3'></div>
          <div className='block b-4'></div>
          <div className='block b-5'></div>
          <div className='block b-2'></div>
        </div>
      </Container>
      {showMenu && (
        <div className='fullscreen-menu bg-black h-screen w-screen absolute top-0 left-0 z-20 flex flex-wrap'>
          <div className='left-pane  bg-secondary w-1/2 h-full flex items-center'>
            <ul className='flex flex-col items-center w-full text-3xl gap-y-24 font-qaligo'>
              <li>home</li>
              <li>projects</li>
              <li>about</li>
              <li>blog</li>
            </ul>
          </div>
          <div className='right-pane bg-pink-100 w-1/2 h-full flex items-center'>
            <ul className='flex flex-col items-center w-full text-3xl gap-y-24 font-qaligo'>
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
    </main>
  );
}
// }
// {
//   /*

// flex flex-wrap gap-x-6 justify-center*/
// }
