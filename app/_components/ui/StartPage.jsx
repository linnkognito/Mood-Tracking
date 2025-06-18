'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthSection from './AuthSection';

function StartPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      router.push('/user/dashboard');
    } else {
      setToken(storedToken);
      setUser(storedUser);
    }
  }, [router]);

  return (
    <>
      {user && !token && <AuthSection type='login' />}
      {!user && !token && <AuthSection type='signup' />}
    </>
  );
}

export default StartPage;
