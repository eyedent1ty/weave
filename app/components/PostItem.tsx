import type { FC } from 'react';
import { Icon } from '@iconify/react';
import type { Post } from '@/types/index';
import { useAppDispatch } from '@/lib/hooks';
import { openBackdrop } from '@/lib/features/backdrop/backdropSlice';
import {
  openReplyDialog,
  setCurrentPost
} from '@/lib/features/replyDialog/replyDialogSlice';

interface PostItemProps {
  post: Post;
}

const PostItem: FC<PostItemProps> = ({ post }) => {
  const { id, username, datePosted, content, imagePostUrl, userImageUrl } =
    post;

  const liked = true;
  const dispatch = useAppDispatch();

  const handleClickReply = () => {
    dispatch(openBackdrop());
    dispatch(openReplyDialog());
    dispatch(setCurrentPost(post));
  };

  return (
    <div className="px-6 py-3 border-b border-border-color">
      <article className="flex gap-2">
        <header>
          <img src={userImageUrl} height="36" width="36" alt={`${username} profile picture`} className="rounded-full" />
        </header>
        <main className="flex flex-1 flex-col">
          <p className="text-secondary font-semibold">{username}</p>
          <p>{content}</p>
          {imagePostUrl ? <img src={imagePostUrl} alt="image of the post" className="rounded-3xl" /> : null}
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
        <div
          className="flex items-center gap-1 px-3 py-2 rounded-2xl cursor-pointer hover:bg-navigation-icon-hover"
          onClick={handleClickReply}
        >
          <Icon icon="tabler:message-circle" fontSize={22} />
          <span className="text-sm">17</span>
        </div>
      </footer>
    </div>
  );
};

export default PostItem;
