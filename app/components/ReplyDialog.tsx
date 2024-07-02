'use client';

import { useState, useEffect, useRef } from 'react';
import type { FC } from 'react';
import Dialog from './UI/Dialog';
import Button from './UI/Button';
import { useAppSelector } from '@/lib/hooks';
import { useAppDispatch } from '@/lib/hooks';
import { closeBackdrop } from '@/lib/features/backdrop/backdropSlice';
import { closeReplyDialog } from '@/lib/features/replyDialog/replyDialogSlice';

interface ReplyDialogInterface {
  open: boolean;
}

const ReplyDialog: FC<ReplyDialogInterface> = ({ open = false }) => {
  const [content, setContent] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const isOpen = useAppSelector((state) => state.replyDialog.isOpen);
  const currentPost = useAppSelector((state) => state.replyDialog.currentPost);
  const currentUser = useAppSelector((state) => state.currentUser);
  const dispatch = useAppDispatch();

  const { imageUrl, username } = currentUser;

  // Resizable textarea based on its content
  useEffect(() => {
    if (textareaRef.current && content.trim().length <= 500) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [content]);

  const handleClickCancel = () => {
    dispatch(closeBackdrop());
    dispatch(closeReplyDialog());
  };

  const headerContent = <button onClick={handleClickCancel}>Cancel</button>;

  const mainContent = (
    <div className="flex flex-col items-start">
      <div className="flex w-full gap-2">
        <div className="flex flex-col items-center gap-y-1">
          <img
            src={currentPost?.userImageUrl}
            height="36"
            width="36"
            alt={`${currentPost?.username} profile picture`}
            className="rounded-full"
          />
          <div className="border-l-2 border-border-color min-h-8 flex-1"></div>
        </div>

        <div className="flex flex-1 flex-col mt-2 ml-1 pr-6">
          <p className="font-bold text-secondary">{currentPost?.username}</p>
          <p>{currentPost?.content}</p>
          {currentPost?.imagePostUrl ? (
            <img
              src={currentPost?.imagePostUrl}
              alt="image of the post"
            />
          ) : null}
        </div>
      </div>

      <div className="flex w-full gap-2">
        <div className="flex flex-col items-center gap-y-1">
          <img
            src={imageUrl}
            height="36"
            width="36"
            alt={`${username} profile picture`}
            className="rounded-full mt-1"
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
          <p className="font-bold text-secondary ml-1">johndanieldel</p>
          <textarea
            className="outline-none resize-none min-h-6 ml-1 text-secondary bg-primary h-auto max-h-44 overflow-auto font-light text-sm"
            placeholder="Reply to fiz.codes..."
            maxLength={500}
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            ref={textareaRef}
          ></textarea>
        </div>
      </div>
    </div>
  );

  const footerContent = (
    <div className="h-[84px] px-6 pt-6 flex justify-end items-end">
      <Button>Post</Button>
    </div>
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

export default ReplyDialog;
