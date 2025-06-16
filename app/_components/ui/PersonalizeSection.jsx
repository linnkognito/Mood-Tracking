'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { handleSignup } from '@/app/_lib/authService';
import { useRouter } from 'next/navigation';
import Form from './Form';
import FormCardSection from './FormCardSection';
import FormRow from './FormRow';
import Button from './Button';
import InputFile from './InputFile';
import InputText from './InputText';

function PersonalizeSection() {
  const user = JSON.parse(sessionStorage.getItem('onboarding-user'));
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push('/auth/signup');
  }, [user]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit({ name, image }) {
    const userData = { ...user, name, image };
    await handleSignup(userData);
    router.push('/user/dashboard');
    sessionStorage.removeItem('onboarding-user');
  }

  return (
    <FormCardSection
      heading='Personalize your experience'
      description='Add your name and a profile picture to make Mood yours.'
    >
      <Form className='py-400' onSubmit={handleSubmit(onSubmit)}>
        <FormRow label='Name' htmlFor='name' className='mb-300'>
          <InputText
            type='text'
            id='name'
            placeholder={user?.name || 'Jane Appleseed'}
            {...register('name', {
              required: 'Name is required',
            })}
            error={errors.name?.message}
          />
        </FormRow>

        <FormRow htmlFor='profile-picture'>
          <InputFile
            type='file'
            id='profile-picture'
            label='Upload Image'
            image={user?.image || null}
            {...register('image')}
            error={errors.image?.message}
          />
        </FormRow>

        <Button type='submit' className='mt-400'>
          Start Tracking
        </Button>
      </Form>
    </FormCardSection>
  );
}

export default PersonalizeSection;
