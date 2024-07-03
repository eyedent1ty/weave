import type { FC } from 'react';
import { Icon } from '@iconify/react';

interface SearchbarProps {
  query: string;
  onChangeQuery: (newQuery: string) => void;
  onResetQuery: () => void;
}

const Searchbar: FC<SearchbarProps> = ({
  query,
  onChangeQuery,
  onResetQuery
}) => {
  return (
    <div className="flex bg-tertiary rounded-2xl border border-border-color px-5 py-3 items-center">
      <label htmlFor="query">
        <Icon
          icon="clarity:search-line"
          fontSize={18}
          className="font-bold text-navigation-icon mr-2"
        />
      </label>
      <input
        type="text"
        id="query"
        placeholder="Search"
        className="bg-tertiary flex-1 text-sm focus:outline-none"
        value={query}
        onChange={(e) => onChangeQuery(e.target.value)}
      />
      {query.length ? (
        <button type="button" onClick={onResetQuery}>
          <Icon
            icon="maki:cross"
            fontSize={18}
            className="font-bold text-navigation-icon"
          />
        </button>
      ) : null}
    </div>
  );
};

export default Searchbar;
