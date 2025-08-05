import Image from 'next/image';
import Heading from '../text/Heading';
import Container from './Container';

function CardFeatured({ children, heading = '', icon = '', className = '' }) {
  return (
    <Container className={`w-full p-250 h-full ${className}`}>
      <div className='flex items-start gap-150 mb-200'>
        <Image src={icon} alt='Sleep icon' width={22} height={22} />
        <Heading tag='h3' preset='6'>
          {heading}
        </Heading>
      </div>

      {children}
    </Container>
  );
}

export default CardFeatured;
