import { getUser } from '@/app/_api/usersApi';
import { getSessionToken } from '@/app/_lib/auth';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return null;

  const token = await getSessionToken();
  const user = await getUser(session.user.id, token);

  return user;
}
