import { db } from "@bewise/database/db";
import { migrator } from "@bewise/database/migrator";

(async () => {
  const { error, results } = await migrator.migrateDown();
  results?.forEach(it => {
    if (it.status === "Success")
      console.log(`migration "${it.migrationName}" was reverted successfully`);
    else if (it.status === "Error")
      console.error(`failed to revert migration "${it.migrationName}"`);
  });
  if (error) {
    console.error("failed to revert", error);
    process.exit(1);
  }
  await db.destroy();
})();
