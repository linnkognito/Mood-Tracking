import { reflectionTest } from '@/app/_data/averageTestData'; //TEST DATA

// import { getUser } from '@/app/_api/usersApi';
import CardFeaturedFeeling from '@/app/_components/containers/CardFeaturedFeeling';
import CardFeaturedReflection from '@/app/_components/containers/CardFeaturedReflection';
import CardFeaturedSleep from '@/app/_components/containers/CardFeaturedSleep';
import CardTrends from '@/app/_components/containers/CardTrends';
import Container from '@/app/_components/containers/Container';
import Header from '@/app/_components/layout/Header';
import CardAverage from '@/app/_components/containers/CardAverage';

async function Page() {
  // const user = await getUser();

  return (
    <main className='flex flex-col justify-center gap-600 pt-500 px-200 md:px-400 w-full max-w-site mx-auto'>
      <Header />

      <article className='flex flex-col gap-400 pb-1000'>
        {/* Section 1 (Current Feeling) */}
        <section className='flex max-md:flex-col items-stretch gap-400 w-full h-full'>
          <CardFeaturedFeeling />

          <div className='flex flex-col gap-250 w-full md:w-2/5'>
            <CardFeaturedSleep hours={8} />
            <CardFeaturedReflection
              reflection={reflectionTest.reflection}
              tags={reflectionTest.tags}
            />
          </div>
        </section>

        {/* Section 2 (Average & Trends) */}
        <section className='flex max-lg:flex-col gap-400 w-full'>
          <Container tag='section' className='flex flex-col gap-300 p-300'>
            <CardAverage variant='mood' />
            <CardAverage variant='sleep' />
          </Container>

          <Container tag='section' className='max-w-full p-400'>
            <CardTrends />
          </Container>
        </section>
      </article>
    </main>
  );
}

export default Page;
