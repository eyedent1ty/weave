import { useState, useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';

import { useAppDispatch } from '@/lib/hooks';
import { closePostDialog } from '@/lib/features/postDialog/postDialogSlice';

import Button from './UI/Button';

const PostDialog = () => {
  const editableRef = useRef<HTMLTextAreaElement | null>(null);
  const [thread, setThread] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (editableRef.current) {
      // Resizable textarea based on its content
      editableRef.current.style.height = 'auto';
      editableRef.current.style.height = `${editableRef.current.scrollHeight}px`;
    }
  }, [thread]);

  return (
    <>
      <div className="backdrop-blur-1 bg-black/60 absolute top-0 right-0 bottom-0 left-0" onClick={() => dispatch(closePostDialog())}></div>
      <dialog
        open
        className="max-w-[calc(100vw - 32px)] w-[620px] bg-primary rounded-3xl px-6 pt-6 pb-4"
      >
        <form className="flex flex-col h-auto">
          <div className="flex gap-2">
            <div className="flex flex-col items-center gap-y-2">
              <Icon
                className="mt-2"
                icon="carbon:user-avatar-filled"
                fontSize={36}
              />
              <div className="border-l-2 border-navigation-icon min-h-8 flex-1"></div>
              <Icon
                className="mt-2"
                icon="carbon:user-avatar-filled"
                fontSize={20}
              />
            </div>
            <div className="flex flex-1 flex-col mt-2">
              <p className="font-bold text-secondary ml-1">johndanieldel</p>
              <textarea
                className="outline-none overflow-hidden resize-none h-5 ml-1 text-secondary bg-primary"
                ref={editableRef}
                value={thread}
                onChange={(e) => setThread(e.target.value)}
                placeholder="What's on your mind, John Daniel?"
                rows={1}
              ></textarea>

              <div className="w-8 mt-1">
                <label htmlFor="file" className="bg-red-400 w-10">
                  <Icon
                    icon="bi:image"
                    fontSize={30}
                    className="text-secondary cursor-pointer p-1 border border-primary hover:border-secondary rounded"
                  />
                </label>
                <input className="hidden" id="file" type="file" accept="image/*" />
              </div>
            </div>
          </div>
          <footer className="flex justify-between">
            <div></div>
            <Button type="submit">Post</Button>
          </footer>
        </form>
      </dialog>
    </>
  );
};

export default PostDialog;
