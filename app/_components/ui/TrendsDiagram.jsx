import { moodTestData } from '@/app/_data/moodTestData';
import { sleepTime } from '@/app/_data/sleepTime';
import { format, subDays } from 'date-fns';
import Image from 'next/image';
import Paragraph from '../text/Paragraph';
import TrendsPillar from './TrendsPillar';

function TrendsDiagram() {
  return (
    <div className='flex items-start gap-150 md:gap-200 w-full min-h-[312px]'>
      {/* Hours column */}
      <div className='grid grid-cols-1 grid-rows-5 gap-500 min-w-[68px]'>
        {sleepTime.map((hours) => (
          <div
            key={`trends-hour-${hours.id}`}
            className='flex items-center text-neutral-600'
          >
            <Image
              src='/icons/sleep.svg'
              alt='Sleep icon'
              width={15}
              height={15}
              className='pr-075'
            />
            <Paragraph preset='9'>{`${hours.label} hours`}</Paragraph>
          </div>
        ))}
      </div>

      {/* Diagram Wrapper -------------- */}
      <div className='relative flex flex-col min-h-[312px] pt-050 overflow-x-auto overflow-y-hidden scrollbar-trends'>
        {/* Rows (decorative lines only) */}
        <div className='absolute inset-0 top-075 z-0 flex flex-col gap-500'>
          {[...Array(5)].map((_, i) => (
            <div
              key={`trends-row-${i}`}
              className='h-[13.2px] border-t border-blue-100'
            />
          ))}
        </div>

        <div className='flex-grow flex flex-col justify-end gap-150 md:gap-200 pt-200'>
          {/* Mood Pillars */}
          {moodTestData.map((moodData) => (
            <TrendsPillar
              key={`trendPillar-${moodData.id}`}
              moodData={moodData}
            />
          ))}
        </div>

        {/* Dates */}
        <div className='flex gap-150 md:gap-200 pt-100 max-sm:pb-125'>
          {[...Array(11)].map((_, i) => {
            const day = subDays(new Date(), 11 - i);
            return (
              <div
                key={`trends-date-${i}`}
                className='row-start-6 flex flex-col items-center gap-075 w-500'
              >
                <Paragraph preset='9'>{format(day, 'MMM')}</Paragraph>
                <Paragraph preset='8'>{format(day, 'dd')}</Paragraph>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TrendsDiagram;
