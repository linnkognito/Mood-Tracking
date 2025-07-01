'use client';

import { useFormContext } from 'react-hook-form';
import { feelings } from '@/app/_data/feelings';
import InputCheckbox from './InputCheckbox';
import FormError from './FormError';

function LogMoodFormFeelings() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // 💡 If multiple checkboxes share the same name, all their values will be submitted together as an array.

  return (
    <div className='flex flex-wrap gap-x-200 gap-y-150 w-full'>
      {feelings.map((feeling) => (
        <InputCheckbox
          key={feeling.value}
          name='feelings'
          label={feeling.label}
          value={feeling.id}
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
