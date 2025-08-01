'use client';

import { reflectionTest } from '@/app/_data/averageTestData'; //TEST DATA
import CardFeaturedFeeling from '@/app/_components/containers/CardFeaturedFeeling';
import CardFeaturedReflection from '@/app/_components/containers/CardFeaturedReflection';
import CardFeaturedSleep from '@/app/_components/containers/CardFeaturedSleep';
import Container from '@/app/_components/containers/Container';
import Header from '@/app/_components/layout/Header';
import CardAverage from '@/app/_components/containers/CardAverage';
import Heading from '@/app/_components/text/Heading';
import TrendsDiagram from '@/app/_components/ui/TrendsDiagram';
import { useRef, useState, useEffect } from 'react';

function Page() {
  const ref = useRef(null);
  const [averageContainerWidth, setAverageContainerWidth] = useState(0);

  useEffect(() => {
    const width = ref.current.getBoundingClientRect().width;
    setAverageContainerWidth(width);
  }, [ref]);

  return (
    <main className='flex flex-col justify-center gap-600 pt-500 px-200 md:px-400'>
      <Header />

      <article className='flex flex-col gap-400 pb-1000 w-full max-w-site mx-auto'>
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
          <Container
            ref={ref}
            tag='section'
            className='flex flex-col gap-300 p-300 lg:max-w-[370px]'
          >
            <CardAverage variant='mood' />
            <CardAverage variant='sleep' />
          </Container>

          <Container tag='section' className='flex-grow p-400 lg:max-w-[768px]'>
            <Heading tag='h2' preset='3' className='mb-400'>
              Mood and sleep trends
            </Heading>
            <TrendsDiagram />
          </Container>
        </section>
      </article>
    </main>
  );
}

export default Page;
