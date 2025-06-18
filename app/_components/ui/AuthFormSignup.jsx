'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { applyFieldErrors } from '@/app/_utils/handleFieldErrors';

function AuthFormSignup() {
  const [authError, setAuthError] = useState(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit({ email, password }) {
    try {
      const res = await createUser({ email, password });
      if (res?.ok) router.push('/user/dashboard');
      else setAuthError('Failed to create user');
    } catch (err) {
      applyFieldErrors(err, setError, setAuthError);
      console.error('Auth error:', err);
    }
  }

  return (
    <Form className='mt-400' onSubmit={handleSubmit(onSubmit)}>
      <AuthFormCredentials variant='signup' />
      <Button type='submit' className='w-full mt-400' disabled={isSubmitting}>
        {isSubmitting ? 'Signing up...' : 'Sign Up'}
      </Button>

      {authError && <p className='text-red-700'>{authError}</p>}
    </Form>
  );
}

export default AuthFormSignup;
