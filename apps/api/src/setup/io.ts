import { createAdapter } from "@socket.io/redis-adapter";
import { redis } from "@/clients/redis";
import { io } from "@/io";

export const setupIO = async () => {
  io.on("connection", socket => {
    socket.on("subscribe", (rooms: string[]) => {
      rooms.forEach(room => {
        socket.join(room);
      });
    });
  });
  const pub = redis.duplicate({ lazyConnect: true });
  const sub = redis.duplicate({ lazyConnect: true });
  await pub.connect();
  await sub.connect();
  io.adapter(createAdapter(pub, sub));
};
