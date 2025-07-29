// ---- GET  --------------------------- //
export async function getUserMoods(token) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/usermoods`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!data) {
    console.error('Failed to fetch user moods:', data?.message || res.status);
    throw new Error(data?.message || 'Failed to fetch user moods');
  }

  return data;
}

// ---- POST --------------------------- //
export async function createUserMood(token, moodData) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/usermoods`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(moodData),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error('Failed to create user mood:', data?.message || res.status);
    throw new Error(data?.message || 'Failed to create user mood');
  }
  console.log(data);
  return data;
}

// DELETE //
export async function deleteUserMood(token, userMoodId) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/usermoods/${userMoodId}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await res.json();

  if (!res.ok) {
    console.error('Failed to delete user mood:', data?.message || res.status);
    throw new Error(data?.message || 'Failed to delete user mood');
  }

  return data; // Should be: { message: "UserMood deleted successfully" }
}
