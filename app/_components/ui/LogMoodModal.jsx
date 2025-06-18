import Heading from '../text/Heading';

import ButtonCloseModal from './ButtonCloseModal';
import LogMoodProgressBar from './LogMoodProgressBar';

function LogMoodModal({ children, ref, step, onClose }) {
  return (
    <section
      ref={ref}
      aria-labelledby='logmood-heading'
      className='relative flex flex-col gap-400 w-full max-w-[600px] h-fit px-500 py-600 bg-light-gradient rounded-16 border'
    >
      <ButtonCloseModal onClose={onClose} />

      <Heading id='logmood-heading' tag='h1' preset='2' className='mb-100'>
        Log your mood.
      </Heading>

      <LogMoodProgressBar step={step} />

      <div>{children}</div>
    </section>
  );
}

export default LogMoodModal;
