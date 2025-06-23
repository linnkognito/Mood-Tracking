export const calcAverage = (arr) => {
  const average = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
  return average;
};
