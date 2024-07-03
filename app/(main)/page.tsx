import NewThread from '@/components/home/NewThread';
import ListOfPost from '@/components/home/ListOfPost';

import { currentUser } from '@clerk/nextjs/server';

const Home = async () => {
  const user = await currentUser();

  return (
    <>
      <div className={`${user ? 'flex' : 'hidden'} px-6 py-4 justify-between border-b border-border-color`}>
        <NewThread />
      </div>
      <ListOfPost />
    </>
  );
};

export default Home;
