function Overlay({ children }) {
  return (
    <div className='fixed top-0 left-0 flex justify-center items-center w-screen h-screen bg-neutral-900/70 overflow-hidden z-1000'>
      <div>{children}</div>
    </div>
  );
}

export default Overlay;
