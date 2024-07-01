'use client';

import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { openPostDialog } from '@/lib/features/postDialog/postDialogSlice';

import Button from './components/UI/Button';
import PostItem from './components/PostItem';
import { openBackdrop } from '@/lib/features/backdrop/backdropSlice';

const Home = () => {
  const posts = useAppSelector((state) => state.posts);
  const currentUser = useAppSelector((state) => state.currentUser);
  const dispatch = useAppDispatch();

  const { imageUrl, username } = currentUser;

  const handleOpenDialog = () => {
    dispatch(openBackdrop());
    dispatch(openPostDialog());
  };

  return (
    <>
      <div className="px-6 py-4 flex justify-between border-b border-border-color">
        <img src={imageUrl} height="36" width="36" alt={`${username} profile picture`} className="rounded-full" />
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
          <PostItem key={post.id} post={post} />
        ))}
      </section>
    </>
  );
};

export default Home;
