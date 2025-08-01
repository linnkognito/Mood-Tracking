'use client';

import { useState, useRef, useEffect } from 'react';
import { moodStyles, backgroundStyles } from '@/app/_data/moodStyles';
import Image from 'next/image';
import TrendsPillarPopover from './TrendsPillarPopover';
import { pillarHeight } from '@/app/_data/pillarHeight';
import { createPortal } from 'react-dom';

function TrendsPillar({ moodData = null, className = '' }) {
  if (!moodData) return null;
  const [showPopover, setShowPopover] = useState(false);
  const { sleep_time: sleepTime } = moodData;
  const height = pillarHeight[sleepTime];
  const ref = useRef(null);
  const [popoverPos, setPopoverPos] = useState({
    top: 0,
    right: 0,
  });

  useEffect(() => {
    if (showPopover && ref.current) {
      const trendsPillarPosition = ref.current.getBoundingClientRect();
      setPopoverPos({
        top: trendsPillarPosition.top + window.scrollY + 8,
        left: trendsPillarPosition.left + 40,
      });
    }
  }, [showPopover, ref]);

  return (
    <div
      ref={ref}
      className={`
        relative w-500 pt-075 rounded-full 
        ${height}
        ${moodStyles[moodData.mood_info.id].background} 
        ${className}
      `}
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

      {showPopover &&
        createPortal(
          <div
            className='absolute z-50'
            style={{
              top: `${popoverPos.top}px`,
              left: `${popoverPos.left}px`,
            }}
          >
            <TrendsPillarPopover moodData={moodData} />
          </div>,
          document.body
        )}
    </div>
  );
}

export default TrendsPillar;
