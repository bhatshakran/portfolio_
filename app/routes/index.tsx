import React from 'react';
import Container from '~/components/Container';
import { gsap } from 'gsap';

export default function Index() {
  const textRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    /*  if (textRef.current) {
      if (textRef.current?.textContent) {
        textRef.current.innerHTML = textRef.current.textContent.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        );
      }
    } */

    const tl = gsap.timeline({
      defaults: { duration: 2 },
    });
    tl.set('.img-container', { autoAlpha: 1, opacity: 1 });

    tl.from(
      '.block',
      {
        duration: 2,
        y: '110%',
        rotation: 0.001,
        ease: 'Expo.easeInOut',
        stagger: 0.4,
      },
      0.4
    );
  }, []);

  return (
    <main className='home min-h-screen bg-purple  overflow-hidden relative'>
      <Container>
        {/* header here */}
        <div className='header  text-darkPink ml-8 mt-8 flex justify-between'>
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

        <div className='txt-container w-full mx-auto mt-48 overflow-hidden'>
          <div
            ref={textRef}
            className='text-wrapper font-qaligo w-2/3  mx-auto text-5xl leading-loose text-lighPink z-10  text-center  '
          >
            This is my portfolio.
          </div>
        </div>
        <div className='img-container absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-80 overflow-hidden'>
          <div className='block b-1'></div>
          <div className='block b-2'></div>
          <div className='block b-3'></div>
          <div className='block b-4'></div>
          <div className='block b-5'></div>
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
