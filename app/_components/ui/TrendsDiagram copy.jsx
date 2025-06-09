import { moodTestData } from '@/app/_lib/moodTestData';

import { format } from 'date-fns';
import Image from 'next/image';
import Paragraph from '../text/Paragraph';
import TrendsPillar from './TrendsPillar';

function TrendsDiagram() {
  const hours = ['9+', '7-8', '5-6', '3-4', '0-2'];
  const month = format(new Date(), 'MMMM');
  const date = format(new Date(), 'dd');

  return (
    <div className='flex items-start gap-150 md:gap-200 w-full'>
      {/* Hours column */}
      <div className='grid grid-cols-1 grid-rows-5 gap-500 min-w-[68px]'>
        {hours.map((h) => (
          <div className='flex items-center text-neutral-600'>
            <Image
              src='/icons/sleep.svg'
              alt='Sleep icon'
              width={15}
              height={15}
              className='pr-075'
            />
            <Paragraph preset='9'>{`${h} hours`}</Paragraph>
          </div>
        ))}
      </div>

      {/* Diagram -------------- */}
      <div className='relative w-full max-w-[calc(var(--spacing-500) * 11 + var(--spacing-150) * 10)] pt-050 overflow-x-auto overflow-y-hidden'>
        {/* Rows (decorative lines only) */}
        <div className='absolute inset-0 top-075 z-0 flex flex-col gap-500'>
          {[...Array(5)].map((_, i) => (
            <div
              key={`trends-row-${i}`}
              className='h-[13.2px] border-t border-blue-100'
            />
          ))}
        </div>

        <div className='grid grid-cols-[repeat(11,var(--spacing-500))] grid-rows-[repeat(6,var(--spacing-500))] gap-150 md:gap-200 pt-200'>
          {/* Mood Pillars */}
          {moodTestData.map((moodData) => (
            <TrendsPillar
              key={moodData.id}
              moodData={moodData}
              className={`row-start-5 row-end-6`}
            />
          ))}

          {/* Empty row */}
          {/* <div className='row-start-5 col-span-11' /> */}

          {/* Last row: Dates */}
          {[...Array(11)].map((_, i) => {
            return (
              <div
                key={`trends-date-${i}`}
                className='row-start-6 flex flex-col items-center gap-075 w-500 border'
              >
                <Paragraph preset='9'>{month}</Paragraph>
                <Paragraph preset='8'>{date}</Paragraph>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TrendsDiagram;
