export type AsyncStorage = {
  getItem: (key: string) => Promise<string | null> | string | null;
  setItem: (
    key: string,
    value: string,
    expires?: number,
  ) => Promise<void> | void;
  removeItem: (key: string) => Promise<void> | void;
};
