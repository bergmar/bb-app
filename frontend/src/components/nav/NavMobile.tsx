import { useState } from 'react';
import { MenuItem } from './Nav';
import MenuIcon from '@mui/icons-material/Menu';
import { bbColors } from '../../../tailwind.config.js';
import { Link, useLocation } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  items: MenuItem[];
}
const NavMobile = ({ items }: Props) => {
  const location = useLocation();
  const currentPath = location.pathname.slice(1);

  const [isActive, setIsActive] = useState(false);
  const handleClose = () => setIsActive(false);
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsActive(false);
    }
  };

  return (
    <div className="w-100 border-1 absolute z-40 flex w-full place-content-end bg-transparent">
      <dialog
        open={isActive}
        className={`fixed left-0 z-20 m-0 h-[98vh] w-[98vw] translate-x-[1vw] translate-y-[1vh] bg-bb-blue-medium`}
        onKeyDown={handleKeyPress}
      >
        <button onClick={handleClose} className="absolute right-2 top-2">
          <CloseIcon sx={{ color: bbColors.sand.base }} fontSize="large" />
        </button>
        <ul className="py-8 font-bb-heading text-5xl text-bb-sand-base">
          {items?.map(({ name, path }) => (
            <li key={name} className="px-8 py-3">
              {currentPath !== path ? (
                <Link to={path} onClick={handleClose}>
                  {name}
                </Link>
              ) : (
                <span className="border-b-4 border-bb-blue-light text-bb-blue-light">
                  {name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </dialog>

      <button
        className="border-1 align-center flex items-center bg-transparent p-0"
        onClick={() => setIsActive(!isActive)}
        onKeyDown={handleKeyPress}
      >
        <MenuIcon sx={{ color: bbColors.blue.dark, fontSize: '4rem' }} />
      </button>
    </div>
  );
};

export default NavMobile;
