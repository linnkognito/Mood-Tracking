import useDisableBackgroundScroll from '@/app/_hooks/useDisableBackgroundScroll';

function Overlay({ children, isOpen }) {
  useDisableBackgroundScroll(isOpen);

  return (
    <div className='fixed top-0 left-0 flex justify-center w-screen h-screen pt-1000 pb-800 px-300 bg-neutral-900/70 overflow-x-hidden overflow-y-auto z-[9999]'>
      {children}
    </div>
  );
}

export default Overlay;
