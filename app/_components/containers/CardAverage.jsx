import Image from 'next/image';
import { moodStyles as styles } from '@/app/_lib/moodStyles';
import Heading from '../text/Heading';
import Paragraph from '../text/Paragraph';

function CardAverage({ average = null, className = '' }) {
  if (!average) return null;

  const { averageType, averageMood, averageMoodDescription, mood } = average;

  return (
    <div className={`flex flex-col w-full h-1/2 ${className}`}>
      {/* Content */}
      <div className='flex items-center gap-050 mb-150'>
        <Heading tag='h2' preset='5' className='text-neutral-900'>
          Average {averageType}
        </Heading>
        <Paragraph>(Last 5 Check-ins)</Paragraph>
      </div>

      <div
        className={`grow relative flex flex-col justify-center gap-150 min-h-[160px] p-250 rounded-16 ${styles[mood].background}`}
      >
        {/* Background image */}
        <Image
          src='/pattern.svg'
          alt='Background'
          width={65}
          height={160}
          className='absolute top-0 right-0 object-cover'
        />

        <Heading tag='h3' preset='4'>
          {averageMood}
        </Heading>
        <Paragraph preset='7'>{averageMoodDescription}</Paragraph>
      </div>
    </div>
  );
}

export default CardAverage;
