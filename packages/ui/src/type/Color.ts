export type Color =
  | "transparent"
  | "black"
  | "white"
  | "red"
  | "green"
  | "blue"
  | `#${string}`
  | `rgb(${number}, ${number}, ${number})`
  | `rgb(${number},${number},${number})`
  | `rgba(${number}, ${number}, ${number}, ${number})`
  | `rgba(${number},${number},${number},${number})`;
