'use client';

import { useRef, useState } from 'react';
import useDismiss from '@/app/_hooks/useDismiss';

import Button from './Button';
import Overlay from './Overlay';
import LogMoodModal from './LogMoodModal';
import LogMoodForm from './LogMoodForm';
import LogMoodFormMood from './LogMoodFormMood';
import LogMoodFormFeelings from './LogMoodFormFeelings';

function LogMood() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [step, setStep] = useState(1);
  const modalRef = useRef(null);

  // Close modal on Esc or click outside
  useDismiss(modalRef, isOpenModal, () => setIsOpenModal(false));

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
      id: 'form-mood',
      heading: 'How did you feel?',
      description: `Select up to three tags:`,
      form: <LogMoodFormFeelings />,
    },
    {
      id: 'form-mood',
      heading: 'How was your mood today?',
      form: <LogMoodFormMood />,
    },
    {
      id: 'form-mood',
      heading: 'How was your mood today?',
      form: <LogMoodFormMood />,
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
        <Overlay>
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
