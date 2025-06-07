import Logo from '@/app/_components/layout/Logo';
import Navbar from './Navbar';
import Heading from '../text/Heading';
import DateCurrent from '../ui/DateCurrent';
import Button from '../ui/Button';
import ProfilePopover from '../ui/ProfilePopover';

function Header({ user = null }) {
  return !user ? (
    <header>
      <Logo />
    </header>
  ) : (
    <header className='relative flex flex-col gap-800 w-full mb-800'>
      <Navbar />

      <div className='flex flex-col items-center gap-125'>
        <Heading preset='3' className='text-blue-600'>
          Hello, {user?.name || 'User'}
        </Heading>
        <Heading preset='1' tag='h1' className='text-center text-neutral-900'>
          How are you feeling today?
        </Heading>
        <DateCurrent />
      </div>

      <Button className='w-fit min-w-[226px] mx-auto p-medium'>
        Log today's mood
      </Button>

      <ProfilePopover />
    </header>
  );
}

export default Header;
