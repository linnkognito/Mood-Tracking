import Heading from '../text/Heading';
import Button from './Button';

import ButtonCloseModal from './ButtonCloseModal';
import LogMoodProgressBar from './LogMoodProgressBar';

function LogMoodModal({ children, ref, step, onClose, handleContinue }) {
  return (
    <section
      ref={ref}
      aria-labelledby='logmood-heading'
      className='relative flex flex-col gap-400 w-[600px] min-w-full px-500 py-600 bg-light-gradient rounded-16 border'
    >
      <ButtonCloseModal onClose={onClose} />

      <Heading id='logmood-heading' tag='h1' preset='2' className='mb-100'>
        Log your mood.
      </Heading>

      <LogMoodProgressBar step={step} />

      {children}

      <Button onClick={handleContinue}>Continue</Button>
    </section>
  );
}

export default LogMoodModal;
