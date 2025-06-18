'use client';

import { useFormContext } from 'react-hook-form';
import InputCheckbox from './InputCheckbox';
import FormError from './FormError';

function LogMoodFormFeelings() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const feelings = [
    { label: 'Joyful', value: 'joyful' },
    { label: 'Down', value: 'down' },
    { label: 'Anxious', value: 'anxious' },
    { label: 'Calm', value: 'calm' },
    { label: 'Excited', value: 'excited' },
    { label: 'Frustrated', value: 'frustrated' },
    { label: 'Lonely', value: 'lonely' },
    { label: 'Grateful', value: 'grateful' },
    { label: 'Overwhelmed', value: 'overwhelmed' },
    { label: 'Motivated', value: 'motivated' },
    { label: 'Irritable', value: 'irritable' },
    { label: 'Peaceful', value: 'peaceful' },
    { label: 'Tired', value: 'tired' },
    { label: 'Hopeful', value: 'hopeful' },
    { label: 'Confident', value: 'confident' },
    { label: 'Stressed', value: 'stressed' },
    { label: 'Content', value: 'content' },
    { label: 'Disappointed', value: 'disappointed' },
    { label: 'Optimistic', value: 'optimistic' },
    { label: 'Restless', value: 'restless' },
  ];

  // If multiple checkboxes share the same name, all their values will be submitted together (like an array).

  return (
    <div className='flex flex-wrap gap-x-200 gap-y-150 w-full'>
      {feelings.map((feeling) => (
        <InputCheckbox
          key={feeling.value}
          name='feelings'
          label={feeling.label}
          value={feeling.value}
          {...register('feelings', {
            validate: (value) => {
              if (!value.length) {
                return 'Please select at least one tag.';
              }
              if (value.length > 3) {
                return 'You can only select a maximum of 3 tags.';
              }
            },
          })}
        />
      ))}

      {errors.feelings && (
        <FormError id='feelings' className='mb-150'>
          {errors.feelings.message}
        </FormError>
      )}
    </div>
  );
}

export default LogMoodFormFeelings;
