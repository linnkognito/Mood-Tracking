import Image from 'next/image';
import Paragraph from '../text/Paragraph';
import Heading from '../text/Heading';
import Container from './Container';

function CardFeaturedFeeling({
  mood = 'Very Happy',
  quote = 'When your heart is full, share your light with the world.',
}) {
  return (
    <Container
      className='
        grow flex flex-col sm:flex-row
        items-center sm:items-start
        justify-center sm:justify-between
        max-sm:gap-400
        w-full lg:max-w-3/5 min-h-full
        max-sm:px-200 max-sm:py-400 sm:p-400
        text-center sm:text-left
        overflow-hidden
    '
    >
      <div className='grow flex flex-col justify-between items-stretch w-full max-w-[246px] border-test'>
        <Heading tag='h2'>
          <span className='block text-preset-3 text-neutral-600'>
            I'm feeling
          </span>
          <span className='block text-preset-2'>{mood}</span>
        </Heading>

        {/* Quote */}
        <div className='hidden sm:flex flex-col gap-150 '>
          <Image src='/icons/quote.svg' alt='' width={24} height={24} />
          <Paragraph preset='6-italic'>“{quote}”</Paragraph>
        </div>
      </div>

      {/* Image */}
      <div className='flex justify-center'>
        <div className='relative aspect-square w-[200px] sm:w-[320px] sm:-mb-1000'>
          <Image src='/icons/very-happy.svg' alt='' fill className='' />
        </div>
      </div>

      {/* Quote Mobile */}
      <div className='sm:hidden flex flex-col items-center gap-150 max-w-[311px]'>
        <Image src='/icons/quote.svg' alt='' width={24} height={24} />
        <Paragraph preset='6-italic'>“{quote}”</Paragraph>
      </div>
    </Container>
  );
}

export default CardFeaturedFeeling;
