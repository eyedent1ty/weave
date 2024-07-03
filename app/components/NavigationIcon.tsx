import type { FC } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

interface NavigationIconProps {
  id: number;
  icon: string;
  href?: string;
  className?: string;
  active?: boolean;
  activeIcon?: string;
  onClick?: () => void;
  lg?: boolean
}

const NavigationIcon: FC<NavigationIconProps> = ({
  icon,
  href,
  className = '',
  active = false,
  activeIcon,
  onClick,
  lg = false
}) => {
  return href ? (
    <Link
      href={href}
      className={`h-full w-full flex items-center justify-center rounded-lg ${
        active ? 'bg-navigation-icon-hover dark:bg-primary' : ''
      } hover:bg-navigation-icon-hover dark:hover:bg-primary transition-background-color ease duration-300 ${className}`}
    >
      <Icon
        icon={(active ? activeIcon : icon) || icon}
        fontSize={lg ? 32 : 24}
        className={`text-navigation-icon ${className} ${
          active ? 'text-secondary' : ''
        }`}
      />
    </Link>
  ) : (
    <button className={`h-full w-full flex items-center justify-center rounded-lg hover:bg-navigation-icon-hover dark:hover:bg-primary transition-background-color ease duration-300 ${className}`} type="button" onClick={onClick}>
      <Icon icon={icon} fontSize={24} className="text-navigation-icon" />
    </button>
  );
};

export default NavigationIcon;
