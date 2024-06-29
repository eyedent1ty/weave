'use client';

import type { FC } from 'react';

import { useAppDispatch } from '@/lib/hooks';
import { openPostDialog } from '@/lib/features/postDialog/postDialogSlice';

import Button from './Button';

const FloatingButton: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Button
      className="fixed right-8 bottom-8 w-20 h-16 bg-primary text-secondary text-3xl border-border-color shadow-lg rounded-xl transition-transform duration-100 hover:scale-110 active:scale-90 ease-in"
      onClick={() => dispatch(openPostDialog())}
    >
      +
    </Button>
  );
};

export default FloatingButton;
