import { createUser, loginUser } from '../_api/usersApi';

export async function handleSignup(userData) {
  return await createUser(userData);
}

export async function handleLogin(credentials) {
  const res = await loginUser(credentials);
  localStorage.setItem('auth-token', res.token);

  const safeUserData = {
    id: res.user.id,
    name: res.user.name,
    email: res.user.email,
    image: res.user.image,
  };

  localStorage.setItem('user', JSON.stringify(safeUserData));

  return safeUserData;
}
