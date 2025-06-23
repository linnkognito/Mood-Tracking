'use client';

import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { applyFieldErrors } from '@/app/_utils/handleFieldErrors';
import { createUser } from '@/app/_api/usersApi';
import AuthFormCredentials from './AuthFormCredentials';
import AuthFormPersonalize from './AuthFormPersonalize';
import Button from './Button';
import Form from './Form';

function AuthFormSignup({ step, setStep }) {
  const [authError, setAuthError] = useState(null);
  const router = useRouter();
  const FIELDS_STEP_1 = ['email', 'password'];
  const FIELDS_STEP_2 = ['name'];

  const methods = useForm({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
      name: '',
      image: null,
    },
  });
  const {
    handleSubmit,
    trigger,
    setError,
    formState: { isSubmitting },
  } = methods;

  async function handleContinue() {
    if (step === 1) {
      const isValid = await trigger(FIELDS_STEP_1);
      if (isValid) setStep(2);
    }
    if (step === 2) {
      const isValid = await trigger(FIELDS_STEP_2);
      if (!isValid) return;
      await handleSubmit(onSubmit)();
    }
  }
  async function onSubmit(newUser) {
    try {
      const res = await createUser(newUser);

      if (!res?.ok) {
        setAuthError('Failed to create user');
        return;
      }

      const signInRes = await signIn('credentials', {
        redirect: false,
        email: newUser.email,
        password: newUser.password,
      });

      if (!signInRes?.ok) {
        setAuthError('Failed to sign in');
        return;
      }

      router.push('/user/dashboard');
    } catch (err) {
      applyFieldErrors(err, setError, setAuthError);
      console.error('Auth error:', err);
    }
  }

  return (
    <FormProvider {...methods}>
      <Form className='mt-400'>
        {step === 1 && <AuthFormCredentials variant='signup' />}
        {step === 2 && <AuthFormPersonalize />}

        <Button
          type='button'
          disabled={isSubmitting}
          className='w-full mt-400'
          onClick={handleContinue}
        >
          {step === 1 ? 'Sign up' : 'Start Tracking'}
        </Button>

        {authError && (
          <p role='alert' className='text-red-700'>
            {authError}
          </p>
        )}
      </Form>
    </FormProvider>
  );
}

export default AuthFormSignup;
