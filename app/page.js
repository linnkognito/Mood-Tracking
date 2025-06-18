import Header from '@/app/_components/layout/Header';
import StartPage from './_components/ui/StartPage';

function Page() {
  return (
    <main className='flex flex-col items-center gap-600 pt-1000'>
      <Header />

      <article className='px-200'>
        <StartPage />
      </article>
    </main>
  );
}

export default Page;
