import { isToday } from 'date-fns';
import { getSessionToken } from './auth';
import { getUserMoods } from '@/app/_api/userMoodApi';

export async function hasLoggedMoodToday() {
  const token = await getSessionToken();
  const userMoods = await getUserMoods(token);
  const lastMoodEntry = userMoods.at(-1);

  if (!lastMoodEntry) return false;

  return isToday(new Date(lastMoodEntry.date));
}
