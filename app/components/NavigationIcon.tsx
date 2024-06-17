import Link from 'next/link';
import CustomIcon from './CustomIcon';

const NavigationIcon = ({
  icon,
  href,
  className = ''
}: {
  icon: string;
  href: string;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className="h-full w-full flex items-center justify-center  rounded-lg hover:bg-navigation-icon-hover transition-background-color ease duration-300"
    >
      <CustomIcon icon={icon} />
    </Link>
  );
};

export default NavigationIcon;
