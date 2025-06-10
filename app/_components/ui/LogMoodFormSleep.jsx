import { hoursOfSleep } from '@/app/_lib/sleepData';
import InputBullet from './InputBullet';

function LogMoodFormSleep() {
  return (
    <div>
      {hoursOfSleep.map((hour) => (
        <div key={hour}>
          <InputBullet key={hour} label={hour} name='sleep-radio-buttons' />
        </div>
      ))}
    </div>
  );
}

export default LogMoodFormSleep;
