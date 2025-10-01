import { isString } from "lodash";
import { app } from "@/app";
import { minio } from "@/clients/minio";
import { badRequestException } from "@/exceptions/badRequest";
import { uploadMiddleware } from "@/middlewares/upload";

export const storageRoutes = () => {
  app.get(/^\/storage\/(.*)/, async (req, res) => {
    const [bucket, ...rest] = req.params[0].split("/");
    const filepath = rest.join("/");
    const stat = await minio.statObject(bucket, filepath);
    res.setHeader(
      "Content-Type",
      stat.metaData["content-type"] || "application/octet-stream",
    );
    res.setHeader("Content-Length", stat.size);
    res.setHeader("ETag", stat.etag);
    res.setHeader("Last-Modified", stat.lastModified.toUTCString());
    if (isString(req.query.cache))
      res.setHeader("Cache-Control", `public, max-age=${req.query.cache}`);
    const stream = await minio.getObject(bucket, filepath);
    stream.pipe(res);
  });

  app.post(
    /^\/storage\/(.*)/,
    uploadMiddleware.single("file"),
    async (req, res) => {
      const [bucket, ...rest] = req.params[0].split("/");
      const filepath = rest.join("/");
      if (!req.file) throw badRequestException.setDetails("No file uploaded.");
      const contentType = req.file.mimetype || "application/octet-stream";
      await minio.putObject(bucket, filepath, req.file.buffer, req.file.size, {
        "Content-Type": contentType,
      });
      res.status(201).json({
        bucket,
        filepath,
        size: req.file.size,
      });
    },
  );
};
