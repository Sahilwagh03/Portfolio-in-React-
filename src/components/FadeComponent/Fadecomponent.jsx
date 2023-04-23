import React, { useRef, useEffect, useState } from 'react';

function Fadecomponent(props) {
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (ref.current) {
        const top = ref.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          ref.current.classList.add('visible');
        } else {
          ref.current.classList.remove('visible');
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={ref} className={`fade-in`}>
      {props.children}
    </div>
  );
}
export default Fadecomponent;

