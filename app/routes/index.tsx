import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Projects from '~/components/Projects';
import Message from '~/components/Message';
import About from '~/components/About';
import { Landing } from '~/components/Landing';

export default function Index() {
  gsap.registerPlugin(ScrollTrigger);
  // const containerRef = React.useRef(null);

  // scroll animation

  return (
    <main
      data-scroll-container
      // ref={containerRef}
      className='bg-background   cursor-none'
    >
      <Landing />
      <Projects />
      <About />
      <Message />
    </main>
  );
}
