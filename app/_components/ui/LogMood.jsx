'use client';

import { useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { logMoodForms } from '@/app/_data/logMoodFormData';
import { createUserMood } from '@/app/_api/userMoodApi';
import useDismissEscape from '@/app/_hooks/useDismissEscape';
import Button from './Button';
import Overlay from './Overlay';
import LogMoodModal from './LogMoodModal';
import LogMoodForm from './LogMoodForm';

function LogMood({ user }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [step, setStep] = useState(1);
  const modalRef = useRef(null);
  const methods = useForm({
    mode: 'onSubmit',
    defaultValues: {
      feelings: [],
    },
  });

  function onSubmit(data) {
    const moodData = {
      user: user.id,
      mood: Number(data.mood),
      diary_entry: data.diary_entry,
      sleep_time: Number(data.sleep_time),
      feelings: data.feelings.map((feeling) => Number(feeling)),
    };
    createUserMood(user.accessToken, moodData);
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
                className='mt-400'
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
