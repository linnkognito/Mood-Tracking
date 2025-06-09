'use client';

import { useState } from 'react';
import Button from './Button';
import Modal from './Modal';
import LogMoodCard from './LogMoodCard';

function LogMood() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpenModal(true)}
        className='w-fit min-w-[226px] mx-auto p-medium'
      >
        Log today's mood
      </Button>

      {isOpenModal && (
        <Modal>
          <LogMoodCard />
        </Modal>
      )}
    </>
  );
}

export default LogMood;
