'use client';

import { useState, useRef, useEffect } from 'react';
import type { FormEvent, FC } from 'react';

import { Icon } from '@iconify/react';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { addNewPost } from '@/lib/features/posts/postsSlice';
import { closePostDialog } from '@/lib/features/postDialog/postDialogSlice';

import Post from '@/classes/Post';

import Dialog from './UI/Dialog';
import Button from './UI/Button';
import { closeBackdrop } from '@/lib/features/backdrop/backdropSlice';

enum PostAudienceActions {
  ANYONE,
  FOLLOWERS
}

const PostDialog: FC<{ open?: boolean }> = ({ open }) => {
  const [content, setContent] = useState('');
  const [isPostAudienceOpen, setIsPostAudienceOpen] = useState(false);
  const [postAudience, setPostAudience] = useState(PostAudienceActions.ANYONE);
  const [width, setWidth] = useState(window.innerWidth);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const isOpen = useAppSelector((state) => state.postDialog.isOpen);
  const currentUser = useAppSelector((state) => state.currentUser);
  const dispatch = useAppDispatch();

  const { username, imageUrl, firstName, lastName } = currentUser;

  // Resizing the width of the window
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Keydown event (Escape)
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        dispatch(closePostDialog());
      }
    };

    document.documentElement.addEventListener('keydown', handleKeydown);

    return () => {
      document.documentElement.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  // Resizable textarea based on its content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [content]);

  // Mount animation
  useEffect(() => {
    if (isOpen && dialogRef.current) {
      const animationOptions = {
        duration: 300
      };

      let keyframe = [
        {
          opacity: '0',
          transform: 'translateY(200%)'
        },
        {
          opacity: '1',
          transform: 'translateY(0)'
        }
      ];

      if (width >= 700) {
        keyframe = [
          {
            opacity: '0',
            transform: 'translateY(100px) scale(0.5)'
          },
          {
            opacity: '1',
            transform: 'translateY(-75%) scale(1)'
          }
        ];
      }

      const dialogAnimation = dialogRef.current.animate(
        keyframe,
        animationOptions
      );

      return () => {
        dialogAnimation.cancel();
      };
    }
  }, [isOpen]);

  const handleSelectPostAudience = (selectedAudience: PostAudienceActions) => {
    setPostAudience(selectedAudience);
    setIsPostAudienceOpen(false);
  };

  const handleCreateNewPost = (e: FormEvent) => {
    e.preventDefault();
    const instance = new Post(content, username);

    const newPost = { ...instance };

    dispatch(addNewPost(newPost));
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
    <form
      className="relative flex flex-col h-full justify-between sm:h-auto"
      onSubmit={handleCreateNewPost}
    >
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
      <Button type="submit">Post</Button>
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
        ref={dialogRef}
      />
    )
  );
};

export default PostDialog;
