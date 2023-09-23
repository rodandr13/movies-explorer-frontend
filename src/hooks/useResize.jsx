import { useEffect, useState } from 'react';

function useResize(debounceTime = 0) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    let resizeTimer;

    const debouncedHandleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleResize, debounceTime);
    };

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, [debounceTime]);

  return width;
}

export default useResize;
