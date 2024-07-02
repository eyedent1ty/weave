'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { FC, FormEvent } from 'react';
import Dialog from '../UI/Dialog';
import Button from '../UI/Button';
import UserInput from '../UI/UserInput';
import { useAppSelector } from '@/lib/hooks';
import { useAppDispatch } from '@/lib/hooks';
import { setCurrentUser } from '@/lib/features/currentUser/currentUserSlice';
import { closeBackdrop } from '@/lib/features/backdrop/backdropSlice';
import { closeEditProfileDialog } from '@/lib/features/editProfileDialog/editProfileDialogSlice';

interface EditProfileDialogInterface {
  open: boolean;
}

const EditProfileDialog: FC<EditProfileDialogInterface> = ({ open }) => {
  const isOpen = useAppSelector((state) => state.editProfileDialog.isOpen);
  const currentUser = useAppSelector((state) => state.currentUser);
  const [profileDetails, setProfileDetails] = useState({
    ...currentUser
  });

  const dispatch = useAppDispatch();

  const handleClickDone = () => {
    dispatch(setCurrentUser({ ...profileDetails }));
    dispatch(closeBackdrop());
    dispatch(closeEditProfileDialog());
  };

  const mainContent = (
    <form className="pr-6">
      <div className="border-b border-border-color">
        {currentUser.lastName}
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
          value={profileDetails.firstName}
          placeholder="First Name"
          onChange={(e) =>
            setProfileDetails((prev) => ({
              ...prev,
              firstName: e.target.value
            }))
          }
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
          value={profileDetails.lastName}
          placeholder="Last Name"
          onChange={(e) =>
            setProfileDetails((prev) => {
              return ({ ...prev, lastName: e.target.value })
            })
          }
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
          value={profileDetails.bio}
          placeholder="+ Write Bio"
          onChange={(e) =>
            setProfileDetails((prev) => ({ ...prev, bio: e.target.value }))
          }
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
          value={profileDetails.link}
          placeholder="+ Add link"
          onChange={(e) =>
            setProfileDetails((prev) => ({ ...prev, link: e.target.value }))
          }
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

  return isOpen ? (
    <Dialog
      open={open}
      mainContent={mainContent}
      footerContent={footerContent}
    />
  ) : null;
};

export default EditProfileDialog;
