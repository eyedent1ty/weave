'use client';

import { Icon } from '@iconify/react';

import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { openPostDialog } from '@/lib/features/postDialog/postDialogSlice';

import Button from './components/UI/Button';
import PostItem from './components/PostItem';

const Home = () => {
  const posts = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  const handleOpenDialog = () => {
    dispatch(openPostDialog());
  };

  return (
    <>
      <div className="px-6 py-4 flex justify-between border-b border-border-color">
        <Icon icon="carbon:user-avatar-filled" fontSize={36} />
        <div
          className="flex items-center flex-grow ml-3 text-navigation-icon cursor-text font-light text-sm"
          onClick={handleOpenDialog}
        >
          Start a thread...
        </div>
        <Button onClick={handleOpenDialog}>Post</Button>
      </div>
      <section>
        {posts.map((post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </section>
    </>
  );
};

export default Home;
