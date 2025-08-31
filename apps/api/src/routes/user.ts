import { db } from "@bewise/database/db";
import { getAuth } from "@clerk/express";
import { app } from "@/app";
import { notFoundException } from "@/exceptions/notFound";

export const userRoutes = () => {
  app.get("/user", async (req, res) => {
    const auth = getAuth(req);
    const person = await db.selectFrom("person").selectAll().executeTakeFirst();
    if (!person) throw notFoundException;
    res.json({ auth, person });
  });
};
