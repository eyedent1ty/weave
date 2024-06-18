'use client';

import { useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';

import Link from 'next/link';
import Image from 'next/image';
import brand from '../../public/brand.svg';
import NavigationIcon from './NavigationIcon';
import useMenuDialog from '../../hooks/useMenuDialog';

const Nav = () => {
  const pathname = usePathname();
  const menuDialog = useMenuDialog();
  const drawer = useRef(null);

  const handleClickOutside = (e: Event) => {
    if (e.target !== drawer.current) {
      menuDialog.closeDialog();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <nav className="fixed bottom-0 w-screen flex bg-secondary sm:left-0 sm:h-screen sm:w-[76px] sm:flex sm:flex-col sm:justify-between sm:items-center">
      <Link href="/" className="hidden sm:block">
        <Image
          src={brand}
          alt="Weave Logo"
          width={34}
          height={34}
          className="py-4"
        />
      </Link>
      <ul className="w-full grid grid-cols-4 sm:w-auto sm:block sm:space-y-1">
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

      <div className="relative mb-[22px]">
        <div
          ref={drawer}
          className={`opacity-0 -z-10 absolute bg-secondary bottom-0 left-0 w-[240px] h-[240px] border rounded-2xl ${
            menuDialog.isOpen ? 'animate-slide-up z-0' : 'animate-slide-down'
          }`}
        ></div>
        <button
          className="hidden text-navigation-icon hover:text-primary w-14 h-14 sm:flex sm:justify-center sm:items-center"
          onClick={menuDialog.toggleDialog}
        >
          <Icon
            icon="hugeicons:menu-03"
            fontSize={24}
            className="text-inherit transition-color ease duration-100"
          />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
