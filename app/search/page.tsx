'use client';

import { useState } from 'react';
import type { FC } from 'react';

import Searchbar from '../components/search/Searchbar';

const SearchPage: FC = () => {
  const [query, setQuery] = useState('');

  const handleChangeQuery = (newQuery: string) => {
    setQuery(newQuery);
  };

  const handleResetQuery = () => {
    setQuery('');
  };

  return (
    <main className="py-4 px-5">
      <Searchbar query={query} onChangeQuery={handleChangeQuery} onResetQuery={handleResetQuery} />
    </main>
  );
};

export default SearchPage;
