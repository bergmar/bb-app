import imgLogo from '../assets/logo-big.svg';
import clsx from 'clsx';

interface Props {
  type?: string;
}

function LogotypeSmall({ type }: Props) {
  const isFooter = type === 'footer';
  return (
    <img
      className={clsx(
        isFooter ? 'h-12 opacity-70' : 'w-[25vw] sm:w-[20vh]'
      )}
      src={imgLogo}
      alt="Baffin Baywatch"
    />
  );
}
export default LogotypeSmall;
