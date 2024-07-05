'use client';

import { openBackdrop } from '@/lib/features/backdrop/backdropSlice';
import { openPostDialog } from '@/lib/features/postDialog/postDialogSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import type { User } from '@/types';

import Button from '../UI/Button';

const NewThread = ({ user }: { user: User }) => {
  const dispatch = useAppDispatch();

  const currentUser = useAppSelector((state) => state.users.currentUser);

  if (!currentUser) {
    return null;
  }

  const { imageUrl, username } = currentUser;

  const handleOpenDialog = () => {
    dispatch(openBackdrop());
    dispatch(openPostDialog());
  };

  return (
    <>
      {' '}
      <img
        src={imageUrl}
        height="36"
        width="36"
        alt={`${username} profile picture`}
        className="rounded-full"
      />
      <div
        className="flex items-center flex-grow ml-3 text-navigation-icon cursor-text font-light text-sm"
        onClick={handleOpenDialog}
      >
        Start a thread...
      </div>
      <Button onClick={handleOpenDialog}>Post</Button>
    </>
  );
};

export default NewThread;
