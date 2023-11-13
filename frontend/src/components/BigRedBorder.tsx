function BigRedBorder() {
  return (
    <div
      className={
        `absolute h-[44vw] w-full -rotate-12 transform bg-bb-red-base sm:h-[20vh] ` +
        `after:absolute after:right-0 after:block after:h-full after:w-48 after:translate-x-[99%] after:transform after:bg-bb-red-base ` +
        `before:absolute before:left-0 before:block before:h-full before:w-48 before:-translate-x-[99%] before:transform before:bg-bb-red-base`
      }
    ></div>
  );
}
export default BigRedBorder;
