import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

export async function getSessionToken() {
  const session = await getServerSession(authOptions);
  return session?.user?.accessToken ?? null;
}

export async function getSessionUser() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) return null;

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    image: user.image,
    accessToken: user.accessToken,
  };
}
