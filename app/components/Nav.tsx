'use client';

import Link from 'next/link';
import Image from 'next/image';
import brand from '../../public/brand.svg';
import NavigationIcon from './NavigationIcon';
import CustomIcon from './CustomIcon';

const Nav = () => {
  return (
    <nav className="fixed bottom-0 w-screen sm:h-screen sm:w-[76px] sm:flex sm:flex-col sm:justify-between sm:items-center">
      <Link href="/" className="hidden sm:block">
        <Image
          src={brand}
          alt="Weave Logo"
          width={34}
          height={34}
          className="py-4"
        />
      </Link>

      <ul className="grid grid-cols-4 sm:block sm:space-y-1">
        <li className="h-[64px] sm:w-[60px] sm:h-[60px]">
          <NavigationIcon href="/" icon="clarity:house-line" />
        </li>
        <li className="h-[64px] sm:w-[60px] sm:h-[60px]">
          <NavigationIcon href="/" icon="clarity:search-line" />
        </li>
        <li className="h-[64px] sm:w-[60px] sm:h-[60px]">
          <NavigationIcon href="/" icon="clarity:heart-line" />
        </li>
        <li className="h-[64px] sm:w-[60px] sm:h-[60px]">
          <NavigationIcon href="/" icon="clarity:user-line" />
        </li>
      </ul>

      <button className="mb-[22px] hidden sm:block">
        <CustomIcon
          icon="hugeicons:menu-03"
          className="hover:text-primary transition-color ease duration-100"
        />
      </button>
    </nav>
  );

  // return (
  //   <nav className="fixed bottom-0 w-screen min-h-[68px]">
  //     <ul className="grid grid-cols-4 h-[64px]">
  //       <NavigationIcon icon="clarity:house-line" href="/" className="m-1" />
  //       <NavigationIcon
  //         icon="clarity:search-line"
  //         href="/search"
  //         className="m-1"
  //       />

  //       <NavigationIcon
  //         icon="clarity:heart-line"
  //         href="/activity"
  //         className="m-1"
  //       />
  //       <NavigationIcon
  //         icon="clarity:user-line"
  //         href="/profile"
  //         className="m-1"
  //       />
  //     </ul>
  //   </nav>
  // );
};

export default Nav;
