import { useFormContext } from 'react-hook-form';
import FormRow from './FormRow';
import InputFile from './InputFile';
import InputText from './InputText';

function AuthFormPersonalize() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <FormRow label='Name' htmlFor='name' className='mb-300'>
        <InputText
          type='text'
          id='name'
          placeholder={'Jane Appleseed'}
          {...register('name', {
            required: 'Name is required',
          })}
          error={errors.name?.message}
          autoFocus
        />
      </FormRow>

      <FormRow htmlFor='profile-picture'>
        <InputFile
          type='file'
          id='profile-picture'
          label='Upload Image'
          image={null}
          {...register('image')}
          error={errors.image?.message}
        />
      </FormRow>
    </>
  );
}

export default AuthFormPersonalize;
