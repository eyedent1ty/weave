'use client';

import { useState, useEffect } from 'react';
import type { FC } from 'react';

import { useAppSelector } from '@/lib/hooks';
import { useAppDispatch } from '@/lib/hooks';
import { fetchAllUsers } from '@/lib/features/users/usersSlice';

import Searchbar from '@/components/search/Searchbar';
import SearchList from '@/components/search/SearchList';

const SearchPage: FC = () => {
  const [query, setQuery] = useState('');

  const usersSlice = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const handleChangeQuery = (newQuery: string) => {
    setQuery(newQuery);
  };

  const handleResetQuery = () => {
    setQuery('');
  };

  const filteredUsers = usersSlice.users.filter((user) =>
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  return (
    <main className="py-4 flex flex-col h-full">
      <div className="mx-5">
        <Searchbar
          query={query}
          onChangeQuery={handleChangeQuery}
          onResetQuery={handleResetQuery}
        />
      </div>
      {usersSlice.loading ? (
        <div className="flex-1 flex justify-center items-center text-secondary">
          <h2>Loading...</h2>
        </div>
      ) : filteredUsers.length ? (
        <SearchList users={filteredUsers} />
      ) : (
        <div className="flex-1 flex justify-center items-center text-secondary">
          <h2>No Result</h2>
        </div>
      )}
    </main>
  );
};

export default SearchPage;
