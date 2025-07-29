'use client';

import { useState } from 'react';
import { moodStyles, backgroundStyles } from '@/app/_data/moodStyles';
import Image from 'next/image';
import TrendsPillarPopover from './TrendsPillarPopover';
import { pillarHeight } from '@/app/_data/pillarHeight';

function TrendsPillar({ moodData = null, className = '' }) {
  if (!moodData) return null;
  console.log(moodData);
  const [showPopover, setShowPopover] = useState(false);
  const { sleep_time: sleepTime } = moodData;
  const height = pillarHeight[sleepTime];

  return (
    <div
      className={`
        relative flex-grow w-500 pt-075 place-self-end rounded-full z-10 
        row-span-2
        ${moodStyles[moodData.mood_info.id].background} 
        ${className}
      `}
      style={{ height: height }}
      onMouseEnter={() => {
        setShowPopover(true);
      }}
      onMouseLeave={() => {
        setShowPopover(false);
      }}
    >
      {moodData.mood_info.id && (
        <Image
          src={moodStyles[moodData.mood_info.id].icon.iconWhite}
          alt='Mood Pillars'
          width={30}
          height={30}
          className='mx-auto'
        />
      )}

      {showPopover && <TrendsPillarPopover moodData={moodData} />}
    </div>
  );
}

export default TrendsPillar;
