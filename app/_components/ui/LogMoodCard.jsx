import Image from 'next/image';
import Heading from '../text/Heading';
import Button from './Button';
import LogMoodForm from './LogMoodForm';
import LogMoodFormMood from './LogMoodFormMood';

function LogMoodCard() {
  return (
    <section
      aria-labelledby='logmood-heading'
      className='relative flex flex-col gap-400 w-fit max-w-[600px] px-500 py-600 bg-light-gradient rounded-16 border'
    >
      <Image
        src='/icons/close.svg'
        alt='Close'
        width={11}
        height={11}
        className='absolute top-5 right-5 cursor-pointer'
      />

      <Heading id='logmood-heading' tag='h1' preset='2' className='mb-100'>
        Log your mood.
      </Heading>

      {/* Progress bar 
      //PLACEHOLDER
      */}

      <LogMoodForm
        heading='How was your mood today?'
        form={<LogMoodFormMood />}
      />

      <Button>Continue</Button>
    </section>
  );
}

export default LogMoodCard;
