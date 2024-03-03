import React, { useEffect, useRef } from 'react';
import Mood from './Mood';

function Cell() {
  const [active, setActive] = React.useState(false);
  const refOne = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      setActive(false);
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
        console.log('Component unmounted, removing event listener');
      // Clean up the event listener when the component is unmounted
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);
  return (
    <>
      <button
        className='rounded-full border-2 border-black-500 px-4 py-4 hover:border-black'
        onClick={() => setActive(!active)}
      ></button>
      {/* {active && <Mood ref={refOne} />} */}
      {active && <Mood />}
    </>
  );
}

export default Cell;
