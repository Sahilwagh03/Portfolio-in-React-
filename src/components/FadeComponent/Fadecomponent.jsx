import React, { useRef, useEffect, useState } from 'react';

function Fadecomponent(props) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (ref.current && !visible) {
        const top = ref.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setVisible(true);
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [visible]);

  return (
    <div ref={ref} className={`fade-in${visible ? ' visible' : ''}`}>
      {props.children}
    </div>
  );
}
export default Fadecomponent;

