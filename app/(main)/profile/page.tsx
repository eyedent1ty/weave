import { cookies } from 'next/headers';
import { PrismaClient } from '@prisma/client';
import { verify } from 'jsonwebtoken';

import { User } from '@/types';

import Image from 'next/image';
import EditProfileButton from '@/components/profile/EditProfileButton';
import { formatNumber } from '@/utils';

const ProfilePage = async () => {
  const token = cookies().get('jsonwebtoken')?.value!;

  const prisma = new PrismaClient();
  const { username } = verify(token, 'SECRETKEY') as { username: string };

  const user = (await prisma.user.findFirst({
    where: {
      username
    },
    select: {
      id: true,
      username: true,
      firstName: true,
      lastName: true,
      imageUrl: true,
      bio: true,
      link: true,
      followers: true,
      createdAt: true
    }
  }))!;

  return (
    <main className="py-5 px-6">
      <header className="">
        <section className="flex justify-between items-center">
          <div>
            <p className="font-bold text-2xl">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-sm">{user.username}</p>
          </div>
          <Image
            src={user.imageUrl}
            alt={`${user.username} profile picture`}
            width={84}
            height={84}
            className="rounded-full border border-border-color"
          />
        </section>
        <section className="mt-3">{formatNumber(123132515)} followers</section>
        <section className="mt-7">
          <EditProfileButton />
        </section>
      </header>
    </main>
  );
};

export default ProfilePage;
