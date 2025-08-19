'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { useState } from 'react';
import { updateUser } from '@/app/_api/usersApi';
import { applyFieldErrors } from '@/app/_utils/handleFieldErrors';
import Heading from '../text/Heading';
import Paragraph from '../text/Paragraph';
import AuthFormPersonalize from './AuthFormPersonalize';
import Form from './Form';
import Button from './Button';
import ButtonCloseModal from './ButtonCloseModal';
import FormError from './FormError';

function SettingsModal({ user, onClose }) {
  if (!user) return null;

  const [authError, setAuthError] = useState(null);

  const methods = useForm({
    defaultValues: {
      name: user.name,
    },
  });

  const {
    handleSubmit,
    setError,
    formState: { isSubmitting },
  } = methods;

  async function onSubmit(userData) {
    try {
      const res = await updateUser(userData);
      if (!res?.ok) {
        setAuthError(res.data.message);
        return;
      }
      return res;
    } catch (err) {
      applyFieldErrors(err.data.error ?? {}, setError, setAuthError);
      console.error('Auth error:', err);
    }
  }

  return (
    <section
      role='dialog'
      aria-labelledby='settings-modal-heading'
      className='relative flex flex-col gap-300 md:gap-400 w-full max-w-[600px] h-fit px-250 py-500 md:px-500 md:py-600 bg-neutral-0 rounded-16 shadow-container z-10'
      onClick={(e) => e.stopPropagation()}
    >
      <ButtonCloseModal onClose={onClose} />

      <div className='w-full flex flex-col gap-100'>
        <Heading id='settings-modal-heading' preset='3'>
          Update your profile
        </Heading>
        <Paragraph preset='6'>
          Personalize your account with your name and photo.
        </Paragraph>
      </div>

      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <AuthFormPersonalize />
          <Button
            type='submit'
            disabled={isSubmitting}
            className='w-full mt-400'
          >
            Save changes
          </Button>

          {authError && <FormError id='authError'>{authError}</FormError>}
        </Form>
      </FormProvider>
    </section>
  );
}

export default SettingsModal;
