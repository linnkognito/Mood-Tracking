'use client';

import { useFormContext } from 'react-hook-form';
import FormRow from '@/app/_components/ui/FormRow';
import InputText from '@/app/_components/ui/InputText';

function AuthFormCredentials({
  register: propRegister,
  errors: propErrors,
  variant = 'signup',
}) {
  const context = useFormContext();
  const register = context?.register || propRegister;
  const errors = context?.formState?.errors || propErrors;

  return (
    <>
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
          autoComplete='email'
          autoFocus
        />
      </FormRow>

      <FormRow label='Password' htmlFor='password'>
        <InputText
          type='password'
          id='password'
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: Number(process.env.NEXT_PUBLIC_MIN_PASSWORD_LENGTH) || 3,
              message: `Password must be at least ${process.env.NEXT_PUBLIC_MIN_PASSWORD_LENGTH} characters`,
            },
          })}
          error={errors.password?.message}
          autoComplete={
            variant === 'signup' ? 'new-password' : 'current-password'
          }
        />
      </FormRow>
    </>
  );
}

export default AuthFormCredentials;
