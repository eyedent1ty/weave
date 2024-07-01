import type { FC, ReactNode } from 'react';

interface DialogInterface {
  mainContent?: ReactNode;
  footerContent?: ReactNode;
  open?: boolean;
}

const Dialog: FC<DialogInterface> = ({ mainContent, footerContent, open = false }) => {
  return (
    <dialog
      open={open}
      className="flex flex-col justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] max-h-[520px] mx-0 border border-border-color bg-primary text-secondary shadow-md rounded-3xl pl-6 pt-6 pb-4 z-50"
    >
      <main className="flex-1 overflow-auto overflow-x-hidden">{mainContent}</main>
      <footer className="h-[84px] p-6 bg-primary">{footerContent}</footer>
    </dialog>
  );
};

export default Dialog;
