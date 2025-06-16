import { createUser, loginUser } from '../_api/usersApi';

export async function handleSignup(userData) {
  if (!userData) throw new Error('No user data provided');
  return await createUser(userData);
}

export async function handleLogin(credentials) {
  if (!credentials) throw new Error('No credentials provided');
  return await loginUser(credentials);
}
