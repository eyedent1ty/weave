'use client';

import { Icon } from '@iconify/react';
import PostDialog from './components/PostDialog';
import Button from './components/UI/Button';

const Home = () => {
  const handlePost = () => {
    console.log('POST');
  };

  return (
    <>
      <div className="px-6 py-4 flex justify-between border-b-[1px] border-navigation-icon">
        <Icon icon="carbon:user-avatar-filled" fontSize={36} />
        <div className="flex items-center flex-grow ml-3 text-navigation-icon cursor-text font-light text-sm">Start a thread...</div>
        <Button onClick={handlePost}>Post</Button>
      </div>
      {/* <PostDialog /> */}
    </>
  );
};

export default Home;
