'use client';

import { useFormContext } from 'react-hook-form';
import { icons } from '@/app/_data/moodStyles';
import InputBullet from './InputBullet';
import FormError from './FormError';

function LogMoodFormMood() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const moods = [
    { id: 1, label: 'Very Happy' },
    { id: 2, label: 'Happy' },
    { id: 3, label: 'Neutral' },
    { id: 4, label: 'Sad' },
    { id: 5, label: 'Very Sad' },
  ];

  return (
    <div className='flex flex-col gap-150'>
      {moods.map((mood) => (
        <InputBullet
          key={mood.id}
          label={mood.label}
          icon={{ icon: icons[mood.id], alt: mood.label }}
          {...register('mood', {
            required: 'Please select a mood before continuing.',
          })}
        />
      ))}

      {errors.mood && (
        <FormError id='mood' className='mb-150'>
          {errors.mood.message}
        </FormError>
      )}
    </div>
  );
}

export default LogMoodFormMood;
