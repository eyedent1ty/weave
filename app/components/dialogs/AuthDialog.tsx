'use client';

import type { FC } from 'react';

import Dialog from '../UI/Dialog';
import Button from '../UI/Button';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { closeAuthDialog } from '@/lib/features/authDialog/authDialogSlice';

interface AuthDialogProps {
  open: boolean;
}

const AuthDialog: FC<AuthDialogProps> = ({ open }) => {
  const isOpen = useAppSelector((state) => state.authDialog.isOpen);
  const dispatch = useAppDispatch();

  const handleClickExit = () => {
    dispatch(closeAuthDialog());
  };

  const mainContent = (
    <div className="pr-6">
      <div
        className="flex justify-end mb-6 sm:mb-3 cursor-pointer"
        onClick={handleClickExit}
      >
        <Icon icon="material-symbols:close" fontSize={32} />
      </div>
      <header className="text-center">
        <p className="font-semibold text-xl">Log in or sign up in seconds</p>
        <p className="text-sm">
          Use your email or another service to continue with Weave (it's free)
        </p>
      </header>
      <main className="flex flex-col items-center gap-2 mt-3">
        <Button className="w-full max-w-[350px] py-3 relative">
          <Icon
            icon="flat-color-icons:google"
            className="absolute left-[12px] top-0 translate-y-2"
            fontSize={32}
          />
          Continue with Google
        </Button>
        <Button className="w-full max-w-[350px] py-3 relative">
          <Icon
            icon="logos:facebook"
            className="absolute left-[12px] top-0 translate-y-2"
            fontSize={32}
          />
          Continue with Facebook
        </Button>
      </main>
    </div>
  );

  return isOpen && <Dialog open={open} mainContent={mainContent} />;
};

export default AuthDialog;
