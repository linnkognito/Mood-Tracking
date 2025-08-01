'use client';

import { motion } from 'framer-motion';
import Paragraph from '../text/Paragraph';
import ButtonLogout from './ButtonLogout';
import ButtonSettings from './ButtonSettings';

function ProfilePopover({ user, ...props }) {
  const { name, email } = user;

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.1, ease: 'easeOut' }}
      className='absolute top-600 right-0 w-full sm:w-[200px] px-[18px] py-150 bg-neutral-0 rounded-8 shadow-popover origin-top'
      {...props}
    >
      <div className='flex flex-col pb-100 mb-100 border-b border-blue-100'>
        <Paragraph preset='6'>{name}</Paragraph>
        <Paragraph preset='7' className='text-neutral-300'>
          {email}
        </Paragraph>
      </div>

      {/* Links */}
      <div>
        <ButtonSettings />
        <ButtonLogout />
      </div>
    </motion.div>
  );
}

export default ProfilePopover;
