import Image from 'next/image';
import Paragraph from '../text/Paragraph';
import Heading from '../text/Heading';
import Container from './Container';

function CardFeaturedFeeling({
  mood = 'Very Happy',
  quote = 'When your heart is full, share your light with the world.',
}) {
  return (
    <Container className='flex max-sm:flex-col items-center sm:items-start justify-center sm:justify-between w-full md:max-w-3/5 h-fit min-h-[340px] max-sm:gap-400 max-sm:px-200 max-sm:py-400 sm:p-400 overflow-hidden text-center sm:text-left'>
      <div className='flex flex-col justify-between w-full max-w-[246px] h-full border'>
        <Heading tag='h2'>
          <span className='block text-preset-3 text-neutral-600'>
            I'm feeling
          </span>
          <span className='block text-preset-2'>{mood}</span>
        </Heading>

        {/* Quote */}
        <div className='flex flex-col items-center gap-150'>
          <Image src='/icons/quote.svg' alt='' width={24} height={24} />
          <Paragraph preset='6-italic'>“{quote}”</Paragraph>
        </div>
      </div>

      <div className='w-[55%] h-full'>
        <div className='relative aspect-square w-[200px] sm:w-[320px]'>
          <Image src='/icons/very-happy.svg' alt='' fill className='' />
        </div>
      </div>

      {/* <div className='sm:hidden flex flex-col max-sm:items-center gap-150 max-w-[246px]'>
        <Image src='/icons/quote.svg' alt='' width={24} height={24} />
        <Paragraph preset='6-italic'>{quote}</Paragraph>
      </div> */}
    </Container>
  );
}

export default CardFeaturedFeeling;
