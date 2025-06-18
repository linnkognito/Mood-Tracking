import Logo from '@/app/_components/layout/Logo';
import AuthSection from '@/app/_components/ui/AuthSection';

function Page() {
  return (
    <main className='flex flex-col items-center gap-600 pt-1000'>
      <header>
        <Logo />
      </header>

      <article className='px-200'>
        <AuthSection type='login' />
      </article>
    </main>
  );
}

export default Page;
