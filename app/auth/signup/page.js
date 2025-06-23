'use client';

import { useSignupForm } from '@/app/_hooks/useSignupForm';
import { signupSteps } from '@/app/_data/signupStepsData';
import AuthFormSignup from '@/app/_components/ui/AuthFormSignup';
import AuthSection from '@/app/_components/ui/AuthSection';

function Page() {
  const form = useSignupForm();

  return (
    <AuthSection options={signupSteps[form.step - 1] ?? signupSteps[0]}>
      <AuthFormSignup form={form} />
    </AuthSection>
  );
}

export default Page;
