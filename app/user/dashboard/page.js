import CardAverage from '@/app/_components/containers/CardAverage';
import CardTrends from '@/app/_components/containers/CardTrends';
import Container from '@/app/_components/containers/Container';
import Header from '@/app/_components/layout/Header';

function Page() {
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

  return (
    <main className='flex flex-col justify-center gap-600 pt-500 px-200 md:px-400 w-full max-w-site mx-auto'>
      <Header user={true} />

      <article className='grid grid-cols-1 lg:grid-cols-[auto_auto] xl:grid-cols-[1fr_2fr] gap-400 pb-1000'>
        <Container tag='section' className='flex flex-col gap-300 p-300'>
          <CardAverage average={averageTest} />
          <CardAverage average={averageTest2} />
        </Container>

        <Container tag='section' className='max-w-full p-400'>
          <CardTrends />
        </Container>
      </article>
    </main>
  );
}

export default Page;
