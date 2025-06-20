import AuthFormLogin from '@/app/_components/ui/AuthFormLogin';
import AuthSection from '@/app/_components/ui/AuthSection';

function Page() {
  const optionsLogin = {
    heading: 'Welcome back!',
    description: 'Log in to continue tracking your mood and sleep.',
    formRedirect: {
      text: 'Haven’t got an account?',
      linkText: 'Sign up.',
      linkHref: '/auth/signup',
    },
  };

  return (
    <AuthSection options={optionsLogin}>
      <AuthFormLogin />
    </AuthSection>
  );
}

export default Page;
