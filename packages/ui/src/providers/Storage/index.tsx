"use client";

import { StorageProviderProps } from "./Props";
import { StorageContext } from "./StorageContext";

export const StorageProvider = ({
  localStorage,
  sessionStorage = localStorage,
  cookieStorage = localStorage,
  children,
}: StorageProviderProps) => (
  <StorageContext.Provider
    value={{ localStorage, sessionStorage, cookieStorage }}
  >
    {children}
  </StorageContext.Provider>
);
