'use client';

import { useRef, useState } from 'react';
import ProfilePopover from './ProfilePopover';
import useDismiss from '@/app/_hooks/useDismiss';

function ProfilePopoverDropdown({ children, user }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useDismiss(dropdownRef, isOpen, () => setIsOpen(false));

  return (
    <div
      ref={dropdownRef}
      className='relative'
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {children}

      {isOpen && <ProfilePopover user={user} />}
    </div>
  );
}

export default ProfilePopoverDropdown;
