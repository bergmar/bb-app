import imgLogo from '../assets/logo-big.svg';

function LogotypeBig() {
  return (
    <img
      className={'w-[75vw] sm:w-[40vh]'}
      src={imgLogo}
      alt="Baffin Baywatch"
    />
  );
}
export default LogotypeBig;
