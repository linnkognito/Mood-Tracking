import Heading from '../text/Heading';
import Paragraph from '../text/Paragraph';
import Form from './Form';

function LogMoodForm({ form = null }) {
  if (!form) return null;

  return (
    <div className='w-full'>
      <div className='mb-400'>
        <Heading id='form-heading' tag='h2' preset='3'>
          {form.heading}
        </Heading>

        {form.description && (
          <Paragraph preset='6' className='text-neutral-600'>
            {form.description}
          </Paragraph>
        )}
      </div>

      <Form className='flex flex-col gap-150'>{form.form}</Form>
    </div>
  );
}

export default LogMoodForm;
