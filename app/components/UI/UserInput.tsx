import type { FC, ChangeEvent } from 'react';

interface UserInputProps {
  id?: string;
  value?: string;
  type?: string;
  className?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const UserInput: FC<UserInputProps> = ({
  id,
  value,
  type = 'text',
  className,
  placeholder,
  onChange
}) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={`bg-primary text-secondary block w-full focus:outline-none ${className}`}
      value={value}
      onChange={onChange}
    />
  );
};

export default UserInput;
