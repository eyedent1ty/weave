'use client';

import { useState } from 'react';
import type { FC } from 'react';

import Searchbar from '../components/search/Searchbar';
import SearchItem from '../components/search/SearchItem';

const SearchPage: FC = () => {
  const [query, setQuery] = useState('');

  const handleChangeQuery = (newQuery: string) => {
    setQuery(newQuery);
  };

  const handleResetQuery = () => {
    setQuery('');
  };

  return (
    <main className="py-4">
      <div className="mx-5">
        <Searchbar query={query} onChangeQuery={handleChangeQuery} onResetQuery={handleResetQuery} />
      </div>
      <ul className="mt-10">
        <SearchItem id={1} username="" firstName="" lastName="" followers={123} imageUrl="123123" />
      </ul>
    </main>
  );
};

export default SearchPage;
