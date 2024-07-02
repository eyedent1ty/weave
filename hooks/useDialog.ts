import { useState, useRef, useEffect } from 'react';

const useDialog = (isOpen: boolean) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Mount animation
  useEffect(() => {
    if (isOpen && dialogRef.current) {
      const animationOptions = {
        duration: 300
      };

      let keyframe = [
        {
          opacity: '0',
          transform: 'translateY(200%)'
        },
        {
          opacity: '1',
          transform: 'translateY(0)'
        }
      ];

      let dialogAnimation: Animation | null = null;
      if (width < 700) {
        dialogAnimation = dialogRef.current.animate(
          keyframe,
          animationOptions
        );
      }

      return () => {
        if (dialogAnimation) {
          dialogAnimation.cancel();
        }
      };
    }
  }, [isOpen]);

  return dialogRef;
};

export default useDialog;
