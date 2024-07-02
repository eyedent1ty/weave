import type { FC, ReactNode, Ref, MutableRefObject } from 'react';
import { forwardRef } from 'react';

interface DialogInterface {
  headerContent?: ReactNode;
  mainContent?: ReactNode;
  footerContent?: ReactNode;
  open?: boolean;
}

const Dialog = forwardRef<HTMLDialogElement, DialogInterface>(
  (
    { headerContent, mainContent, footerContent, open },
    ref: Ref<HTMLDialogElement>
  ) => {
    return (
      <dialog
        open={open}
        className="fixed max-sm:h-screen max-sm:w-screen max-sm:top-0 flex flex-col justify-between mx-0 border border-border-color bg-primary text-secondary shadow-md pl-6 pt-6 pb-4 z-50 sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-[580px] sm:max-h-[520px] sm:rounded-3xl"
        ref={ref}
      >
        <header className="mb-6 sm:hidden">{headerContent}</header>
        <main className="flex-1 overflow-auto overflow-x-hidden">
          {mainContent}
        </main>
        <footer className="h-[84px] p-6 bg-primary">{footerContent}</footer>
      </dialog>
    );
  }
);

export default Dialog;
