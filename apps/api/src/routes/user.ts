import { db } from "@bewise/database/db";
import { app } from "@/app";
import { notFoundException } from "@/exceptions/notFound";

export const userRoutes = () => {
  app.get("/user", async (_, res) => {
    const person = await db.selectFrom("person").selectAll().executeTakeFirst();
    if (!person) throw notFoundException;
    res.json(person);
  });
};
