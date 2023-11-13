function PreStartHeader() {
  return (
    <div className="relative h-[40vw] w-full bg-bb-blue-lighter sm:hidden">
      <div
        className={
          `w-100 relative h-[30vw] -translate-y-[10vw] rotate-6 transform bg-bb-blue-light ` +
          `after:absolute after:right-0 after:block after:h-full after:w-48 after:translate-x-[99%] after:transform after:bg-bb-blue-light ` +
          `before:absolute before:left-0 before:block before:h-full before:w-48 before:-translate-x-[99%] before:transform before:bg-bb-blue-light`
        }
      />
    </div>
  );
}

export default PreStartHeader;
