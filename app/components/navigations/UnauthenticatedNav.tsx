'use client';

import type { FC } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import Button from '../UI/Button';
import NavigationIcon from '../NavigationIcon';
import { useAppDispatch } from '@/lib/hooks';
import { openBackdrop } from '@/lib/features/backdrop/backdropSlice';
import { openPostDialog } from '@/lib/features/postDialog/postDialogSlice';

const UnauthenticatedNav: FC = () => {
  const pathname = usePathname();
  const router = useRouter();

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
      <div className="fixed top-0 flex justify-between items-center w-full px-6 backdrop-blur-xl bg-white/90 h-full max-h-[74px] sm:hidden">
        <Link href="/" className="">
          <Icon
            icon="icon-park-solid:three-triangles"
            fontSize={34}
            className="text-secondary"
          />
        </Link>
        <Button
          className="bg-secondary text-primary border-none"
          onClick={handleClickLogin}
        >
          Log In
        </Button>
      </div>

      <nav className="fixed bottom-0 w-screen flex bg-inherit text-secondary sm:flex sm:flex-row sm:bottom-auto sm:h-auto sm:w-full sm:top-0 sm:justify-between sm:items-center sm:backdrop-blur-xl sm:bg-white/80 sm:px-5 sm:py-3">
        <Link href="/" className="hidden sm:block">
          <Icon
            icon="icon-park-solid:three-triangles"
            fontSize={34}
            className="text-secondary"
          />
        </Link>
        <ul className="w-full grid grid-cols-5 items-center sm:w-auto sm:grid-cols-4 sm:gap-1">
          {navitationDetails.map((navigationDetail) => (
            <li
              key={navigationDetail.id}
              className={`h-[64px] sm:w-[100px] sm:h-[60px] ${
                !navigationDetail.href ? 'sm:hidden' : ''
              }`}
            >
              <NavigationIcon
                {...navigationDetail}
                active={pathname === navigationDetail.href || false}
                lg
              />
            </li>
          ))}
        </ul>

        <div className="hidden sm:block">
          <Button
            className="bg-secondary text-primary border-none"
            onClick={handleClickLogin}
          >
            Log In
          </Button>
        </div>
      </nav>
    </>
  );
};

export default UnauthenticatedNav;