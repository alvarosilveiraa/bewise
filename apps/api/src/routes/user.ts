import { db } from "@bewise/database/db";
import { app } from "@/app";
import { notFoundException } from "@/exceptions/notFound";

export const userRoutes = () => {
  app.get("/user", async (_, res) => {
    const user = await db.selectFrom("user").selectAll().executeTakeFirst();
    if (!user) throw notFoundException;
    res.json(user);
  });
};
