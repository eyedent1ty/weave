import Link from 'next/link';
import { Icon } from '@iconify/react';

const NavigationIcon = ({
  icon,
  href,
  className = '',
  active = false,
  activeIcon
}: {
  icon: string;
  href: string;
  className?: string;
  active?: boolean;
  activeIcon?: string;
}) => {
  return (
    <Link
      href={href}
      className={`h-full w-full flex items-center justify-center rounded-lg ${active ? 'bg-navigation-icon-hover dark:bg-primary' : ''} hover:bg-navigation-icon-hover dark:hover:bg-primary transition-background-color ease duration-300 ${className}`}
    >
      <Icon
        icon={(active ? activeIcon : icon) || icon}
        fontSize={24}
        className={`text-navigation-icon ${className} ${
          active ? 'text-secondary' : ''
        }`}
      />
    </Link>
  );
};

export default NavigationIcon;
