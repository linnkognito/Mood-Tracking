import Image from 'next/image';

function AvatarMenu({ user = null }) {
  return (
    <div className='flex items-center gap-125'>
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
  );
}

export default AvatarMenu;
