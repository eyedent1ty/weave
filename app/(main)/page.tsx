'use client';

import { useAppSelector } from '@/lib/hooks';

import NewThread from '@/components/home/NewThread';
import ListOfPost from '@/components/home/ListOfPost';

const Home = () => {
  const currentUser = useAppSelector((state) => state.users.currentUser);

  return (
    <>
      <div
        className={`${
          currentUser ? 'flex' : 'hidden'
        } px-6 py-4 justify-between border-b border-border-color`}
      >
        {currentUser && <NewThread />}
      </div>
      <ListOfPost />
    </>
  );
};

export default Home;
