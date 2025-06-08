'use client';

import { useState } from 'react';
import ProfilePopover from './ProfilePopover';

function ProfilePopoverDropdown({ children, user = null }) {
  if (!user) return null;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative' onClick={() => setIsOpen((prev) => !prev)}>
      {children}

      {isOpen && <ProfilePopover user={user} />}
    </div>
  );
}

export default ProfilePopoverDropdown;
