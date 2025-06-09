import { useState } from 'react';

import InputTextarea from './InputTextarea';

function LogMoodFormNote() {
  const [value, setValue] = useState('');

  return (
    <div className='w-full'>
      <InputTextarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={150}
        placeholder='Today I felt...'
      />
      <span className='text-preset-8 text-neutral-600'>{value.length}/150</span>
    </div>
  );
}

export default LogMoodFormNote;
