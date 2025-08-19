'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Overlay from './Overlay';
import SettingsModal from './SettingsModal';

function ButtonSettings({ user }) {
  const [showSettingsModal, setShowSettingsModal] = useState(true);

  return (
    <>
      <button
        type='button'
        aria-label='Settings'
        onClick={() => setShowSettingsModal(true)}
        className='flex gap-125 w-full mb-050 cursor-pointer'
      >
        <Image
          src='/icons/settings.svg'
          alt='Settings'
          width={16}
          height={16}
        />
        Settings
      </button>

      {showSettingsModal &&
        createPortal(
          <Overlay isOpen={showSettingsModal}>
            <SettingsModal
              onClose={() => setShowSettingsModal(false)}
              user={user}
            />
          </Overlay>,
          document.body
        )}
    </>
  );
}

export default ButtonSettings;
