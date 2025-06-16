export const calcAverageMood = (data) => {
  const average = data.reduce((acc, curr) => acc + curr, 0) / data.length;
  return average;
};
export const calcAverageSleep = (data) => {
  const average = data.reduce((acc, curr) => acc + curr, 0) / data.length;
  return average;
};
