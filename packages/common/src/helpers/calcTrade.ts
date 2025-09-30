export type Trade = {
  value: number;
  percent: number;
  count: number;
  starAt: string;
  result: "gain" | "loss" | "draw";
};

export const calcTrade = (trade: Trade) => {
  const { value, percent, count, result } = trade;

  switch (result) {
    case "gain": {
      const finalValue = value * Math.pow(2, count - 1);
      const gain = finalValue * (percent / 100);
      const loss = Array.from(
        { length: count - 1 },
        (_, i) => value * Math.pow(2, i),
      ).reduce((acc, v) => acc + v, 0);
      return gain - loss;
    }

    case "loss": {
      const loss = Array.from(
        { length: count },
        (_, i) => value * Math.pow(2, i),
      ).reduce((acc, v) => acc + v, 0);
      return -loss;
    }

    case "draw": {
      if (count === 1) return 0;
      const loss = Array.from(
        { length: count - 1 },
        (_, i) => value * Math.pow(2, i),
      ).reduce((acc, v) => acc + v, 0);
      return -loss;
    }
  }
};
