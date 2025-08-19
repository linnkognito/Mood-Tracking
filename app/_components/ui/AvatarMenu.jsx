import Image from 'next/image';
import ProfilePopoverDropdown from './ProfilePopoverDropdown';

function AvatarMenu({ user }) {
  if (!user) return null;

  function getImageUrl() {
    if (!user.image || user.image === 'uploads/default_user.png')
      return '/avatar-default.svg';
  }

  return (
    <ProfilePopoverDropdown user={user}>
      <div className='flex items-center gap-125 cursor-pointer'>
        <Image
          src={getImageUrl()}
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
