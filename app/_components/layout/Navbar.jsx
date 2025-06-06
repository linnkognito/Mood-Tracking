import AvatarMenu from '../ui/AvatarMenu';
import Logo from './Logo';

function Navbar() {
  return (
    <nav className='flex items-center justify-between'>
      <Logo />
      <AvatarMenu />
    </nav>
  );
}

export default Navbar;
