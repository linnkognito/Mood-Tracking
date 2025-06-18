import Link from 'next/link';
import AuthFormSignup from '@/app/_components/ui/AuthFormSignup';
import AuthFormLogin from '@/app/_components/ui/AuthFormLogin';
import Paragraph from '@/app/_components/text/Paragraph';
import FormCardSection from './FormCardSection';

function AuthSection({ type = 'signup' }) {
  const data = {
    signup: {
      heading: 'Create an account',
      description: 'Join or track your daily mood and sleep with ease.',
      account: 'Already got an account?',
      link: 'Log in.',
      path: '/auth/login',
      form: <AuthFormSignup />,
    },
    login: {
      heading: 'Welcome back!',
      description: 'Log in to continue tracking your mood and sleep.',
      account: 'Haven’t got an account?',
      link: 'Sign up.',
      path: '/auth/signup',
      form: <AuthFormLogin />,
    },
  };

  return (
    <FormCardSection
      heading={data[type].heading}
      description={data[type].description}
    >
      {data[type].form}

      <Paragraph className='mt-250 text-center text-neutral-600'>
        {data[type].account}
        <Link href={data[type].path} className='text-link'>
          {data[type].link}
        </Link>
      </Paragraph>
    </FormCardSection>
  );
}

export default AuthSection;
