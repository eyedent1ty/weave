'use client';

import { Icon } from '@iconify/react';

import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { openPostDialog } from '@/lib/features/postDialog/postDialogSlice';
import PostDialog from './components/PostDialog';
import Button from './components/UI/Button';

const Home = () => {
  const isOpen = useAppSelector((state) => state.postDialog.isOpen);
  const posts = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  const handleOpenDialog = () => {
    dispatch(openPostDialog());
  };

  return (
    <>
      <div className="px-6 py-4 flex justify-between border-b-[1px] border-navigation-icon">
        <Icon icon="carbon:user-avatar-filled" fontSize={36} />
        <div
          className="flex items-center flex-grow ml-3 text-navigation-icon cursor-text font-light text-sm"
          onClick={handleOpenDialog}
        >
          Start a thread...
        </div>
        <Button onClick={handleOpenDialog}>Post</Button>
      </div>
      {posts.map((post) => (
        <p key={post.id}>{post.content}</p>
      ))}
      {isOpen && <PostDialog />}
    </>
  );
};

export default Home;
