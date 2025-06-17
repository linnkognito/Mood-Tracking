'use client';

import { motion } from 'framer-motion';
import { handleLogout } from '@/app/_lib/authService';
import Image from 'next/image';
import Link from 'next/link';
import Paragraph from '../text/Paragraph';

function ProfilePopover({ ...props }) {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) return null;

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
        <Link href='/user/settings' className='flex gap-125 mb-050'>
          <Image
            src='/icons/settings.svg'
            alt='Settings'
            width={16}
            height={16}
          />
          <span>Settings</span>
        </Link>

        <button
          type='button'
          className='flex gap-125 w-full cursor-pointer'
          onClick={handleLogout}
        >
          <Image src='/icons/logout.svg' alt='Logout' width={16} height={16} />
          <span>Logout</span>
        </button>
      </div>
    </motion.div>
  );
}

export default ProfilePopover;
