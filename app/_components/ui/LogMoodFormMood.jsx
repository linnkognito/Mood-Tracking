import { icons } from '@/app/_lib/moodStyles';
import InputBullet from './InputBullet';

function LogMoodFormMood() {
  const moods = [
    { id: 'veryHappy', label: 'Very Happy' },
    { id: 'happy', label: 'Happy' },
    { id: 'neutral', label: 'Neutral' },
    { id: 'sad', label: 'Sad' },
    { id: 'verySad', label: 'Very Sad' },
  ];

  return (
    <div className='flex flex-col gap-150'>
      {moods.map((mood, i) => (
        <InputBullet
          key={mood.id}
          label={mood.label}
          icon={{ icon: icons[i + 1], alt: mood.label }}
        />
      ))}
    </div>
  );
}

export default LogMoodFormMood;
