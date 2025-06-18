import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/_api/auth/[...nextauth]/route';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Paragraph from '../text/Paragraph';
import ServerSideRedirect from './ServerSideRedirect';

async function ProfilePopover({ ...props }) {
  const session = await getServerSession(authOptions);

  if (!session?.user) return null;
  const { name, email } = session.user;

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
          Settings
        </Link>

        <form action='/api/auth/signout' method='POST'>
          {/* Logout redirect: */}
          <ServerSideRedirect path='/auth/login' />

          <button type='submit' className='flex gap-125 w-full cursor-pointer'>
            <Image
              src='/icons/logout.svg'
              alt='Logout'
              width={16}
              height={16}
            />
            Logout
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default ProfilePopover;
