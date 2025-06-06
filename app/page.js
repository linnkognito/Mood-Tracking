import Header from '@/app/_components/layout/Header';
import AuthSection from '@/app/_components/ui/AuthSection';

function Page() {
  return (
    // PLACEHOLDER
    // Get session
    // If user is logged in --> user/dashboard
    // If user cookie is expired --> auth/login
    // If user is not logged in --> auth/signup

    <main className='flex flex-col items-center gap-600 pt-1000'>
      <Header />

      <article className='px-200'>
        <AuthSection type='signup' />
      </article>
    </main>
  );
}

export default Page;
