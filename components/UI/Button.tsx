import type { FC, ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  type?: 'submit' | 'button' | 'reset';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={`border border-border-color px-4 py-1 rounded-lg font-semibold bg-primary transition-all ease-in duration-200 ${className} ${
        disabled ? 'bg-gray-400' : ''
      }`}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
