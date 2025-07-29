import { sleepTime } from '@/app/_data/sleepTime';
import { format } from 'date-fns';
// import { getUserMoods } from '@/app/_api/userMoodApi';
// import { getSessionToken } from '@/app/_lib/auth';
import Image from 'next/image';
import Paragraph from '../text/Paragraph';
import TrendsPillar from './TrendsPillar';
import { moodTestData } from '@/app/_data/moodTestData';

async function TrendsDiagram() {
  // const token = await getSessionToken();
  // if (!token) return null;

  // const moodData = await getUserMoods(token);
  // const moodDataLast11Days = moodData.slice(-11) || [];
  // const isEmpty = moodDataLast11Days.length === 0;

  //TEST DATA
  const moodDataLast11Days = moodTestData.slice(-11) || [];
  const isEmpty = moodDataLast11Days.length === 0;

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

        <div className='relative flex-grow flex flex-row justify-end gap-150 md:gap-200 pt-200'>
          {/* Mood Pillars */}
          {!isEmpty &&
            moodDataLast11Days.map((mood) => (
              <TrendsPillar key={`trendPillar-${mood.id}`} moodData={mood} />
            ))}
        </div>

        {/* Dates */}
        <div className='flex gap-150 md:gap-200 pt-100 max-sm:pb-125'>
          {!isEmpty &&
            moodDataLast11Days.map((mood, index) => {
              return (
                <div
                  key={`trends-date-${index}`}
                  className='row-start-6 flex flex-col items-center gap-075 w-500'
                >
                  <Paragraph preset='9'>{format(mood.date, 'MMM')}</Paragraph>
                  <Paragraph preset='8'>{format(mood.date, 'dd')}</Paragraph>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default TrendsDiagram;
