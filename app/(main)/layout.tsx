import React from 'react';

import Nav from '../components/Nav';
import FloatingButton from '../components/UI/FloatingButton';
import PostDialog from '../components/PostDialog';
import Backdrop from '../components/UI/Backdrop';
import ReplyDialog from '../components/ReplyDialog';
import EditProfileDialog from '../components/dialogs/EditProfileDialog';

export default function MainLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="relative flex justify-center bg-tertiary text-secondary">
        <Nav />
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
