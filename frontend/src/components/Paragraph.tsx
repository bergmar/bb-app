import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
function Paragraph({ children }: Props) {
  return (
    <p
      className={`w-full px-0 pb-2 pt-5 font-bb-body text-lg text-bb-sand-dark`}
    >
      {children}
    </p>
  );
}

export default Paragraph;
