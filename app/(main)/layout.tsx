import React from 'react';
import { cookies } from 'next/headers';
import { PrismaClient } from '@prisma/client';
import { verify } from 'jsonwebtoken';

import FloatingButton from '@/components/UI/FloatingButton';
import PostDialog from '@/components/PostDialog';
import Backdrop from '@/components/UI/Backdrop';
import ReplyDialog from '@/components/ReplyDialog';
import Nav from '@/components/navigations/Nav';
import AuthDialog from '@/components/dialogs/AuthDialog';
import EditProfileDialog from '@/components/dialogs/EditProfileDialog';

export default async function MainLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const token = cookies().get('jsonwebtoken')?.value;

  let user = null;

  if (token) {
    const prisma = new PrismaClient();
    const { username } = verify(token, 'SECRETKEY') as { username: string };

    user = await prisma.user.findFirst({
      where: {
        username: username
      }
    });
  }

  return (
    <>
      <div
        className={`relative flex justify-center ${
          user ? 'bg-tertiary' : 'bg-primary'
        }  text-secondary`}
      >
        <Nav />
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
          <PostDialog user={user} open={true} />
          <ReplyDialog open={true} />
          <EditProfileDialog user={user} open={true} />
        </>
      ) : (
        <AuthDialog />
      )}
    </>
  );
}
