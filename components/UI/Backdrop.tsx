'use client';

import { useRef, useEffect } from 'react';
import type { FC } from 'react';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { closeBackdrop } from '@/lib/features/backdrop/backdropSlice';
import { closePostDialog } from '@/lib/features/postDialog/postDialogSlice';
import { closeReplyDialog } from '@/lib/features/replyDialog/replyDialogSlice';
import { closeEditProfileDialog } from '@/lib/features/editProfileDialog/editProfileDialogSlice';
import { closeAuthDialog } from '@/lib/features/authDialog/authDialogSlice';
import { useSearchParams, useRouter } from 'next/navigation';

const Backdrop: FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.backdrop.isOpen);
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  // Keydown event
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        dispatch(closeBackdrop());
        dispatch(closePostDialog());
        dispatch(closeReplyDialog());
        dispatch(closeEditProfileDialog());
        dispatch(closeAuthDialog());
      }
    };

    document.documentElement.addEventListener('keydown', handleKeydown);

    return () => {
      document.documentElement.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  // Removed background scrolling feature
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }

    return () => {
      document.documentElement.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Fade in animation
  useEffect(() => {
    if (isOpen && backdropRef.current) {
      const fadeIn = [{ opacity: '0' }, { opacity: '1' }];
      const animationOptions = {
        duration: 200
      };

      const backdropAnimation = backdropRef.current.animate(
        fadeIn,
        animationOptions
      );

      return () => {
        backdropAnimation.cancel();
      };
    }
  }, [isOpen]);

  const handleClick = () => {
    if (searchParams.has('auth')) {
      router.push('/');
    }

    dispatch(closeBackdrop());
    dispatch(closePostDialog());
    dispatch(closeReplyDialog());
    dispatch(closeEditProfileDialog());
    dispatch(closeAuthDialog());
  };

  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } backdrop-blur-1 bg-black/60 absolute top-0 left-0 bottom-0 right-0 z-10`}
      onClick={handleClick}
      ref={backdropRef}
    ></div>
  );
};

export default Backdrop;
