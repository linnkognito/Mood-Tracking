// GET //
export async function getAllUsers(token) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    console.error('Failed to fetch users:', data?.message || res.status);
    throw new Error(data?.message || 'Failed to fetch users');
  }

  return data;
}

export async function getUser(userId, token) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await res.json();

  if (!res.ok) {
    console.error('Failed to fetch user:', data?.message || res.status);
  }

  return data;
}

// POST //
export async function createUser(userData) {
  /* Required fields: name, email, password*/
  if (!userData) throw new Error('No user data provided');

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error('Failed to create user:', data?.message || res.status);
    throw new Error(data?.message || 'Failed to create user');
  }

  return data;
}

export async function loginUser(credentials) {
  /* Credentials object structure: { email, password }*/

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  const data = await res.json();

  if (!res.ok) {
    throw { status: res.status, data };
  }

  return data;
}

// PATCH //
export async function updateUser(userData) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error('Failed to update user:', data?.message || res.status);
    throw new Error(data?.message || 'Failed to update user');
  }

  return data;
}

// DELETE //
export async function deleteUser() {}
