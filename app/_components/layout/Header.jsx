import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Logo from '@/app/_components/layout/Logo';
import Navbar from './Navbar';
import Heading from '../text/Heading';
import DateCurrent from '../ui/DateCurrent';
import LogMood from '../ui/LogMood';

async function Header({ variant = 'default' }) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return variant === 'auth' ? (
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

      {/* Log Mood Button (triggers modal) */}
      <LogMood user={user} />
    </header>
  );
}

export default Header;
