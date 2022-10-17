import React from 'react';
// import 'locomotive-scroll/dist/locomotive-scroll.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Projects from '~/components/Projects';
import Cursor from '~/components/cursor';
import Message from '~/components/Message';
import About from '~/components/About';
// import useLocoScroll from '~/utils/useLocoScroll';
import { Landing } from '~/components/Landing';

export default function Index() {
  // useLocoScroll(true);

  gsap.registerPlugin(ScrollTrigger);

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

    function hoverFunc(e: MouseEvent | Event) {
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

    function unhoverFunc(e: MouseEvent | Event) {
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
    const li = document.querySelectorAll('li');
    const closeBtn = document.querySelector('.close');

    link.forEach((el) => el.addEventListener('mouseover', hoverFunc));
    closeBtn?.addEventListener('mouseover', hoverFunc);
    li.forEach((el) => el.addEventListener('mouseover', hoverFunc));
    link.forEach((el) => el.addEventListener('mouseleave', unhoverFunc));
    li.forEach((el) => el.addEventListener('mouseleave', unhoverFunc));
    closeBtn?.addEventListener('mouseleave', unhoverFunc);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      link.forEach((el) => el.removeEventListener('mouseenter', hoverFunc));
      link.forEach((el) => el.removeEventListener('mouseleave', unhoverFunc));
    };
  }, []);

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
        /*  ScrollTrigger.create({
          trigger: container,
          start: 'top top',
          pin: true,
          // pinSpacing: false,
          snap: 1,
        }); */
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
    <div
      id='main-container'
      className='bg-background  overflow-x-hidden cursor-none'
      data-scroll-container
    >
      <Cursor />
      <Landing />
      <Projects />
      <About />
      <Message />
    </div>
  );
}
