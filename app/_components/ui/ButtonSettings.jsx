'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Overlay from './Overlay';
import SettingsModal from './SettingsModal';

function ButtonSettings() {
  const modalRef = useRef(null);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  const handleClick = () => {
    setShowSettingsModal(true);
    console.log('clicked');
  };

  return (
    <>
      <button
        type='button'
        aria-label='Settings'
        onClick={handleClick}
        className='flex gap-125 w-full mb-050 cursor-pointer bg-black'
      >
        <Image
          src='/icons/settings.svg'
          alt='Settings'
          width={16}
          height={16}
        />
        Settings
      </button>

      {showSettingsModal && (
        <Overlay isOpen={showSettingsModal}>
          <SettingsModal
            ref={modalRef}
            onClose={() => setShowSettingsModal(false)}
          />
        </Overlay>
      )}
    </>
  );
}

export default ButtonSettings;
