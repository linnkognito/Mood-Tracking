'use client';

import { signOut } from 'next-auth/react';
import Image from 'next/image';

function ButtonLogout() {
  return (
    <button
      type='submit'
      className='flex gap-125 w-full cursor-pointer'
      onClick={() => signOut({ callbackUrl: '/auth/login' })}
    >
      <Image src='/icons/logout.svg' alt='Logout' width={16} height={16} />
      Logout
    </button>
  );
}

export default ButtonLogout;
