import { hoursOfSleep } from '@/app/_lib/sleepData';
import InputBullet from './InputBullet';

function LogMoodFormSleep() {
  return (
    <div className='flex flex-col gap-150'>
      {hoursOfSleep.map((hour) => (
        <div key={hour}>
          <InputBullet
            key={hour}
            label={`${hour} hours`}
            name='sleep-radio-buttons'
          />
        </div>
      ))}
    </div>
  );
}

export default LogMoodFormSleep;
