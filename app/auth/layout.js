import Header from '../_components/layout/Header';

function AuthLayout({ children }) {
  return (
    <main className='flex flex-col items-center gap-600 pt-1000'>
      <Header variant='auth' />

      <article className='px-200'>{children}</article>
    </main>
  );
}

export default AuthLayout;
