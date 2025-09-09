import { useContext } from "react";
import { StorageContext } from "./StorageContext";

export const useStorageContext = () => useContext(StorageContext);
