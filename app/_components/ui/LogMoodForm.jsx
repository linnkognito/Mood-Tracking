import Heading from '../text/Heading';
import Form from './Form';

function LogMoodForm({ heading = '', form = null }) {
  return (
    <div>
      <Heading id='form-heading' tag='h2' preset='3' className='mb-400'>
        {heading}
      </Heading>

      <Form className='flex flex-col gap-150'>{form}</Form>
    </div>
  );
}

export default LogMoodForm;
