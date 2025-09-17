"use client";

import { StorageProviderProps } from "./Props";
import { _StorageContext } from "./_Context";

export const StorageProvider = ({
  localStorage,
  sessionStorage = localStorage,
  cookieStorage = localStorage,
  children,
}: StorageProviderProps) => (
  <_StorageContext.Provider
    value={{ localStorage, sessionStorage, cookieStorage }}
  >
    {children}
  </_StorageContext.Provider>
);
