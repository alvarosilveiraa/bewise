import { migrator } from "@bewise/database/migrator";
import { app } from "@/app";

export const migrationsRoutes = () => {
  app.get("/migrations/list", async (_, res) => {
    const data = await migrator.getMigrations();
    res.json(data);
  });
  app.post("/migrations/migrate", async (_, res) => {
    const data = await migrator.migrateToLatest();
    res.json(data);
  });
  app.post("/migrations/revert", async (_, res) => {
    const data = await migrator.migrateDown();
    res.json(data);
  });
};
