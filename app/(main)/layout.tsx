import React from 'react';

import FloatingButton from '../components/UI/FloatingButton';
import PostDialog from '../components/PostDialog';
import Backdrop from '../components/UI/Backdrop';
import ReplyDialog from '../components/ReplyDialog';
import EditProfileDialog from '../components/dialogs/EditProfileDialog';
import AuthenticatedNav from '../components/navigations/AuthenticatedNav';
import UnauthenticatedNav from '../components/navigations/UnauthenticatedNav';
import { currentUser } from '@clerk/nextjs/server';

export default async function MainLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  console.log(user);

  return (
    <>
      <div className="relative flex justify-center bg-tertiary text-secondary">
        {user === null ? <UnauthenticatedNav /> : <AuthenticatedNav />}
        <main className="sm:mx-[76px] sm:max-w-[600px] pt-2 w-screen min-h-[calc(100vh)] sm:rounded-t-3xl sm:border border-border-color bg-primary text-secondary sm:mt-14 shadow-md">
          {children}
        </main>
      </div>
      <FloatingButton />
      <PostDialog open={true} />
      <Backdrop />
      <ReplyDialog open={true} />
      <EditProfileDialog open={true} />
    </>
  );
}
