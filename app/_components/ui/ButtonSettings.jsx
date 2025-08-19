import { useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Overlay from './Overlay';
import SettingsModal from './SettingsModal';

function ButtonSettings({ user }) {
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  const handleOpenModal = (e) => {
    e.stopPropagation();
    setShowSettingsModal((prev) => !prev);
  };

  const handleCloseModal = () => {
    setShowSettingsModal(false);
  };

  return (
    <>
      <button
        type='button'
        aria-label='Settings'
        onClick={handleOpenModal}
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
            <SettingsModal user={user} onClose={handleCloseModal} />
          </Overlay>,
          document.body
        )}
    </>
  );
}

export default ButtonSettings;
