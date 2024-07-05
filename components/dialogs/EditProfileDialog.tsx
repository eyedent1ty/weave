'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { FC } from 'react';
import Dialog from '../UI/Dialog';
import Button from '../UI/Button';
import UserInput from '../UI/UserInput';
import { useAppSelector } from '@/lib/hooks';
import { useAppDispatch } from '@/lib/hooks';
import { closeBackdrop } from '@/lib/features/backdrop/backdropSlice';
import { closeEditProfileDialog } from '@/lib/features/editProfileDialog/editProfileDialogSlice';

const EditProfileDialog: FC = () => {
  const isOpen = useAppSelector((state) => state.editProfileDialog.isOpen);
  const currentUser = useAppSelector((state) => state.users.currentUser);

  const dispatch = useAppDispatch();

  if (!currentUser) {
    return;
  }

  const handleClickDone = () => {
    dispatch(closeBackdrop());
    dispatch(closeEditProfileDialog());
  };

  const mainContent = (
    <form className="pr-6">
      <div className="border-b border-border-color">
        <label className="font-bold">
          Profile Picture <span className="font-normal">(jpg, png)</span>
        </label>
        <div className="flex justify-between items-center mb-2">
          <label
            htmlFor="profile-picture"
            className="bg-secondary text-primary px-3 py-2 rounded-lg text-sm cursor-pointer"
          >
            Change Profile Picture
          </label>

          <input
            className="hidden"
            id="profile-picture"
            type="file"
            accept="image/*"
          />

          <div className="flex flex-col items-center">
            <Image
              src={currentUser.imageUrl}
              alt={`${currentUser.username} profile picture`}
              width={80}
              height={80}
              className="rounded-full"
            />
            <span>@{currentUser.username}</span>
          </div>
        </div>
      </div>
      <div className="border-b border-border-color mt-2">
        <label className="block font-bold" htmlFor="first-name">
          First Name
        </label>
        <UserInput
          id="first-name"
          type="text"
          placeholder="First Name"
          className="my-2"
        />
      </div>
      <div className="border-b border-border-color mt-2">
        <label className="block font-bold" htmlFor="last-name">
          Last Name
        </label>
        <UserInput
          id="last-name"
          type="text"
          placeholder="Last Name"
          className="my-2"
        />
      </div>
      <div className="border-b border-border-color mt-2">
        <label className="block font-bold" htmlFor="bio">
          Bio
        </label>
        <UserInput
          id="bio"
          type="text"
          placeholder="+ Write Bio"
          className="my-2"
        />
      </div>
      <div className="border-b border-border-color mt-2 mb-6">
        <label className="block font-bold" htmlFor="link">
          Link
        </label>
        <UserInput
          id="link"
          type="text"
          placeholder="+ Add link"
          className="my-2"
        />
      </div>
    </form>
  );

  const footerContent = (
    <div className="pr-6">
      <Button
        className="bg-secondary text-primary text-sm w-full py-3"
        type="button"
        onClick={handleClickDone}
      >
        Done
      </Button>
    </div>
  );

  return (
    isOpen && <Dialog mainContent={mainContent} footerContent={footerContent} />
  );
};

export default EditProfileDialog;
