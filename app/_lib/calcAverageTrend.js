import { getUserMoods } from '../_api/userMoodApi';

export async function calcAverageTrend(variant) {
  const token = await getSessionToken();
  const userMoods = await getUserMoods(token);

  if (!userMoods || userMoods.length < 6) return null;

  const newEntry = userMoods[userMoods.length - 1];

  const prevFiveEntries = userMoods.slice(-6, -1);
  const prevAverage =
    variant === 'mood'
      ? prevFiveEntries.reduce((acc, mood) => (acc += mood.mood_info.id), 0) / 5
      : prevFiveEntries.reduce((acc, mood) => (acc += mood.sleep_time), 0) / 5;

  const diff =
    variant === 'mood'
      ? newEntry.mood_info.id - prevAverage
      : newEntry.sleep_time - prevAverage;

  if (diff === 0) return 'same';
  if (diff > 0) return 'inc';
  if (diff < 0) return 'dec';
}

export default calcAverageTrend;
