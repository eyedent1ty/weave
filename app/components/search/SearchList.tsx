import type { FC } from 'react';

import type { UserInterface } from '@/types';

import SearchItem from './SearchItem';

interface SearchListProps {
  users: UserInterface[];
}

const SearchList: FC<SearchListProps> = ({ users }) => {
  return (
    <ul className="mt-2">
      {users.map((user) => (
        <SearchItem key={user.id} {...user} />
      ))}
    </ul>
  );
};

export default SearchList;
