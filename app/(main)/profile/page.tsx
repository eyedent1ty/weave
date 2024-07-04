import Image from 'next/image';
import EditProfileButton from '@/components/profile/EditProfileButton';
import { useAppSelector } from '@/lib/hooks';
import { formatNumber } from '@/utils';

const ProfilePage = async () => {
  const user = useAppSelector((state) => state.currentUser);

  return (
    <main className="py-5 px-6">
      <header className="">
        <section className="flex justify-between items-center">
          <div>
            <p className="font-bold text-2xl">
              {user.firstName} {user.lastName}
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
