'use client';

import { useRef, useState } from 'react';
import useDismissEscape from '@/app/_hooks/useDismissEscape';
import { useForm } from 'react-hook-form';
import Button from './Button';
import Overlay from './Overlay';
import LogMoodModal from './LogMoodModal';
import LogMoodForm from './LogMoodForm';
import LogMoodFormMood from './LogMoodFormMood';
import LogMoodFormFeelings from './LogMoodFormFeelings';
import LogMoodFormNote from './LogMoodFormNote';
import LogMoodFormSleep from './LogMoodFormSleep';

function LogMood() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [step, setStep] = useState(1);
  const methods = useForm({
    mode: 'onSubmit',
    defaultValues: {
      feelings: [],
    },
  });
  const modalRef = useRef(null);
  const isFinalStep = step === logMoodForms.length;

  function onSubmit(data) {
    /* Example data:
    {
  "user": 2,
  "mood": 3,
  "diary_entry": "I'm tired",
  "sleep_time": 7,
  "feelings": [
    3,
    4
  ]
}
  */
    // 1. Send data to API
    // 2. Include user token

    handleClose();
  }
  // Close modal on Esc
  useDismissEscape(isOpenModal, () => setIsOpenModal(false));
  // Close modal on close button (resets step)
  function handleClose() {
    setIsOpenModal(false);
    setStep(1);
    methods.reset();
  }

  // Continue to next step (or submit if last step)
  function handleContinue() {
    if (step === logMoodForms.length) {
      methods.handleSubmit(onSubmit)();
      setIsOpenModal(false);
      setStep(1);
    } else {
      setStep(step + 1);
    }
  }

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
    {
      id: 'form-sleep',
      heading: 'How many hours did you sleep last night?',
      form: <LogMoodFormSleep />,
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
          <LogMoodModal ref={modalRef} step={step} onClose={handleClose}>
            <FormProvider {...methods}>
              <LogMoodForm form={logMoodForms[step - 1]} />

              <Button
                type={isFinalStep ? 'submit' : 'button'}
                onClick={handleContinue}
              >
                {isFinalStep ? 'Submit' : 'Continue'}
              </Button>
            </FormProvider>
          </LogMoodModal>
        </Overlay>
      )}
    </>
  );
}

export default LogMood;
