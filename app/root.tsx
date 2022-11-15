import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import React from 'react';
import Cursor from './components/cursor';
import styles from './styles/app.css';
import gsap from 'gsap';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
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
      closeBtn?.removeEventListener('mouseover', hoverFunc);
      closeBtn?.removeEventListener('mouseleave', unhoverFunc);
      li.forEach((el) => el.removeEventListener('mouseenter', hoverFunc));
      link.forEach((el) => el.removeEventListener('mouseleave', unhoverFunc));
      li.forEach((el) => el.removeEventListener('mouseleave', unhoverFunc));
    };
  }, []);
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Cursor />
      </body>
    </html>
  );
}
