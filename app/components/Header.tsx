import React from 'react';
import gsap from 'gsap';

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);

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
    const body = document.body;
    body.style.overflow = 'hidden';
    setShowMenu(true);
  };

  // close menu animation and logic
  const closeMenu = () => {
    const body = document.body;
    body.style.overflow = 'auto';

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
  return (
    <>
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

      {showMenu && (
        <div className='fullscreen-menu bg-white h-screen w-screen absolute top-0 left-0 z-20 flex flex-wrap '>
          <div className='left-pane  bg-primary w-full md:w-1/2 h-1/2 md:h-full flex items-center text-white'>
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
    </>
  );
};

export default Header;
