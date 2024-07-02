'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { FC } from 'react';
import Dialog from '../UI/Dialog';
import Button from '../UI/Button';
import UserInput from '../UI/UserInput';
import { useAppSelector } from '@/lib/hooks';

interface EditProfileDialogInterface {
  open: boolean;
}

const EditProfileDialog: FC<EditProfileDialogInterface> = ({ open }) => {
  const isOpen = useAppSelector((state) => state.editProfileDialog.isOpen);
  const currentUser = useAppSelector((state) => state.currentUser);
  const [profileDetails, setProfileDetails] = useState({
    ...currentUser,
    fullName: `${currentUser.firstName} ${currentUser.lastName}`
  });

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

          <Image
            src={currentUser.imageUrl}
            alt={`${currentUser.username} profile picture`}
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
        <label className="block font-bold relative" htmlFor="name"></label>
      </div>
      <div className="border-b border-border-color mt-2">
        <label className="block font-bold" htmlFor="name">
          Name
        </label>
        <UserInput
          id="name"
          type="text"
          value={profileDetails.fullName}
          placeholder="Name"
          onChange={(e) =>
            setProfileDetails((prev) => ({ ...prev, fullName: e.target.value }))
          }
          className="my-2"
        />
      </div>
      <div className="border-b border-border-color mt-2">
        <label className="block font-bold" htmlFor="name">
          Bio
        </label>
        <UserInput
          id="name"
          type="text"
          value={profileDetails.fullName}
          onChange={(e) =>
            setProfileDetails((prev) => ({ ...prev, fullName: e.target.value }))
          }
          className="my-2"
        />
      </div>
      <div className="border-b border-border-color mt-2 mb-6">
        <label className="block font-bold" htmlFor="name">
          Link
        </label>
        <UserInput
          id="name"
          type="text"
          value={profileDetails.fullName}
          onChange={(e) =>
            setProfileDetails((prev) => ({ ...prev, fullName: e.target.value }))
          }
          className="my-2"
        />
      </div>
    </form>
  );

  const footerContent = (
    <div className="pr-6">
      <Button className="bg-secondary text-primary text-sm w-full py-3">
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
