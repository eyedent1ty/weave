'use client';

import { useState, useEffect } from 'react';

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.addEventListener('resize', handleResize);
  }, []);

  return screenWidth;
};

export default useScreenWidth;
