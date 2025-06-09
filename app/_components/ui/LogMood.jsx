'use client';

import { useRef, useState } from 'react';
import useDismissEscape from '@/app/_hooks/useDismissEscape';

import Button from './Button';
import Overlay from './Overlay';
import LogMoodModal from './LogMoodModal';
import LogMoodForm from './LogMoodForm';
import LogMoodFormMood from './LogMoodFormMood';
import LogMoodFormFeelings from './LogMoodFormFeelings';
import LogMoodFormNote from './LogMoodFormNote';

function LogMood() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [step, setStep] = useState(1);
  const modalRef = useRef(null);

  // Close modal on Esc
  useDismissEscape(isOpenModal, () => setIsOpenModal(false));

  // Close modal on close button (resets step)
  const handleClose = () => {
    setIsOpenModal(false);
    setStep(1);
  };

  const handleContinue = () => {
    if (step === logMoodForms.length) {
      // final step --> save data
      setIsOpenModal(false);
      setStep(1);
    } else {
      setStep(step + 1);
    }
  };

  const logMoodForms = [
    {
      id: 'form-mood',
      heading: 'How was your mood today?',
      form: <LogMoodFormMood />,
    },
    {
      id: 'form-feelings',
      heading: 'How did you feel?',
      description: `Select up to three tags:`,
      form: <LogMoodFormFeelings />,
    },
    {
      id: 'form-note',
      heading: 'Write about your day...',
      form: <LogMoodFormNote />,
    },
  ];

  return (
    <>
      <Button
        onClick={() => setIsOpenModal(true)}
        className='w-fit min-w-[226px] mx-auto p-medium'
      >
        Log today's mood
      </Button>

      {isOpenModal && (
        <Overlay isOpen={isOpenModal}>
          <LogMoodModal
            ref={modalRef}
            step={step}
            onClose={handleClose}
            handleContinue={handleContinue}
          >
            <LogMoodForm form={logMoodForms[step - 1]} />
          </LogMoodModal>
        </Overlay>
      )}
    </>
  );
}

export default LogMood;
