'use client';

import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';

import Link from 'next/link';
import NavigationIcon from './NavigationIcon';
import MenuDialog from './MenuDialog';
import useMenuDialog from '../../hooks/useMenuDialog';

interface NavigationDetail {
  href: string;
  icon: string;
  activeIcon?: string;
}

const Nav = () => {
  const pathname = usePathname();
  const menuDialog = useMenuDialog();

  const navitationDetails: NavigationDetail[] = [
    {
      href: '/',
      icon: 'clarity:house-line',
      activeIcon: 'clarity:house-solid'
    },
    {
      href: '/search',
      icon: 'clarity:search-line'
    },
    {
      href: '/activity',
      icon: 'clarity:heart-line',
      activeIcon: 'clarity:heart-solid'
    },
    {
      href: '/profile',
      icon: 'clarity:user-line',
      activeIcon: 'clarity:user-solid'
    }
  ];

  return (
    <nav className="fixed bottom-0 w-screen flex bg-inherit text-secondary sm:left-0 sm:h-screen sm:w-[76px] sm:flex sm:flex-col sm:justify-between sm:items-center">
      <Link href="/" className="hidden sm:block py-4">
        <Icon icon="icon-park-solid:three-triangles" fontSize={34} className="text-secondary" />
      </Link>
      <ul className="w-full grid grid-cols-4 sm:w-auto sm:block sm:space-y-1">
        {navitationDetails.map((navigationDetail) => (
          <li
            key={navigationDetail.href}
            className="h-[64px] sm:w-[60px] sm:h-[60px]"
          >
            <NavigationIcon
              {...navigationDetail}
              active={pathname === navigationDetail.href || false}
            />
          </li>
        ))}
      </ul>

      <div className="relative mb-[22px]">
        <MenuDialog
          onClickOutside={menuDialog.closeDialog}
          isOpen={menuDialog.isOpen}
        />
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
