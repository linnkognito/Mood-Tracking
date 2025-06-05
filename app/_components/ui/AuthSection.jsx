import Link from 'next/link';
import AuthForm from '@/app/_components/ui/AuthForm';
import Paragraph from '@/app/_components/text/Paragraph';
import FormCardSection from './FormCardSection';

function AuthSection({ type = 'signup' }) {
  const signup = type === 'signup';

  return (
    <FormCardSection
      heading={signup ? 'Create an account' : 'Welcome back!'}
      description={
        signup
          ? 'Join or track your daily mood and sleep with ease.'
          : 'Log in to continue tracking your mood and sleep.'
      }
    >
      <AuthForm type={type} />

      <Paragraph className='mt-250 text-center text-neutral-600'>
        {signup ? 'Already got an account?' : 'Haven’t got an account?'}
        <Link href='/' className='text-link'>
          {signup ? 'Log in.' : 'Sign up.'}
        </Link>
      </Paragraph>
    </FormCardSection>
  );
}

export default AuthSection;
