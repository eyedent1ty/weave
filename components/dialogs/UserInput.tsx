import type { ChangeEvent, FC } from 'react';

interface UserInputProps {
  id?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const UserInput: FC<UserInputProps> = (props) => {
  return (
    <input
      className="border border-black rounded-md p-2 font-light text-sm w-full text-secondary"
      {...props}
    />
  );
};

export default UserInput;
