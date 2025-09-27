export const calcAllIn = (value: number, percent: number, count: number) => {
  const multiply = 1 + percent / 100;
  const values = [value];
  for (let i = 1; i <= count - 1; i++) {
    const result = values[i - 1] * multiply;
    values.push(result);
  }
  return values.map(result => result.toFixed(2));
};

console.log(calcAllIn(8000, 80, 6));
