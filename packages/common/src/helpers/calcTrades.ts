import { Trade, calcTrade } from "./calcTrade";

export const calcTrades = (trades: Trade[]) =>
  trades.reduce((acc, trade) => acc + calcTrade(trade), 0);

console.log(
  calcTrades([
    // 29/09/2025
    // Live 09:00
    {
      value: 200,
      percent: 87,
      count: 1,
      starAt: "2025-09-29T09:24",
      result: "gain",
    },
    {
      value: 200,
      percent: 87,
      count: 2,
      starAt: "2025-09-29T09:28",
      result: "gain",
    },
    {
      value: 200,
      percent: 87,
      count: 1,
      starAt: "2025-09-29T09:33",
      result: "gain",
    },
    // Sessão 11:00
    {
      value: 200,
      percent: 87,
      count: 1,
      starAt: "2025-09-29T11:12",
      result: "gain",
    },
    {
      value: 200,
      percent: 87,
      count: 1,
      starAt: "2025-09-29T11:20",
      result: "gain",
    },
    {
      value: 200,
      percent: 87,
      count: 2,
      starAt: "2025-09-29T11:32",
      result: "gain",
    },
    // Live 13:00
    {
      value: 200,
      percent: 87,
      count: 1,
      starAt: "2025-09-29T13:37",
      result: "gain",
    },
    {
      value: 200,
      percent: 87,
      count: 2,
      starAt: "2025-09-29T13:44",
      result: "gain",
    },
    {
      value: 200,
      percent: 87,
      count: 1,
      starAt: "2025-09-29T13:50",
      result: "gain",
    },
    // Sessão 16:30
    {
      value: 200,
      percent: 87,
      count: 1,
      starAt: "2025-09-29T16:50",
      result: "gain",
    },
    {
      value: 200,
      percent: 76,
      count: 1,
      starAt: "2025-09-29T17:00",
      result: "gain",
    },
    {
      value: 200,
      percent: 76,
      count: 1,
      starAt: "2025-09-29T17:07",
      result: "gain",
    },
  ]),
);
