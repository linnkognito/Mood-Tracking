import { getUser } from '@/app/_api/usersApi';
import { getSessionToken } from '@/app/_lib/auth';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function getCurrentUser() {
  const token = await getSessionToken();
  const session = await getServerSession(authOptions);
  const user = await getUser(session?.user?.id, token);

  return user;
}
