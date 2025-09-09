"use client";

import { AsyncStorage } from "@bewise/common/types/AsyncStorage";
import Cookie from "js-cookie";

export const localStorage: AsyncStorage = {
  getItem: (key: string) => window.localStorage.getItem(key),
  setItem: (key: string, value: string) =>
    window.localStorage.setItem(key, value),
  removeItem: (key: string) => window.localStorage.removeItem(key),
};

export const sessionStorage: AsyncStorage = {
  getItem: (key: string) => window.sessionStorage.getItem(key),
  setItem: (key: string, value: string) =>
    window.sessionStorage.setItem(key, value),
  removeItem: (key: string) => window.sessionStorage.removeItem(key),
};

export const cookieStorage: AsyncStorage = {
  getItem: (key: string) => Cookie.get(key) || null,
  setItem: (key: string, value: string, expires?: number) => {
    Cookie.set(key, value, {
      path: "/",
      sameSite: "strict",
      expires,
      secure: window.location.protocol === "https:",
    });
  },
  removeItem: (key: string) => Cookie.remove(key),
};
