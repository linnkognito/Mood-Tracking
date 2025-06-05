import Logo from '@/app/_components/layout/Logo';

function Header({ loggedIn = false }) {
  return <header>{!loggedIn && <Logo />}</header>;
}

export default Header;
