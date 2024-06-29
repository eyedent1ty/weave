'use client';

import { useState } from 'react';
import type { FC } from 'react';
import type { UserInterface } from '@/types';

import { useAppSelector } from '@/lib/hooks';

import Searchbar from '../components/search/Searchbar';
import SearchList from '../components/search/SearchList';

const SearchPage: FC = () => {
  const [query, setQuery] = useState('');

  const handleChangeQuery = (newQuery: string) => {
    setQuery(newQuery);
  };

  const handleResetQuery = () => {
    setQuery('');
  };

  const users = useAppSelector((state) => state.users);

  const filteredUsers = users.filter((user) =>
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );
  
  return (
    <main className="py-4">
      <div className="mx-5">
        <Searchbar
          query={query}
          onChangeQuery={handleChangeQuery}
          onResetQuery={handleResetQuery}
        />
      </div>
      <SearchList users={filteredUsers} />
    </main>
  );
};

export default SearchPage;
