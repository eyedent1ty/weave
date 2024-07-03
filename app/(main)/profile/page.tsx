'use client';

import Image from 'next/image';
import Button from '@/app/components/UI/Button';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { openBackdrop } from '@/lib/features/backdrop/backdropSlice';
import { openEditProfileDialog } from '@/lib/features/editProfileDialog/editProfileDialogSlice';
import { formatNumber } from '@/utils';

const ProfilePage = () => {
  const currentUser = useAppSelector((state) => state.currentUser);
  const dispatch = useAppDispatch();

  const handleClickEditProfile = () => {
    dispatch(openBackdrop());
    dispatch(openEditProfileDialog());
  };

  return (
    <main className="py-5 px-6">
      <header className="">
        <section className="flex justify-between items-center">
          <div>
            <p className="font-bold text-2xl">
              {currentUser.firstName} {currentUser.lastName}
            </p>
            <p className="text-sm">{currentUser.username}</p>
          </div>
          <Image
            src={currentUser.imageUrl}
            alt={`${currentUser.username} profile picture`}
            width={84}
            height={84}
            className="rounded-full border border-border-color"
          />
        </section>
        <section className="mt-3">
          {formatNumber(currentUser.followers)} followers
        </section>
        <section className="mt-7">
          <Button className="w-full" onClick={handleClickEditProfile}>
            Edit profile
          </Button>
        </section>
      </header>
    </main>
  );
};

export default ProfilePage;
