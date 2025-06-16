'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { handleLogin } from '@/app/_lib/authService';
import Button from '@/app/_components/ui/Button';
import Form from '@/app/_components/ui/Form';
import FormRow from '@/app/_components/ui/FormRow';
import InputText from '@/app/_components/ui/InputText';

function AuthForm({ type = 'signup' }) {
  const [authError, setAuthError] = useState(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit({ email, password }) {
    try {
      const userExists = await checkIfUserExists(email);
      // Signup
      if (type === 'signup') {
        if (userExists) {
          setAuthError('This email is already in use. Try logging in instead.');
          return;
        }
        sessionStorage.setItem(
          'onboarding-user',
          JSON.stringify({ email, password })
        );
        router.push(`/auth/onboarding`);
        return;
      }
      // Login
      if (type === 'login') {
        if (!userExists) {
          setAuthError(
            'This email does not belong to any account. Try signing up instead.'
          );
          return;
        }
        await handleLogin({ email, password });
        router.push('/user/dashboard');
        return;
      }
    } catch (err) {
      console.error('Auth error:', err.message);
    }
  }

  return (
    <Form type={type} className='mt-400' onSubmit={handleSubmit(onSubmit)}>
      <FormRow label='Email' htmlFor='email' className='mb-250'>
        <InputText
          type='email'
          id='email'
          placeholder='name@mail.com'
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Enter a valid email address',
            },
          })}
          error={errors.email?.message}
        />
      </FormRow>

      <FormRow label='Password' htmlFor='password'>
        <InputText
          type='password'
          id='password'
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          })}
          error={errors.password?.message}
        />
      </FormRow>

      <Button type='submit' className='w-full mt-400'>
        {type === 'signup' ? 'Sign Up' : 'Sign In'}
      </Button>

      {authError && <p className='text-red-700'>{authError}</p>}
    </Form>
  );
}

export default AuthForm;
