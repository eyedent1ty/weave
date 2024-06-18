'use client';

import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';

import Link from 'next/link';
import Image from 'next/image';
import brand from '../../public/brand.svg';
import NavigationIcon from './NavigationIcon';

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 w-screen sm:left-0 sm:h-screen sm:w-[76px] sm:flex sm:flex-col sm:justify-between sm:items-center">
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
          <NavigationIcon
            href="/"
            icon="clarity:house-line"
            activeIcon="clarity:house-solid"
            active={pathname === '/' ? true : false}
          />
        </li>
        <li className="h-[64px] sm:w-[60px] sm:h-[60px]">
          <NavigationIcon
            href="/search"
            icon="clarity:search-line"
            active={pathname === '/search' ? true : false}
          />
        </li>
        <li className="h-[64px] sm:w-[60px] sm:h-[60px]">
          <NavigationIcon
            href="/activity"
            icon="clarity:heart-line"
            activeIcon="clarity:heart-solid"
            active={pathname === '/activity' ? true : false}
          />
        </li>
        <li className="h-[64px] sm:w-[60px] sm:h-[60px]">
          <NavigationIcon
            href="/profile"
            icon="clarity:user-line"
            activeIcon="clarity:user-solid"
            active={pathname === '/profile' ? true : false}
          />
        </li>
      </ul>

      <button className="mb-[22px] hidden sm:block">
        <Icon
          icon="hugeicons:menu-03"
          fontSize={24}
          className="text-navigation-icon hover:text-primary transition-color ease duration-100"
        />
      </button>
    </nav>
  );
};

export default Nav;
