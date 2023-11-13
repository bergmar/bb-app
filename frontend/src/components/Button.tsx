import clsx from 'clsx';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  isDisabled?: boolean;
  onClick: () => void;
}
function Button({ children, className, onClick, isDisabled }: Props) {
  return (
    <button
      className={clsx(
        'rounded-2xl rounded-bl-lg rounded-tr-lg border-2 border-bb-blue-dark bg-bb-sand-base p-2 px-5 font-bold text-bb-blue-dark shadow-lg transition-all',
        'hover:border-2 hover:border-bb-sand-base hover:bg-bb-blue-dark hover:text-bb-sand-base',
        className
      )}
      onClick={onClick}
      disabled={isDisabled}
    >
      {isDisabled ? 'Data is loading...' : children}
    </button>
  );
}

export default Button;
