import { getSessionToken } from './auth';
import { getUserMoods } from '../_api/userMoodApi';

export async function calcAverageMoodSleep(variant) {
  const token = await getSessionToken();
  const userMoods = await getUserMoods(token);

  const entries = userMoods.length;
  if (!entries || entries < 5) return 0; // Default/blank styles

  const latestEntries = userMoods.slice(-5);
  const latestAverage =
    variant === 'mood'
      ? latestEntries.reduce((acc, mood) => (acc += mood.mood_info.id), 0) / 5
      : latestEntries.reduce((acc, mood) => (acc += mood.sleep_time), 0) / 5;

  return Math.round(latestAverage);
}
