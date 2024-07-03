'use client';

import type { FC } from 'react';
import { useAppDispatch } from '@/lib/hooks';
import { openBackdrop } from '@/lib/features/backdrop/backdropSlice';
import { openEditProfileDialog } from '@/lib/features/editProfileDialog/editProfileDialogSlice';
import Button from '../UI/Button';

const EditProfileButton: FC = () => {
  const dispatch = useAppDispatch();

  const handleClickEditProfile = () => {
    dispatch(openBackdrop());
    dispatch(openEditProfileDialog());
  };

  return (
    <Button className="w-full" onClick={handleClickEditProfile}>
      Edit profile
    </Button>
  );
};

export default EditProfileButton;
