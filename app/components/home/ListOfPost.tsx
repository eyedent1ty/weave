'use client'

import type { FC } from 'react';

import { useAppSelector } from '@/lib/hooks';
import PostItem from '../PostItem';

const ListOfPost: FC = () => {
  const posts = useAppSelector((state) => state.posts);

  return (
    <section>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </section>
  );
};

export default ListOfPost;
