import Redis from "ioredis";
import { IS_DEV } from "@/constants/IS_DEV";

export const redis = new Redis(process.env.REDIS_URL!, {
  tls: IS_DEV ? undefined : { rejectUnauthorized: false },
});
