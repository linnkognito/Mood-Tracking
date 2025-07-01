'use client';

import { useFormContext } from 'react-hook-form';
import { icons } from '@/app/_data/moodStyles';
import { moods } from '@/app/_data/moods';
import InputBullet from './InputBullet';
import FormError from './FormError';

function LogMoodFormMood() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='flex flex-col gap-150'>
      {moods.map((mood) => (
        <InputBullet
          key={mood.id}
          label={mood.label}
          value={mood.id}
          icon={{ icon: icons[mood.id], alt: mood.label }}
          {...register('mood', {
            required: 'Please select a mood before continuing.',
            valueAsNumber: true,
          })}
        />
      ))}

      {errors.mood && <FormError id='mood'>{errors.mood.message}</FormError>}
    </div>
  );
}

export default LogMoodFormMood;
