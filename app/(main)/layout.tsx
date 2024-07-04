import React from 'react';

import FloatingButton from '@/components/UI/FloatingButton';
import PostDialog from '@/components/PostDialog';
import Backdrop from '@/components/UI/Backdrop';
import ReplyDialog from '@/components/ReplyDialog';
import EditProfileDialog from '@/components/dialogs/EditProfileDialog';
import AuthenticatedNav from '@/components/navigations/AuthenticatedNav';
import UnauthenticatedNav from '@/components/navigations/UnauthenticatedNav';
import AuthDialog from '@/components/dialogs/AuthDialog';
import { currentUser } from '@clerk/nextjs/server';

export default async function MainLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  return (
    <>
      <div
        className={`relative flex justify-center ${
          user ? 'bg-tertiary' : 'bg-primary'
        }  text-secondary`}
      >
        {user === null ? <UnauthenticatedNav /> : <AuthenticatedNav />}
        <main
          className={`sm:mx-[76px] sm:max-w-[600px] pt-2 w-screen min-h-[calc(100vh)] sm:rounded-t-3xl sm:border border-border-color bg-primary text-secondary ${
            user ? 'sm:mt-14' : 'sm:mt-[130px]'
          } shadow-md`}
        >
          {children}
        </main>
      </div>
      <Backdrop />

      {user ? (
        <>
          <FloatingButton />
          <PostDialog open={true} />
          <ReplyDialog open={true} />
          <EditProfileDialog
            open={true}
            imageUrl={user.imageUrl}
            username={user.username!}
            firstName={user.firstName!}
            lastName={user.lastName!}
          />
        </>
      ) : null}
      <AuthDialog />
    </>
  );
}
