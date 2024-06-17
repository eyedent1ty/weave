import { Icon } from '@iconify/react/dist/iconify.js';

const CustomIcon = ({
  icon,
  className = ''
}: {
  icon: string;
  className?: string;
}) => {
  return (
    <Icon
      icon={icon}
      fontSize={24}
      className={`text-navigation-icon ${className}`}
    />
  );
};

export default CustomIcon;
