import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
function Code({ children }: Props) {
  return (
    <span className="mx-px inline-block bg-[rgba(0,0,0,.1)] px-2 font-medium text-red-800">
      {children}
    </span>
  );
}

export default Code;
