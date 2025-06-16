// import { moodStyles as styles } from '@/app/_lib/moodStyles';
import Image from 'next/image';
import Heading from '../text/Heading';
import Paragraph from '../text/Paragraph';

function CardAverage({ variant, average = null, className = '' }) {
  const theme = average ? moodStyles[average.mood] : moodStyles.blank;
  const description = average ? average.description : '';

  return (
    <div className={`flex flex-col w-full h-1/2 ${className}`}>
      {/* Content */}
      <div className='flex items-center gap-050 mb-150'>
        <Heading tag='h2' preset='5' className='text-neutral-900'>
          {average ? `Average ${variant === 'mood' ? 'Mood' : 'Sleep'}` : ''}
        </Heading>
        <Paragraph>(Last 5 Check-ins)</Paragraph>
      </div>

      <div
        className={`grow relative flex flex-col justify-center gap-150 min-h-[160px] p-250 rounded-16 ${theme.background}`}
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
          {average}
        </Heading>
        <Paragraph preset='7'>{average}</Paragraph>
      </div>
    </div>
  );
}

export default CardAverage;
