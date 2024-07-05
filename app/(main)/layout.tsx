import React from 'react';

import { useAppSelector } from '@/lib/hooks';

import FloatingButton from '@/components/UI/FloatingButton';
import PostDialog from '@/components/dialogs/PostDialog';
import Backdrop from '@/components/UI/Backdrop';
import ReplyDialog from '@/components/dialogs/ReplyDialog';
import Nav from '@/components/navigations/Nav';
import AuthDialog from '@/components/dialogs/AuthDialog';
import EditProfileDialog from '@/components/dialogs/EditProfileDialog';

export default async function MainLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const currentUser = useAppSelector((state) => state.users.currentUser);

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
