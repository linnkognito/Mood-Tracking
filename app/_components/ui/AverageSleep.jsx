import { calcAverageTrend } from '@/app/_lib/calcAverageTrend';
import { sleepTimeAverage } from '@/app/_data/sleepTime';
import Heading from '../text/Heading';
import Image from 'next/image';
import AverageDescription from './AverageDescription';

async function AverageSleep({ average }) {
  const sleepAmount = sleepTimeAverage.find((time) => time.id === average);
  const trend = await calcAverageTrend('sleep');

  return (
    <>
      <Heading tag='h3' preset='4' className='text-neutral-0'>
        <Image src='/icons/sleep.svg' alt='Sleep' width={24} height={24} />
        {sleepAmount.label} Hours
      </Heading>

      {trend && <AverageDescription trend={trend} />}
    </>
  );
}

export default AverageSleep;
