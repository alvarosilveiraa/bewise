import { promises as fs } from "fs";
import { FileMigrationProvider, Migrator } from "kysely";
import path from "path";
import { db } from "./db";

export const migrator = new Migrator({
  db,
  provider: new FileMigrationProvider({
    fs,
    path,
    migrationFolder: path.join(__dirname, "../migrations"),
  }),
  migrationTableSchema: "kysely",
  migrationTableName: "migration",
  migrationLockTableName: "migration_lock",
});
