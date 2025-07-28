import { calcAverageMoodSleep } from '@/app/_lib/calcAverageMoodSleep';
import { moodStyles } from '@/app/_data/moodStyles';
import Image from 'next/image';
import Heading from '../text/Heading';
import Paragraph from '../text/Paragraph';
import AverageMood from '../ui/AverageMood';
import AverageSleep from '../ui/AverageSleep';
import AverageNoData from '../ui/AverageNoData';

async function CardAverage({ variant, className = '' }) {
  const average = await calcAverageMoodSleep(variant);

  const getBackground = () => {
    if (average === 0) return 'bg-blue-100';
    if (variant === 'mood') return moodStyles[average].background;
    if (variant === 'sleep') return 'bg-blue-600';
  };

  return (
    <div className={`flex flex-col w-full h-1/2 ${className}`}>
      {/* Content */}
      <div className='flex items-center gap-050 mb-150'>
        <Heading tag='h2' preset='5' className='text-neutral-900'>
          {variant ? `Average ${variant === 'mood' ? 'Mood' : 'Sleep'}` : ''}
        </Heading>
        <Paragraph>(Last 5 Check-ins)</Paragraph>
      </div>

      <div
        className={`grow relative flex flex-col justify-center gap-150 min-h-[160px] p-250 rounded-16 ${getBackground()}`}
      >
        <Image
          src='/pattern.svg'
          alt='Background'
          width={65}
          height={160}
          className='absolute top-0 right-0 object-cover'
        />

        {average === 0 ? (
          <AverageNoData variant={variant} />
        ) : variant === 'mood' ? (
          <AverageMood average={average} />
        ) : (
          <AverageSleep average={average} />
        )}
      </div>
    </div>
  );
}

export default CardAverage;
