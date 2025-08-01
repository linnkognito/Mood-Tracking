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
    <div className='trends-diagram min-h-[312px]'>
      <div className='flex items-start gap-150 md:gap-200'>
        {/* Hours column */}
        <div className='grid grid-cols-1 grid-rows-[repeat(5,54px)_repeat(2,44px)] min-w-[68px]'>
          {sleepTime.map((hours) => (
            <div key={`trends-hour-${hours.id}`}>
              <div className='flex items-center text-neutral-600'>
                <Image
                  src='/icons/sleep.svg'
                  alt='Sleep icon'
                  width={15}
                  height={15}
                  className='pr-075'
                />
                <Paragraph preset='9'>{`${hours.label} hours`}</Paragraph>
              </div>
            </div>
          ))}
        </div>

        {/* Diagram Wrapper -------------- */}
        <div className='flex-grow relative grid grid-cols-[repeat(11,auto)] gap-150 md:gap-200 min-h-[312px] overflow-y-hidden overflow-x-auto scrollbar-trends z-10'>
          {/* Mood Pillars */}
          {!isEmpty &&
            moodDataLast11Days.map((mood, index) => (
              <div
                key={`trendPillar-${mood.id}`}
                className='grid grid-rows-[repeat(5,54px)_repeat(2,44px)] w-fit'
              >
                <TrendsPillar moodData={mood} className='row-end-7' />

                <div
                  key={`trendPillar-date-${index}`}
                  className='row-start-7 flex flex-col items-center justify-end gap-075 w-full'
                >
                  <Paragraph preset='9'>{format(mood.date, 'MMM')}</Paragraph>
                  <Paragraph preset='8'>{format(mood.date, 'dd')}</Paragraph>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default TrendsDiagram;
