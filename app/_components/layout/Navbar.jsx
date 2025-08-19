import { getCurrentUser } from '@/app/_lib/getCurrentUser';
import AvatarMenu from '../ui/AvatarMenu';
import Logo from './Logo';

async function Navbar() {
  const user = await getCurrentUser();

  return (
    <nav className='flex items-center justify-between'>
      <Logo />
      <AvatarMenu user={user} />
    </nav>
  );
}

export default Navbar;
