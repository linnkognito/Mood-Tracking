import { moodStyles } from '@/app/_data/moodStyles';
import AverageDescription from './AverageDescription';
import Heading from '../text/Heading';
import Image from 'next/image';

async function AverageMood({ average }) {
  const mood = moodStyles[average];
  const trend = await calcAverageTrend('mood');

  return (
    <>
      <Heading tag='h3' preset='4'>
        {mood.icon && (
          <Image
            src={mood.icon.icon}
            alt={mood.icon.alt}
            width={24}
            height={24}
          />
        )}
        {mood.label}
      </Heading>

      {trend && <AverageDescription trend={trend} />}
    </>
  );
}

export default AverageMood;
