'use client';

import { useState, useEffect, useRef } from 'react';
import type { FC } from 'react';
import { Icon } from '@iconify/react';
import Dialog from './UI/Dialog';
import Button from './UI/Button';
import { useAppSelector } from '@/lib/hooks';

interface ReplyDialogInterface {
  open: boolean;
}

const ReplyDialog: FC<ReplyDialogInterface> = ({ open = false }) => {
  const [content, setContent] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const isOpen = useAppSelector((state) => state.replyDialog.isOpen);

  useEffect(() => {
    if (textareaRef.current && content.trim().length <= 500) {
      // Resizable textarea based on its content
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
    console.log(content);
  }, [content]);

  const mainContent = (
    <div className="flex flex-col items-start">
      <div className="flex w-full gap-2">
        <div className="flex flex-col items-center gap-y-1">
          <Icon
            className="mt-2"
            icon="carbon:user-avatar-filled"
            fontSize={36}
          />
          <div className="border-l-2 border-border-color min-h-8 flex-1"></div>
        </div>

        <div className="flex flex-1 flex-col mt-2 ml-1 pr-6">
          <p className="font-bold text-secondary">johndanieldel</p>
          <p>guyssss pag ba nag thread ako nakikita din ba sa fb?</p>
        </div>
      </div>

      <div className="flex w-full gap-2">
        <div className="flex flex-col items-center gap-y-1">
          <Icon
            className="mt-1"
            icon="carbon:user-avatar-filled"
            fontSize={36}
          />
          <div className="border-l-2 border-border-color min-h-8 flex-1"></div>
          <Icon icon="carbon:user-avatar-filled" fontSize={20} />
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
    <div className="flex justify-end">
      <Button>Post</Button>
    </div>
  );

  return (
    isOpen && (
      <Dialog
        open={open}
        mainContent={mainContent}
        footerContent={footerContent}
      />
    )
  );
};

export default ReplyDialog;
