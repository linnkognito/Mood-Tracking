import Image from 'next/image';
import ProfilePopoverDropdown from './ProfilePopoverDropdown';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/_api/auth/[...nextauth]/route';

async function AvatarMenu() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  console.log(session);

  return (
    <ProfilePopoverDropdown user={user}>
      <div className='flex items-center gap-125 cursor-pointer'>
        <Image
          src={user?.image || '/avatar-default.svg'}
          alt='avatar'
          width={40}
          height={40}
          className='rounded-full overflow-hidden'
        />

        <button className='cursor-pointer'>
          <Image
            src='/icons/arrow-dropdown.svg'
            alt='Open user menu'
            width={10}
            height={6}
          />
        </button>
      </div>
    </ProfilePopoverDropdown>
  );
}

export default AvatarMenu;
