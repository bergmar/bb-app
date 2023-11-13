import clsx from 'clsx';
import { ReactNode } from 'react';

interface Props {
  type: 'info' | 'error';
  children: ReactNode;
}
function MessageBar({ type, children }: Props) {
  const isError = type === 'error';
  return (
    <div
      className={clsx(
        isError &&
          'border-b-4 border-red-400 bg-red-100 px-2 py-1 text-center text-red-900'
      )}
    >
      {children}
    </div>
  );
}

export default MessageBar;
