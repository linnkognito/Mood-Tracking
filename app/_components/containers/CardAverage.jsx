import Image from 'next/image';
import Heading from '../text/Heading';
import Paragraph from '../text/Paragraph';

function CardAverage({ average = null, className = '' }) {
  if (!average) return null;

  const { averageType, averageMood, averageMoodDescription, mood } = average;

  const styles = {
    blank: 'bg-blue-100',
    happy: 'bg-green-300',
    veryHappy: 'bg-amber-600',
    neutral: 'bg-blue-300',
    sleep: 'bg-blue-600',
    sad: 'bg-indigo-200',
    verySad: 'bg-red-300',
  };

  return (
    <div className={`relative w-full h-[150px] ${className}`}>
      {/* Background image */}
      <Image
        src='/pattern.svg'
        alt='Background'
        width={61}
        height={150}
        className='absolute right-0 object-cover'
      />

      {/* Content */}
      <div className='flex items-center gap-050 mb-150'>
        <Heading tag='h2' preset='5' className='text-neutral-900'>
          Average {averageType}
        </Heading>
        <Paragraph>(Last 5 Check-ins)</Paragraph>
      </div>

      <div
        className={`flex flex-col justify-center gap-150 p-250 rounded-16 ${styles[mood]}`}
      >
        <Heading tag='h3' preset='4'>
          {averageMood}
        </Heading>
        <Paragraph preset='7'>{averageMoodDescription}</Paragraph>
      </div>
    </div>
  );
}

export default CardAverage;
