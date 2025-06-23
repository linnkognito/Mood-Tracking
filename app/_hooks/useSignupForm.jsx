'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { createUser } from '@/app/_api/usersApi';
import { applyFieldErrors } from '@/app/_utils/handleFieldErrors';

export function useSignupForm() {
  const [step, setStep] = useState(1);
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
      if (isValid) {
        setAuthError(null);
        setStep(2);
        return;
      }
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

  return { step, setStep, authError, isSubmitting, handleContinue, methods };
}
