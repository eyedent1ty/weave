'use client';

import type { FC } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import NavigationIcon from '../NavigationIcon';
import MenuDialog from '../MenuDialog';
import { useAppDispatch } from '@/lib/hooks';
import { openBackdrop } from '@/lib/features/backdrop/backdropSlice';
import { openPostDialog } from '@/lib/features/postDialog/postDialogSlice';
import useMenuDialog from '@/hooks/useMenuDialog';

const Authenticated: FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const menuDialog = useMenuDialog();

  const dispatch = useAppDispatch();

  const handleClickLogin = () => {
    router.push('/auth');
  };

  const navitationDetails = [
    {
      id: 1,
      href: '/',
      icon: 'clarity:house-line',
      activeIcon: 'clarity:house-solid'
    },
    {
      id: 2,
      href: '/search',
      icon: 'clarity:search-line'
    },
    {
      id: 3,
      icon: 'clarity:add-line',
      onClick: () => {
        dispatch(openBackdrop());
        dispatch(openPostDialog());
      }
    },
    {
      id: 4,
      href: '/activity',
      icon: 'clarity:heart-line',
      activeIcon: 'clarity:heart-solid'
    },
    {
      id: 5,
      href: '/profile',
      icon: 'clarity:user-line',
      activeIcon: 'clarity:user-solid'
    }
  ];

  return (
    <>
      <nav className="fixed bottom-0 w-screen flex bg-inherit text-secondary sm:left-0 sm:h-screen sm:w-[76px] sm:flex sm:flex-col sm:justify-between sm:items-center">
        <Link href="/" className="hidden sm:block py-4">
          <Icon
            icon="icon-park-solid:three-triangles"
            fontSize={34}
            className="text-secondary"
          />
        </Link>
        <ul className="w-full grid grid-cols-5 sm:w-auto sm:block sm:space-y-1">
          {navitationDetails.map((navigationDetail) => (
            <li
              key={navigationDetail.id}
              className={`h-[64px] sm:w-[60px] sm:h-[60px] ${
                !navigationDetail.href ? 'sm:hidden' : ''
              }`}
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
    </>
  );
};

export default Authenticated;
