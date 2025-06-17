import { hoursOfSleep } from '@/app/_lib/sleepData';
import { useFormContext } from 'react-hook-form';
import InputBullet from './InputBullet';

function LogMoodFormSleep() {
  const { register } = useFormContext();

  return (
    <div className='flex flex-col gap-150'>
      {hoursOfSleep.map((hour) => (
        <div key={hour.id}>
          <InputBullet
            label={`${hour.label} hours`}
            name='sleep_time'
            value={hour.value}
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
    </div>
  );
}

export default LogMoodFormSleep;
