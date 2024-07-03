'use client';

import { useState, useRef, useEffect } from 'react';
import type { FC } from 'react';

import { Icon } from '@iconify/react';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { closePostDialog } from '@/lib/features/postDialog/postDialogSlice';

import type { Post } from '@/types';

import Dialog from './UI/Dialog';
import Button from './UI/Button';
import { closeBackdrop } from '@/lib/features/backdrop/backdropSlice';
import useScreenWidth from '@/hooks/useScreenWidth';
import { addNewPost } from '@/lib/features/posts/postsSlice';

enum PostAudienceActions {
  ANYONE,
  FOLLOWERS
}

let id = 11;

const PostDialog: FC<{ open?: boolean }> = ({ open }) => {
  const [content, setContent] = useState('');
  const [isPostAudienceOpen, setIsPostAudienceOpen] = useState(false);
  const [postAudience, setPostAudience] = useState(PostAudienceActions.ANYONE);
  const width = useScreenWidth();

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const isOpen = useAppSelector((state) => state.postDialog.isOpen);
  const currentUser = useAppSelector((state) => state.currentUser);
  const dispatch = useAppDispatch();

  const { username, imageUrl, firstName, lastName } = currentUser;

  // Resizable textarea based on its content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [content]);

  const handleSelectPostAudience = (selectedAudience: PostAudienceActions) => {
    setPostAudience(selectedAudience);
    setIsPostAudienceOpen(false);
  };

  const handleCreateNewPost = () => {
    const newPost: Post = {
      id: id++,
      username: currentUser.username,
      datePosted: new Date().toString(),
      content: content,
      imagePostUrl: null,
      userImageUrl: currentUser.imageUrl
    };

    dispatch(addNewPost(newPost));
    dispatch(closeBackdrop());
    dispatch(closePostDialog());
  };

  const headerContent = (
    <button
      className="cursor-pointer pb-6"
      onClick={() => {
        dispatch(closeBackdrop());
        dispatch(closePostDialog());
      }}
    >
      Cancel
    </button>
  );

  const mainContent = (
    <form className="relative flex flex-col h-full justify-between sm:h-auto pr-6">
      <div className="flex gap-2">
        <div className="flex flex-col items-center gap-y-2">
          <img
            src={imageUrl}
            height="36"
            width="36"
            alt={`${username} profile picture`}
            className="rounded-full mt-2"
          />
          <div className="border-l-2 border-border-color min-h-8 flex-1"></div>

          <img
            src={imageUrl}
            height="20"
            width="20"
            alt={`${username} profile picture`}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-1 flex-col mt-2">
          <p className="font-bold text-secondary ml-1">{username}</p>
          <textarea
            className="outline-none resize-none min-h-6 ml-1 text-secondary bg-primary max-h-44"
            ref={textareaRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={`What's on your mind, ${firstName} ${lastName}?`}
            rows={width >= 700 ? 1 : 2}
          ></textarea>

          <div className="w-8 mt-1">
            <label htmlFor="file" className="bg-red-400 w-10">
              <Icon
                icon="bi:image"
                fontSize={30}
                className="text-secondary cursor-pointer p-1 border border-border-color hover:border-secondary rounded"
              />
            </label>
            <input className="hidden" id="file" type="file" accept="image/*" />
          </div>
        </div>
      </div>
    </form>
  );

  const footerContent = (
    <>
      <div className="flex justify-between items-end pt-6 pr-6">
        <div className="relative">
          <p
            className="text-secondary cursor-pointer"
            onClick={() => setIsPostAudienceOpen((prev) => !prev)}
          >
            {postAudience === PostAudienceActions.ANYONE
              ? 'Anyone can reply & share'
              : 'Only followers can reply & share'}
          </p>
          <div
            className={`absolute -z-10 left-[-10px] shadow-lg opacity-0  bg-primary text-secondaryw-[240px] border border-border-color rounded-2xl max-h-[120px]
        ${isPostAudienceOpen ? 'animate-slide-up z-10' : ''}`}
          >
            <div className="absolute -z-10 w-full h-full grid grid-rows-2 grid-cols-1 p-3">
              <button
                type="button"
                className={`flex justify-between items-center py-4 px-2 text-left font-semibold hover:bg-navigation-icon-hover rounded-md transition-opacity duration-700 ease`}
                onClick={() =>
                  handleSelectPostAudience(PostAudienceActions.ANYONE)
                }
              >
                Anyone
                <Icon
                  icon="ic:baseline-greater-than"
                  fontSize={16}
                  className="text-primary"
                />
              </button>
              <button
                type="button"
                className={`flex justify-between items-center py-4 px-2 text-left font-semibold hover:bg-navigation-icon-hover rounded-md transition-opacity duration-700 ease`}
                onClick={() =>
                  handleSelectPostAudience(PostAudienceActions.FOLLOWERS)
                }
              >
                Followers
              </button>
            </div>
          </div>
        </div>
        <Button type="submit" onClick={handleCreateNewPost}>
          Post
        </Button>
      </div>
    </>
  );

  return (
    isOpen && (
      <Dialog
        open={open}
        headerContent={headerContent}
        mainContent={mainContent}
        footerContent={footerContent}
      />
    )
  );
};

export default PostDialog;
