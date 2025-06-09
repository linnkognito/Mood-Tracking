'use client';

import { motion } from 'framer-motion';

function LogMoodProgressBar({ step }) {
  return (
    <div className='flex gap-200 w-full'>
      {Array.from({ length: 4 }).map((_, i) => {
        const isActive = step >= i + 1;

        return (
          <div
            key={`logmood-progress-${i}`}
            className='relative w-1/4 h-050 rounded-full bg-blue-200 overflow-hidden'
          >
            {isActive && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className='absolute top-0 left-0 h-full bg-blue-600 rounded-full'
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default LogMoodProgressBar;
