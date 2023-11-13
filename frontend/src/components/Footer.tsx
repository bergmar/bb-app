import { ReactNode } from 'react';
import LogotypeSmall from './LogotypeSmall';

interface Props {
  children: ReactNode;
}
function Footer({ children }: Props) {
  return (
    <footer
      className={
        `mt-16 flex items-center px-7 py-10 font-bb-body text-sm ` +
        `bg-bb-blue-dark text-white`
      }
    >
      <div className="w-full">{children}</div>
      <LogotypeSmall type="footer" />
    </footer>
  );
}

export default Footer;
