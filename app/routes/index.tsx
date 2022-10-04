import React from 'react';
import Container from '~/components/Container';
import { gsap } from 'gsap';

export default function Index() {
  const didAnimate = React.useRef(false);

  React.useEffect(() => {
    if (didAnimate.current) {
      return;
    }
    didAnimate.current = true;
    const tl1 = gsap.timeline({ defaults: {} });
    tl1.set('.text-wrapper', { autoAlpha: 1, opacity: 1 });
    tl1.set('.img-container', { autoAlpha: 1, opacity: 1, scale: 0.8 });
    tl1.set('.header', {
      autoAlpha: 1,
      opacity: 1,
    });
    tl1.from(
      '.block',
      {
        duration: 1,
        y: '110%',
        ease: 'expo.easeInOut',
        stagger: 0.3,
      },
      0.4
    );

    tl1.to('.overlay', {
      duration: 0.7,
      y: '100%',
      ease: 'expo.easeInOut',
      delay: 0,
    });
    tl1.to('.img-container', {
      duration: 0.7,
      scale: 1.1,
      y: '90%',
      ease: 'expo.easeInOut',
      delay: -0.7,
    });
    tl1.from('.letter', {
      delay: -0.5,
      y: '-20%',
      opacity: 0,
      ease: 'elastic.easeInOut',
      stagger: 0.04,
    });

    // header

    tl1.from(
      '.header > div',
      {
        y: '-100',
        opacity: 0,
        ease: 'power2.easeInOut',
        stagger: 0.2,
      },
      '<='
    );
  }, []);

  return (
    <main className='home min-h-screen bg-purple  overflow-hidden relative'>
      <Container>
        {/* header here */}
        <div className='header overflow-hidden text-darkPink ml-8 mt-8 flex justify-between '>
          <div className='details font-wavenhausbold'>
            <div>
              <h4>shaqran</h4>
            </div>
            <div className='ml-10 mt-3 font-wavenhaussemibold'>
              <h4>web developer</h4>
              <h4>kashmir, india</h4>
            </div>
          </div>
          <div className='site-menu mr-10 font-wavenhausbold'>menu</div>
        </div>

        {/* image and text here */}
        <div className='overlay'></div>

        <div className='txt-container absolute   mx-auto mt-32 overflow-hidden z-10'>
          <div className='text-wrapper font-qaligo w-2/3  mx-auto text-5xl leading-loose text-lighPink z-10  text-center  flex gap-4 flex-wrap justify-center'>
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
              <div className='letter'>y</div>
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
        <div className='img-container absolute  top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-80 overflow-hidden '>
          <div className='block b-1'></div>
          <div className='block b-3'></div>
          <div className='block b-2'></div>
          {/*  <div className='block b-4'></div>
          <div className='block b-5'></div> */}
        </div>
      </Container>
    </main>
  );
}
// }
// {
//   /* <svg
//                 width='170'
//                 height='212'
//                 viewBox='0 0 354 212'
//                 fill='none'
//                 className=' absolute right-0 -top-16'
//               >
//                 <path
//                   d='M1 21.6773C101.987 25.3459 312.28 54.5847 345.555 142.191C387.149 251.699 135.579 201.476 79 155C37 120.5 4.93456 92.6649 31.3523 49.7422C57.7701 6.81948 167.376 -3.63605 222.46 9.02064'
//                   stroke='#FFCACA'
//                   strokeWidth='7'
//                 />
//               </svg>

// flex flex-wrap gap-x-6 justify-center*/
// }
