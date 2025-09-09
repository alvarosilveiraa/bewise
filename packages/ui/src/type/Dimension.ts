export type Dimension =
  | number
  | `${number}%`
  | "auto"
  | `${number}dvh`
  | `${number}vh`
  | `${number}wh`
  | string;
