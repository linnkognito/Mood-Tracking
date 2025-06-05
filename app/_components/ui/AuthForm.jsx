import Button from '@/app/_components/ui/Button';
import Form from '@/app/_components/ui/Form';
import { InputText } from '@/app/_components/ui/InputText';
import FormRow from '@/app/_components/ui/FormRow';

function AuthForm({ type = 'signup' }) {
  return (
    <Form type={type} className='mt-400'>
      <FormRow label='Email' htmlFor='email' className='mb-250'>
        <InputText type='email' id='email' placeholder='name@mail.com' />
      </FormRow>

      <FormRow label='Password' htmlFor='password'>
        <InputText type='password' id='password' />
      </FormRow>

      <Button type='submit' className='mt-400'>
        {type === 'signup' ? 'Sign Up' : 'Sign In'}
      </Button>
    </Form>
  );
}

export default AuthForm;
