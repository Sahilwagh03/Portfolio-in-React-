import { useState, useEffect, useRef } from 'react';

function Fadecomponent(props) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!isVisible && ref.current) {
        const top = ref.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isVisible]);

  return (
    <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''}`}>
      {props.children}
    </div>
  );
}

export default Fadecomponent;
