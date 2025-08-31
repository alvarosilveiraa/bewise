import { Kysely, sql } from "kysely";

export const up = async (db: Kysely<unknown>) => {
  await db.schema
    .createTable("person")
    .addColumn("id", "uuid", col =>
      col.primaryKey().defaultTo(sql`gen_random_uuid()`),
    )
    .addColumn("first_name", "varchar")
    .addColumn("last_name", "varchar")
    .addColumn("created_at", "timestamp", col =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .addColumn("updated_at", "timestamp", col =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .execute();
};

export const down = async (db: Kysely<unknown>) => {
  await db.schema.dropTable("person").execute();
};
