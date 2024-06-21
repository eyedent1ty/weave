import { useState, useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';

const MenuDialog = ({
  onClickOutside,
  isOpen
}: {
  onClickOutside: Function;
  isOpen: boolean;
}) => {
  const drawer = useRef<HTMLDivElement>(null);
  const [apperanceSetting, setApperanceSetting] = useState(false);

  const handleClickOutside = (e: Event) => {
    if (
      e.target !== drawer.current &&
      !drawer.current?.contains(e.target as Node)
    ) {
      onClickOutside();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <div
      ref={drawer}
      className={`shadow-lg opacity-0 -z-10 absolute bg-secondary bottom-0 left-0 w-[240px] border rounded-2xl 
        ${isOpen && !apperanceSetting ? 'animate-slide-up z-0' : ''} ${apperanceSetting ? 'animate-slide-next z-0' : ''}
      `}
    >
      {apperanceSetting ? (
        <div className="w-full h-full grid grid-rows-2 p-3">
          <div className="flex justify-between items-center">
            <button onClick={() => setApperanceSetting(false)}>
              <Icon icon="formkit:arrowleft" fontSize={14} />
            </button>
            <p>Apperance</p>
            <div></div>
          </div>
          <div className="grid grid-cols-3 bg-navigation-icon-hover rounded-xl">
            <button type="button" className="flex justify-center items-center">
              <Icon icon="ph:sun" fontSize={24} />
            </button>
            <button type="button" className="flex justify-center items-center">
              <Icon icon="ph:moon" fontSize={24} />
            </button>
            <button
              type="button"
              className="flex justify-center items-center font-semibold"
            >
              Auto
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full h-full grid grid-rows-4 grid-cols-1 p-3">
          <button
            type="button"
            className={`flex justify-between items-center py-4 px-2 text-left font-semibold hover:bg-navigation-icon-hover rounded-md transition-opacity duration-700 ease ${
              isOpen ? 'opacity-1' : 'opacity-0'
            }`}
            onClick={() => setApperanceSetting(true)}
          >
            Appearance
            <Icon
              icon="ic:baseline-greater-than"
              fontSize={16}
              className="text-primary"
            />
          </button>
          <button
            type="button"
            className={`py-4 px-2 text-left font-semibold hover:bg-navigation-icon-hover rounded-md transition-opacity duration-700 ease ${
              isOpen ? 'opacity-1' : 'opacity-0'
            }`}
          >
            Settings
          </button>
          <button
            type="button"
            className={`py-4 px-2 text-left font-semibold hover:bg-navigation-icon-hover rounded-md transition-opacity duration-700 ease ${
              isOpen ? 'opacity-1' : 'opacity-0'
            }`}
          >
            Report a problem
          </button>
          <button
            type="button"
            className={`py-4 px-2 text-left font-semibold hover:bg-navigation-icon-hover rounded-md transition-opacity duration-700 ease ${
              isOpen ? 'opacity-1' : 'opacity-0'
            }`}
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuDialog;
