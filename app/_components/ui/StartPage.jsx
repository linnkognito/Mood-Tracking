import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

async function StartPage() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect('/user/dashboard');
  } else {
    redirect('/auth/login');
  }
}

export default StartPage;
