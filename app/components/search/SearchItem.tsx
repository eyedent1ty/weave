import Image from 'next/image';
import type { FC } from 'react';

import type { User } from '@/types';

import Button from '../UI/Button';

interface SearchItemProps extends User {
}

const SearchItem: FC<SearchItemProps> = () => {
  return (
    <li className="pt-4 ml-5">
      <article className="flex">
        <section>
          <img
            src="https://scontent.fmnl16-1.fna.fbcdn.net/v/t1.6435-9/81710879_2493312150907255_6445336796950691840_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeEBVMYOhIDPGLpk_G94Nq6-iz8rnrCv71aLPyuesK_vVl_K0n6gB0jqQnHGvHUal68ukR1zT8MP5A2iG_KSDzvh&_nc_ohc=3OS0Nk6zUfwQ7kNvgF9uVt8&_nc_ht=scontent.fmnl16-1.fna&oh=00_AYAJp8Mx_xEPhTVwIbDfjyuchy_GmWL3pdFtfzPClPmoWA&oe=66A75232"
            alt="Ann Curtis profile picture"
            height={45}
            width={45}
            className="rounded-full"
          />
        </section>
        <section className="flex-1 flex flex-col ml-3 border-b border-border-color pb-4 gap-2">
          <div className="flex-1 flex justify-between items-center">
            <div>
              <p className="font-semibold">annecurstismith</p>
              <p className="text-navigation-icon text-sm font-extraLight">Anne Curtis</p>
            </div>
            <Button className="max-h-9 px-8 font-medium text-base mr-5">Follow</Button>
          </div>
          <footer className="text-sm">958K followers</footer>
        </section>
      </article>
    </li>
  );
};

export default SearchItem;
