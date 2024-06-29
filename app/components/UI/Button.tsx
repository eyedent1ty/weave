import type { FC, ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  type?: 'submit' | 'button' | 'reset';
  onClick?: () => void;
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, type, onClick, className }) => {
  return (
    <button
      className={`border border-border-color px-4 py-1 rounded-lg font-semibold text-secondary bg-primary ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
