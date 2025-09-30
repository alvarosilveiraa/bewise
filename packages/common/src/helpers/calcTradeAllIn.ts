export const calcTradeAllIn = (
  value: number,
  percent: number,
  count: number,
) => {
  const multiply = 1 + percent / 100;
  const values = [value];
  for (let i = 1; i <= count - 1; i++) {
    const result = values[i - 1] * multiply;
    values.push(result);
  }
  return values.map(result => result.toFixed(2));
};

console.log(calcTradeAllIn(92.28, 76, 10));
