'use client';

import { useEffect, type ReactNode } from 'react';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setCurrentUser } from '@/lib/features/users/usersSlice';

import FloatingButton from '@/components/UI/FloatingButton';
import PostDialog from '@/components/dialogs/PostDialog';
import Backdrop from '@/components/UI/Backdrop';
import ReplyDialog from '@/components/dialogs/ReplyDialog';
import Nav from '@/components/navigations/Nav';
import AuthDialog from '@/components/dialogs/AuthDialog';
import EditProfileDialog from '@/components/dialogs/EditProfileDialog';

export default function MainLayout({ children }: { children: ReactNode }) {
  const currentUser = useAppSelector((state) => state.users.currentUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const session = localStorage.getItem('session');

    const setSession = async () => {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: session })
      });

      const { user } = await response.json();
      dispatch(setCurrentUser(user));
    };

    if (session) {
      setSession();
    }
  }, []);

  return (
    <>
      <div
        className={`relative flex justify-center ${
          currentUser ? 'bg-tertiary' : 'bg-primary'
        }  text-secondary`}
      >
        <Nav />
        <main
          className={`sm:mx-[76px] sm:max-w-[600px] pt-2 w-screen min-h-[calc(100vh)] sm:rounded-t-3xl sm:border border-border-color bg-primary text-secondary ${
            currentUser ? 'sm:mt-14' : 'sm:mt-[130px]'
          } shadow-md`}
        >
          {children}
        </main>
      </div>
      <Backdrop />

      <PostDialog />
      <FloatingButton />
      <ReplyDialog />
      <EditProfileDialog />
      <AuthDialog />
    </>
  );
}
