import Image from 'next/image';
import Paragraph from '../text/Paragraph';
import Heading from '../text/Heading';
import Container from './Container';

function CardFeaturedFeeling({
  mood = 'Very Happy',
  quote = 'When your heart is full, share your light with the world.',
}) {
  return (
    <Container className='relative flex flex-col items-center md:items-start justify-center md:justify-between w-full md:w-3/5 min-w-fit md:h-[340px] max-md:gap-400 max-md:px-200 max-md:py-400 md:p-400 overflow-hidden text-center md:text-left z-10'>
      <Image
        src='/icons/very-happy.svg'
        alt=''
        width={320}
        height={320}
        className='hidden md:block absolute bottom-[-30px] right-400 z-0'
      />

      <div className='max-w-[246px] z-10'>
        <Heading tag='h2'>
          <span className='block text-preset-3 text-neutral-600'>
            I'm feeling
          </span>
          <span className='block text-preset-2'>{mood}</span>
        </Heading>
      </div>

      <Image
        src='/icons/very-happy.svg'
        alt=''
        width={200}
        height={200}
        className='block md:hidden'
      />

      {/* Quote */}
      <div className='flex flex-col max-md:items-center gap-150 max-w-[246px] z-10'>
        <Image src='/icons/quote.svg' alt='' width={24} height={24} />
        <Paragraph preset='6-italic'>{quote}</Paragraph>
      </div>
    </Container>
  );
}

export default CardFeaturedFeeling;
