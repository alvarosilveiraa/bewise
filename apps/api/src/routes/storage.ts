import { app } from "@/app";
import { minio } from "@/clients/minio";

export const storageRoutes = () => {
  app.get("/storage/:bucket/:filename", async (req, res) => {
    const { bucket, filename } = req.params;
    const stat = await minio.statObject(bucket, filename);
    res.setHeader(
      "Content-Type",
      stat.metaData["content-type"] || "application/octet-stream",
    );
    res.setHeader("Content-Length", stat.size);
    res.setHeader("ETag", stat.etag);
    res.setHeader("Last-Modified", stat.lastModified.toUTCString());
    const stream = await minio.getObject(bucket, filename);
    stream.pipe(res);
  });
};
