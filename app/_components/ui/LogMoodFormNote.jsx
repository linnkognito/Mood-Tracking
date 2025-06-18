'use client';

import { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import InputTextarea from './InputTextarea';
import FormError from './FormError';

function LogMoodFormNote() {
  const {
    register,
    formState: { errors },
    watch,
    setFocus,
  } = useFormContext();

  const numChars = watch('diary_entry') || '';
  const maxChars = 150;

  // Focus on input if error
  useEffect(() => {
    if (errors.diary_entry) {
      setFocus('diary_entry');
    }
  }, [errors.diary_entry, setFocus]);

  return (
    <div className='w-full'>
      <InputTextarea
        maxLength={150}
        placeholder='Today I felt...'
        {...register('diary_entry', {
          validate: (value) => {
            if (!value) {
              return 'Please write a few words about your day before continuing.';
            }
          },
        })}
      />

      <span className='text-preset-8 text-neutral-600'>
        {numChars.length}/{maxChars}
      </span>

      {errors.diary_entry && (
        <FormError id='diary_entry' className='mb-150'>
          {errors.diary_entry.message}
        </FormError>
      )}
    </div>
  );
}

export default LogMoodFormNote;
