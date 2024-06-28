'use client';

import { Icon } from '@iconify/react';

import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { openPostDialog } from '@/lib/features/postDialog/postDialogSlice';

import PostDialog from './components/PostDialog';
import Button from './components/UI/Button';
import PostItem from './components/PostItem';

const Home = () => {
  const isOpen = useAppSelector((state) => state.postDialog.isOpen);
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
        <PostItem
          user="johndanieldel"
          content="Remove 2 Apps"
          datePosted={new Date()}
        />
        {posts.map((post) => (
          <PostItem
            key={post.id}
            user={post.user}
            content={post.content}
            datePosted={post.datePosted}
          />
        ))}
      </section>

      {isOpen && <PostDialog />}
    </>
  );
};

export default Home;
