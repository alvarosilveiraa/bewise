import { Client } from "minio";

export const minio = new Client({
  endPoint: process.env.MINIO_HOST!,
  port: Number(process.env.MINIO_PORT),
  accessKey: process.env.MINIO_ACCESS_KEY,
  secretKey: process.env.MINIO_SECRET_KEY,
  useSSL: false,
});
