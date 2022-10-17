import React from 'react';

const useLocoScroll = (start: boolean) => {
  React.useEffect(() => {
    if (!start) return;
    let scroll: LocomotiveScroll;
    import('locomotive-scroll').then((locomotiveModule) => {
      const scrollEl = document.querySelector(
        '#main-container'
      ) as HTMLDivElement;

      scroll = new locomotiveModule.default({
        el: scrollEl,
        // smooth: true,
        multiplier: 1,
        class: 'is-reveal',
      });
    });
    return () => {
      if (scroll) scroll.destroy();
    };
  }, [start]);
};

export default useLocoScroll;
