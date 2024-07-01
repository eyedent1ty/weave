'use client';

import { useState, useRef, useEffect } from 'react';
import type { FormEvent } from 'react';

import { Icon } from '@iconify/react';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { addNewPost } from '@/lib/features/posts/postsSlice';
import { closePostDialog } from '@/lib/features/postDialog/postDialogSlice';

import Post from '@/classes/Post';

import Button from './UI/Button';

enum PostAudienceActions {
  ANYONE,
  FOLLOWERS
}

const PostDialog = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const isOpen = useAppSelector((state) => state.postDialog.isOpen);
  const currentUser = useAppSelector((state) => state.currentUser);
  const dispatch = useAppDispatch();

  const { username, imageUrl, firstName, lastName } = currentUser;

  const [content, setContent] = useState('');

  const [isPostAudienceOpen, setIsPostAudienceOpen] = useState(false);
  const [postAudience, setPostAudience] = useState(PostAudienceActions.ANYONE);

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

  useEffect(() => {
    if (textareaRef.current) {
      // Resizable textarea based on its content
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [content]);

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      const animationOptions = {
        duration: 200
      };

      const dialogAnimation = dialogRef.current.animate(
        [
          {
            opacity: '0',
            transform: 'translateY(100px) scale(0.5)'
          },
          {
            opacity: '1',
            transform: 'translateY(-75%) scale(1)'
          }
        ],
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

  return isOpen ? (
    <>
      <dialog
        open
        className="max-w-[calc(100vw - 32px)] w-[620px] bg-primary text-secondary border border-border-color rounded-3xl px-6 pt-6 pb-4 fixed z-50 top-1/2 -translate-y-3/4"
        ref={dialogRef}
      >
        <form className="flex flex-col h-auto" onSubmit={handleCreateNewPost}>
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
                rows={1}
              ></textarea>

              <div className="w-8 mt-1">
                <label htmlFor="file" className="bg-red-400 w-10">
                  <Icon
                    icon="bi:image"
                    fontSize={30}
                    className="text-secondary cursor-pointer p-1 border border-border-color hover:border-secondary rounded"
                  />
                </label>
                <input
                  className="hidden"
                  id="file"
                  type="file"
                  accept="image/*"
                />
              </div>
            </div>
          </div>
          <footer className="flex justify-between mt-12">
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
          </footer>
        </form>
      </dialog>
    </>
  ) : null;
};

export default PostDialog;
