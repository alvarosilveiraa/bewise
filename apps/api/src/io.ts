import { Server } from "socket.io";
import { server } from "@/server";

export const io = new Server(server, {
  cors: { origin: "*" },
  pingTimeout: 10000,
  pingInterval: 10000,
});
