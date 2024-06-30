import type { FC } from 'react';

import type { User } from '@/types';

import Button from '../UI/Button';

import { formatNumber } from '@/utils';

interface SearchItemProps extends User {}

const SearchItem: FC<SearchItemProps> = ({
  username,
  firstName,
  lastName,
  imageUrl,
  followers
}) => {
  return (
    <li className="pt-4 ml-5">
      <article className="flex">
        <section>
          <img
            src={imageUrl}
            alt="Ann Curtis profile picture"
            height={40}
            width={40}
            className="rounded-full max-h-10 max-w-10"
          />
        </section>
        <section className="flex-1 flex flex-col ml-3 border-b border-border-color pb-4 gap-2">
          <div className="flex-1 flex justify-between items-center">
            <div>
              <p className="font-semibold text-sm">{username}</p>
              <p className="text-navigation-icon text-sm font-extraLight">
                {firstName} {lastName}
              </p>
            </div>
            <Button className="max-h-9 px-8 font-medium text-base mr-5">
              Follow
            </Button>
          </div>
          <footer className="text-sm">
            {formatNumber(followers)} followers
          </footer>
        </section>
      </article>
    </li>
  );
};

export default SearchItem;
