import { app } from "@/app";

export const rootRoutes = () => {
  app.get("/", (_, res) => res.json({ name: "BeWise" }));
};
