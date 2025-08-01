import Heading from '../text/Heading';
import Paragraph from '../text/Paragraph';
import Button from './Button';
import Form from './Form';

function SettingsModal({ ref, onClose }) {
  return (
    <section
      role='dialog'
      aria-labelledby='settings-modal-heading'
      ref={ref}
      onClose={onClose}
      className='flex flex-col gap-300 md:gap-400 w-full max-w-[335px] md:max-w-[600px] px-250 py-500 md:px-500 md:py-600 bg-neutral-0 rounded-16 shadow-container z-10'
    >
      <div className='w-full flex flex-col gap-100'>
        <Heading id='settings-modal-heading' preset='3'>
          Update your profile
        </Heading>
        <Paragraph preset='6'>
          Personalize your account with your name and photo.
        </Paragraph>
      </div>

      <Form>
        {/* //PLACEHOLDER Name input */}
        {/* //PLACEHOLDER File input */}
        {/* Get current photo for logged in user || default */}

        <Button type='submit' onClick={onClose}>
          Save changes
        </Button>
      </Form>
    </section>
  );
}

export default SettingsModal;
