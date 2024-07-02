'use client';

import { useState, useEffect } from 'react';

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState<number>(globalThis.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(globalThis.innerWidth);
    };

    globalThis.addEventListener('resize', handleResize);

    return () => globalThis.addEventListener('resize', handleResize);
  }, []);

  return screenWidth;
};

export default useScreenWidth;
