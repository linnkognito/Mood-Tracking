import Form from './Form';
import FormCardSection from './FormCardSection';
import FormRow from './FormRow';
import Button from './Button';
import InputFile from './InputFile';
import InputText from './InputText';

function PersonalizeSection() {
  return (
    <FormCardSection
      heading='Personalize your experience'
      description='Add your name and a profile picture to make Mood yours.'
    >
      <Form className='py-400'>
        <FormRow label='Name' htmlFor='name' className='mb-300'>
          <InputText type='text' id='name' placeholder='Jane Appleseed' />
        </FormRow>

        <FormRow htmlFor='profile-picture'>
          <InputFile type='file' id='profile-picture' label='Upload Image' />
        </FormRow>

        <Button type='submit' className='mt-400'>
          Start Tracking
        </Button>
      </Form>
    </FormCardSection>
  );
}

export default PersonalizeSection;
