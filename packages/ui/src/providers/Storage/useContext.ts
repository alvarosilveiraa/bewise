import { useContext } from "react";
import { _StorageContext } from "./_Context";

export const useStorageContext = () => useContext(_StorageContext);
