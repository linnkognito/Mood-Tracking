import Image from 'next/image';
import Link from 'next/link';
import Paragraph from '../text/Paragraph';

function ProfilePopover({ user = null, ...props }) {
  if (!user) return null;
  const { name, email } = user;

  return (
    <div
      className='absolute top-600 right-0 w-full sm:w-[200px] px-[18px] py-150 bg-neutral-0 rounded-8 shadow-popover'
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

        <Link href='/auth/logout' className='flex gap-125'>
          <Image src='/icons/logout.svg' alt='Logout' width={16} height={16} />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}

export default ProfilePopover;
