import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { app } from "./app";
import { server } from "./server";

(async () => {
  app.use(cors());
  app.use(express.text());
  app.use(express.json({ limit: "50mb" }));
  app.use(cookieParser());
  // TODO: app.use(podMiddleware);
  app.set("trust proxy", 1);

  // TODO: routes
  // TODO: app.use(exceptionMiddleware);

  // TODO: io
  // io.on("connection", socket => {
  //   socket.on("subscribe", (rooms: string[]) => {
  //     rooms.forEach(room => {
  //       socket.join(room);
  //     });
  //   });
  // });
  // const pub = redis.duplicate({ lazyConnect: true });
  // const sub = redis.duplicate({ lazyConnect: true });
  // await pub.connect();
  // await sub.connect();
  // io.adapter(createAdapter(pub, sub));

  // TODO: constants
  const IS_DEV = process.env.NODE_ENV === "development";

  const PORT = Number(process.env.PORT || "8000");
  server.listen(PORT, () => {
    if (IS_DEV) console.log(`Server is running at: http://localhost:${PORT}`);
    else console.log(`Server is running at port: ${PORT}`);
  });
})();
