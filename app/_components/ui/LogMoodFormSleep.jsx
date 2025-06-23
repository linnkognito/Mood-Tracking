'use client';

import { useFormContext } from 'react-hook-form';
import { sleepTime } from '@/app/_data/sleepData';
import FormError from './FormError';
import InputBullet from './InputBullet';

function LogMoodFormSleep() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='flex flex-col gap-150'>
      {sleepTime.map((hours) => (
        <div key={hours.id}>
          <InputBullet
            label={`${hours.label} hours`}
            name='sleep_time'
            value={hours.value}
            {...register('sleep_time', {
              validate: (value) => {
                if (!value) {
                  return 'Please select hours of sleep before continuing.';
                }
              },
            })}
          />
        </div>
      ))}

      {errors.sleep_time && (
        <FormError id='sleep_time' className='mb-150'>
          {errors.sleep_time.message}
        </FormError>
      )}
    </div>
  );
}

export default LogMoodFormSleep;
