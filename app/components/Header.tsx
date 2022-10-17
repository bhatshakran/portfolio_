import React from 'react';

const Header = () => {
  const [menu, setShowMenu] = React.useState(false);

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
  );
};

export default Header;
