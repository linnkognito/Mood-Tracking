'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { applyFieldErrors } from '@/app/_utils/handleFieldErrors';
import Button from '@/app/_components/ui/Button';
import Form from '@/app/_components/ui/Form';

function AuthFormLogin() {
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
      const res = await signIn('credentials', {
        redirect: false,
        callbackUrl: '/user/dashboard',
        email,
        password,
      });

      if (!res?.ok) {
        setAuthError('Invalid credentials');
        return;
      }

      router.push('/user/dashboard');
    } catch (err) {
      applyFieldErrors(err.data.error ?? {}, setError, setAuthError);
      console.error('Auth error:', err);
    }
  }

  return (
    <Form className='mt-400' onSubmit={handleSubmit(onSubmit)}>
      <AuthFormCredentials
        variant='login'
        register={register}
        errors={errors}
      />

      <Button type='submit' className='w-full mt-400' disabled={isSubmitting}>
        {isSubmitting ? 'Signing in...' : 'Sign In'}
      </Button>

      {authError && <p className='text-red-700'>{authError}</p>}
    </Form>
  );
}

export default AuthFormLogin;
