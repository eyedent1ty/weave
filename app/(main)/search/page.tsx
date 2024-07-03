'use client';

import { useState } from 'react';
import type { FC } from 'react';

import { useAppSelector } from '@/lib/hooks';

import Searchbar from '../../components/search/Searchbar';
import SearchList from '../../components/search/SearchList';

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
    <main className="py-4 flex flex-col h-full">
      <div className="mx-5">
        <Searchbar
          query={query}
          onChangeQuery={handleChangeQuery}
          onResetQuery={handleResetQuery}
        />
      </div>
        {filteredUsers.length ? <SearchList users={filteredUsers} /> : <div className="flex-1 flex justify-center items-center text-secondary"><h2>No Results</h2></div>}
    </main>
  );
};

export default SearchPage;
