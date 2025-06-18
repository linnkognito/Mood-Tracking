'use client';

import { useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import useDismissEscape from '@/app/_hooks/useDismissEscape';
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

  function onSubmit(data) {
    const userToken = sessionStorage.getItem('token');
    createMood(userToken, data);
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
  async function handleContinue() {
    const currentFields = logMoodForms[step - 1].fields;
    const isValid = await methods.trigger(currentFields);
    if (!isValid) return;

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
      fields: ['mood'],
      form: <LogMoodFormMood />,
    },
    {
      id: 'form-feelings',
      heading: 'How did you feel?',
      description: `Select up to three tags:`,
      fields: ['feelings'],
      form: <LogMoodFormFeelings />,
    },
    {
      id: 'form-note',
      heading: 'Write about your day...',
      fields: ['diary_entry'],
      form: <LogMoodFormNote />,
    },
    {
      id: 'form-sleep',
      heading: 'How many hours did you sleep last night?',
      fields: ['sleep_time'],
      form: <LogMoodFormSleep />,
    },
  ];

  const isFinalStep = step === logMoodForms.length;

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
                className='-mt-150'
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
