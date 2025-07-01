import CardFeaturedFeeling from '@/app/_components/containers/CardFeaturedFeeling';
import CardFeaturedReflection from '@/app/_components/containers/CardFeaturedReflection';
import CardFeaturedSleep from '@/app/_components/containers/CardFeaturedSleep';
import CardTrends from '@/app/_components/containers/CardTrends';
import Container from '@/app/_components/containers/Container';
import Header from '@/app/_components/layout/Header';

async function Page() {
  const averageTest = {
    averageType: 'Mood',
    averageMood: 'Keep tracking!',
    averageMoodDescription: 'Log 5 check-ins to see your average mood.',
    mood: 'blank',
  };
  const averageTest2 = {
    averageType: 'Sleep',
    averageMood: 'Not enough data yet!',
    averageMoodDescription: 'Track 5 nights to view average sleep.',
    mood: 'blank',
  };
  const reflectionTest = {
    tags: ['Grateful', 'Optimistic'],
    reflection: 'Woke up early and finally tackled a big project!',
  };

  //PLACEHOLDER
  // Request UserMood data
  // const { feelings, sleep_time: sleep } = userMood;

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
            {/* <CardAverage data={feelings} /> */}
            {/* <CardAverage data={sleep} /> */}
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
