import Header from '@/app/_components/layout/Header';
import PersonalizeSection from '@/app/_components/ui/PersonalizeSection';

function Page() {
  return (
    <main className='flex flex-col items-center gap-600 pt-1000'>
      <Header />

      <article className='px-200'>
        <PersonalizeSection />
      </article>
    </main>
  );
}

export default Page;
