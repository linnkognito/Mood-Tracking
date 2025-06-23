'use client';

import { FormProvider } from 'react-hook-form';
import AuthFormCredentials from './AuthFormCredentials';
import AuthFormPersonalize from './AuthFormPersonalize';
import Button from './Button';
import Form from './Form';

function AuthFormSignup({ form }) {
  const { step, authError, isSubmitting, handleContinue, methods } = form;

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
