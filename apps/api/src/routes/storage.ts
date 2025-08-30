import { app } from "@/app";
import { minio } from "@/clients/minio";

export const storageRoutes = () => {
  app.get("/storage", async (_, res) => {
    const bucket = "products";
    const filePath = "00a0dbd0-889c-4481-a816-5bd4f4b826c0.png";
    const stat = await minio.statObject(bucket, filePath);
    res.setHeader(
      "Content-Type",
      stat.metaData["content-type"] || "application/octet-stream",
    );
    res.setHeader("Content-Length", stat.size);
    res.setHeader("ETag", stat.etag);
    res.setHeader("Last-Modified", stat.lastModified.toUTCString());
    const stream = await minio.getObject(bucket, filePath);
    stream.pipe(res);
  });
};
