'use client';

import { useState } from 'react';
import AuthFormSignup from '@/app/_components/ui/AuthFormSignup';
import AuthSection from '@/app/_components/ui/AuthSection';

function Page() {
  const [step, setStep] = useState(1);
  console.log(step);

  const signUpData = [
    {
      id: 'signup',
      heading: 'Create an account',
      description: 'Join or track your daily mood and sleep with ease.',
      formRedirect: {
        text: 'Already got an account?',
        linkText: 'Log in.',
        linkHref: '/auth/login',
      },
    },
    {
      id: 'onboarding',
      heading: 'Personalize your experience',
      description: 'Add your name and a profile picture to make Mood yours.',
      formRedirect: null,
    },
  ];

  return (
    <AuthSection options={signUpData[step - 1]}>
      <AuthFormSignup step={step} setStep={setStep} />
    </AuthSection>
  );
}

export default Page;
