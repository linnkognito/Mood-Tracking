import Container from '@/app/_components/containers/Container';
import Heading from '@/app/_components/text/Heading';
import Paragraph from '@/app/_components/text/Paragraph';

function FormCardSection({ children, heading, description }) {
  return (
    <Container
      tag='section'
      variant='secondary'
      className='w-full max-w-[530px]'
    >
      <Heading tag='h1' preset='3' className='mb-100' id='form-heading'>
        {heading}
      </Heading>

      <Paragraph className='text-neutral-600'>{description}</Paragraph>

      {children}
    </Container>
  );
}

export default FormCardSection;
