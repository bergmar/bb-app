const useIsStartPage = () => {
  const isStartPage = window.location.pathname === '/';
  return isStartPage;
};

export default useIsStartPage;
