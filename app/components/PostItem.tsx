import type { FC } from 'react';
import { Icon } from '@iconify/react';

import type { Post } from '@/types/index';

const PostItem: FC<Post> = ({ username, datePosted, content }) => {
  const liked = true;

  return (
    <div className="px-6 py-3 border-b border-border-color">
      <article className="flex gap-2">
        <header>
          <Icon icon="carbon:user-avatar-filled" fontSize={36} />
        </header>
        <main className="flex flex-1 flex-col">
          <p className="text-secondary font-semibold">{username}</p>
          <p>{content}</p>
        </main>
      </article>
      <footer className="ml-[18px] flex">
        <div
          className={`flex items-center gap-1 px-3 py-2 rounded-2xl cursor-pointer ${
            liked ? 'text-pink-700' : 'text-secondary'
          } hover:bg-navigation-icon-hover`}
        >
          <Icon
            icon={`${liked ? 'clarity:heart-solid' : 'clarity:heart-line'}`}
            fontSize={22}
          />
          <span className="text-sm">17</span>
        </div>
      </footer>
    </div>
  );
};

export default PostItem;
