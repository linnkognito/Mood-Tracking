import { icons, backgroundStyles, pillarHeight } from '@/app/_lib/moodStyles';
import Image from 'next/image';

function TrendsPillar({ moodData = null, className = '' }) {
  if (!moodData) return null;

  return (
    <div
      className={`w-500 pt-075 rounded-full z-10 ${
        backgroundStyles[moodData.mood_info.mood_type]
      } ${pillarHeight[moodData.sleep_time]} ${className}`}
    >
      <Image
        src={icons[moodData.mood]}
        alt='Mood Pillars'
        width={30}
        height={30}
        className='mx-auto'
      />
    </div>
  );
}

export default TrendsPillar;
